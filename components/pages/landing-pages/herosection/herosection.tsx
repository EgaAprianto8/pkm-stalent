import Image from 'next/image'
import React from 'react'
import { CgPlayButtonO } from "react-icons/cg";

const HeroSection = () => {
  return (
    <div className='flex min-w-full min-h-full mt-32'>
      <div className='container flex w-full gap-40'>
        <div className='flex flex-col max-w-[700px] min-w-[200px]'>
          <div>
          <h3 className='font-bold text-6xl  leading-normal'>
          "Setiap Langkah adalah Karya Seni, Selami Minatmu Melalui Dunia Olahraga!"
          </h3>
          </div>
          <div className='my-12'>
            <p className='font-semibold text-2xl'>
            Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
            </p>
          </div>
          <div className='flex-row flex'>
          <div className='bg-[#ffc72c] text-white rounded-full text-xl'>
            <button className='p-5 '>
              Cari Topik!
            </button>
          </div>
          <div>
            <CgPlayButtonO size={40}/>
          </div>
          </div>
        </div>
        <div>
          <div className='flex absolute'>
            <div className='w-[700px] h-[600px]'>
            <Image
            src="/images/stalenttanpalatarbelakang1.png"
            alt='Stalent'
            fill={true}
            className='object-cover w-[700px] h-[600px]'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
