'use client';

import { Bike } from "@/types/bike";
import user from "@/assets/user.png";
import letter from "@/assets/letter.png";
import { useState } from "react";
import Image from "next/image";
import star from "@/assets/star.png";

interface BikeModalProps {
  bike: Bike;
  onClose: () => void;
  isOpen: boolean;


}

export default function BikeModal({ bike, onClose, isOpen  }: BikeModalProps) {
  const [hours, setHours] = useState(1);
  const estimatedPrice = (bike.hourlyRate * hours).toFixed(2);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#0000001a] flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-[95%] max-w-2xl relative">

        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold text-gray-600"
        >
          &times;
        </button>

        {/* Imagem da bike */}
        <div className="flex justify-center mb-6">
          <img
            src={bike.imagePath}
            alt={`Imagem da bike ${bike.model}`}
            className="rounded-xl w-[600px] h-[400px] object-cover border"
          />
        </div>

          {/* Título, locador e status */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold">{bike.model}</h2>
              <div className="flex gap-2 items-center text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Image src={star} alt="estrela" width={14} height={14} />
                  <span className="text-yellow-500 font-medium">{bike.rating}</span>
                </div>
                <span className="text-gray-500">Disponível</span>
              </div>
            </div>


        <div className="flex items-center gap-3 text-sm">
          {/* Ícone à esquerda */}
          <Image src={user} alt="Usuário" width={34} height={34} />

          {/* Texto à direita */}
          <div className="flex flex-col">
            <p className="font-semibold">Celso Gabriel Prado</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={star} alt="estrela" width={14} height={14} />
                <span className="text-yellow-500 font-medium">5.0</span>
              </div>
              <p className="text-gray-400">Locador a 3 meses</p>
            </div>
          </div>

        </div>

        </div>

        {/* Linhas de informações com borda separadora */}
        <div className="grid grid-cols-3 text-sm text-gray-800 mb-6">
          <div className="pr-4">
            <p>Tempo máximo de uso</p>
            <p className="whitespace-nowrap">
              {bike.maxUsageTime} Horas por empréstimo
            </p>

          </div>
          <div className="border-l border-red-300 px-4">
            <p>Multa por atraso</p>
            <p>R$ {bike.lateFee}/hora</p>
          </div>
          <div className="border-l border-red-300 pl-4">
            <p >Distância até você</p>
            <p>136 metros</p>
          </div>
        </div>
{/* Primeira linha: input com ícone e botão */}
<div className="flex gap-4 mb-4 items-center">
  <div className="relative w-full">
    {/* Substituição do SVG pelo ícone letter.png */}
    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
      <Image
        src={letter}
        alt="Ícone de carta"
        width={16}
        height={16}
        className="opacity-70"
      />
    </span>

    <input
      type="text"
      placeholder="Tempo de Empréstimo"
      className="w-full border border-primary rounded-full px-8 py-2 pl-10 text-sm text-muted-foreground placeholder-muted-foreground focus:outline-none"
    />
  </div>

  <button className="whitespace-nowrap bg-[#E63946] text-white px-6 py-2 rounded-full text-sm font-semibold shadow">
    Calcular Valor Estimado
  </button>
</div>

{/* Segunda linha: texto e botões */}
<div className="flex justify-between items-center mb-4">
  <p className="text-sm font-semibold leading-tight">
    Valor estimado<br />
    <span className="text-base font-normal text-gray-800">
      R$ {estimatedPrice} reais por {hours} horas
    </span>
  </p>

  <div className="flex gap-4">
    <button
      onClick={onClose}
      className="border border-red-400 text-gray-400 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
    >
      Cancelar
    </button>
    <button className="bg-[#E63946] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition">
      Confirmar Empréstimo
    </button>
  </div>
</div>



      </div>
    </div>
  );
}
