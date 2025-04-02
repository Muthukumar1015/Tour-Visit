import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import fs from "fs";
import path from "path";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const filePath = path.join(process.cwd(), "data", "users.json");
        const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

        const user = users.find((u) => u.email === credentials.email && u.password === credentials.password);

        if (user) {
          return { id: "1", email: user.email };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
