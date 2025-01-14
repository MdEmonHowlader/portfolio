

import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        const skillBars = document.querySelectorAll('.skill-bar');
        skillBars.forEach(bar => {
            const skillLevel = bar.style.getPropertyValue('--skill-level');
            bar.style.width = skillLevel;
        });
    }, []);

    return (
        <div id="about" className="lg:mt-28 bg-gradient-to-br">
            <div className="lg:border-2 lg:border-[#DC0083]/40 lg:shadow-md lg:shadow-[#DC0083]/15 lg:m-8 lg:py-10 lg:mr-10 lg:ml-10 lg:rounded-md">
                <p className="flex justify-center items-center text-white text-3xl font-nunito font-medium mr-10 mt-16 lg:mt-0 lg:mb-3 lg:pr-10">
                    About Me
                </p>

                <div className="lg:flex lg:justify-between lg:items-center">
                    {/* Text Section */}
                    <div className="lg:-mt-3 lg:pr-16 -mt-5">
                        <p className="text-lg text-gray-200 font-medium lg:text-xl lg:leading-8 pt-9 p-5 lg:ml-32 text-start">
                            I am a university student currently studying Computer Science Engineering. I have skills
                            in competitive programming and frontend development.  I am now studying at
                            Daffodil International University.
                        </p>

                        {/* Skill Bar Section in Transparent Box */}
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg lg:ml-36 lg:mr-32 mt-5">
                            <div className="w-full max-w-md mx-auto">
                                {/* Skill 1 */}
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">Laravel Developer</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-violet-800 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '90%', width: '0%' }}
                                        >
                                            90%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">React & Vue.js Developer</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-violet-800 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '65%', width: '0%' }}
                                        >
                                            65%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">MySQL Developer</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-violet-800 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '75%', width: '0%' }}
                                        >
                                            75%
                                        </div>
                                    </div>
                                </div>

                                {/* Skill 2 */}
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">Programming</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-emerald-500 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '70%', width: '0%' }}
                                        >
                                            70%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">PHP</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-emerald-500 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '80%', width: '0%' }}
                                        >
                                            80%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">Java</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-emerald-500 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '50%', width: '0%' }}
                                        >
                                            50%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">Python</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-emerald-500 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '50%', width: '0%' }}
                                        >
                                            50%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">JavaScript</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-emerald-500 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '60%', width: '0%' }}
                                        >
                                            60%
                                        </div>
                                    </div>
                                </div>

                                {/* Skill 3 */}
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">Backend Development</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-orange-600 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '90%', width: '0%' }}
                                        >
                                            90%
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="text-lg font-semibold mb-2 text-blue-500">Frontend Development</div>
                                    <div className="bg-[#FFFFFF60] rounded-full h-4">
                                        <div
                                            className="skill-bar bg-orange-600 h-4 rounded-full text-right pr-2 text-white text-xs"
                                            style={{ '--skill-level': '80%', width: '0%' }}
                                        >
                                            80%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="lottie w-1/2 ml-5 pl-2 pr-2 -mt-5 lg:mt-12 lg:pr-52 lg:ml-0">
                        <dotlottie-player
                            src="https://lottie.host/ee806e86-c87a-4dc0-993b-e9cbb62ce810/5dfJKhiCYO.json"
                            background="transparent"
                            speed="1.5"
                            style={{ width: '350px', height: '350px' }}
                            loop
                            autoplay
                        ></dotlottie-player>
                    </div>
                </div>
                </div>
            </div>
    );
} 
