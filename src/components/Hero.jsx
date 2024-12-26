import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import MenuComidaIcon from './icons/MenuComidaIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import Button from './Button'
import MapPinIcon from './icons/MapPinIcon'
gsap.registerPlugin(ScrollTrigger)
function Hero({ data }) {

    /*useGSAP(() => {
        gsap.set('#hero-container', {
            clipPath: 'polygon(14% 0%, 78% 0%, 92% 90%, 5% 100%)',
            borderRadius: "0, 0, 40%, 10%"
        })

        gsap.from('#hero-container', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#hero-container',
                start: 'center center',
                end: 'bottom center',
                scrub:true
            }
        })
    }, {revertOnUpdate:true})*/

    const backgroundImageUrl = data?.['imagen_fondo'][0]?.url ? (import.meta.env.VITE_STRAPI_URL + data?.['imagen_fondo'][0]?.url) : './public/restaurante.webp'

    return (
        <section className={`relative h-dvh w-screen overflow-x-hidden`} style={{backgroundImage: `url(${backgroundImageUrl})`}} id='hero-container'>
            <div id='image-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-fondo'>
                
                <img src={backgroundImageUrl} className='w-screen h-dvh object-cover brightness-[0.35]'/>

                <div className='absolute inset-0 z-20 h-dvh w-screen'>
                    <div className="h-full flex flex-col justify-center text-center">
                            <h1 className="font-semibold lg:leading-normal leading-normal text-4xl lg:text-6xl text-white mb-5 font-platypi">Restaurante <br/> Santa María</h1>
                            <span className="text-white/70 text-lg max-w-xl mx-auto"><BlocksRenderer content={data['descripcion']} /></span>
                            <Button leftIcon={<MapPinIcon className="text-amber-500" />} title={"¡Visítanos!"} link={"https://maps.app.goo.gl/xZKSmBnEQwWGxhAa6"} blank dark={false}/>
                            
                    </div>
                </div>
                
            </div>
        </section>
        )
  
}

export default Hero