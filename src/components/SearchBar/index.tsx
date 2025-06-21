'use client';

import SearchIcon from '@/assets/search.png';
import Image from 'next/image';
import Styles from './searchBar.module.scss';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const router = useRouter();
  const [model, setModel] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [maxDistance, setMaxDistance] = useState('');

  const handleSearch = async () => {
    const query = new URLSearchParams();
      
    const userLat = -22.818;
    const userLng = -47.065;

    if (model) query.append('model', model);
    if (maxPrice) query.append('maxPrice', maxPrice);
    if (maxDistance) query.append('maxDistance', maxDistance);
    query.append('userLat', userLat.toString());
    query.append('userLng', userLng.toString());

    router.push(`/search?${query.toString()}`);
  };

  return (
    <div className={Styles.searchBar}>
      <div className={Styles.searchBarInput}>
        <label>
          <div>Qual tipo?</div>
          <input
            type="text"
            placeholder="Buscar por modelos"
            value={model}
            onChange={(event) => setModel(event.target.value)}
          />
        </label>
      </div>
      <div className={Styles.searchBarInput}>
        <label>
          <div>Valor?</div>
          <input
            type="number"
            placeholder="Insira orçamento"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </label>
      </div>
      <div className={Styles.searchBarInput}>
        <label>
          <div>Onde?</div>
          <input
            type="number"
            placeholder="Distância máxima"
            value={maxDistance}
            onChange={(event) => setMaxDistance(event.target.value)}
          />
        </label>
      </div>
      <div className={Styles.searchBarSvg} onClick={handleSearch}>
        <Image src={SearchIcon} alt="Search icon"/>
      </div>
    </div>
  )
}