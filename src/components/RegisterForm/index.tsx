
import { useRegisterForm } from "./register-form.schema";

export const RegisterForm = () => {

    const { register, errors, isSubmitting } = useRegisterForm();

    return (
        <form className="text-black">
            <div className="flex flex-col gap-4">
                <div>
                    <label htmlFor="fullName" className="text-xs text-gray-600">Nome completo*</label>
                    <input id="fullName"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.nomeCompleto ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="text"
                        {...register("nomeCompleto")}
                    />
                    {errors.nomeCompleto && <p className="text-red-500 text-xs mt-1">{errors.nomeCompleto.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="text-xs text-gray-600">E-mail*</label>
                    <input id="email"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="email"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="cpf" className="text-xs text-gray-600">CPF*</label>
                    <input id="cpf"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="text"
                        placeholder="000.000.000-00"
                        {...register("cpf")}
                    />
                    {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message}</p>}
                </div>

                <div>
                    <label htmlFor="birthday" className="text-xs text-gray-600">Data de nascimento*</label>
                    <input id="birthday"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.dataNascimento ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="date"
                        {...register("dataNascimento")}
                    />
                    {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento.message}</p>}
                </div>

                <div>
                    <label htmlFor="cellphone" className="text-xs text-gray-600">Celular*</label>
                    <input id="cellphone"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cellphone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="tel"
                        {...register("cellphone")}
                    />
                    {errors.cellphone && <p className="text-red-500 text-xs mt-1">{errors.cellphone.message}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="text-xs text-gray-600">Senha*</label>
                    <input id="password"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="password"
                        {...register("password")}
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="text-xs text-gray-600">Confirma senha*</label>
                    <input id="confirmPassword"
                        className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433eb]"}`}
                        type="password"
                        {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                </div>

                 <button className="bg-[#5433EB] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 w-full cursor-pointer"  disabled={isSubmitting}>
                {isSubmitting ? "Enviando...": "Continuar"}
            </button>
            </div>
        </form>
    );
};