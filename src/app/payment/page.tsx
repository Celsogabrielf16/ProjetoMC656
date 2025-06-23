"use client";

import Image from "next/image";
import { FaCheck, FaStar, FaUser } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Bike } from "@/types/bike";
import { useSearchParams } from "next/navigation";
import bikePng from "@/assets/bike.png";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const Payment: React.FC = () => {
	const searchParams = useSearchParams();
	const bikeId = searchParams.get("bikeId");
	const hours = searchParams.get("hours");

	const [confirm, setConfirm] = useState(false);

	const [bike, setBike] = useState<Bike | null>(null);

	useEffect(() => {
		if (bikeId) {
			fetch(`http://localhost:3001/bike/${bikeId}`)
				.then((res) => res.json())
				.then((data) => setBike(data))
				.catch((err) => alert(`erro ao buscar bike: ${err}`));
		}
	}, [bikeId]);

	if (!bike) {
		return <div>Carregando...</div>;
	}

	return (
		<>
			<Header />
			<div className="flex flex-col gap-8 mx-64">
				<p className="text-[24px] leading-[32px] font-medium">Pagamento</p>
				<div className="flex gap-16">
					<Image width={240} height={160} alt={bike.model} src={bikePng} />

					<div className="flex flex-col w-full gap-4">
						<div className="flex justify-between width-full">
							<div className="flex flex-col gap-2">
								<p>{bike.model}</p>
								<div className="flex gap-2">
									<FaStar />
									<p>{bike.rating}</p>
								</div>
							</div>
						</div>

						<div className="flex justify-between">
							<div className="flex flex-col gap-2">
								<p>Tempo estimado</p>
								<p className="gray">{hours} horas</p>
							</div>
							<div className="flex flex-col gap-2">
								<p>Multa por atraso</p>
								<p className="gray">{bike.lateFee} /hora</p>
							</div>
						</div>

						<div className="flex gap-16">
							<p>{bike.hourlyRate} /hora</p>
							<p>
								Total a pagar R$ {(bike.hourlyRate * Number(hours)).toFixed(2)}
							</p>
						</div>

						<button
							className="w-full bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-600"
							onClick={() => setConfirm(true)}
						>
							Pagar
						</button>
					</div>
				</div>
			</div>
			<Footer />

			{confirm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
					<div className="w-48 h-48 bg-white rounded-xl p-6 shadow-lg border border-gray-300 flex flex-col items-center justify-between text-center">
						<p>Pagamento concluído com sucesso</p>
						<FaCheck className="w-10 h-10 text-green-500" />
					</div>
				</div>
			)}
		</>
	);
};

export default Payment;
