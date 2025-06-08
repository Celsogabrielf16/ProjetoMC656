import * as rentalModule from '../models/rentalModel';

export const getRentalByUserId = async (userId: number) => {
    const rental = await rentalModule.getRentalByUserId(userId);

    if (!rental || rental.length === 0)
        throw new Error('Nenhuma locação encontrada para este usuário');

    return rental;
}