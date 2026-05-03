export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-3.5">
      <input className="border rounded-[1px] border-border  w-full text-text p-3" type="email" placeholder="E-mail" />
      <button className="bg-[#212A2F] w-full p-3.5 rounde-[1px] cursor-pointer text-surface hover:bg-footer-bg hover:text-accent-light">
        Continuar
      </button>
    </form>
  );
};
