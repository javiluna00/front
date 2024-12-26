import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import MapPinIcon from './icons/MapPinIcon';
import { useEffect, useRef } from 'react';
import Button from './Button';
import { useGSAP } from '@gsap/react';
import './customStyles.css'
import TitleReveal from './TitleReveal';

function SectionLugarNew({ data, gsap }) {
  const { titulo, descripcion, imagen, boton } = data;

  // Referencias para los elementos animados
  const textContainerRef = useRef();
  const titleRef = useRef()
  const animatedTextRef = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {
  
      gsap.fromTo(
        animatedTextRef.current,
        {
          opacity: 0, // Comienza invisible
          scale: 2, // Más grande, simulando que está más cerca
          transform: 'translate3d(25px, 50px, 0px) rotateY(20deg)', // Ligeramente desplazado hacia abajo
        },
        {
          opacity: 1, // Se hace visible
          scale: 1, // Regresa a su tamaño normal
          transform: 'translate3d(0px, 0px, 0px) rotateY(0deg)', // Se mueve a su posición final
          duration: 1.5, // Duración de la animación
          ease: 'power2.inOut', // Efecto suave y realista
          scrollTrigger: {
            trigger: textContainerRef.current, // Elemento que dispara la animación
            start: '100 bottom', // Comienza cuando el top del contenedor entra al 80% del viewport
            end: 'bottom bottom', // Termina cuando el bottom del contenedor llega al 60%
            scrub: true, // Sincroniza con el scroll
            toggleActions: 'play none none reverse'
          },
        }
      );
    }, textContainerRef);

    return () => ctx.revert(); // Limpia el contexto al desmontar el componente

  }, []);

  useGSAP(() => {
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
        opacity:1, // Cambia directamente el color aquí
      });
      gsap.from(titleRef.current, {
        opacity:0
      })
  });


  return (
    <section
      className="w-screen min-h-screen flex flex-col gap-7 justify-center items-start py-20 bg-fondo container mx-auto px-4"
      id="quienessomos"
    >
      <TitleReveal text={titulo}/>
      <div className="container mx-auto" ref={textContainerRef}>
        <div className="flex lg:flex-row flex-col justify-center gap-4">
          {/* Imagen Izquierda */}
          <div className='images w-full flex'>
            <div className="lg:col-span-4 md:col-span-6 flex justify-center z-50">
              <img
                src={import.meta.env.VITE_STRAPI_URL + imagen[0].url}
                className="rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
                alt="Imagen plato 1"
              />
            </div>
          </div>

          {/* Texto Central */}
          <div
            className="flex flex-col justify-center items-center w-full"
            ref={animatedTextRef}
            style={{ opacity: 0, transform: 'translateY(100px)' }} // Estilos iniciales
          >
            
            <span className="text-slate-600 mt-6 leading-relaxed font-sans md:text-xl text-md">
              <BlocksRenderer content={descripcion} />
            </span>
            <Button leftIcon={<MapPinIcon className="text-amber-500" />} title={boton} link={"https://maps.app.goo.gl/xZKSmBnEQwWGxhAa6"} blank/>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionLugarNew