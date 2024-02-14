import './firstSection.scss'
import { Carousel } from 'flowbite-react';
import car1 from '../../../assets/img/master-slide-02.jpg'
import car2 from '../../../assets/img/master-slide-01.jpg'
import car3 from '../../../assets/img/master-slide-04.jpg'



export const FirstSection = () => {

    return (
        <>
            <div className="h-[70vh] w-full">
                <Carousel>
                    <div className="h-screen car1"></div>
                    <div className="h-screen car2"></div>
                    <div className="h-screen  car3"></div>
                </Carousel>
            </div>
        </>
    );
}

