import { assets } from "../assets/asset";


export interface CarItem {
  id: number
  name: string
  brand: string
  location: string
  image: string
  rating: number
  year: number
  pricing: {
    rent?: number
    buy?: number
  }

  fuel: 'petrol' | 'diesel' | 'electric' | 'hybrid'
  transmission: 'automatic' | 'manual'
  seats: number
  dealerId: number
}

export const carData: CarItem[] = [
      {
        id: 1,
        name: 'Toyota Camry',
        brand: 'Toyota',
        location: 'Lagos',
        image: assets.car_1,
        pricing: {
          rent: 45000
        },
        rating: 4.5,
        year: 2020,
        fuel: 'petrol',
        transmission: 'automatic',
        seats: 5,
        dealerId: 1
      },
      {
        id: 2,
        name: 'Honda Civic',
        brand: 'Honda',
        location: 'New York',
        image: assets.car_1,
        pricing: {
          rent: 55000
        },
        rating: 4.5,
        year: 2020,
        fuel: 'petrol',
        transmission: 'automatic',
        seats: 5,
        dealerId: 1
      },
      {
        id: 3,
        name: 'Mercedes-Benz C-Class',
        brand: 'Mercedes-Benz',
        location: 'New York',
        image: assets.car_1,
        pricing: {
          buy: 75000000
        },
        rating: 4.5,
        year: 2020,
        fuel: 'petrol',
        transmission: 'automatic',
        seats: 5,
        dealerId: 1
      },
      {
        id: 4,
        name: 'BMW 3 Series',
        brand: 'BMW',
        location: 'Lagos',
        image: assets.car_1,
        pricing: {
          rent: 85000
        },
        rating: 4.5,
        year: 2020,
        fuel: 'petrol',
        transmission: 'automatic',
        seats: 5,
        dealerId: 1
      }
]