import React from 'react'


const About = () => {
    return (
        <div name="About" className='py-32 mx-auto max-w-[1240px]'>
            <div className='text-center'>
                <div>
                    <h2 className="text-5xl font-bold">Trusted By Developers Across The World</h2>
                    <p className='py-6 text-3xl text-gray-500'>Maro is an old friend of the family, But that boy is an idiot he nor dey tiya  to program and please note this is a Nigeria website so pignin English is allowed . Thanks for your understanding</p>
                </div>
                <div className="grid py-6 m-3 md:grid-cols-3">
                    <div className="py-8 mx-2 border shadow-2xl rounded-2xl">
                        <p className="text-4xl font-bold text-indigo-300">100%</p>
                        <p>Completion</p>
                    </div>
                     <div className='py-8 mx-2 border shadow-2xl rounded-2xl'>
                        <p className="text-4xl font-bold text-indigo-300">24/7</p>
                        <p>Delivery</p>
                    </div>
                     <div className='py-8 mx-2 border shadow-2xl rounded-2xl'>
                        <p className="text-4xl font-bold text-indigo-300">100k</p>
                        <p>Transaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
