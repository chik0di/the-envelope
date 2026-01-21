import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { SiGithub } from "react-icons/si"
import { SiCredly } from "react-icons/si"
import { FaKaggle, FaLinkedinIn } from "react-icons/fa6"
import { SiMedium } from "react-icons/si"
import { MdOutlineViewAgenda } from "react-icons/md"
import { SiKaggle } from "react-icons/si";
import Link from "next/link"

export default function Aside() {
    return (
        <main className="h-[37rem] bg-white dark:bg-slate-700 w-80 rounded-3xl lg:flex flex-col justify-center items-center px-5 hidden">
            {/* Image */}
            <div className="pimage w-40 h-40 bg-[#FF9C1A] -mt-32 rounded-2xl" style={{ backgroundImage: 'url("/me.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            </div>

            {/* Text */}
            <h1 className={`text-3xl font-bold mt-3`}>Chikodi Obu</h1>
            <p className="text-sm mt-5 text-gray-400">Data and Analytics Engineer</p>

            <div className="icons flex gap-3 mt-3">
                <Link href={'https://github.com/chik0di'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiGithub size={16} className='text-black'/>
                </Link>
                <Link href={'https://linkedin.com/in/chikodi-obu-278b5b264'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FaLinkedinIn size={16} className='text-sky-600' />
                </Link>
                <Link href={'https://www.kaggle.com/chik0di'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FaKaggle size={16} className='text-blue-900' />
                </Link>
                <Link href={'https://medium.com/@chik0di'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiMedium size={16} className='text-black' />
                </Link>
                <Link href={'https://www.credly.com/users/chikodi-obu/badges#credly'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiCredly size={20} className='text-black' />
                </Link>
                
            </div>

            <div className="bg-[#F2F7FC] dark:bg-slate-900 w-full mt-4 p-5 flex flex-col items-start rounded-2xl divide-y">
                <div className="py-4 flex justify-center items-center gap-4">
                    <FiPhone className='text-red-500' />
                    <div className="text-sm">
                        <p className="text-xs text-gray-500">Phone</p>
                        <p>+234 808 926 6214</p>
                    </div>
                </div>

                <div className="py-4 flex justify-center items-center gap-4">
                    <FiMail className='text-orange-500' />
                    <div className="text-sm">
                        <p className="text-xs text-gray-500">Email</p>
                        <p>chikodiobu@gmail.com</p>
                    </div>
                </div>

                <div className="py-4 flex justify-center items-center gap-4">
                    <FiMapPin className='text-red-500' />
                    <div className="text-sm">
                        <p className="text-xs text-gray-500">Location</p>
                        <p>Nigeria</p>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                        <MdOutlineViewAgenda className='text-white' />
                        <Link href={'https://acrobat.adobe.com/id/urn%3Aaaid%3Asc%3AEU%3Ab8932f94-f3c3-4d9b-8397-ec5cdad1a471/?filetype=application%2Fpdf'} target="_blank" className="capitalize rounded-full text-sm">View Resume</Link>
                    </button>
                </div>
            </div>
        </main>
    )
}