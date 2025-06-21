import { Bike } from '@/types/bike';

interface FilterParams {
  model?: string;
  maxPrice?: number;
  maxDistance?: number;
  userLat?: number;
  userLng?: number;
}

export async function getBikeById(id: number): Promise<Bike> {
  const response = await fetch(`http://localhost:3001/bike/${id}`);
  const bike = await response.json();
  return bike;
}

export async function getAllBikes(): Promise<Bike[]> {
  const response = await fetch(`http://localhost:3001/bike`);
  const bikes = await response.json();
  return bikes;
}

export async function getFilteredBikes(params: FilterParams): Promise<Bike[]> {
  const query = new URLSearchParams();

  if (params.model) query.append('model', params.model);
  if (params.maxPrice) query.append('maxPrice', params.maxPrice.toString());
  if (params.maxDistance) query.append('maxDistance', params.maxDistance.toString());
  if (params.userLat) query.append('userLat', params.userLat.toString());
  if (params.userLng) query.append('userLng', params.userLng.toString());

  const response = await fetch(`http://localhost:3001/bike/filter?${query.toString()}`);
  const data = response.json();
  
  return data;
}