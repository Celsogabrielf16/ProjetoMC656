"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
	const { push } = useRouter();
	const [isAuth, setIsAuth] = useState<boolean>(false);

	useEffect(() => {
		const token = localStorage.getItem("userToken");

		if (token) setIsAuth(true);
	}, []);

	function handleLinkLogo() {
		if (isAuth) push("/home");
		else push("/");
	}

	function userLogout() {
		localStorage.removeItem("userToken");
		push("/");
	}

	return (
		<header
			className="w-full bg-white h-20 flex text-center justify-between"
			data-testid="app-header"
		>
			<p
				className="font-bold text-[24px] text-[#E63946] cursor-pointer"
				onClick={() => handleLinkLogo()}
			>
				PEDALANDO
			</p>
			{isAuth ? (
				<div className="flex justify-between gap-16">
					<p
						className="text-[16px] cursor-pointer"
						onClick={() => userLogout()}
					>
						Sair
					</p>
					<p className="text-[16px] cursor-pointer" onClick={() => push('/bike/create')}>Emprestar bike</p>
				</div>
			) : (
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
			)}
		</header>
	);
};

export default Header;
