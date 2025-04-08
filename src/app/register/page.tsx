"use client";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { registerSchema } from "@/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { registerUser } from "@/services/registerService";

const inputs = [
	{
		name: "name",
		type: "text",
		placeholder: "Nome",
		icon: BsPersonFill,
	},
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

type FormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
	const { push } = useRouter();

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(registerSchema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			await registerUser(data.name, data.email, data.password);
			push("/login");
		} catch (err: any) {
			window.alert("Erro ao cadastrar: " + err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, console.log)}>
			<div className="flex flex-col px-16 py-8">
				<Header />
				<div className="flex flex-col gap-4 m-auto mt-16 text-center">
					<p className="text-[40px]">Cadastrar-se</p>
					{inputs.map((props) => (
						<Input key={props.name} {...props} {...register(props.name)} />
					))}
					<button
						type="submit"
						className="bg-[#E63946] p-2 w-[300px] text-white border rounded-[24px] cursor-pointer"
					>
						Cadastrar-se
					</button>
					<div className="flex justify-center items gap-2">
						<p>Já tem uma conta?</p>
						<p
							className="text-[#E63946] cursor-pointer"
							onClick={() => push("/login")}
						>
							Entre
						</p>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Register;
