import React, { useContext, useState } from 'react';
import './product.scss'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';



export const Productss = () => {
    const [test, setTest, products, setProducts] = useContext(MyContext)
    const { name } = useParams()

    const productFiter = products.filter((products) => products.name == name )
    const [count, setCount] = useState(0)

    const navigate = useNavigate()

    return (
        <>

            <div className="flex flex-row gap-10 justify-center p-10">


                {
                    productFiter.map((element, index) =>
                        <>
                            <div className="w-[400px]">
                                <img src={element.image} alt="" />
                            </div>

                        </>
                    )
                }


                <div className="w-[30vw] flex flex-col gap-3">
                    <h1  className='text-2xl opacity-80'>Boxy T-Shirt with Roll Sleeve Detail</h1>
                    <h1 className='text-3xl opacity-70'>$20.00</h1>
                    <p className='opacity-40'>Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu....</p>

                    <div className="flex flex-row gap-3 py-10">
                        <div className="h-12 w-14 flex flex-col justify-center items-center border-[1px] rounded-sm border-red-600">
                            <p className='opacity-80 '>S</p>
                        </div>
                        <div className="h-12 w-14 flex flex-col justify-center items-center border-[1px] rounded-sm border-red-600">
                            <p className='opacity-80 '>M</p>
                        </div>
                        <div className="h-12 w-14 flex flex-col justify-center items-center border-[1px] rounded-sm border-red-600">
                            <p className='opacity-80 '>L</p>
                        </div>
                        <div className="h-12 w-14 flex flex-col justify-center items-center border-[1px] rounded-sm border-red-600">
                            <p className='opacity-80 '>XL</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3">
                        <div className="flex flex-row border-2 border-stone-400 w-fit">
                            <button className='bg-stone-400 p-3 w-14' onClick={() => setCount(count - 1)} disabled={count === 0} >-</button>
                            <h1 className='p-3 w-10 text-center'>{count}</h1>
                            <button className='bg-stone-400 p-3 w-14' onClick={() => setCount(count + 1)}>+</button>
                        </div>

                        <Link className='bg-slate-900 hover:bg-red-600 text-white h-12 w-36 rounded-full flex justify-center items-center'>ADD TO CART</Link>

                    </div>

                </div>
            </div>

        </>
    );
};

