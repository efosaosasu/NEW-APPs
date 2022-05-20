import React from 'react'
import {AiOutlineCheck} from "react-icons/ai";
const Pricing = () => {
    return (
        <div name="Pricing" className="w-full my-24 text-white">
            <div className="w-full bg-slate-800 mix-blend-overlay h-[800px] absolute" ></div>
            <div className="m-auto">
                <div className="text-center text-slate-200">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="py-8 text-5xl font-bold text-white">The Right Price For Your Research</h3>
                    <p className="text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus voluptatem adipisci deserunt hic aut sed.</p>
                </div>
                <div className="grid md:grid-cols-2">
                    <div className="p-8 m-4 bg-white shadow-2xl rounded-2xl text-slate-900">
                        <span className="px-3 py-1 text-sm uppercase bg-indigo-200 rounded-2xl">Standard</span>
                       
                        <div>
                           <p className="flex py-4 text-6xl font-bold">#4900<span className="flex flex-col justify-end text-xl">/month</span></p>  
                        </div>
                        <div>
                            <p className="flex py-4"><AiOutlineCheck className="mr-4 text-green-600"/> Relaiable</p>
                             <p  className="flex py-4"><AiOutlineCheck className="mr-4 text-green-600"/> Affordable</p>
                              <p  className="flex py-4 "><AiOutlineCheck className="mr-4 text-green-600"/> Free wifi</p>
                               <p  className="flex py-4"><AiOutlineCheck className="mr-4 text-green-600"/> Free Babes</p>
                               <button className="w-full py-6 my-6 border rounded-3xl hover:bg-indigo-300 border-emerald-900">Get Started</button>
                    </div>
                </div>
                  <div className="p-8 m-4 bg-white shadow-2xl rounded-2xl text-slate-900">
                        <span className="px-3 py-1 text-sm uppercase bg-indigo-200 rounded-2xl">Premium</span>
                       
                        <div>
                           <p className="flex py-4 text-6xl font-bold">#9900<span className="flex flex-col justify-end text-xl">/month</span></p>  
                        </div>
                        <div>
                            <p className="flex py-4"><AiOutlineCheck className="mr-4 text-green-600"/> Relaiable</p>
                             <p  className="flex py-4"><AiOutlineCheck className="mr-4 text-green-600"/> Affordable</p>
                              <p  className="flex py-4 "><AiOutlineCheck className="mr-4 text-green-600"/> Free wifi</p>
                               <p  className="flex py-4"><AiOutlineCheck className="mr-4 text-green-600"/> Free Babes</p>
                               <button className="w-full py-6 my-6 border rounded-3xl hover:bg-indigo-300 border-emerald-900">Get Started</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Pricing
