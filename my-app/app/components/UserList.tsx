// app/components/UserList.tsx
"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  role: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">User List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-3 rounded-lg shadow-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
