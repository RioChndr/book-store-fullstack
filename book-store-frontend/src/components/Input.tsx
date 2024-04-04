'use client'
import React, { useState } from "react";
import clsx from 'clsx';
import { ExclamationCircleIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean,
}

export const Input: React.FC<InputProps> = ({
    isError,
    className,
    type,
    ...props
}) => {
    const [passwordIsShow, setPasswordIsShow] = useState(type !== 'password')

    return (
        <div className="relative rounded-md shadow-sm">
            <input
                className={clsx(
                    "block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-zinc-700 dark:ring-zinc-800 dark:text-zinc-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary-500 sm:text-sm sm:leading-6",
                    isError && "text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500",
                    className,
                )}
                type={passwordIsShow ? 'text' : type}
                {...props}
            />
            {isError && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
            )}
            {type === 'password' && (
                <div
                onClick={() => {
                    setPasswordIsShow(!passwordIsShow)
                }}
                 className="cursor-pointer absolute inset-y-0 right-0 flex items-center pr-3">
                    {
                        passwordIsShow 
                        ? <EyeSlashIcon className="h-5 w-5 " aria-hidden="false" />
                        : <EyeIcon className="h-5 w-5 " aria-hidden="false" />
                    }
                </div>
            )}
        </div>
    )
}