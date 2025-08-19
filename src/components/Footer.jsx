import React from 'react'
import { FaRegPaperPlane, FaInstagram, FaFacebook, FaTiktok , FaLine } from 'react-icons/fa'
import { AiFillAndroid, AiFillPhone, AiFillPushpin } from 'react-icons/ai'

function Footer() {
  return (
    <div className='bg-cyan-900 py-20'> 
        <div className='container mx-auto max-w-[1320px]'>
            <div className='grid grid-cols-1 m-10 md:m-0 md:grid-cols-2'>
               <div>
                    <a href="#" className="text-blue-800 mb-4 md:mb-0">
                        {/* <img
                        src="/NavbarLOGO_2.png"  
                        alt="Logo"
                        className="h-15 w-auto" 
                        /> */}
                    </a>
                    <p className='my-10 text-white'>คานฮา เวลเนส สหคลินิก <br />
                        เลขใบอนุญาต 10110004265 <br />
                        หนังสืออนุมัตโฆษณาเกี่ยวกับสถานพยาบาล <br />
                        ฆสพ.สบส ๒๓๐/๒๕๖๘t</p>
                    <ul className='flex md:flex-row'>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href="https://www.instagram.com/kanhawellnessclinic"target="_blank"><FaInstagram /></a></li>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href="https://www.facebook.com/Kanhawellnessclinic"target="_blank"><FaFacebook /></a></li>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href="https://www.tiktok.com/@kanhawellness?is_from_webapp=1&sender_device=pc"target="_blank"><FaTiktok /></a></li>
                        <li className='mr-[1rem]'><a className='text-white text-[1.5rem]' href="https://line.me/R/ti/p/@395kepum?from=page&searchId=395kepum"target="_blank"><FaLine /></a></li>
                    </ul>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        {/* <h4 className='text-[1.25rem] text-white font-semibold'>
                            lorem
                        </h4>
                        <ul className='flex flex-col mb-5'>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                        </ul> */}
                    </div>

                    <div>
                        <h4 className='text-[1.25rem] text-white font-semibold' >
                            Contact
                        </h4>
                        <ul>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">1177 ห้อง 203 204 ถ. พหลโยธิน พญาไท เขตพญาไท , Bangkok, Thailand, Bangkok<AiFillPhone /></a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">+66 65 291 3175 <AiFillPushpin /></a></li>
                            {/* <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li>
                            <li className='mt-2'><a className='text-white text-[0.875rem]' href="#">About us</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-[1.25rem] text-white font-semibold'>Email</h4>
                        <form action="" className='flex mt-5'>
                        <div className='relative'>
                            <input type="text" className='bg-white/20 text-white text-[0.875rem] px-4 py-2 rounded-md' placeholder='Your email address' />
                            <button className='absolute top-[10px] right-[10px] cursor-pointer' type='submit'><FaRegPaperPlane className='text-white'/> </button>
                        </div>
                        </form>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Footer