import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 max-w-4xl mx-auto py-4">
      <p className="text-2xl">WebSocket Test</p>
      <Link href="/chat/1">
        <p className="w-32 py-3 border bg-red-100 rounded-md text-center items-center">채팅방 1</p>
      </Link>
      <Link href="/chat/2">
        <p className="w-32 py-3 border bg-red-100 rounded-md text-center items-center">채팅방 2</p>
      </Link>
      <Link href="/chat/1">
        <p className="w-32 py-3 border bg-red-100 rounded-md text-center items-center">채팅방 3</p>
      </Link>
    </main>
  );
}
