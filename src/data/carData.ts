import { assets } from "../assets/asset";


export interface CarItem {
  id: string,
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
  isHotDeal?: boolean,
  color: string
  airconditioning?: boolean
  description: string
  listingType: string
    dealer: {
    _id: string
    name: string
    email?: string
  }
}


export const carData: CarItem[] = [
  {
    id: "1",
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
    dealer:{
      _id: "1",
      name: "Ola motors"
    },
    color: "black",
    airconditioning: true,
    listingType: "rent",
    description:
      "Well-maintained Toyota Camry with smooth automatic transmission, chilled AC, clean leather interior, fuel-efficient engine, and excellent comfort for city rides or business trips."
  },

  {
    id: "2",
    name: 'Honda Civic',
    brand: 'Honda',
    location: 'Lekki, Lagos',
    image: assets.car_1,
    pricing: {
      rent: 55000
    },
    rating: 4.5,
    year: 2020,
    fuel: 'petrol',
    transmission: 'automatic',
    seats: 5,
    color: "black",   
    dealer:{
      _id: "1",
      name: "Ola motors"
    },
    airconditioning: true,
    listingType: "rent",
    description:
      "Clean Honda Civic with sporty styling, responsive engine, premium interior, smooth handling, and modern safety features. Perfect for executive and daily drives."
  },

  {
    id: "3",
    name: 'Mercedes-Benz C-Class',
    brand: 'Honda',
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
   dealer:{
      _id: "1",
      name: "Ola motors"
    },
    isHotDeal: true,
    airconditioning: true,
    color: "black",
    listingType: "buy",
    description:
      "Luxury Mercedes-Benz C-Class featuring premium leather seats, advanced infotainment system, powerful performance, elegant exterior, and exceptional ride comfort."
  },

  {
    id: "4",
    name: 'BMW 3 Series',
    brand: 'BMW',
    location: 'Lagos, Nigeria',
    image: assets.car_1,
    pricing: {
      rent: 85000
    },
    rating: 4.5,
    year: 2020,
    fuel: 'petrol',
    transmission: 'automatic',
    seats: 5,
   dealer:{
      _id: "1",
      name: "Ola motors"
    },
    isHotDeal: true,
    color: "black",
    airconditioning: true,
    listingType: "rent",
    description:
      "Powerful BMW 3 Series with sporty handling, luxurious cabin, advanced driving technology, smooth acceleration, and premium comfort for business or leisure trips."
  },

  {
    id: "5",
    name: 'Chevrolet Malibu',
    brand: 'Chevrolet',
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
      dealer:{
      _id: "1",
      name: "Ola motors"
    },
    isHotDeal: true,
    color: "black",
    airconditioning: true,
    listingType: "rent",
    description:
      "Spacious Chevrolet Malibu with elegant design, comfortable seating, fuel-efficient performance, modern dashboard features, and smooth driving experience."
  },

  {
    id: "6",
    name: 'Hyundai Elantra',
    brand: 'Hyundai',
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
     dealer:{
      _id: "1",
      name: "Ola motors"
    },
    isHotDeal: true,
    color: "black",
    airconditioning: true,
    listingType: "rent",
    description:
      "Reliable Hyundai Elantra with stylish exterior, clean interior, efficient fuel economy, smooth transmission, and excellent comfort for personal or corporate use."
  }
]