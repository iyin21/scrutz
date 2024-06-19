/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, useField, FieldProps } from "formik"
import { Switch } from "@mantine/core"
import {
    ISelectProps,
    formInterface,
} from "@/types/formControls/formControl-interface"
import Input from "../Core/Input/input"
import styles from "./select.module.scss"
import { useState,  } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { TagsInput } from "@mantine/core"

function InputProp(props: formInterface) {
    const {
        suffixIcon,
        prefixIcon,
        classNames,
        name,
        type,
        //enablereinitialize,
        onClick,
        disabled,
        className,
        label,
        labelClassName,
        placeholder,
        onChange,
        ...rest
    } = props

    return (
        <Field name={name}>
            {({ field, meta, form }: FieldProps<string>) => (
                <div
                    className={`flex flex-col w-full ${classNames?.wrapper} ${
                        form.touched[name as string] &&
                        form.errors[name as string]
                            ? "border-red-100"
                            : ""
                    } ${className}`}
                >
                    {label && (
                        <label
                            htmlFor={name}
                            className={`label text-black-100 text-[14px] ${labelClassName}`}
                        >
                            {label}
                        </label>
                    )}

                    <Input
                        {...field}
                        {...rest}
                        prefixIcon={prefixIcon}
                        suffixIcon={suffixIcon}
                        onClick={onClick}
                        className={`  flex items-center  text-[12px]   outline-none w-full mt-1 ${
                            classNames?.mainRoot
                        } ${disabled ? "bg-black-30 cursor-not-allowed" : ""} ${
                            form.touched[name as string] &&
                            form.errors[name as string] &&
                            "border-red-100"
                        }`}
                        inputClassName={`${classNames?.input}`}
                        type={type}
                        placeholder={placeholder}
                        onChange={(e) => {
                            form.setFieldValue(name, e.target.value)
                            onChange && onChange(e)
                        }}
                        disabled={disabled}
                    />
                    {meta.touched && meta.error && (
                        <div className="text-red-100 my-2 text-md">
                            {meta.error}
                        </div>
                    )}
                </div>
            )}
        </Field>
    )
}

function DatePickerInput(props: any) {
    const {
        suffixIcon,
        prefixIcon,
        classNames,
        name,
        type,
        onClick,
        disabled,
        className,
        label,
        labelClassName,
        placeholder,
        onChange,
        currentDate,

        ...rest
    } = props
    const [date, setDate] = useState<Date>(currentDate)
    return (
        <Field name={name}>
            {({
                meta,
                form: { setFieldValue, touched, errors },
            }: FieldProps<string>) => (
                <div className={`${className}`}>
                    {label && (
                        <label
                            htmlFor={name}
                            className={`label text-[#666666] text-[14px] ${labelClassName}`}
                        >
                            {label}
                        </label>
                    )}
                    <div className={`flex flex-col w-full  ${className}`}>
                        <DatePicker
                            {...rest}
                            selected={date}
                            onChange={(date: Date) => {
                                setDate(date)
                                setFieldValue(name, date)
                                onChange && onChange(date)
                            }}
                            className={`w-full text-[14px] outline-none w-full mt-1 border border-[#999999] rounded h-12 px-2 ${
                                classNames?.mainRoot
                            } ${disabled ? "bg-black-30 cursor-not-allowed" : ""} ${
                                touched[name as string] &&
                                errors[name as string] &&
                                "border-red-100"
                            }`}
                            placeholderText={placeholder}
                            popperPlacement="bottom-end"
                        />
                    </div>
                    {meta.touched && meta.error && (
                        <div className="text-red-100 my-2 text-3md ">
                            {meta.error}
                        </div>
                    )}
                </div>
            )}
        </Field>
    )
}

function TextAreaProp(props: formInterface) {
    const {
        classNames,
        name,
        onClick,
        disabled,
        label,
        className,
        labelClassName,
    } = props

    return (
        <Field name={name}>
            {({ field, meta, form }: any) => (
                <div className={`${className}`}>
                    {label && (
                        <label
                            htmlFor={name}
                            className={`label text-md ${labelClassName}`}
                        >
                            {label}
                        </label>
                    )}
                    <div
                        className={`flex flex-col w-full border border-[#999999]  rounded  px-2 mt-1 ${classNames?.wrapper} ${
                            form.touched[name as string] &&
                            form.errors[name as string]
                                ? "border-red-100"
                                : ""
                        } `}
                    >
                        <textarea
                            {...field}
                            {...props}
                            onClick={onClick}
                            className={`bg-transparent flex items-center outline-none w-full pt-2 text-[14px]  ${classNames?.input}${
                                disabled ? "bg-black-20 cursor-not-allowed" : ""
                            } `}
                            rows={5}
                        />
                    </div>
                    {meta.touched && meta.error && (
                        <div className="text-red-100 items-center text-md ">
                            {meta.error}
                        </div>
                    )}
                </div>
            )}
        </Field>
    )
}

