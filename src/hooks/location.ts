export const getCurrentLocation = (): Promise<{ locationLat: number; locationLng: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocalização não suportada"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
          reject(new Error("Coordenadas fora dos limites válidos"));
        } else {
          resolve({ locationLat: lat, locationLng: lng });
        }
      },
      () => {
        reject(new Error("Não foi possível obter a localização"));
      }
    );
  });
};
