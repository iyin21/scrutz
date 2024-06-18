interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control?: string
    prefixIcon?: JSX.Element
    suffixIcon?: JSX.Element
    inputClassName?: string
}

const Input = ({
    prefixIcon,
    suffixIcon,
    className,
    inputClassName,
    ...rest
}: InputProps) => {
    return (
        <div
            className={`  flex items-center border border-[#999999]  h-12  rounded ${className}`}
        >
            {prefixIcon}
            <input
                className={`w-full outline-none input bg-transparent placeholder:text-[#CECECC] ${inputClassName}`}
                {...rest}
                
                
            />
            {/* <span> */}
            {suffixIcon}
            {/* </span> */}
        </div>
    )
}
export default Input
