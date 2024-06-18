import styles from "./select.module.scss";

type OptionValue = string | number | string[] | undefined;

type Props<Value extends OptionValue> = {
    value: Value | any;
    onChange: (newValue: Value) => void;
    options: Value[];
    name?: string;
    className?: string;
    id?: string;
    dataTestId?: string;
    disabled?: boolean;
};

export default function CustomSelect<Value extends OptionValue>({
    value,
    onChange,
    options,
    name,
    className,
    dataTestId,
    disabled,
    id,
}: Props<Value>) {
    return (
        <select
            id={id}
            data-testid={dataTestId}
            value={value}
            onChange={(event: React.FormEvent<HTMLSelectElement>) => {
                const selectedOption = options[event.currentTarget.selectedIndex];
                onChange(selectedOption);
            }}
            className={`border-solid border border-gray-100 px-3 md:px-4 cursor-pointer rounded w-full outline-none ${className} bg-red ${styles["select"]}`}
            name={name}
            disabled={disabled}
        >
            {options?.map((value: any) => (
                <option value={value} key={value}>
                    {value}
                </option>
            ))}
        </select>
    );
}
