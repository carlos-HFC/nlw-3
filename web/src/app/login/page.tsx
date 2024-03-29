"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

import { Button } from "@/components/button";
import { FormControl } from "@/components/form-control";

import { handleLogin } from "@/services/data/login";

export default function Login() {
  async function signIn(form: FormData) {
    const response = await handleLogin(form);

    if (response.statusCode === 400) {
      return toast.error("Credenciais incorretas");
    }
  }

  return (
    <div className="bg-white border border-gray-200 w-1/3 relative flex justify-center flex-col">
      <Link
        href="/"
        className="size-12 rounded-2xl bg-gray-100 flex items-center justify-center absolute right-10 top-10"
      >
        <ArrowLeftIcon className="size-6 stroke-blue-500" />
      </Link>

      <form
        className="px-20 space-y-6"
        action={signIn}
      >
        <h1 className="font-bold text-3xl text-teal-400 mb-4">Fazer login</h1>

        <FormControl
          label="E-mail"
          name="email"
          type="email"
        />

        <FormControl
          label="Senha"
          name="password"
          type="password"
        />

        <Link
          href="/esqueci-senha"
          className="font-semibold text-gray-500 flex"
        >
          Esqueci minha senha
        </Link>

        <Button
          type="submit"
          className="mt-5"
        >
          Entrar
        </Button>
      </form>
    </div>
  );
}