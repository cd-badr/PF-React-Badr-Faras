import './about.scss'

export const About = () => {
    return (
        <>
            <div className="bg-contact flex justify-center items-center">
                <h1 className='text-white font-bold text-5xl'>CONTACT</h1>
            </div>

            <div className="flex flex-row p-10 justify-center gap-10">

                <div className="about-img"></div>

                <div className="flex flex-col gap-5 w-[50vw]">
                    <h1 className='text-3xl'>Our story</h1>
                    <p className='opacity-55'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
                        Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
                        dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
                        porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum
                        laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet.
                        Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
                        turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
                        Aliquam erat volutpat. Donec iaculis lectus a
                        arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum
                        rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum,
                        turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula
                        ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>

                    <div className="flex flex-col p-5 border-l-4 border-[#00000022] gap-5">
                        <p className='opacity-55'>Creativity is just connecting things. When you ask creative people how they did something,
                            they feel a little guilty because they didn't really do it, they just saw something.
                            It seemed obvious to them after a while.</p>

                        <p className='opacity-70'>- Steve Job’s</p>
                    </div>
                </div>
            </div>
        </>
    );
}