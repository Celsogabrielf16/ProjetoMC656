'use client';

import { BikeHighlightCard } from "@/components/BikeHighlightCard";
import Header from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { Bike } from "@/types/bike";
import { useEffect, useState } from "react";
import * as bikeService from '@/services/bikeService';
import { Footer } from "@/components/Footer";

export default function Home() {	
	const [bikes, setBikes] = useState<Bike[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchBikes() {
			const bikes = await bikeService.getAllBikes();
			setBikes(bikes);
		}

		fetchBikes();

		setLoading(false);
	}, [])

	return (
		<div className="flex flex-col px-16 py-8">
			<Header />
			<div className="flex-col">
				<SearchBar />
				{ loading || !bikes ? (
					<div className="w-[1100px] mt-14 mx-auto flex flex-col gap-6">
						<p>Carregando ...</p>
					</div>
				) : (
					<>
						<div className="w-[1100px] mt-14 mx-auto flex flex-col gap-6">
							<h4 className="text-2xl">Bikes em destaque entre os estudantes</h4>
							<div className="flex gap-8">
								<BikeHighlightCard {...bikes[0]}/>
								<BikeHighlightCard {...bikes[1]}/>
								<BikeHighlightCard {...bikes[2]}/>
							</div>
						</div>
						<div className="w-[1100px] mt-14 mx-auto flex flex-col gap-6">
							<h4 className="text-2xl">Escolha pelo seu estilo de pedalada</h4>
							<div className="flex gap-8">
								<BikeHighlightCard {...bikes[3]}/>
								<BikeHighlightCard {...bikes[4]}/>
								<BikeHighlightCard {...bikes[5]}/>
							</div>
						</div>
					</>
				) }
			</div>
      <Footer />
		</div>
	);
}
