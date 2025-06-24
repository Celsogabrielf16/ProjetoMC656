import { Bike } from "@/types/bike";
import styles from './bikeCard.module.scss';
import Image from 'next/image';
import Star from '@/assets/star.png';
import Link from "next/link";

export const BikeCard = (bike: Bike) => {
  const isExternalUrl = bike.imagePath.startsWith('http');

  return (
    <Link href={`bike-infos/${bike.id}`} className={styles['bike-card']}>
      {isExternalUrl ? (
        <img src={bike.imagePath} className={styles['bike-card__image']} alt={`Imagem da bicicleta ${bike.model}`} width={350} height={250}/>
      ) : (
        <Image src={`/images/${bike.imagePath}`} className={styles['bike-card__image']} alt={`Imagem da bicicleta ${bike.model}`} width={350} height={250}/>
      )}
      <div className={styles['bike-card__info']}>
        <div className={styles['bike-card__header']}>
          <div className={styles['bike-card__model-wrapper']}>
            <p className={styles['bike-card__model']}>{bike.model}</p>
            <div className={styles['bike-card__status']}>
              <div className={styles['bike-card__rating']}>
                <Image src={Star} alt="Star" />
                <p>4.8</p>
              </div>
              <p>Disponível</p>
            </div>
          </div>
          <div className={styles['bike-card__rate']}>
            <p>R$ {bike.hourlyRate},00/hora</p>
          </div>
        </div>
        <p className={styles['bike-card__description']}>{bike.description}</p>
      </div>
    </Link>
  )
}