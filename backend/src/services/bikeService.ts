import * as bikeModel from '../models/bikeModel';
import { BikeFilter, BikeToBeCreated } from '../types/bike';
import { haversine } from './../utils/haversine';

export const getAllBikes = async () => {
    const bikes = await bikeModel.getAllBikes();

    if (!bikes || bikes.length === 0)
        throw new Error('Nenhuma bicicleta encontrada');

    return bikes;
}
export const getBikeById = async (id: number) => {
    const bike = await bikeModel.getBikeById(id);

    if (!bike)
        throw new Error('Bicicleta não encontrada');

    return bike;
}

export const filterBike = async (filterData: BikeFilter) => {
    const bikes = await bikeModel.filterBike(filterData);

    if (!bikes || bikes.length === 0)
        throw new Error('Nenhuma bicicleta encontrada com os critérios especificados');

    const { userLat, userLng, maxDistance } = filterData;

    if (!userLat || !userLng || !maxDistance)
        return bikes;

    const bikesFiltred = bikes.filter((bike) => {
        const distance = haversine(bike.locationLat, bike.locationLng, userLat, userLng);
        return distance <= maxDistance;
    })

    if (!bikesFiltred || bikesFiltred.length === 0)
        throw new Error('Nenhuma bicicleta encontrada na distância especificada');

    return bikesFiltred;
}

export const createBike = async (bikeData: BikeToBeCreated) => {
    const bike = await bikeModel.createBike(bikeData);

    if (!bike)
        throw new Error('Erro ao registrar bicicleta');

    return bike;
}