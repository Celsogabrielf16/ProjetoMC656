"use client";

import React from "react";
import { z } from "zod";

import { bikeSchema } from "@/schema/bike";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export type BikeData = z.infer<typeof bikeSchema>;

import {
	FaBicycle,
	FaFileAlt,
	FaRuler,
	FaImage,
	FaDollarSign,
	FaClock,
	FaExclamationTriangle,
} from "react-icons/fa";
import { postBike } from "@/services/bikeService";

const inputs = [
	{
		name: "model",
		type: "text",
		placeholder: "Modelo",
		icon: FaBicycle,
	},
	{
		name: "description",
		type: "text",
		placeholder: "Descrição",
		icon: FaFileAlt,
	},
	{
		name: "size",
		type: "text",
		placeholder: "Tamanho (12 a 30)",
		icon: FaRuler,
	},
	{
		name: "imagePath",
		type: "text",
		placeholder: "URL da Imagem",
		icon: FaImage,
	},
	{
		name: "hourlyRate",
		type: "number",
		placeholder: "Taxa por Hora (R$)",
		icon: FaDollarSign,
	},
	{
		name: "maxUsageTime",
		type: "number",
		placeholder: "Tempo Máximo de Uso (min)",
		icon: FaClock,
	},
	{
		name: "lateFee",
		type: "number",
		placeholder: "Multa por Atraso (R$)",
		icon: FaExclamationTriangle,
	},
] as const;

const Create: React.FC = () => {
	const { push } = useRouter();

	const { register, handleSubmit } = useForm({
		resolver: zodResolver(bikeSchema),
	});

	const onSubmit = async (
		data: Omit<BikeData, "ownerId" | "locationLat" | "locationLng">
	) => {
		try {
			await postBike(data);
			push("/home");
		} catch (err: any) {
			window.alert("Erro ao cadastrar:" + err.message);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit, console.log)}>
			<div className="flex flex-col px-16 py-8">
				<Header />
				<div className="flex flex-col gap-4 m-auto mt-16 text-center">
					<p className="text-[40px]">Cadastrar bike</p>
					{inputs.map((props) => (
						<Input
							key={props.name}
							{...props}
							{...register(props.name, {
								valueAsNumber: props.type === "number",
							})}
						/>
					))}
					<button
						type="submit"
						className="bg-[#E63946] p-2 w-[300px] text-white border rounded-[24px] cursor-pointer"
					>
						Cadastrar bike
					</button>
				</div>
			</div>
		</form>
	);
};

export default Create;
