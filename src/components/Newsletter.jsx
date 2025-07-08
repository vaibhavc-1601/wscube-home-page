import React from 'react'

export default function Newsletter() {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className="max-w-[1240px] md:flex  mx-auto justify-between py-[50px]">
                <div className='m-2'> <h1 className=' text-[20px] md:text-[40px] text-white font-bold'>want to learn it skills ?</h1>
                    <span className='text-white'>
                        sign up to our newsletter and stay up to date     </span></div>
                <div className='m-2'>
                    <input type="text" name="" id="" placeholder='Email' className=' bg-white p-3 mr-2 text-slate-300 rounded mb-2  sm:w-full' />
                    <button className='bg-black text-white p-3 rounded'>Notify Me</button>
                    <br />
                    <p className='text-white'>
                        we care about the protection of data .read our <br /><a href="" className='text-black'> privacy policy</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

