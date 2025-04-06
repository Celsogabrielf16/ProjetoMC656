import React, { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	icon: IconType;
}

const Input: React.FC<InputProps> = ({
	icon: Icon,
	name,
	type,
	placeholder,
	...props
}) => {
	return (
		<div className="relative">
			<span className="absolute inset-y-0 left-2 flex items-center pl-3">
				<Icon className="h-5 w-5 text-black-400" />
			</span>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className="p-2 pl-12 border border-[#E63946] rounded-[24px] p-2 focus:outline-none w-full placeholder-black"
				{...props}
			/>
		</div>
	);
};

export default Input;
