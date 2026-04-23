export const SubscritionForm = () => {
  return (
    <form className="flex flex-col mt-4.5">
      <label htmlFor="newsletter">Isncreva-se em nosso e-mail</label>
      <input
        type="email"
        id="newsletter"
        name="newsletter"
        placeholder="email@email.com"
        className="rounded-[30px] text-gray-500 bg-white py-3 px-5 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-gray-300"
      />
    </form>
  );
};
