interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secundary";
    size?: "sm" | "md" | "lg"
}

export const Button = ({ children, variant = "primary", size = "md" }: ButtonProps) => {

    const buttonStyles = {
        base: "flex justfy-center items-center gap-2 text-nowrap leading-none hover:cursor-pointer transition-colors duration-200 transition rounded-full py-2.5 ",
        variant: {
            primary: "bg-white text-[#6329A2] hover:bg-gray-100",
            secundary: "bg-transparent border boder-white text-white hover:bg-white hover:text-black",
        },

        size: {
            sm: "px-5",
            md: "px-8",
            lg: "px-10",
        }
    };

    const className = `${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]}`

    return (
        <button className={className}>
            {children}
        </button>
    );
};