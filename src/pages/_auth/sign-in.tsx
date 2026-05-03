import { createFileRoute, Link } from "@tanstack/react-router";
import { ButtonGoogle } from "../../components/ButtonGoggle";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Login - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="flex justify-center  items-center  text-text bg-surface w-full h-screen">
      <div className=" flex flex-col gap-3 w-112.5 bg-background rounded-[18px] p-10 shadow-md">
        <Logo />
        <h2 className="text-text font-bold text-[21px] mb-2">Entrar</h2>
        <p>Escolha como voce gostaria de fazer o login</p>
        <ButtonGoogle action="signIn" />
        <Separator />
        <LoginForm />
        <p>
          Ainda não possui uma conta?{" "}
          <Link className="ml-1 text-accent hover:underline" to="/sign-up">
            Cadastre-se
          </Link>{" "}
        </p>
      </div>
    </section>
  );
}