function SelectInput(props: ISelectProps) {
    const {
        className,
        name,
        children,
        suffixIcon,
        label,
        defaultValue,
        classNames,
        labelClassName,
        onChange,
        ...rest
    } = props

    return (
        <>
            <Field name={name}>
                {({
                    field,
                    meta,
                    form: { setFieldValue },
                }: FieldProps<string>) => (
                    <div className={` ${className} `}>
                        {label && (
                            <label
                                htmlFor={name}
                                className={`label ${labelClassName}`}
                            >
                                {label}
                            </label>
                        )}
                        <div className="relative">
                            <select
                                {...field}
                                {...rest}
                                className={`border border-1 border-[#999999]  p-3 pr-8 rounded w-full outline-none text-[14px] h-12 ${classNames?.mainRoot}   ${
                                    styles.select
                                }  ${
                                    meta.touched && meta.error
                                        ? "border border-red-100"
                                        : ""
                                }`}
                                defaultValue={meta.initialValue || defaultValue}
                                onChange={(e) => {
                                    setFieldValue(name, e.target.value)
                                    onChange && onChange(e)
                                }}
                            >
                                {children}
                            </select>
                            
                        </div>
                        {meta.touched && meta.error && (
                            <div className="text-red-100 my-2 text-md">
                                {meta.error}
                            </div>
                        )}
                    </div>
                )}
            </Field>
        </>
    )
}

function SwitchInput(props: any) {
    const {
        onClick,
        disabled,
        checked,
        labelName,
        labelPosition,
        className,
        labelClassName,
        ...rest
    } = props

    const [field, meta] = useField(props)
    return (
        <>
            <div className={`flex flex-col`}>
                <div className="flex justify-between items-center w-full">
                    <p
                        //htmlFor={name}
                        className={`label text-[#666666] text-md ${labelClassName}`}
                    >
                        {labelName}
                    </p>
                    <div>
                        <Switch
                            {...field}
                            {...props}
                            className={` flex items-center placeholder:bg-black-60 outline-none w-full pt-2 ${className} ${
                                disabled ? "bg-black-20 cursor-not-allowed" : ""
                            } `}
                            onClick={onClick}
                            color="#6E0080"
                            //label={label}
                            labelPosition={labelPosition}
                            checked={checked}
                            size="lg"
                            styles={{}}
                            {...rest}
                        />
                    </div>
                </div>

                {meta.touched && meta.error && (
                    <div className="text-red-100 items-center text-3md ">
                        {meta.error}
                    </div>
                )}
            </div>
        </>
    )
}

function TagInput(props: any) {
    const {
        classNames,
        name,
        onClick,
        disabled,
        label,
        className,
        labelClassName,
        ...rest
    } = props
    
   
    return (
        <Field name={name}>
            {({
                meta,
                form: { setFieldValue, touched, errors },
            }: FieldProps<string[]>) => (
                <div className={`flex flex-col`}>
                    <TagsInput
                        {...props}
            
                        {...rest}
                        label={label}
                        styles={{
                            input: {
                                borderRadius: "4px",
                                minHeight: "70px",
                                borderColor:
                                    touched[name as string] &&
                                    errors[name as string]
                                        ? "#990000"
                                        : "#999999",
                            },
                            pill: {
                                borderRadius: "4px",
                                background: "#247B7B",
                                color: "white",
                            },
                        }}
                        //value={value}
                        onChange={(val)=>setFieldValue(name, val)}
                    />
                    {meta.touched && meta.error && (
                        <div className="text-red-100 items-center text-3md ">
                            {meta.error}
                        </div>
                    )}
                </div>
            )}
        </Field>
    )
}
export default function FormControls({ control, ...rest }: formInterface) {
    switch (control) {
        case "input":
            return <InputProp control="select" {...rest} />
        case "textarea":
            return <TextAreaProp control="select" {...rest} />

        case "date":
            return <DatePickerInput {...rest} />

        case "select":
            // @ts-expect-error
            return <SelectInput {...rest} />
        case "switch":
            return <SwitchInput {...rest} />
        case "tag":
            return <TagInput {...rest} />
        default:
            return null
    }
}
