import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";
import { IResponse } from "@/types";

export const authConfig: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_SECRET!,
    // }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const data: IResponse = await axios
          .post("https://apidiorakids.ru/api/auth/login", {
            password: credentials.password,
            email: credentials.email,
          })
          .then((res) => res.data);

        const { user, token } = await data;

        if (data) {
          return { id: user._id, name: user.fullName, token, ...user };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },

    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
};
