import React from 'react'
import Image from 'next/image';
import html from '../../public/images/html.jpg'
import css from '../../public/images/css.jpg'
import js from '../../public/images/js.jpg'
import react from '../../public/images/react.jpg'
import redux from '../../public/images/redux.jpg'
import sass from '../../public/images/sass.jpg'
import tailwind from '../../public/images/tailwind.jpg'
import typescript from '../../public/images/typescript.jpg'
import java from '../../public/images/java.jpg'
import spring from '../../public/images/spring.jpg'
import material from '../../public/images/material.jpg'
import github from '../../public/images/github.jpg'


const TechStack = () => {
    const arrayImgs = [html, css, js, react, redux, sass, tailwind, typescript, java, spring, material, github];
  return (
    <section id='tech' className='w-full 2xl:mt-36 md:mt-20 mt-14 items-center px-3'>
        <h1 className='text-[#42446E] md:text-[30px] text-[24px] font-bold text-center mb-4'>My Tech Stack</h1>
        <p className='text-[#666] md:text-lg text-base font-normal text-center'>Technologies I’ve been working with recently</p>
          <div className='grid xl:grid-cols-6 grid-cols-4 gap-x-3 md:gap-y-16 gap-y-8 md:mt-20 mt-10'>
              {arrayImgs.map((imgPath, id) => (
                  <div data-aos="zoom-in-up" key={id} className="col-span-1 flex justify-center">
                      <Image src={imgPath} alt='logo' className='2xl:w-[80px] 2xl:h-[80px] md:w-[60px] md:h-[60px] w-[50px] h-[50px]' />
                  </div>
              ))}
        </div>
    </section>
  )
}

export default TechStack