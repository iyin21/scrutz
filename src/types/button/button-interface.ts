export interface buttonInterface
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
        | "primary"
        | "blue"
        | "transparent"
        | "gray"
        | "black"
        | "red"
        | "border"
        
        | "green"
        
    size?: "small" | "normal"
    type?: "button" | "submit" | "reset"
    children?: React.ReactNode
    className?: string
    iconLeft?: JSX.Element
    iconRight?: JSX.Element
}
