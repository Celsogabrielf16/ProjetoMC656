import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import Bike from "@/assets/bike.png";
import bikecards from "@/assets/bikecards.png";
import map from "@/assets/map.png";
import card1 from "@/assets/card1.png";
import unicamp from "@/assets/unicamp.png";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col px-16 py-8">
			<Header />
			<div className="relative w-full">
								{/* Fundo UNICAMP */}
				<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 translate-y-65">

					<Image
					src={unicamp}
					alt="Texto UNICAMP"
					className="w-[100%] h-auto opacity-100 select-none scale-y-70"
					/>
				</div>
			</div>
				
			<div className="flex justify-between gap-[64px] my-16 px-30">
				
				<div className="flex flex-col gap-8 w-[640px]">
					
					<p className="text-[48px]">Pedale com liberdade no campus</p>
					<p className="text-[20px] leading-loose">
						Uma plataforma entre estudantes da Unicamp para facilitar o
						empréstimo temporário de bicicletas com segurança, praticidade e
						confiança.
					</p>
					<Link href={`/register`}>
						<button className="bg-[#E63946] p-2 w-[300px] text-white border rounded-[24px] cursor-pointer">
							Cadastre-se
						</button>
					</Link>
				</div>
				<Image src={Bike} alt="bike-image" className="w-[500px]" />
			</div>


				{/* Seção do mapa */}
				<section className="flex flex-col md:flex-row items-start justify-between max-w-6xl py-16 gap-16 w-full mx-auto px-8">
				<div className="flex-1 flex justify-start mt-[-35px]">
					<Image src={map} alt="Mapa" width={400} height={300} />
				</div>
				<div className="flex-1 flex flex-col justify-start items-start text-left">
					<h2 className="text-2xl font-semibold mb-4 whitespace-nowrap">
					Encontre sua próxima bike em segundos
					</h2>
					<p className="text-gray-600 leading-relaxed max-w-2xl w-full">
					Navegue pelo mapa interativo e descubra bicicletas disponíveis perto de você em tempo real.
					Com apenas alguns cliques, você escolhe a melhor opção e garante sua locomoção pelo campus com agilidade e segurança.
					</p>
				</div>
				</section>

				{/* Seção dos cards */}
				<section className="flex flex-col md:flex-row items-start justify-between max-w-6xl py-16 gap-12 w-full mx-auto px-8">
				<div className="flex-1 flex flex-col justify-start items-start text-left">
					<h2 className="text-2xl font-semibold mb-4">
					Bikes de estudantes, para estudantes
					</h2>
					<p className="text-gray-600 leading-relaxed max-w-xl w-full">
					A plataforma conecta você a uma comunidade de alunos dispostos a compartilhar.
					Descubra bicicletas próximas, com avaliações reais e preços justos. Tudo pensado
					para facilitar sua vida no campus.
					</p>
				</div>
				<div className="flex-1 flex justify-end mt-[-55px]">
					<Image src={bikecards} alt="Cards" width={400} height={300} />
				</div>
				</section>
				
				{/* Seção texto com cards abaixo */}
				<section className="flex flex-col items-center justify-center max-w-6xl py-16 gap-12 w-full mx-auto px-8 text-center">

				{/* Título e descrição */}
				<div className="max-w-3xl">
					<h2 className="text-2xl font-semibold mb-4">
					Juntos, estamos transformando a mobilidade no campus
					</h2>
					<p className="text-gray-600 leading-relaxed text-justify">
					Cada pedalada conta! Nossa comunidade cresce a cada dia, tornando a mobilidade dentro do campus mais sustentável, econômica e colaborativa.
					Seja para quem empresta ou para quem aluga, estamos criando um ecossistema de confiança e benefícios mútuos que transforma a forma como nos
					deslocamos na Unicamp.
					</p>
				</div>

				{/* Cards */}
				<div className="flex flex-col md:flex-row items-start justify-center gap-8 mt-8">
					<Image src={card1} alt="Depoimento 1" width={300} height={200} />
					<Image src={card1} alt="Depoimento 2" width={330} height={200} />
					<Image src={card1} alt="Depoimento 3" width={300} height={200} />
				</div>
				</section>
		<Footer />
		</div>


	);
}
