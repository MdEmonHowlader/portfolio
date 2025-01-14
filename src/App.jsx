import { useEffect } from 'react';
import './index.css';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';

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
        currentText = texts[index].substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = texts[index].substring(0, charIndex + 1);
        charIndex++;
      }

      dynamicText.textContent = currentText;

      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
      }

      const nextTypingSpeed = isDeleting ? typingSpeed / 2 : typingSpeed;
      setTimeout(typeEffect, nextTypingSpeed);
    }

    const blinkCursorInterval = setInterval(() => {
      const blinkCursor = document.querySelector('.blink-cursor');
      if (blinkCursor) {
        blinkCursor.classList.toggle('opacity-0');
      }
    }, 500);

    setTimeout(typeEffect, 500); // Start after a small delay

    return () => {
      clearInterval(blinkCursorInterval);
    };
  }, []);

  return (
    <div className="font-nunito bg-gray-900 border-1-4 border-r-4 border-blue-500/40">
      <header className="nav flex justify-between items-center bg-gradient-to-r from-blue-500 to-[#1d4ed8]/30 h-20 pd-4 shadow-lg shadow-blue-500/20">
        <div className="logo flex justify-center gap-28 lg:gap-0 pt-1 lg:pl-6 lg:pt-4">
          <img
            className="w-16 ml-3 mt-2 transition-transform duration-500 hover:scale-110"
            src="/image/logo.webp"
            alt="Logo"
          />
          <p className="text-white lg:text-4xl whitespace-nowrap text-2xl -ml-24 mt-2 lg:ml-2 font-semibold hover:text-blue-100 duration-300 cursor-pointer">
            Hi My Name is Emon
          </p>
        </div>
        <nav className="menu hidden lg:flex lg:text-white lg:gap-x-10 text-lg lg:font-bold lg:px-36 pt-5">
  <a
    className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110"
    href="#home"
  >
    Home
  </a>
  <a
    className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110"
    href="#about"
  >
    About Me
  </a>
  <a
    className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110"
    href="#experience"
  >
    Experience
  </a>
  <a
    className="cursor-pointer hover:text-blue-500 transition-colors duration-500 hover:scale-110"
    href="#contact"
  >
    Contact
  </a>
</nav>

      </header>

      <main className="home order-1 lg:flex lg:justify-between lg:items-center lg:px-28 lg:pt-14">
        <section className="details pt-10 lg:pt-20 pl-9 lg:w-1/2">
          <p className="text-white text-xl font-medium lg:text-2xl">
            Hello, <span className="text-blue-600">I'm</span>
          </p>
          <p className="text-white text-3xl font-bold lg:text-6xl hover:text-blue-500/80 duration-300">
            Md. Emon Hossain
          </p>
          <p className="pt-2 text-blue-100 text-xl lg:text-3xl">
            Web <span id="dynamic-text" className="font-bold text-[#3FA2F6]/85"></span>
            <span className="blink-cursor font-bold text-[#3FA2F6]/85"></span>
          </p>
          <p className="text-lg text-gray-100 pt-3 font-medium lg:text-xl lg:leading-8 lg:mr-16">
            I am a student, currently pursuing my Computer Science & Engineering degree at Daffodil International University. I work as a frontend & backend developer and programmer. I am a self-taught programmer, always eager to learn new things. I have 1 year of experience in this field.
          </p>
          <div className="pt-7">
            <button className="shadow-lg shadow-blue-500/50 border-2 border-blue-500 rounded py-2 px-5 text-lg text-white font-semibold bg-blue-600 hover:bg-blue-200 active:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 hover:text-black transition-all duration-500 ease-in-out hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.6)]">
              Let's Talk
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-white pt-7 pr-2 font-light">Check Out My:</p>
            <div className="pt-7 space-x-2">
              <a className="text-blue-500 text-3xl hover:text-pink-200 duration-500" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="text-blue-500 text-3xl hover:text-pink-200 duration-500" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-blue-500 text-3xl hover:text-pink-200 duration-500" href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="text-blue-500 text-3xl hover:text-pink-200 duration-500" href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="img px-3 pt-10 lg:w-80 lg:mr-50 grayscale">
          <img className="rounded-lg" src="/image/emon.JPG" alt="Emon" />
        </section>
      </main>
      <About />
      <Experience />
      <Contact />
    </div>
  );
}






