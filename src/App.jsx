import { useEffect } from 'react';
import './index.css';
export default function App() {
  useEffect(() => {
    const texts = [" Developer & Programmer..."];
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    let isDeleting = false;
    const typingSpeed = 35; // Speed of typing
    const delayBetweenWords = 1000; // Delay between typing words

    function typeEffect() {
      const dynamicText = document.getElementById('dynamic-text');

      if (isDeleting) {
        // Remove characters
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
      } else {
        // Add characters
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
      }

      dynamicText.textContent = currentText;

      if (!isDeleting && charIndex === texts[index].length) {
        // Pause before deleting
        setTimeout(() => isDeleting = true, delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        isDeleting = false;
        index = (index + 1) % texts.length;
      }

      // Set timeout for next character
      const nextTypingSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
      setTimeout(typeEffect, nextTypingSpeed);
    }

    // Cursor blinking effect
    const blinkCursorInterval = setInterval(() => {
      const blinkCursor = document.querySelector('.blink-cursor');
      if (blinkCursor) {
        blinkCursor.classList.toggle('opacity-0');
      }
    }, 500);

    // Start the typing effect
    setTimeout(typeEffect, 500); // Start after a small delay

    return () => {
      clearInterval(blinkCursorInterval);
    };
  }, []);

  return (
    <>
      <div className="font-nunito bg-gray-900 border-1-4 border-r-4 border-blue-500/40 border-r-blue-500/40">
        <div className="nav flex justify-between items-center bg-gradient-to-r from-blue-500 to-[#1d4ed8]/30 h-20 pd-4 shadow-lg shadow-blue-500/20">
          <div className="logo flex justify-center gap-28 lg:gap-0 pt-1 lg:pl-6 lg:pt-4 ">
          <img className="w-16 ml-3 mt-2 transition-transform duration-500 hover:scale-110" src="/image/logo.webp" alt="Logo" />
          <p className="text-white lg:text-4xl whitespace-nowrap text-2xl -ml-24 mt-2 lg:ml-2 font-semibold lg:ml-3 hover:text-blue-100 duration-300 cursor-pointer bg-transparent">Hi My Name is Emon</p>
          </div>
          <div className="menu hidden lg:flex lg:text-white lg:gap-x-10 text-lg lg:font-bold lg:px-36 pt-5">
            <a className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110" href="">Home</a>
            <a className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110" href="">About Me</a>
            <a className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110" href="">Experience</a>
            <a className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110" href="">Contact</a>
          </div>
        </div>
        <div className="home order-1 lg:flex  lg:justify-between lg:items-center lg:px-28 lg:pt-14 ">
          <div className="details pt-10 lg:pt-20 pl-9 lg:w-1/2">
            <p className="text-white text-xl font-medium lg:text-2xl">Hello, <span className="text-blue-600">I'm </span> </p>
            <p className="text-white text-3xl font-bold lg:text-6xl hover:text-blue-500/80 duration-3 0">Md. Emon Hossain</p>
            <p className="pt-2 text-blue-100 text-xl lg:text-3xl">Web
              <span id="dynamic-text" className="font-bold text-[#3FA2F6]/85"></span>
              <span className="blink-cursor font-bold text-[#3FA2F6]/85"></span>
            </p>
            <p className="text-lg text-gray-100 pt-3 font-medium lg:text-xl lg:leading-8 lg:mr-16 ">
            I am a student,
        Now i
        am
        persuing
        my
        Computer science &
        Engineering degree in Daffodil International University.I works as a frontend & backend developer and
        programmer. I am a self-taught programmer and I love to learn new things. I am a quick learner and I am always ready to learn new things. I have a Experience of 1 year in this field. 
            </p>
            <div className='pt-7'>
              <button className="shadow-lg shadow-blue-500/50 border-2 border-blue-500 rounded py-2 px-5 text-lg text-white 
                        font-semibold bg-blue-600 hover:bg-blue-200 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 
                        hover:text-black transition-all duration-500 ease-in-out hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)] glow-button">
                Let's Talk
              </button>
            </div>
            <div className="flex items-center">
              <p className="text-white pt-7 pr-2 font-light">Check Out My: </p>
              <div className="pt-7 space-x-2">
                <a className='text-blue-500 text-3xl hover:text-pink-200 duration-500' href="" >
                  <i className="fab fa-facebook"></i>
                </a>
                <a className='text-blue-500 text-3xl hover:text-pink-200 duration-500' href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className='text-blue-500 text-3xl hover:text-pink-200 duration-500' href="">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className='text-blue-500 text-3xl hover:text-pink-200 duration-500' href="">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='img  px-3 pt-10 lg:w-80 lg:mr-40 grayscale'>
          <img className="rounded-full w-80 h-80 lg:w-96 lg:h-96" src="/image/emon.jpg" alt="Emon" />

        </div>
      </div>
      </>
    )
}







