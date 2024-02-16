import React, { useContext } from 'react';
import { MyContext } from '../../../utils/contextProvider';

export const FirstSectionshop = () => {
    const [test, setTest, products, setProducts] = useContext(MyContext)
    return (
        <>
            <div className="bg-contact flex justify-center items-center">
                <h1 className='text-white font-bold text-5xl'>PRODUCTS</h1>
            </div>

            {/* sec-2 */}

            <div className="flex flex-row justify-between p-24">

                <div className="w-[30vw h-full] flex flex-col gap-10">
                    <div className="flex flex-col  gap-2">
                        <h1 className='text-2xl font-extrabold opacity-80'>Categories</h1>
                        <p className='text-lg opacity-40'>Best Seller (8 items)</p>
                        <p className='text-lg opacity-40'>Featured (8 items)</p>
                        <p className='text-lg opacity-40'>Men (8 items)</p>
                        <p className='text-lg opacity-40'>Women (8 items)</p>
                    </div>

                    <div className="flex flex-col  gap-2">
                        <h1 className='text-2xl font-extrabold opacity-80'>Prices</h1>
                        <label className='flex flex-row gap-2 items-center'>
                        <input id='test1' name='test' type="radio" />0-20
                        </label>
                        
                        <label className='flex flex-row gap-2 '>
                        <input id='test2' name='test' type="radio" />20-40
                        </label>
                    </div>
                </div>

                <div className='w-[70vw]  flex flex-wrap flex-row gap-5 justify-center items-center '>

                    {
                        products.map((element, index) =>
                            <>
                                <div className='w-[250px]' key={element.name}>
                                    <div className=' overflow-hidden'>
                                        <img className=' hover:scale-110 relative transition delay-75' src={element.image} alt={element.name} />
                                    </div>
                                    <h3>{element.name}</h3>
                                    <p>Price: ${element.price}</p>
                                    <p>Condition: {element.condition}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}
