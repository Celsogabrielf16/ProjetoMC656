export type Bike = {
  id: number;
  ownerId: number;
  model: string;
  description: string;
  size: string;
  imagePath: string;
  hourlyRate: number;
  maxUsageTime: number;
  lateFee: number;
  rating: number;
  locationLat: number;
  locationLng: number;
};