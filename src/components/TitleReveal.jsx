import {useRef} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./customStyles.css";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function TitleReveal({text}) {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }


  useGSAP(() => {
        gsap.to(lettersRef.current, {
          scrollTrigger: {
            trigger: triggerRef.current,
            scrub: 1,
            start: "top center",
            end: "bottom 80%",
          },
          color: "#1f2937",
          duration:5,
          stagger:1
        });
        
  });

  return (
    <div className='reveal'>
      <div ref={triggerRef}>
        {text.split("").map((letter, index) => (
          <span className='reveal-text md:text-[6rem] sm:text-[3rem] text-[2rem] font-bold font-platypi uppercase' key={index} ref={setLettersRef}>
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TitleReveal;
