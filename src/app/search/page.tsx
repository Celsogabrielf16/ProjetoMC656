'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getFilteredBikes } from '@/services/bikeService';
import { SearchBar } from '@/components/SearchBar';
import { BikeCard } from '@/components/BikeCard';
import { Bike } from '@/types/bike';
import styles from './search.module.scss';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [bikes, setBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const model = searchParams.get('model') || undefined;
      const maxPrice = searchParams.get('maxPrice')
        ? parseFloat(searchParams.get('maxPrice')!)
        : undefined;
      const maxDistance = searchParams.get('maxDistance')
        ? parseFloat(searchParams.get('maxDistance')!)
        : undefined;
      const userLat = searchParams.get('userLat')
        ? parseFloat(searchParams.get('userLat')!)
        : undefined;
      const userLng = searchParams.get('userLng')
        ? parseFloat(searchParams.get('userLng')!)
        : undefined;

      const result = await getFilteredBikes({
        model,
        maxPrice,
        maxDistance,
        userLat,
        userLng,
      });

      setBikes(result);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className="flex flex-col px-16 py-8">
      <Header />
      <SearchBar />
      <div className={styles.cards}>
        {bikes ? 
          <p className={styles.bikesFound}>
            {bikes.length > 1 ? `${bikes.length} Bikes encontradas` : `${bikes.length} Bike encontrada`}
          </p> : ''
        }
        {bikes && bikes.length > 0 ? (bikes.map((bike) => (
          <BikeCard key={bike.id} {...bike} />
        ))) : <p>Nenhuma bicicleta encontrada para esse filtro</p>}
      </div>
      <Footer />
    </div>
  );
}
