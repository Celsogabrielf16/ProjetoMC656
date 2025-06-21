import Header from "@/components/Header";
import Image from "next/image";

import Bike from "@/assets/bike.png";

export default function Home() {
	return (
		<div className="flex flex-col px-16 py-8">
			<Header />
			<div className="flex justify-between gap-[64px] my-16 px-8">
				<div className="flex flex-col gap-8 w-[500px]">
					<p className="text-[48px]">Pedale com liberdade no campus</p>
					<p className="text-[20px] leading-loose">
						Uma plataforma entre estudantes da Unicamp para facilitar o
						empréstimo temporário de bicicletas com segurança, praticidade e
						confiança.
					</p>
					<button className="bg-[#E63946] p-2 w-[300px] text-white border rounded-[24px] cursor-pointer">
						Cadastre-se
					</button>
				</div>
				<Image src={Bike} alt="bike-image" className="w-[500px]" />
			</div>
		</div>
	);
}
