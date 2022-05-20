import React from 'react'
import supportImg from "../assets/support.jpg"
import { BsFillTelephoneInboundFill,BsFillArrowRightCircleFill} from "react-icons/bs";
import { MdArchive ,MdPermMedia} from "react-icons/md";
const Support = () => {
    return (
        <div name="Support" className="w-full mt-24">
            <div className='absolute w-full h-[700px] bg-gray-500/90'>
                <img  className="object-cover w-full h-full mix-blend-overlay" src={supportImg}/>
            </div>
            <div className="mx-auto text-white max-w-[1240px] relative">
                <div className="px-4 py-12">
                    <h2 className='pt-8 text-5xl font-bold text-center uppercase text-slate-300'>Support</h2>
                    <h3 className="py-6 text-4xl font-bold text-center">Finding the right team</h3>
                    <p className='py-6 text-3xl text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque accusantium quaerat blanditiis quis placeat suscipit praesentium doloribus magni facilis impedit.</p>
                </div>
                <div className="relative grid grid-cols-1 px-6 pt-12 text-black lg:grid-cols-3 gap-y-16 gap-x-8 sm:pt-20">
                    <div className="bg-white shadow-2xl rounded-2xl ">
                        <div className="p-5">
                            <BsFillTelephoneInboundFill  className="w-16 m-2 pt-[-2rem] text-white bg-indigo-500 rounded-lg mt-[-1.6rem]"/>
                            <h3 className="my-6 text-2xl font-bold "> Sales</h3>
                            <p className="text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam nesciunt nam eius iure in rerum reiciendis. Delectus, nostrum nisi?</p>
                        </div>
                        <div className="py-4 pl-8 bg-slate-100">
                            <p className="flex items-center text-indigo-600">Contact Us <BsFillArrowRightCircleFill/></p>
                        </div>
                    </div>
                    <div className="bg-white shadow-2xl rounded-2xl ">
                        <div className="p-5">
                            <BsFillTelephoneInboundFill  className="w-16 m-2 pt-[-2rem] text-white bg-indigo-500 rounded-lg mt-[-1.6rem]"/>
                            <h3 className="my-6 text-2xl font-bold "> Technical Support</h3>
                            <p className="text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam nesciunt nam eius iure in rerum reiciendis. Delectus, nostrum nisi?</p>
                        </div>
                        <div className="py-4 pl-8 bg-slate-100">
                            <p className="flex items-center text-indigo-600">Contact Us <BsFillArrowRightCircleFill/></p>
                        </div>
                    </div>
                    <div className="bg-white shadow-2xl rounded-2xl ">
                        <div className="p-5">
                            <MdPermMedia  className="w-16 m-2 pt-[-2rem] text-white bg-indigo-500 rounded-lg mt-[-1.6rem]"/>
                            <h3 className="my-6 text-2xl font-bold "> Media Inquiries</h3>
                            <p className="text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quisquam nesciunt nam eius iure in rerum reiciendis. Delectus, nostrum nisi?</p>
                        </div>
                        <div className="py-4 pl-8 bg-slate-100">
                            <p className="flex items-center text-indigo-600">Contact Us <BsFillArrowRightCircleFill/></p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Support
