import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { GridBackgroundDemo } from './ui/GridBackgroundDemo'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Magicbutton from './ui/Magicbutton'

const Hero = () => {
  return (

        <div className='pb-20 pt-36'>
            <div>
                
                <Spotlight 
                className='-top-40 -left-10 md:-left-32
                md:-top-20 h-screen ' fill='white'/>
                
                <Spotlight 
                className='top-10 left-full h-[80vh]
                w-[50vw]' fill='purple'/>
                
                <Spotlight 
                className='top-28 left-80 h-[80vh] w-[50vw]
                md:-top-20 ' fill='blue'/>
            </div>

            <GridBackgroundDemo/>

            <div className='flex justify-center relative
            my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl 
                lg:max-w-[60vw] flex flex-col justify-center 
                text-center items-center'>

                    <h1 className='uppercase tracking-widest 
                    text-xs text-center text-blue-100 
                    max-w-80'>
                        Dynamic Wep app with Next.js
                    </h1>

                    <TextGenerateEffect 
                    className='text-center text-[40px] 
                    lg:text-6xl md:text-5xl'
                    words='Transforming Concepts into Seamless Experiencess '/>

                    <p className='text-blue-100 
                    text-center md:tracking-wider mt-4 
                    text-sm md:text-lg lg:text-2xl'>
                        Hi, I'm Modther a Next.js Developer
                    </p>

                    <a href="#about">
                        <Magicbutton
                        title='Show my work'/>
                    </a>

            
                </div>
            </div>
            
        </div>
    
  )
}

export default Hero
