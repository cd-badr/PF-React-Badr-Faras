import './firstSection.scss'
import { Carousel } from 'flowbite-react';
import car1 from '../../../assets/img/master-slide-02.jpg'
import car2 from '../../../assets/img/master-slide-01.jpg'
import car3 from '../../../assets/img/master-slide-04.jpg'
import { Link } from 'react-router-dom';



export const FirstSection = () => {

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
        </>
    );
}

