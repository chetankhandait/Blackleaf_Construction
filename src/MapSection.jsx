import React from 'react'

const MapSection = () => {
  return (
    <div className="bg-[url('https://richlanddubai.com/wp-content/uploads/2017/05/map.jpg')]  w-full  ">
      <div className='flex flex-col items-center gap-10 '>

      <h3>
      DOWNTOWN
      </h3>
      <p className='w-2/3 text-center'>
      Described as 'The Centre of Now,' Downtown Dubai is the flagship mega-
development by Emaar Properties. Located at its centre is Burj Khalifa,
the world's tallest building. The Dubai Mall, the world's largest shopping
and entertainment destination, and The Dubai Fountain, the world's
tallest performing fountain, add to development's list of must see
attractions while Souk A1 Bahar, an Arabesque shopping and dining out
destination, further broadens its appeal to visitors. The Opera District,
highlighted by the majestic Dubai Opera, a 2,000-seat multi-format
events venue, luxury hotels and residences, is a brand-new addition.
Downtown Dubai is a thriving city hub with a unique mix of aesthetically
designed residential towers and commercial precincts.
      </p>
      <button className='uppercase btn'>
        See on the map
      </button>
      </div>
    </div>
  )
}

export default MapSection
