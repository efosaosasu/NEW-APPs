import React from 'react'
import {AiOutlineCloudDownload,AiFillAlert} from "react-icons/ai";
import {DiDatabase} from "react-icons/di";
import bgImg from "../assets/cyber-bg.png"
const Hero = () => {
    return (
      <div name="Home" className="flex flex-col justify-between w-full h-screen bg-slate-100">
          <div className="m-auto max-w-[1240px] grid md:grid-cols-2">
              <div className="flex flex-col justify-center w-full px-2 py-8 md:items-start">
                    <p className="text-2xl">Unique Sequencing & Production</p>
              <h1 className="py-3 text-5xl font-bold md:text-7xl">Cloud Management</h1>
              <p className="py-1 text-2xl">This is our Tech Brand</p>
              <button className="px-6 py-3 bg-indigo-400 rounded ">Get Started</button>
              </div>
              <div>
                  <img className="w-full" src={bgImg} alt=""/>
              </div>
              <div className=" md:min-w-[760px] md:left-1/2 transform md:-translate-x-1/2 mx-1
              border border-slate-300
               absolute flex flex-col py-8 text-center rounded-xl bg-zinc-200 bottom-[5%] shadow-2xl">
                  <p>Data Services</p>
                  <div className="flex flex-wrap justify-between px-4">
                      <p className="flex px-4 py-2"><AiOutlineCloudDownload className="text-indigo-500"/>App SEcurity</p>
                      <p className="flex px-4 py-2 "> <DiDatabase className="text-indigo-500"/> Dashboard</p>
                      <p className="flex px-4 py-2 "><AiFillAlert className="text-indigo-500"/>Api</p>
                  </div>
              </div>
            
          </div>
      </div>
    )
}

export default Hero