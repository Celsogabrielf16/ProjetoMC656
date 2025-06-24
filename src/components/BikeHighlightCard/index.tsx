import { Bike } from "@/types/bike";
import styles from './bikeHighlightCard.module.scss';
import Image from 'next/image';
import Star from '@/assets/star.png';
import Link from "next/link";

export const BikeHighlightCard = (bike: Bike) => {
  const isExternalUrl = bike.imagePath.startsWith('http');
  
  return (
    <Link href={`bike-infos/${bike.id}`} className={styles['bike-card']}>
      {isExternalUrl ? (
        <img src={bike.imagePath} className={styles['bike-card__image']} alt={`Imagem da bicicleta ${bike.model}`} width={350} height={200}/>
      ) : (
        <Image src={`/images/${bike.imagePath}`} className={styles['bike-card__image']} alt={`Imagem da bicicleta ${bike.model}`} width={350} height={200}/>
      )}
      <div className={styles['bike-card__info']}>
        <p className={styles['bike-card__model']}>{bike.model}</p>
        <p className={styles['bike-card__rate']}>R$ {bike.hourlyRate},00/hora</p>
        <div className={styles['bike-card__status']}>
          <div className={styles['bike-card__rating']}>
            <Image src={Star} alt="Star" />
            <p>4.8</p>
          </div>
          <p>Disponível</p>
        </div>
      </div>
    </Link>
  )
}