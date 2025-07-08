import React from 'react'
import hero from "../assests/images/hero.avif"
export default function Experts() {
    return (
        <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>

            <div className=" col-span-1 md:w-[80%] text-center">
                <img src={hero} alt="Hero Image" className='inline' />
            </div>

            <div className="col-span-1 flex flex-col justify-center">
                <h1 className='text-teal-500 font-bold my-2'>Grow faster by learning from those who've mastered the journey</h1>
                <p className='my-2 text-justify'>
                    "Learning from experts is one of the smartest ways to accelerate growth in any field. Their years of experience, mistakes, and successes offer invaluable lessons that can save you time, effort, and costly errors. Instead of figuring everything out through trial and error"
                </p>
                <button className=' w-[30%] bg-black text-white p-3 rounded'> Get Started</button>
            </div>

        </div>
    )
}
