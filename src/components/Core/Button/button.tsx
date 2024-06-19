import { buttonInterface } from "@/types/button/button-interface"

const Button = ({
    children,
    variant,
    size,
    className,
    iconLeft,
    iconRight,
    ...rest
}: buttonInterface) => {
    return (
        <button
            {...rest}
            className={`btn  rounded py-3 px-3 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300   btn--${variant} ${className} ${
                size === "normal" ? "w-full" : ""
            }`}
        >
            
            <span className="mr-2 lg:mr-2">{iconLeft}</span>
            {children}
            <span className="lg:ml-2">{iconRight}</span>
        </button>
    )
}

export default Button
