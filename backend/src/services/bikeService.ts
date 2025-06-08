import * as bikeModel from '../models/bikeModel';
import { BikeToBeCreated } from '../types/bike';

export const getAllBikes = async () => {
    const bikes = await bikeModel.getAllBikes();

    if (!bikes || bikes.length === 0)
        throw new Error('Nenhuma bicicleta encontrada');

    return bikes;
}

export const createBike = async (bikeData: BikeToBeCreated) => {
    const bike = await bikeModel.createBike(bikeData);

    if (!bike)
        throw new Error('Erro ao registrar bicicleta');

    return bike;
}