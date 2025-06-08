import * as bikeModel from '../models/bikeModel';

export const getAllBikes = async () => {
    const bikes = await bikeModel.getAllBikes();

    if (!bikes || bikes.length === 0)
        throw new Error('Nenhuma bicicleta encontrada');

    return bikes;
}