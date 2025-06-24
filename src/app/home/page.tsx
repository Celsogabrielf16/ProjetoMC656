"use client";

import { BikeHighlightCard } from "@/components/BikeHighlightCard";
import Header from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { Bike } from "@/types/bike";
import { useEffect, useState } from "react";
import * as bikeService from "@/services/bikeService";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen ";

export default function Home() {
	const [bikes, setBikes] = useState<Bike[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [bikesCards01, setBikesCards01] = useState<Bike[]>([]);
	const [bikesCards02, setBikesCards02] = useState<Bike[]>([]);

	useEffect(() => {
		async function fetchBikes() {
			const bikes = await bikeService.getAllBikes();
			setBikes(bikes);
		}

		fetchBikes();

		setLoading(false);
	}, []);

	useEffect(() => {
		if (!bikes || bikes.length === 0) return;		

		for (let i = 0; i < 6; i++) {
			if (bikes[i] && bikesCards01.length == 0)
				setBikesCards01((prev) => [...prev, bikes[i]]);

			if (bikes[i + 6] && bikesCards02.length == 0)
				setBikesCards02((prev) => [...prev, bikes[i + 6]]);
		}
	}, [bikes]);

	return (
		<div className="flex flex-col px-16 py-8">
			<Header />
			<div className="flex-col">
				<SearchBar />
				{loading || !bikes ? (
					<LoadingScreen />
				) : (
					<>
						<div className="w-[1100px] mt-14 mx-auto flex flex-col gap-6">
							<h4 className="text-2xl">
								Bikes em destaque entre os estudantes
							</h4>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{bikesCards01.map((bike) => (
									<BikeHighlightCard key={bike.id} {...bike} />
								))}
							</div>
						</div>
						<div className="w-[1100px] mt-14 mx-auto flex flex-col gap-6">
							<h4 className="text-2xl">Escolha pelo seu estilo de pedalada</h4>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{bikesCards02.map((bike) => (
									<BikeHighlightCard key={bike.id} {...bike} />
								))}
							</div>
						</div>
					</>
				)}
			</div>
			<Footer />
		</div>
	);
}
