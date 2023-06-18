import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      avatarUrl: string;
      createdAt: string;
      email: string;
      fullName: string;
      id: string;
      token: string;
      updatedAt: string;
      __v: number;
      name: string;
    };
  }
}
