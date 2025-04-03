import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { sendLoginEmail } from "@/app/lib/mail"; // Create this file

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log("✅ User Signed In:", user.email);
      await sendLoginEmail(user.email, user.name);
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
