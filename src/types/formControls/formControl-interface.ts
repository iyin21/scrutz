export interface formInterface
    extends React.InputHTMLAttributes<HTMLInputElement> {
    control:
        | "input"
        | "select"
        | "textarea"
        | "switch"
        | "checkbox"
        | "file"
        | "phoneNumber"
        | "date"
        | "tag"
    suffixIcon?: JSX.Element
    prefixIcon?: JSX.Element
    enablereinitialize?: boolean
    label?: string | JSX.Element
    error?: boolean
    name: string
    currentDate?: Date
    onClick?: (value: unknown) => void
    validate?: (value: unknown) => string | unknown
    classNames?: {
        input?: string
        mainRoot?: string
        wrapperRoot?: string
        wrapper?: string
    }
    labelName?: string
    labelClassName?: string
    placeholder?: string
    labelPosition?: string
    showTimeSelect?: boolean
    showTimeSelectOnly?: boolean
    dateFormat?: string
    timeCaption?: string
    onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

export interface ISelectProps {
    name: string
    className?: string
    children?: React.ReactNode
    value?: string | number | readonly string[] | undefined
    suffixIcon?: JSX.Element
    label?: string
    defaultValue?: string | number | readonly string[] | undefined
    classNames?: {
        input?: string
        mainRoot?: string
        wrapperRoot?: string
        wrapper?: string
    }
    labelClassName?: string
    onChange?: (event: React.FormEvent<HTMLSelectElement>) => void
}
