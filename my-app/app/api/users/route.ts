// app/api/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    { id: 1, name: "Levi", role: "Full-stack Developer" },
    { id: 2, name: "Niki", role: "Project Manager" },
    { id: 3, name: "Alex", role: "Designer" },
  ];

  return NextResponse.json(users);
}
