'use client';
import React from 'react'

type Props = {
    show: boolean,
    setShow: (arg: boolean) => void
}
const Sidebar = (props: Props) => {
    const { show, setShow } = { ...props };

    return (
        <ul className={`md:hidden absolute inset-0 z-10 pt-20 w-full min-h-screen flex flex-col items-center bg-gray-300 ease-out duration-100 transition-all ${show ? 'translate-x-0' : 'translate-x-full'}`}>
            <li className='py-4 block w-full text-center hover:text-white hover:bg-gray-800 cursor-pointer'><a onClick={() => setShow(false)} className='w-full block' href="#">Home</a></li>
            <li className='py-4 block w-full text-center hover:text-white hover:bg-gray-800 cursor-pointer'><a onClick={() => setShow(false)} className='w-full block' href="#about">About</a></li>
            <li className='py-4 block w-full text-center hover:text-white hover:bg-gray-800 cursor-pointer'><a onClick={() => setShow(false)} className='w-full block' href="#tech">Tech Stack</a></li>
            <li className='py-4 block w-full text-center hover:text-white hover:bg-gray-800 cursor-pointer'><a onClick={() => setShow(false)} className='w-full block' href="#project">Project</a></li>
            <li className='py-4 block w-full text-center hover:text-white hover:bg-gray-800 cursor-pointer'><a onClick={() => setShow(false)} className='w-full block' href="#contact">Contact</a></li>
            <button className='absolute top-8 left-8' onClick={() => setShow(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </ul>
  )
}

export default Sidebar