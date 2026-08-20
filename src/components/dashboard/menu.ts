import { CalendarCheck, CalendarDays, Car, ClipboardCheck, CreditCard, LayoutDashboard, Settings, ShoppingBag, ShoppingCart, UserCircle, Users } from "lucide-react";

export const adminMenu = [
     {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    name: "Vehicles",
    path: "/admin/vehicles",
    icon: Car,
  },
  {
    name: "Rentals",
    path: "/admin/rentals",
    icon: CalendarDays,
  },
  {
    name: "Purchases",
    path: "/admin/purchases",
    icon: ShoppingCart,
  },
  {
    name: "Inspection Requests",
    path: "/admin/inspections",
    icon: ClipboardCheck,
  },
  {
    name: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
]
export const dealerMenu = [
  {
    name: "Dashboard",
    path: "/dealer/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Vehicles",
    path: "/dealer/vehicles",
    icon: Car,
  },
  {
    name: "Bookings",
    path: "/dealer/bookings",
    icon: CalendarCheck,
  },
  {
    name: "Purchases",
    path: "/dealer/purchases",
    icon: ShoppingBag,
  },
    {
    name: "Payments",
    path: "/dealer/payments",
    icon: CreditCard,
  },
  {
    name: "Inspection Requests",
    path: "/dealer/inspections",
    icon: ClipboardCheck,
  },
  {
    name: "Profile",
    path: "/dealer/profile",
    icon: UserCircle,
  },
];
export const customerMenu = [
  {
    name: "Dashboard",
    path: "/customer/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Browse Vehicles",
    path: "/customer/vehicles",
    icon: Car,
  },
  {
    name: "My Rentals",
    path: "/customer/rentals",
    icon: CalendarDays,
  },
  {
    name: "My Purchases",
    path: "/customer/purchases",
    icon: ShoppingCart,
  },
  {
    name: "Inspection Requests",
    path: "/customer/inspections",
    icon: ClipboardCheck,
  },
  {
    name: "Payments",
    path: "/customer/payments",
    icon: CreditCard,
  },
  {
    name: "Profile",
    path: "/customer/profile",
    icon: UserCircle,
  },
];