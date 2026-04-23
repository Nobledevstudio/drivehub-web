import { carData } from "../data/carData"
import Car from "./Car"

const FeaturedCars = () => {
  return (
     <section className='w-full py-20 lg:py-28'>
             
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Featured <span className="text-amber-500">Cars</span>
          </h2>

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            Handpicked vehicles from top brands — all verified and ready for you to drive.
          </p>
        </div>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {carData.map((car)=>(
              <Car key={car.id} car={car}/>
            ))}
        </div>
     </section>
  )
}

export default FeaturedCars