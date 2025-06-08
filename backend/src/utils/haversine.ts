export const haversine = (latitude1: number, longitude1: number, latitude2: number, longitude2: number): number => {
  const toRadian = (value: number) => (value * Math.PI) / 180;

  const earthRadius = 6371;

  const distanceLatitude = toRadian(latitude2 - latitude1);
  const distanceLongitude = toRadian(longitude2 - longitude1);

  const result = Math.sin(distanceLatitude / 2) ** 2 + Math.cos(toRadian(latitude1)) * Math.cos(toRadian(latitude2)) * Math.sin(distanceLongitude / 2) ** 2;

  return earthRadius * 2 * Math.atan2(Math.sqrt(result), Math.sqrt(1 - result));
};