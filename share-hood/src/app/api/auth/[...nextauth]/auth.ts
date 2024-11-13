import {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import sql from "@libs/db/db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email", placeholder: "john@doe.com"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const users = await sql`SELECT * FROM "User" u WHERE u."email" = ${credentials.email}`;
        const user = users[0];

        if (user && (await bcrypt.compare(credentials.password, user.password))) {
          return {
            id: user.userID,
            email: user.email,
            role: user.role,
          };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({token, user}: {token: any; user: any}) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session: async ({session, token}: {session: any; token: any}) => {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({baseUrl}: {baseUrl: string}) {
      return `${baseUrl}/home`;
    },
  },
};
