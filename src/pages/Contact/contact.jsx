import { Link } from 'react-router-dom';
import './contact.scss';

export const Contact = () => {
    return (
        <>
            <div className="bg-contact flex justify-center items-center">
                <h1 className='text-white font-bold text-5xl'>CONTACT</h1>
            </div>
            <div className="p-10 flex justify-center gap-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.697308120238!2d-83.71647378827025!3d42.30632377107784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cad2793cbde75%3A0xc15614c5389977eb!2s2300%20Traverwood%20Dr%2C%20Ann%20Arbor%2C%20MI%2048105%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sma!4v1707917477738!5m2!1sfr!2sma" width="550" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className="sm:w-[40vw] flex flex-col gap-5">
                    <h1 className='text-3xl '>Send us your message</h1>

                    <div className="flex flex-col w-full gap-5 ">
                        <input className='border-[#00000025] h-14' type="text" placeholder='Name' />
                        <input className='border-[#00000025] h-14' type="email" placeholder='Email' />
                        <input className='border-[#00000025] h-14' type="number" placeholder='Number' />
                        <textarea className='border-[#00000025] h-28' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    </div>

                    <div className="">
                        <Link className='bg-slate-900 hover:bg-red-600 text-white h-12 w-36 rounded-full flex justify-center items-center'>SEND</Link>
                    </div>

                </div>
            </div>
        </>
    );
}