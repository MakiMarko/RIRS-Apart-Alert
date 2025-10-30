'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [msg,setMsg] = useState('');
  const router = useRouter();

  async function submit(e){
    e.preventDefault();
    setMsg('...');
    const res = await signIn('credentials', { email, password, redirect: false });
    if (res?.ok) { setMsg('Prijavljen!'); router.push('/'); }
    else setMsg('Napačni podatki');
  }

  return (
    <div className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Prijava</h1>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full border p-2 rounded bg-transparent" placeholder="email"
               value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded bg-transparent" type="password" placeholder="geslo"
               value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full border p-2 rounded hover:bg-gray-800">Prijava</button>
      </form>
      <p className="mt-3 text-sm">{msg}</p>
    </div>
  );
}
