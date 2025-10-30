'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Apart Alert</h1>

      {!session ? (
        <div className="space-y-3">
          <p className="opacity-80">
            Dobrodošel! Za uporabo aplikacije se prosim prijavi ali registriraj.
          </p>
          <div className="space-x-4">
            <Link href="/register" className="underline">
              Ustvari račun
            </Link>
            <Link href="/login" className="underline">
              Prijava
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <p className="opacity-80 mb-3">
            Prijavljen kot: <b>{session.user?.email}</b>
          </p>
          <p>
            Zdaj lahko začneš uporabljati funkcionalnosti aplikacije – npr.
            shranjevanje iskanj, opozorila o novih apartmajih itd.
          </p>
        </div>
      )}
    </main>
  );
}
