import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("Men");
    const [subCategory, setSubCategory] = useState("Casuals");
    const [bestSeller, setBestSeller] = useState(false);
    const [sizes, setSizes] = useState([]);

    const onSubmitHandler = async(e)=>{
        e.preventDefault();

        try {
            const formData = new FormData()

            formData.append("name",name)
            formData.append("description",description)
            formData.append("price",price)
            formData.append("category",category)
            formData.append("subCategory",subCategory)
            formData.append("bestSeller",bestSeller)
            formData.append("sizes",JSON.stringify(sizes))

            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)

            const response = await axios.post(backendUrl+'/api/product/add',formData,{headers:{token}})
            
            if(response.data.success){
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setPrice('')
                setSizes([])
            }else{
                toast.error(response.data.message)
            }
            

        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3' action="">
        <div>
            <p className='mb-2'>Upload Image</p>

            <div className='flex gap-2'>
                <label htmlFor="image1">
                    <img className='w-28 border border-gray-400 cursor-pointer' src={`${!image1 ? 'https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg' : URL.createObjectURL(image1)}`} alt="" />
                    <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden />
                </label>
                <label htmlFor="image2">
                    <img className='w-28 border border-gray-400 cursor-pointer' src={`${!image2 ? 'https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg' : URL.createObjectURL(image2)}`} alt="" />
                    <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden />
                </label>
                <label htmlFor="image3">
                    <img className='w-28 border border-gray-400 cursor-pointer' src={`${!image3 ? 'https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg' : URL.createObjectURL(image3)}`} alt="" />
                    <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden />
                </label>
                <label htmlFor="image4">
                    <img className='w-28 border border-gray-400 cursor-pointer' src={`${!image4 ? 'https://t4.ftcdn.net/jpg/01/64/16/59/360_F_164165971_ELxPPwdwHYEhg4vZ3F4Ej7OmZVzqq4Ov.jpg' : URL.createObjectURL(image4)}`} alt="" />
                    <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden />
                </label>
            </div>
        </div>

        <div className='w-full'>
            <p className='mb-2'>Product Name</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Product Name' required/>
        </div>

        <div className='w-full'>
            <p className='mb-2'>Product Description</p>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' name="" id="" type='text' placeholder='Write the description'></textarea>
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
                <p className='mb-2'>Product Category</p>
                <select onChange={(e)=>setCategory(e.target.value)} className='p-3 py-2 w-full sm:w-[120px]' name="" id="">
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
            </div>

            <div>
                <p className='mb-2'>Sub Category</p>
                <select onChange={(e)=>setSubCategory(e.target.value)} className='p-3 py-2 w-full sm:w-[120px]' name="" id="">
                    <option value="Casuals">Casuals</option>
                    <option value="Sports">Sports</option>
                </select>
            </div>

            <div>
                <p className='mb-2'>Product Price</p>
                <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25.00' />
            </div>

        </div>

        <div>
            <p className='mb-2'>Product Sizes</p>
            <div className='flex gap-3'>
                <div onClick={()=>setSizes(prev=>prev.includes("2 UK") ? prev.filter(item=>item!=="2 UK") : [...prev,"2 UK"])}>
                    <p className={`${sizes.includes('2 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>2 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("3 UK") ? prev.filter(item=>item!=="3 UK") : [...prev,"3 UK"])}>
                    <p className={`${sizes.includes('3 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>3 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("4 UK") ? prev.filter(item=>item!=="4 UK") : [...prev,"4 UK"])}>
                    <p className={`${sizes.includes('4 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>4 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("5 UK") ? prev.filter(item=>item!=="5 UK") : [...prev,"5 UK"])}>
                    <p className={`${sizes.includes('5 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>5 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("6 UK") ? prev.filter(item=>item!=="6 UK") : [...prev,"6 UK"])}>
                    <p className={`${sizes.includes('6 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>6 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("7 UK") ? prev.filter(item=>item!=="7 UK") : [...prev,"7 UK"])}>
                    <p className={`${sizes.includes('7 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>7 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("8 UK") ? prev.filter(item=>item!=="8 UK") : [...prev,"8 UK"])}>
                    <p className={`${sizes.includes('8 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>8 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("9 UK") ? prev.filter(item=>item!=="9 UK") : [...prev,"9 UK"])}>
                    <p className={`${sizes.includes('9 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>9 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("10 UK") ? prev.filter(item=>item!=="10 UK") : [...prev,"10 UK"])}>
                    <p className={`${sizes.includes('10 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>10 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("11 UK") ? prev.filter(item=>item!=="11 UK") : [...prev,"11 UK"])}>
                    <p className={`${sizes.includes('11 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>11 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("12 UK") ? prev.filter(item=>item!=="12 UK") : [...prev,"12 UK"])}>
                    <p className={`${sizes.includes('12 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>12 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("13 UK") ? prev.filter(item=>item!=="13 UK") : [...prev,"13 UK"])}>
                    <p className={`${sizes.includes('13 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>13 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("14 UK") ? prev.filter(item=>item!=="14 UK") : [...prev,"14 UK"])}>
                    <p className={`${sizes.includes('14 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>14 UK</p>
                </div>

                <div onClick={()=>setSizes(prev=>prev.includes("15 UK") ? prev.filter(item=>item!=="15 UK") : [...prev,"15 UK"])}>
                    <p className={`${sizes.includes('15 UK') ? 'bg-orange-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>15 UK</p>
                </div>

            </div>
        </div>

        <div className='mt-2 gap-2 flex'>
            <input onChange={()=>setBestSeller(prev=>!prev)} checked={bestSeller} type="checkbox" id='bestSeller' />
            <label className='cursor-pointer' htmlFor="bestSeller">Add to Best Seller</label>
        </div>

        <button type='submit' className='w-28 bg-black text-white py-3 mt-4'>ADD</button>

    </form>
  )
}

export default Add