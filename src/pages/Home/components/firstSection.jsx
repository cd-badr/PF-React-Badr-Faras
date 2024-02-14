import './firstSection.scss'
import { Carousel } from 'flowbite-react';
import car1 from '../../../assets/img/master-slide-02.jpg'
import car2 from '../../../assets/img/master-slide-01.jpg'
import car3 from '../../../assets/img/master-slide-04.jpg'
import { Link } from 'react-router-dom';



export const FirstSection = () => {

    return (
        <>
            <div className="h-[70vh] w-full">
                <Carousel>
                    <div className="h-screen car1 flex flex-col justify-center items-center gap-5">
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
        </>
    );
}

