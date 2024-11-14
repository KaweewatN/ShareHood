import {AuthResponse} from "src/types/authResponse";
import {getServerSession} from "next-auth";
import {authOptions} from "src/app/api/auth/[...nextauth]/auth";

// Functions to check user role
export const getServerAuthSession = () => getServerSession(authOptions);

export async function authenticateUser(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw {response: "No session found"};
  }
  return {session, response: "Session found"};
}

export async function authenticateAdmin(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw {response: "No session found"};
  }
  const SessionUser = session.user as unknown as {role: string};
  if (SessionUser?.role !== "Admin") {
    throw {response: "Unauthorized role"};
  }
  return {session, response: "Session found"};
}

export async function authenticateOwner(): Promise<AuthResponse> {
  const session = await getServerAuthSession();
  if (!session) {
    throw {response: "No session found"};
  }
  const SessionUser = session.user as unknown as {role: string};
  if (SessionUser?.role !== "Owner") {
    throw {response: "Unauthorized role"};
  }
  return {session, response: "Session found"};
}

// check user role
export async function checkRole(): Promise<string> {
  const session = await getServerAuthSession();
  if (!session) {
    throw new Error("No session found");
  }
  const SessionUser = session.user as unknown as {role: string};
  if (SessionUser?.role === "Admin") {
    return "Admin";
  }
  if (SessionUser?.role !== "Owner") {
    return "Owner";
  } else {
    return "Rentee";
  }
}

// check user id
export async function checkUserID(): Promise<string> {
  const session = await getServerAuthSession();
  if (!session) {
    throw new Error("No session found");
  }
  const SessionUser = session.user as unknown as {id: string};
  return SessionUser.id;
}
