"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Header: React.FC = () => {
	const { push } = useRouter();

	return (
		<header className="w-full bg-white h-20 flex text-center justify-between" data-testid='app-header'>
			<p
				className="font-bold text-[24px] text-[#E63946] cursor-pointer"
				onClick={() => push("/")}
			>
				PEDALANDO
			</p>
			<div className="flex justify-between gap-16">
				<p
					className="text-[16px] cursor-pointer"
					onClick={() => push("/login")}
				>
					Entre
				</p>
				<p
					className="text-[16px] cursor-pointer"
					onClick={() => push("/register")}
				>
					Cadastre-se
				</p>
			</div>
		</header>
	);
};

export default Header;
