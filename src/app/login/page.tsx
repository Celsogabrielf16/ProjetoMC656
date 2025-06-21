"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { loginSchema } from "@/schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

import { login } from "@/services/authService";

const inputs = [
	{
		name: "email",
		type: "text",
		placeholder: "E-mail",
		icon: FaEnvelope,
	},
	{
		name: "password",
		type: "password",
		placeholder: "Senha",
		icon: FaLock,
	},
] as const;

type FormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
	const { push } = useRouter();

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = async (data: FormData) => {
		try {
		  const { token } = await login(data.email, data.password);

			localStorage.setItem('userToken', token);

			push("/home");

		} catch (error: any) {
		  alert(error.message);
		}
	  };

	return (
		<form onSubmit={handleSubmit(onSubmit, console.log)}>
			<div className="flex flex-col px-16 py-8">
				<Header />
				<div className="flex flex-col gap-4 m-auto mt-16 text-center">
					<p className="text-[40px]">Entrar</p>
					{inputs.map((props) => (
						<Input key={props.name} {...props} {...register(props.name)} />
					))}
					<button
						type="submit"
						className="bg-[#E63946] p-2 w-[300px] text-white border rounded-[24px] cursor-pointer"
					>
						Entrar
					</button>
					<div className="flex justify-center items gap-2">
						<p>Não tem uma conta?</p>
						<p
							className="text-[#E63946] cursor-pointer"
							onClick={() => push("/register")}
						>
							Cadastre-se
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Login;
