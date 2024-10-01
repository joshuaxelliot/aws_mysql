import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <h1 className="text-8xl text-stone-90 max-w-[768px] text-center font-bold drop-shadow-xl">
        Chas Bank
      </h1>

      <Link href="/create-user" className="button-hero">
        Skapa användare
      </Link>
    </section>
  );
}
