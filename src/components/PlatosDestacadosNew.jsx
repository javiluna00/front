import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import './customStyles.css';
import TitleReveal from './TitleReveal';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useGSAP } from '@gsap/react';

const PlatosDestacadosNew = ({ dishes, descripcion, gsap }) => {
  const [mappedDishes, setMappedDishes] = useState([]);
  const swiperRef = useRef()
  const triggerRef = useRef()

  useEffect(() => {
    if (dishes) {
      setMappedDishes(
        dishes.map((dish) => ({
          original: `${import.meta.env.VITE_STRAPI_URL}${dish.imagenes[0].url}`,
          thumbnail : `${import.meta.env.VITE_STRAPI_URL}${dish.imagenes[0].formats.thumbnail.url}`,
          name: dish.nombre,
        }))
      );
    }
  }, [dishes]);

  useGSAP(() => {
    gsap.to(swiperRef.current,
      {
        scrollTrigger: {
            trigger: triggerRef.current,
            scrub: 1,
            start: "top 80%", // El inicio es cuando el 80% de la pantalla pasa sobre el elemento.
            end: "center 40%",  // Termina cuando el 20% superior de la pantalla alcanza el elemento.
            markers:false
          },
          opacity:1,
      }
    )
  }, [])

  return (
    <div className='md:min-h-screen my-auto container mx-auto px-4' ref={triggerRef}>

      <TitleReveal text={"Platos destacados"}/>
      <div className='my-8'>
        <span className="text-slate-600 leading-relaxed font-sans md:text-xl text-md">
          <BlocksRenderer content={descripcion} />
        </span>
      </div>

      {/*<h4 className='md:text-[6rem] sm:text-[3rem] text-[2rem] font-bold font-platypi text-gray-800 uppercase'>Platos destacados</h4>*/}
      {mappedDishes.length > 0 && (
        <div className='sinopacidad' ref={swiperRef}>
        
        <Swiper
          className='w-full'
          modules={[Navigation, EffectFade, Pagination]}
          navigation
          breakpoints={{
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView:3,
              spaceBetween:30
            }
          }}
        >
          {mappedDishes.map((dish, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full pb-[100%] bg-gray-200 overflow-hidden rounded-lg select-none">
                <img
                  src={dish.original}
                  alt={dish.name}
                  className="absolute top-0 left-0 w-full h-full object-cover shadow-lg"
                />
              </div>
              <p className="text-start mt-4 text-lg md:text-2xl font-semibold text-gray-800">{dish.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )}
    </div>
  );
};

export default PlatosDestacadosNew;
