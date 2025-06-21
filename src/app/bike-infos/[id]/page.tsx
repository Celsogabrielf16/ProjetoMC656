'use client';

import Header from "@/components/Header";
import { Bike } from "@/types/bike";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as bikeService from '@/services/bikeService';

export default function BikeInfos() {
	const params = useParams();
	const bikeId = parseInt(params.id as string, 10);
  const [bike, setBike] = useState<Bike | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBike() {
      const bike = await bikeService.getBikeById(bikeId);
      setBike(bike);
    }

    fetchBike();

    setLoading(false);
  }, [])
  
  return (
    <main className="flex flex-col px-16 py-8">
      <Header />
      <p className="mx-auto">Implementar tela aqui!</p>
      { loading || !bike ? (<p>Carregando ...</p>
        ) : (
          <div className="mx-auto">
            <h4>Bike com o id {bikeId}</h4>
            <p>Modelo: {bike.model}</p>
            <p className="w-3xl">Descrição: {bike.description}</p>
          </div>
      ) }
    </main>
  )
}