import {ChangeEvent} from "react";

interface IProps {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function UrlEdit(props: IProps) {

    return (
        <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-300 pb-2">
                Watch video without distractions!
            </span>
            <input
                type="text"
                placeholder="https://www.youtube.com/watch?v=1PetRVcM2sk"
                onChange={props.handleInputChange}
                className="border-white border-b bg-inherit pb-1 leading-3 pl-0 text-gray-200 placeholder:text-neutral-700 shadow text-3xl appearance-none font-semibold focus:outline-none focus:shadow-outline"
            />
        </div>
    )
}