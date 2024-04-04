import clsx from 'clsx';
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    // add custom props
}

export const Label: React.FC<LabelProps> = ({
    className,
    ...props
}) => {
    return (
        <div className="relative">
            <label
                className={clsx(
                    "block text-sm font-medium leading-6 text-gray-900 dark:text-zinc-200",
                    className,
                )}
                {...props}
            />
        </div>
    )
}