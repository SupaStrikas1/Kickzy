import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src="" alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quibusdam!</p>
          <p className='text-gray-500'>Tel: (+0484) 234-567 <br /> Email: uuvug@ihbi.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Kickzy</p>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, vero.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact