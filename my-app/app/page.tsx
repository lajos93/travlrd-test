// app/page.tsx
import UserList from "./components/UserList";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">TRAVLRD Demo App</h1>
      <UserList />
    </main>
  );
}
