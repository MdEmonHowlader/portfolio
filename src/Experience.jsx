
import PropTypes from 'prop-types';

// Experience Box Component
function ExperienceBox({ imgSrc, description }) {
  return (
    <div className="bg-white/10 border-[#DC0083]/35 border-[0.5px] rounded-md hover:scale-110 transition-all duration-1000 ease-out px-6 mx-3 lg:h-56 lg:w-80 lg:shadow-indigo-800/40 shadow-lg">
      <img className="h-10 w-10 mt-2 ml-10 lg:h-20 lg:w-20 lg:ml-24 lg:mt-4" src={imgSrc} alt="Experience Icon" />
      <p className="pt-3 pb-1 text-white lg:pt-6 lg:pl-3">{description}</p>
        </div>
      );
}

ExperienceBox.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// Main Experience Component
export default function Experience() {
  const experiences = [
    { imgSrc: './image/php.png', description: 'Experience with Php and web structure development.' },
    { imgSrc: './image/tail.png', description: 'Skilled in Tailwind CSS for responsive designs.' },
    { imgSrc: './image/c++.png', description: 'Proficient in C++ for competitive programming.' },
    { imgSrc: './image/c.png', description: 'Familiar with the C language for systems programming.' },
    { imgSrc: './image/java.png', description: 'Experience with Java for object-oriented programming.' },
    { imgSrc: './image/word.png', description: 'Knowledge in WordPress for content management.' },
    { imgSrc: './image/React.png', description: 'Skilled in React for frontend development.' },
    
    { imgSrc: './image/python.jpg', description: 'Familiar with Python for scripting and automation.' },
    { imgSrc: './image/git.png', description: 'Knowledge in Git for version control and collaboration.' },
    { imgSrc: './image/htm.png', description: 'Experience with HTML for web content structure.' },
    { imgSrc: './image/css.png', description: 'Skilled in CSS for web content styling.' },
    { imgSrc: './image/javaScript.png', description: 'Experience with JavaScript for web interactivity.' },
    

  ];

  return (
    <div id="Experience" className="mt-10 lg:pt-0 lg:mt-20">
      <p className="flex justify-center items-center text-white mb-12 text-3xl font-nunito font-medium mr-10">
        My Experiences
      </p>
      <section className="grid grid-cols-2 grid-rows-3 gap-y-5 mx-2 lg:px-16 lg:grid-cols-3 lg:grid-rows-3 lg:gap-y-16 lg:ml-28 lg:mr-24">
        {experiences.map((exp, index) => (
          <ExperienceBox key={index} imgSrc={exp.imgSrc} description={exp.description} />
        ))}
      </section>
    </div>
  );
}
