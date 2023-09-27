// import React from 'react'
import { downloadImage } from '../utils';
import {PiDownloadBold} from 'react-icons/pi';

const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img
        className='w-full h-auto object-cover rounded-xl'
        src={photo} alt="photo" />

      <div className='group-hover:flex flex-col max-h-[94.5%] hidden 
      absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-md font-sans overflow-y-auto prompt'>{prompt}</p>
        <div className='flex justify-between items-center mt-5 gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-7 rounded-full bg-slate-700 flex 
            justify-center items-center text-white font-bold text-xs'>{name[0]}</div>
            <p className='text-white text-sm name font-sans font-semibold'>{name}</p>
          </div>
          <button 
          className='outline-none bg-transparent border-none'
          onClick={()=>downloadImage(_id,photo)}>
            <PiDownloadBold className='w-[25px] h-[25px] text-white' />
            {/* <img className='w-[25px] object-contain invert' src={download} alt="download" /> */}
          </button>
        </div>

      </div>

    </div>
  )
}

export default Card
