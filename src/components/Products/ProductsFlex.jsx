import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../../utils';


const ProductsFlex = () => {
  const {products} =useLoaderData()
  
  return (
    <div className='mt-12 grid gap-y-8'>{
      products.map((card)=>{
        const {title,price,image,company} =card.attributes
        const dollarAmount=formatPrice(price)
        return (
          <Link to={`/singleProduct/${card.id}`} className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-base-100 shadow-xl hover:shadow-2xl duration-300 group' key={card.id}>
                    <figure className='px-4  pt-4'>
                        <img  src={image} alt={title} className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300'/>
                    </figure>

                    <div className="ml-0 sm:ml-16">
                        <h2 className='capitalize font-medium text-lg'>{title}</h2>
                        <h4 className='capitalize text-md text-neutral-content'>{company}</h4>
                    </div>
                    <p className="font-medium ml-0 sm:ml-auto text-lg">{dollarAmount}</p> 
         </Link>
        )
      })}</div>
  )
}

export default ProductsFlex