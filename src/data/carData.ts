export interface CarItem {
  _id: string;
  brand: string;
  model: string;
  year: number;
  description: string;
  images: {
    url: string;
    public_id: string;
  }[];
  type?: string;
  color: string;
  location: string;
  fuel: "petrol" | "diesel" | "electric" | "hybrid";
  transmission: "automatic" | "manual";
  seats?: number;
  airConditioning?: boolean;
  rating: number;
  isHotDeal?: boolean;
  pricing?: {
    rent?: number;
    buy?: number;
  };
  listingType: "buy" | "rent" | "both";
  dealer: {
    _id: string;
    name: string;
    email?: string;
    phone?: string;
  };
  status: "available" | "reserved" | "rented" | "sold";
  approvalStatus: "pending" | "approved" | "rejected";
  createdAt: string;
  updatedAt: string;
}

export const carData: CarItem[] = [
   {
  _id: "1",
  brand: "Toyota",
  model: "Camry",
  type:" Sedan",
  location: "Lagos",
  images: [
    {
      url: "https://res.cloudinary.com/drd6sy1dx/image/upload/v1784377017/drivehub/cars/m8yla3wtkcwxxowycesj.jpg",
      public_id: "drivehub/cars/toyota-camry",
    },
  ],
  pricing: {
    rent: 45000,
  },
  rating: 4.5,
  year: 2020,
  fuel: "petrol",
  transmission: "automatic",
  seats: 5,
  dealer: {
    _id: "1",
    name: "Ola Motors",
  },
  color: "black",
  airConditioning: true,
  listingType: "rent",
  status: "available",
  approvalStatus: "approved",
  isHotDeal: false,
  description:"Well-maintained Toyota Camry with smooth automatic transmission, chilled AC, clean leather interior, fuel-efficient engine, and excellent comfort for city rides or business trips.",
  createdAt: "2026-07-18T12:00:00.000Z",
  updatedAt: "2026-07-18T12:00:00.000Z",
  },
   {
  _id: "2",
  brand: "Toyota",
  model: "Camry",
  type:" Sedan",
  location: "Lagos",
  images: [
    {
      url: "https://res.cloudinary.com/drd6sy1dx/image/upload/v1784376841/drivehub/cars/q7ezjfxvh5lvy3onub5n.jpg",
      public_id: "drivehub/cars/toyota-camry",
    },
  ],
  pricing: {
    rent: 45000,
  },
  rating: 4.5,
  year: 2020,
  fuel: "petrol",
  transmission: "automatic",
  seats: 5,
  dealer: {
    _id: "1",
    name: "Ola Motors",
  },
  color: "black",
  airConditioning: true,
  listingType: "rent",
  status: "available",
  approvalStatus: "approved",
  isHotDeal: false,
  description:"Well-maintained Toyota Camry with smooth automatic transmission, chilled AC, clean leather interior, fuel-efficient engine, and excellent comfort for city rides or business trips.",
  createdAt: "2026-07-18T12:00:00.000Z",
  updatedAt: "2026-07-18T12:00:00.000Z",
  },
   {
  _id: "3",
  brand: "Honda",
  model: "Camry",
  type:" Sedan",
  location: "Lagos",
  images: [
    {
      url: "https://res.cloudinary.com/drd6sy1dx/image/upload/v1784376213/drivehub/cars/pmz2kzlvp7dfg7b4dema.webp",
      public_id: "drivehub/cars/toyota-camry",
    },
  ],
  pricing: {
    buy: 45000,
  },
  rating: 4.5,
  year: 2020,
  fuel: "petrol",
  transmission: "automatic",
  seats: 5,
  dealer: {
    _id: "1",
    name: "Ola Motors",
  },
  color: "black",
  airConditioning: true,
  listingType: "rent",
  status: "available",
  approvalStatus: "approved",
  isHotDeal: false,
  description:"Well-maintained Toyota Camry with smooth automatic transmission, chilled AC, clean leather interior, fuel-efficient engine, and excellent comfort for city rides or business trips.",
  createdAt: "2026-07-18T12:00:00.000Z",
  updatedAt: "2026-07-18T12:00:00.000Z",
  }
]


