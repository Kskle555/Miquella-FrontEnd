import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function AIntro() {
  const text = '>';
  return (
    <div className='mt-[10px]'>
    <div className=' flex flex-col  justify-center items-center  2xl:items-start 2xl:mt-[150px] 2xl:ml-[147px]'>
    <h1 className='text-center text-orange-500 font-bold text-2xl'>{`Home${text}`}<span className='underline text-red-600 hover:text-black'>About Us</span></h1>
    <h1 className='text-center mt-2 text-white font-bold text-3xl 2xl:w-[479px] 2xl:h-[234px] 2xl:text-5xl 2xl:text-start'>Lorem Ipsum is simply dummy text of the printing and dummy.</h1>
    <p className='text-center mt-2 text-white text-lg 2xl:-mt-8 2xl:w-[527px] 2xl:h-[101px] 2xl:text-start 2xl:leading-10 2xl:font-bold '>Lorem Ipsum is simply dummy text of the  and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
    <button className='bg-orange-600 w-[135px] justify-center mt-2 h-[40px] rounded-xl text-white font-bold 2xl:w-[195px] 2xl:h-[53px] 2xl:rounded-full 2xl:mt-[20px]'>Get in touch<FaArrowRight className='relative mx-16 my-0 2xl:mx-24'/></button>
    </div>
    <div className='my-10 ml-14    lg:ml-28 2xl:float-right 2xl:-mt-[635px] 2xl:mr-44 2xl:w-[739px] 2xl:h-[656px] 2xl:py-[225px]'>
    <Carousel showArrows={true}  autoPlay={true} infiniteLoop={true} showThumbs={false} className='' >
                <div>
                    <img className='w-[300px] h-[350px] ' src="https://cdn.discordapp.com/attachments/324498986213834753/1087459173882679356/image.png" />
                </div>
                <div>
                    <img className='w-[300px] h-[350px]' src="https://cdn.discordapp.com/attachments/324498986213834753/1087459131595706398/image.png" />
                </div>
                <div>
                    <img className='w-[300px] h-[350px] rounded-3xl ' src="https://assets.reedpopcdn.com/bf2042_ojtv1oJ_QOEfIMk.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/bf2042_ojtv1oJ_QOEfIMk.jpg" />
                </div>
                <div>
                    <img className='w-[300px] h-[350px] rounded-3xl' src="https://i.pinimg.com/originals/2c/f5/c6/2cf5c6a8332a22bf6f06c32f32b5b6f0.jpg" />
                </div>
                <div>
                    <img className='w-[300px] h-[350px] rounded-3xl'  src="https://gamemag.ru/images/imagemanager/cache/7e/1c17/7e1c17_120163274-3455197237860227-47918086565195875-o.jpg" />
                </div>
            </Carousel>
    </div>
    </div>
  )
}
