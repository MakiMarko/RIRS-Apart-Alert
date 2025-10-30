'use client';
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between p-4 border-b border-white/10">
      <Link href="/" className="font-semibold text-lg">Apart Alert</Link>
      <div className="space-x-3">
        {!session ? (
          <>
            <Link href="/register" className="underline">Registracija</Link>
            <Link href="/login" className="underline">Prijava</Link>
          </>
        ) : (
          <>
            <span className="opacity-80">{session.user?.email}</span>
            <button className="underline" onClick={() => signOut({ callbackUrl: '/' })}>
              Odjava
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
