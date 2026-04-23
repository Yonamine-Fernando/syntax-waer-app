import { createFileRoute } from "@tanstack/react-router";
import { ButtonGoogle } from "../../components/ButtonGoggle";
import { Logo } from "../../components/Logo";
import { RegisterForm } from "../../components/RegisterForm";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full bg-[#f5f5f5] flex justify-center items-center p-5 ">
      <div className=" w-112.5 rounded-2xl bg-white p-5 flex flex-col ">
        <Logo />
        <RegisterForm />
        <Separator />

        <ButtonGoogle action="signUp" />

        <p className=" text-sm text-gray-600 mt-6 text-center">
          Já tem uma conta?{" "}
          <a className="text-[#5433EB] hover:underline" href="/sign-in">
            Entrar
          </a>
        </p>
      </div>
    </section>
  );
}
