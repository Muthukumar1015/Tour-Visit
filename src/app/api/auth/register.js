import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, phone, email, password } = req.body;

    if (!firstName || !lastName || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const filePath = path.join(process.cwd(), "data", "users.json");
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    if (users.find((u) => u.email === email)) {
      return res.status(400).json({ message: "Email already registered" });
    }

    users.push({ firstName, lastName, phone, email, password });
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return res.status(201).json({ message: "User registered successfully" });
  }

  res.status(405).json({ message: "Method Not Allowed" });
}
