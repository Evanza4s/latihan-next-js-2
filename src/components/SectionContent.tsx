import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionContent = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
    const {className, ...otherProps} = props
    return <div className={twMerge('container py-24 md:py-36 lg:py-48 overflow-hidden ', className)} {...otherProps} />;
}