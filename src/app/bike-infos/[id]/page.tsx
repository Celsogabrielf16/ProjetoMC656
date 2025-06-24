'use client';
import BikeModal from "@/components/modal/bikeModal";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Bike } from "@/types/bike";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as bikeService from '@/services/bikeService';
import ratting from "@/assets/ratting.png";
import Star from '@/assets/star.png';
import Image from "next/image";
import { LoadingScreen } from "@/components/LoadingScreen/LoadingScreen ";


export default function BikeInfos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
	const params = useParams();
	const bikeId = parseInt(params.id as string, 10);
  const [bike, setBike] = useState<Bike | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchBike() {
      const bike = await bikeService.getBikeById(bikeId);
      setBike(bike);
      setLoading(false);
      
    }

    fetchBike();

    setLoading(false);
  }, [])

  const isExternalUrl = bike?.imagePath.startsWith('http');
  
  return (
    
    <main className="flex flex-col px-16 py-8">
      <Header />
    {loading || !bike ? (
        <LoadingScreen />
    ) : (
      <div className="flex flex-col items-center justify-center px-8 py-12 max-w-5xl mx-auto">
        
        {/* Imagem da bike centralizada */}
        <div className="w-full flex justify-center mb-8">
        {isExternalUrl ? (
          <img src={bike.imagePath} className="w-[1000px] h-[600px] object-cover rounded-xl" alt={`Imagem da bicicleta ${bike.model}`} width={1000} height={600}/>
        ) : (
          <Image src={`/images/${bike.imagePath}`} className="w-[1000px] h-[600px] object-cover rounded-xl" alt={`Imagem da bicicleta ${bike.model}`} width={1000} height={600}/>
        )}
        </div>
        {/* Informações da bike */}
        <div className="text-left w-full">
          {/* Linha superior com título, preço e botão */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-1">{bike.model}</h2>
              <p className="text-xl text-gray-500">R$ {bike.hourlyRate}/hora</p>

              <div className="flex items-center gap-2 text-yellow-500 mt-2">
                <Image src={Star} alt="Star" />
                <p>4.8</p>
                <span className="text-sm text-gray-600">Disponível</span>
              </div>
            </div>

            <div className="h-fit">
              {/* Botão de abrir modal */}
              <button
                className="bg-[#E63946] text-white font-medium px-6 py-2 rounded-full hover:bg-red-600 transition"
                onClick={() => setIsModalOpen(true)}
              >
                Solicitar Empréstimo
              </button>

              {/* Modal */}
              <BikeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                bike={bike}

              />

            </div>
          </div>

          {/* Descrição */}
          <p className="text-gray-700 leading-relaxed mb-6">{bike.description}</p>

          {/* Dados adicionais */}
          {/* Dados adicionais com separador visual */}
            <div className="grid grid-cols-2 gap-y-6 text-sm text-gray-800">
              {/* Coluna da esquerda */}
              <div className="flex flex-col gap-2">
                <div>
                  <p className="font-semibold">Tamanho da bicicleta</p>
                  <p>{bike.size}</p>
                </div>
                <div>
                  <p className="font-semibold">Tempo máximo de uso</p>
                  <p>{bike.maxUsageTime}</p>
                </div>
              </div>

              {/* Coluna da direita com borda à esquerda */}
              <div className="flex flex-col gap-2 pl-6 border-l border-red-300">
                <div>
                  <p className="font-semibold">Multa por atraso</p>
                  <p>R$ {bike.lateFee}/hora</p>
                </div>
                <div>
                  <p className="font-semibold">Distância até você</p>
                  <p>136 metros</p>
                </div>
              </div>
            </div>
        </div>             
      </div>
    )}

    {/* Seção texto com cards abaixo */}
    <section className="flex flex-col justify-center max-w-6xl py-16 w-full mx-auto px-8">

      {/* Título alinhado à esquerda */}
      <div className="max-w-3xl text-left">
        <h2 className="text-2xl font-semibold mb-4">
          Avaliações
        </h2>
      </div>

      {/* Cards SEM espaçamento entre eles */}
      <div className="flex flex-row items-start justify-between w-full overflow-x-auto">
        <Image src={ratting} alt="Depoimento 1" width={300} height={200} className="m-0 p-0" />
        <Image src={ratting} alt="Depoimento 2" width={300} height={200} className="m-0 p-0" />
        <Image src={ratting} alt="Depoimento 3" width={300} height={200} className="m-0 p-0" />
      </div>

    </section>
    <Footer />

    </main>
  )
}