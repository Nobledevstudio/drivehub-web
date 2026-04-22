import { assets } from "../assets/asset"

export interface WhyChooseUsItem {
  img: string
  title: string
  description: string
}

export const WhyChooseUs: WhyChooseUsItem[] = [
  {
    img: assets.verified_listings,
    title: "Verified Listings",
    description:
      "Every car is carefully verified to ensure authenticity, accurate details, and a safe buying or renting experience.",
  },
  {
    img: assets.easy_booking,
    title: "Easy Booking",
    description:
      "Book your car in minutes with a simple and seamless process designed for speed and convenience.",
  },
  {
    img: assets.trusted_sellers,
    title: "Trusted Dealers",
    description:
      "Deal with verified and reputable dealers to ensure a secure and reliable transaction.",
  },
  {
    img: assets.nationwide_access,
    title: "Nationwide Access",
    description:
      "Access our network of verified vehicles and sellers across the country for a wide range of options.",
  },
]