import { socialMedia } from '@/data'
import React from 'react'

const Footer = () => {
    return (
        <div className='pb-20 pt-20'>
            <div className='flex gap-2'>
                {socialMedia.map((social, index) => (
                    <a key={index} href={social.href} target="_blank"
                        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={social.img} alt="icon" width={20} height={20}/>
                    </a>
                ))}
            </div>

        </div>
    )
}

export default Footer