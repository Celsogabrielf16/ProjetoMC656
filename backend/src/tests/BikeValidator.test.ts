import { BikeToBeCreated } from "../types/bike";
import { BikeValidator } from "../validators/BikeValidator";

describe('bike validator - particionamento em classes de equivalência', () => {
  it('deve validar um payload de bike válido', () => {
    const validBike: BikeToBeCreated = {
      ownerId: 1,
      model: 'bicicleta legal 1',
      description: 'bicicleta legal',
      size: '26',
      imagePath: 'https://google.com',
      hourlyRate: 20,
      maxUsageTime: 5,
      lateFee: 10,
      locationLat: -30,
      locationLng: -45,
    };

    expect(() => BikeValidator.validate(validBike)).not.toThrow();
  })

  it('deve invalidar um payload de bike inválido', () => {
    const invalidBike: BikeToBeCreated = {
      ownerId: 0,
      model: 'b',
      description: 'b',
      size: '10',
      imagePath: 'url-invalida',
      hourlyRate: -1,
      maxUsageTime: -1,
      lateFee: -1,
      locationLat: 200,
      locationLng: 200,
    };

    expect(() => BikeValidator.validate(invalidBike)).toThrow();
  })
})

describe('bike validator - análise de valor limite', () => {
  const defaultBike: BikeToBeCreated = {
    ownerId: 1,
    model: 'bicicleta legal 1',
    description: 'bicicleta legal',
    size: '26',
    imagePath: 'https://google.com',
    hourlyRate: 20,
    maxUsageTime: 5,
    lateFee: 10,
    locationLat: -30,
    locationLng: -45,
  }

  it('deve rejeitar um ownerId <= 0 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, ownerId: 0 })).toThrow();
  });
  
  it('deve aceitar um ownerId = 1 (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, ownerId: 1 })).not.toThrow();
  });

  it('deve rejeitar um model com 0 caracteres (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, model: '' })).toThrow();
  });

  it('deve aceitar um model com 1 caracter (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, model: 'b' })).not.toThrow();
  });

  it('deve rejeitar um description com 0 caracteres (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, description: '' })).toThrow();
  });

  it('deve aceitar um description com 1 caracter (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, description: 'd' })).not.toThrow();
  });

  it('deve rejeitar um size = "11" (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, size: '11' })).toThrow();
  });

  it('deve aceitar um size = "12" (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, size: '12' })).not.toThrow();
  });

  it('deve aceitar um size = "30" (limite superior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, size: '30' })).not.toThrow();
  });

  it('deve rejeitar um size = "31" (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, size: '31' })).toThrow();
  });

  it('deve rejeitar um size = "abc" (inválido - não numérico)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, size: 'abc' })).toThrow();
  });

  it('deve rejeitar um imagePath inválido', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, imagePath: 'url-invalida' })).toThrow();
  });

  it('deve aceitar um imagePath válido', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, imagePath: 'https://google.com' })).not.toThrow();
  });

  it('deve rejeitar um hourlyRate <= 0 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, hourlyRate: 0 })).toThrow();
  });

  it('deve aceitar um hourlyRate = 1 (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, hourlyRate: 1 })).not.toThrow();
  });

  it('deve rejeitar um maxUsageTime <= 0 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, maxUsageTime: 0 })).toThrow();
  });

  it('deve aceitar um maxUsageTime = 1 (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, maxUsageTime: 1 })).not.toThrow();
  });

  it('deve rejeitar um maxUsageTime = 1.5 (inválido - não inteiro)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, maxUsageTime: 1.5 })).toThrow();
  });

  it('deve rejeitar um lateFee < 0 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, lateFee: -1 })).toThrow();
  });

  it('deve aceitar um lateFee = 0 (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, lateFee: 0 })).not.toThrow();
  });

  it('deve rejeitar um locationLat < -90 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLat: -90.1 })).toThrow();
  });

  it('deve aceitar um locationLat = -90 (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLat: -90 })).not.toThrow();
  });

  it('deve aceitar um locationLat = 90 (limite superior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLat: 90 })).not.toThrow();
  });

  it('deve rejeitar um locationLat > 90 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLat: 90.1 })).toThrow();
  });

  it('deve rejeitar um locationLng < -180 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLng: -180.1 })).toThrow();
  });

  it('deve aceitar um locationLng = -180 (limite inferior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLng: -180 })).not.toThrow();
  });

  it('deve aceitar um locationLng = 180 (limite superior válido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLng: 180 })).not.toThrow();
  });

  it('deve rejeitar um locationLng > 180 (inválido)', () => {
    expect(() => BikeValidator.validate({ ...defaultBike, locationLng: 180.1 })).toThrow();
  });
})