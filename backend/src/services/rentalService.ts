import * as rentalModule from '../models/rentalModel';
import { RentalToBeCreated } from '../types/rental';

export const getRentalByUserId = async (userId: number) => {
    const rental = await rentalModule.getRentalByUserId(userId);

    if (!rental || rental.length === 0)
        throw new Error('Nenhuma locação encontrada para este usuário');

    return rental;
}

export const createRental = async (rentalData: RentalToBeCreated) => {
    const rental = await rentalModule.createRental(rentalData);

    if (!rental)
        throw new Error('Erro ao criar a locação');

    return rental;
}

export const updateRental = async (id: number) => {
    const rental = await rentalModule.updateRental(id);

    if (!rental)
        throw new Error('Erro ao atualizar a locação');

    return rental;
}