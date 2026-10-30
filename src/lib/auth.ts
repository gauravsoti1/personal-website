import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";

export const SESSION_COOKIE = "manage_session";
const SESSION_DURATION_SECONDS = 60 * 60 * 24 * 7; // 7 days

const getSecretKey = () => {
  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    throw new Error("AUTH_SECRET env var is not set");
  }
  return new TextEncoder().encode(secret);
};

export const verifyCredentials = async (
  username: string,
  password: string,
): Promise<boolean> => {
  const expectedUsername = process.env.MANAGE_USERNAME;
  const passwordHash = process.env.MANAGE_PASSWORD_HASH;
  if (!expectedUsername || !passwordHash) {
    throw new Error(
      "MANAGE_USERNAME or MANAGE_PASSWORD_HASH env var is not set",
    );
  }
  if (username !== expectedUsername) {
    return false;
  }
  return bcrypt.compare(password, passwordHash);
};

export const createSessionToken = async (username: string): Promise<string> => {
  return new SignJWT({ sub: username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecretKey());
};

export const verifySessionToken = async (token: string): Promise<boolean> => {
  try {
    await jwtVerify(token, getSecretKey());
    return true;
  } catch {
    return false;
  }
};

export const SESSION_MAX_AGE = SESSION_DURATION_SECONDS;
