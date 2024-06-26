import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla  mt-12  border rounded-3xl h-[50vh]  w-[450px]  " ref={emblaRef}>
      <div className="embla__container h-full w-full">
        <div className="embla__slide">
        <img className=" w-full h-full rounded-3xl  object-cover" src='https://images.pexels.com/photos/205416/pexels-photo-205416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        </div>
        <div className="embla__slide">Slide 2</div>
       
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}
