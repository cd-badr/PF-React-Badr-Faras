import './firstSection.scss'
import { Carousel, Tabs } from 'flowbite-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';





export const FirstSection = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // tabs

    const [test, setTest, products, setProducts] = useContext(MyContext)
    const [activeTab, setActiveTab] = useState('New');
    

    console.log(products);

    const filteredProducts = products.filter((product, index) => {
        if (activeTab === 'New') {
            return product.condition === 'new';
        } else if (activeTab === 'Old') {
            return product.condition === 'old';
        } else if (activeTab === 'Sale') {
            return product.condition === 'sale';
        }
        return true;
    }).slice(0, 4);;



    return (
        <>
            <div className="h-[60vh] w-full">
                <Carousel>
                    <div className="h-[100vh] car1 flex flex-col justify-center items-center gap-5">
                        <p className='text-2xl text-white'>Women Collection 2018</p>
                        <h1 className='text-6xl text-white'>NEW ARRIVALS</h1>
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-36 rounded-full flex justify-center items-center'>SHOP NOW</Link>
                    </div>
                    <div className="h-screen car2 flex flex-col justify-center items-center gap-5">
                        <p className='text-2xl text-white'>Women Collection 2018</p>
                        <h1 className='text-6xl text-white'>NEW ARRIVALS</h1>
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-36 rounded-full flex justify-center items-center'>SHOP NOW</Link>
                    </div>
                    <div className="h-screen  car3 flex flex-col justify-center items-center gap-5">
                        <p className='text-2xl text-white'>Women Collection 2018</p>
                        <h1 className='text-6xl text-white'>NEW ARRIVALS</h1>
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-36 rounded-full flex justify-center items-center'>SHOP NOW</Link>
                    </div>
                </Carousel>
            </div>
            {/* sec-2 */}
            <div className="flex flex-row justify-center p-5 gap-10">
                <div className="left flex flex-col gap-10">
                    <div className="l-img1 w-[350px] h-[450px] bg-cover bg-center flex justify-center items-end ">
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-48 rounded-sm flex justify-center items-center mb-6'>DRESSES</Link>
                    </div>
                    <div className="l-img2 w-[350px] h-[350px] bg-cover bg-center flex justify-center items-end">
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-48 rounded-sm flex justify-center items-center mb-6'>SUNGLASSES</Link>

                    </div>
                </div>

                <div className="center flex flex-col gap-10">
                    <div className="c-img1 w-[350px] h-[350px] bg-cover bg-center flex justify-center items-end">
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-48 rounded-sm flex justify-center items-center mb-6'>WATCHES</Link>

                    </div>
                    <div className="c-img2 w-[350px] h-[450px] bg-cover bg-center flex justify-center items-end">
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-48 rounded-sm flex justify-center items-center mb-6'>FOOTERWEAR</Link>

                    </div>
                </div>

                <div className="right flex flex-col gap-10">
                    <div className="r-img1 w-[350px] h-[450px] bg-cover bg-center flex justify-center items-end">
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-48 rounded-sm flex justify-center items-center mb-6'>BAGS</Link>

                    </div>
                    <div className="r-img2 w-[350px] h-[350px] bg-cover bg-center flex justify-center items-end">
                        <Link className='bg-white hover:bg-red-600 hover:text-white h-12 w-48 rounded-sm flex justify-center items-center mb-6'>ACCESSORIES</Link>

                    </div>
                </div>

            </div>

            {/* sec-3 */}
            {/* <div className="flex flex-col gap-10 p-10">
                <h1 className='text-4xl text-center font-bold opacity-80 '>FEATURED PRODUCTS</h1>

                <div className=" flex justify-center gap-3">
                    <Link onClick={() => ""} className='bg-slate-900 hover:bg-red-600 text-white h-12 w-36 rounded-sm flex justify-center items-center'>New</Link>
                    <Link onClick={() => ""} className='bg-slate-900 hover:bg-red-600 text-white h-12 w-36 rounded-sm flex justify-center items-center'>Old</Link>
                    <Link onClick={() => ""} className='bg-slate-900 hover:bg-red-600 text-white h-12 w-36 rounded-sm flex justify-center items-center'>Sale</Link>
                </div>

                {/* tabs */}

                {/* <div className="">

                    <div className="flex flex-row gap-10 justify-center">
                        <div className="flex flex-col">
                            <div className="car-1-1 w-[270px] h-[400px] bg-center bg-cover"></div>
                            <h1>Boxy3 T-Shirt with Roll Sleeve</h1>
                            <p><span className='line-through'>$30.30 </span><span className='text-red-600'>$20.20</span></p>
                        </div>
                        <div className="car-1-2 w-[270px] h-[400px] bg-center bg-cover"></div>
                        <div className="car-1-3 w-[270px] h-[400px] bg-center bg-cover"></div>
                        <div className="car-1-4 w-[270px] h-[400px] bg-center bg-cover"></div>
                    </div>

                    <div className="flex flex-row gap-10 justify-center">
                        <div className="car-2-1 w-[270px] h-[400px] bg-center bg-cover"></div>
                        <div className="car-2-2 w-[270px] h-[400px] bg-center bg-cover"></div>
                        <div className="car-2-3 w-[270px] h-[400px] bg-center bg-cover"></div>
                        <div className="car-2-4 w-[270px] h-[400px] bg-center bg-cover"></div>
                    </div>
                </div>

            </div>  */}



            <div className='w-[100% ] flex flex-col justify-center items-center'>
                <div className=' flex justify-center w-[30%] items-center font-bold text-4xl gap-10 mt-7 border-gray-700 border-2'>
                    <button onClick={() => setActiveTab('New')}>New</button>
                    <button onClick={() => setActiveTab('Old')}>Old</button>
                    <button onClick={() => setActiveTab('Sale')}>Sale</button>
                </div>
                <div className='w-[100%] p-24 flex gap-5 justify-center items-center '>
                    {filteredProducts.map(product => (
                        <div className='w-[20%]' key={product.name}>
                            <div className=' overflow-hidden'>
                                <img className=' hover:scale-110 relative transition delay-75' src={product.image} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Condition: {product.condition}</p>
                        </div>
                    ))}
                </div>
            </div>



            {/* sec-4 */}

            <div className=" bg-[#f0f0f0] flex justify-center gap-7 p-10">
                <div className=" sec-4-bg w-[550px] h-[400px] bg-center bg-cover text-white flex flex-col justify-center items-center gap-3">
                    <h1 className='text-3xl font-bold'>The Beauty</h1>
                    <h1 className='text-6xl font-bold'>LOOKBOOK</h1>
                    <Link className='hover:underline'>VIEW COLLECTION</Link>
                </div>
                <div className=" sec-4-bg-2 bg-white w-[550px] h-[400px] bg-center bg-cover flex flex-col  items-center gap-5 justify-end pb-5">
                    <h1>Boxy2 T-Shirt with Roll Sleeve</h1>
                    <p>$20.00</p>

                    <div className="flex flex-row gap-3">
                        <div className="h-16 w-16 flex flex-col justify-center items-center border-2 border-[#0002]">
                            <p>-1872</p>
                            <p className='opacity-50'>days</p>
                        </div>
                        <div className="h-16 w-16 flex flex-col justify-center items-center border-2 border-[#0002]">
                            <p>-11</p>
                            <p className='opacity-50'>hrs</p>
                        </div>
                        <div className="h-16 w-16 flex flex-col justify-center items-center border-2 border-[#0002]">
                            <p>-12</p>
                            <p className='opacity-50'>mins</p>
                        </div>
                        <div className="h-16 w-16 flex flex-col justify-center items-center border-2 border-[#0002]">
                            <p>-29</p>
                            <p className='opacity-50'>secs</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* sec-5 */}

            <div className="flex flex-col gap-10 p-10">
                <h1 className='text-4xl text-center font-bold opacity-80 '>OUR BLOG</h1>

                <div className="">

                    <div className="flex flex-row gap-10 justify-center">
                        <div className="flex flex-col gap-3">
                            <div className="sec-5-1 w-[400px] h-[300px] bg-center bg-cover"></div>
                            <h1>Black Friday Guide: Best Sales & Discount Codes</h1>

                            <p ><span className='opacity-50'>by </span><span className='opacity-70'>ashe-theme Admin</span> <span className='opacity-50'>on </span> <span className='opacity-70'>Dec 28,2017</span> </p>

                            <p className='opacity-50 w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="sec-5-2 w-[400px] h-[300px] bg-center bg-cover"></div>
                            <h1>Black Friday Guide: Best Sales & Discount Codes</h1>

                            <p ><span className='opacity-50'>by </span><span className='opacity-70'>ashe-theme Admin</span> <span className='opacity-50'>on </span> <span className='opacity-70'>Dec 28,2017</span> </p>

                            <p className='opacity-50 w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="sec-5-3 w-[400px] h-[300px] bg-center bg-cover"></div>
                            <h1>Black Friday Guide: Best Sales & Discount Codes</h1>

                            <p ><span className='opacity-50'>by </span><span className='opacity-70'>ashe-theme Admin</span> <span className='opacity-50'>on </span> <span className='opacity-70'>Dec 28,2017</span> </p>

                            <p className='opacity-50 w-[400px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* sec-6 */}

            <div className="flex flex-col gap-10 p-10">
                <h1 className='text-4xl text-center font-bold opacity-80 '>@ FOLLOW US ON INSTAGRAM</h1>

                {/* tabs */}

                <div className="pt-10">

                    <div className="flex flex-row  justify-center">

                        <div className=" w-full flex flex-col justify-center items-center p-5">
                            <p className='opacity-80 text-xl'>Free Delivery Worldwide</p>
                            <p className='opacity-50 text-xl'>Mirum est notare quam littera gothica</p>
                        </div>

                        <div className=" w-full flex flex-col justify-center items-center p-5 border-l-2 border-[#00000020]">
                            <p className='opacity-80 text-xl'>Free Delivery Worldwide</p>
                            <p className='opacity-50 text-xl'>Mirum est notare quam littera gothica</p>
                        </div>

                        <div className=" w-full flex flex-col justify-center items-center p-5 border-l-2 border-[#00000020]">
                            <p className='opacity-80 text-xl'>Free Delivery Worldwide</p>
                            <p className='opacity-50 text-xl'>Mirum est notare quam littera gothica</p>
                        </div>


                    </div>
                </div>

            </div>


        </>
    );
}

