import Image from 'next/image'
import avatar from '../../public/images/avatar.jpg' 

const About = () => {
    return (
        <section className='w-full grid md:grid-cols-2 grid-cols-1 mt-20'>
            <div data-aos="fade-right" className='flex flex-col justify-center md:items-start items-center font-bold text-[#42446E] 2xl:text-[40px] 2xl:leading-[70px] sm:text-[32px] sm:leading-[50px] text-[24px] leading-[40px]'>
                <span>Hi &#9996;,</span>
                <span>My name is <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Thanh Nhan</span></span>
                <span>{"I'm a "}<span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Front-end</span> developer</span>
                <span>I build things for web</span>
            </div>
            <div data-aos="fade-left" className='flex justify-center md:mt-0 mt-6'>
                <div className='2xl:w-[350px] 2xl:h-[350px] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1'>
                    <Image src={avatar} style={{ objectFit: 'cover' }} className='w-full h-full bg-contain rounded-full' alt='Avatar'/>
                </div>
            </div>
        </section>
    )
}

export default About