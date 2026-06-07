import { Building2, CreditCard, HandCoins, Lock, ShieldCheck, ShieldCheckIcon, Smartphone } from "lucide-react"
import { assets } from "../assets/asset"
import { useState } from "react"

interface paymentStatsProps {
    icon: React.ElementType,
    title: string,
    subtitle: string,
    image?: string
    buttonText: string
}


const CheckOutLeft = () => {

    const [paymentStatCard, setPaymentStatCard] = useState<number | null>(null)


    const paymentstats: paymentStatsProps[] = [
        { icon: CreditCard, title: "Card payment", subtitle: "pay securely with your debit or credit card", image: assets.visa_mastercard, buttonText: "Pay with Card" },
        { icon: Building2, title: "Bank Transfer", subtitle: "Transfer directly from bank", buttonText: "Get Bank Details", },
        { icon: HandCoins, title: "Pay on pickup", subtitle: "pay when u pick the drive", buttonText: "Continue", },
        { icon: Smartphone, title: "USSD Payment", subtitle: "pay securely using USSD", buttonText: "Generate USSD Code", }
    ]

    return (
        <div>
            <h2 className="text-3xl font-semibold">Payment </h2>
            <p className="text-sm text-gray-600 my-2">Select Peferred Method</p>
            <div className="border border-gray-200 rounded-2xl p-4 mt-2">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-amber-50 text-amber-500 p-2 rounded-full inline-flex items-center justify-center">
                        <Lock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-md font-semibold">Payment Method</h3>
                        <p>Choose a payment Method</p>
                    </div>
                </div>
                <div>
                    {paymentstats.map((stat, index) => (
                        <div onClick={() => setPaymentStatCard(index)} key={index} className={`flex justify-between mb-4 px-4 py-6 rounded-lg cursor-pointer
                            ${paymentStatCard === index
                                ? "border-2 border-amber-500 bg-amber-50"
                                : "border border-gray-200 bg-white"
                            }`}>
                            <div className="flex justify-start items-start gap-3">
                                <stat.icon className='w-8 h-8' />
                                <div className="flex flex-col gap-0.5">
                                    <h2 className="text-md font-semibold">{stat.title}</h2>
                                    <p className="text-sm text-gray-900">{stat.subtitle}</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                {stat.image && (
                                    <img
                                        src={stat.image}
                                        alt="Visa and Mastercard"
                                        className="hidden md:block w-20 h-auto"
                                    />
                                )}
                                <div className="w-5 h-5 rounded-full border-2 border-amber-500 flex items-center justify-center">
                                    {paymentStatCard === index && (
                                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-start items-center gap-2 px-2 py-4 border border-gray-200 rounded-lg">
                        <ShieldCheckIcon className="w-8 h-8" />
                        <div>
                            <h2 className="font-semibold">Secure payment</h2>
                            <p className="text-sm text-gray-700">Your payment information is encrypted and secure</p>
                        </div>
                    </div>


                    <button className="flex justify-center items-center gap-2 w-full mt-4 py-3 rounded-lg bg-amber-500 text-white font-semibold cursor-pointer"
                        disabled={paymentStatCard === null}
                    >
                        {paymentStatCard === 0 && (
                            <ShieldCheck className="w-5 h-5" />
                        )}
                        {paymentStatCard !== null
                            ? paymentstats[paymentStatCard].buttonText
                            : "Select a payment method"}
                    </button>
                    <p className="text-xs text-center mt-4 text-gray-600 flex flex-wrap justify-center gap-1 py-4">
                        <ShieldCheck className="w-4 h-4" />
                        By proceeding you agree to
                        <span className="text-amber-500">Terms & Conditions</span>
                        and
                        <span className="text-amber-500">Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CheckOutLeft