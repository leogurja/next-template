import { Button } from "@/components/atoms/button";
import "@/styles/index.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-stone-300">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-stone-500 sm:text-xl/8">
          Sorry, we couldn&#39;t find what you were looking for.
        </p>
        <Button asChild size="xl" className="mt-10">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </main>
  );
}
