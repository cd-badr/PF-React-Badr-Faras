import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export const Footerr = () => {
  return (
    <Footer bgDark>
      <div className="w-full bg-[#f0f0f0]">
        <div className=" grid w-full grid-cols-2 gap-4 px-6 py-8 md:grid-cols-5">
          <div>
            <Footer.Title className='text-black' title="CET IN TOUCH" />
            <Footer.LinkGroup className='' col>
              <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start ">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title className='text-black' title="CATEGORIES" />
            <Footer.LinkGroup className='' col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-black' title="LINKS" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-black' title="HELP" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className='text-black' title="NEWSLETTER" />
            <Footer.LinkGroup col>
              <input className=' outline-none border-r-transparent border-l-transparent border-t-transparent border-b-2 border-[#0000008c] focus:border-[#f43c3c8c] focus:border-transparent bg-transparent' type="email" placeholder='Email Adress' />
              <Footer.Link href="#">SUBSCRIBE</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full px-4 py-6 sm:flex sm:items-center justify-center">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />

        </div>
      </div>
    </Footer>
  );
}