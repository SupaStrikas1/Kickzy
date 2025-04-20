import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({_id,image,name,price}) => {

  const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer overflow-hidden' to={`/product/${_id}`}>
        <div className='overflow-hidden sm:h-[130px] h-[170px] flex items-center justify-center'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name.slice(0,70)}...</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem