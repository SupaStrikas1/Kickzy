import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src="" className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quia consectetur assumenda dolor excepturi facere.
                </p>
            </div>

            <div className='mx-auto'>
                <p className='text-lg font-medium mb-3'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 text-center'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='mx-auto'>
                <p className='text-lg font-medium mb-3'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 text-center'>
                    <li>+91 75588534123</li>
                    <li>contact@kickzy.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ kickzy.com - All Rights Reserved</p>
        </div>
    </div>
    
  )
}

export default Footer