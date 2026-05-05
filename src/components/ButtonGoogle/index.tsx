import GoogleIcon from "@/assets/images/google-icon.png";

interface ButtonGoogleProps {
  action: "signIn" | "signUp";
}

export const ButtonGoogle = ({ action }: ButtonGoogleProps) => {
  const buttonText = action === "signIn" ? "Continuar com Google" : "Cadastrar com o Google";
  return (
    <button className="w-full flex items-center justify-center gap-2 border border-border rounded-md py-3 hover:bg-border-alt transition cursor-pointer">
      <img className="w-5 h-5" src={GoogleIcon} alt="Ícone do Google" />
      <span className="text-sm font-medium text-text">{buttonText}</span>
    </button>
  );
};
