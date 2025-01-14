

function Contact() {
    const socialLinks = [
        {
            href: "https://www.facebook.com/sc.emon.94",
            icon: "fa-brands fa-facebook",
            color: "text-blue-600",
        },
        {
            href: "https://linktr.ee/emon04",
            icon: "fa-brands fa-linkedin",
            color: "text-blue-600",
        },
        {
            href: "https://github.com/MdEmonHowlader",
            icon: "fa-brands fa-github",
            color: "text-blue-600",
        },
       

    ];

    return (
        <div id="contact" className="pl-5 pr-5 mb-8">
            <p className="text-center text-white text-4xl font-semibold mb-10">Contact Me</p>
            <div className="lg:flex lg:justify-between lg:items-start lg:mx-20">
                {/* Left Section - Contact Details */}
                <div className="lg:w-1/2 space-y-6 text-white">
                    <h1 className="text-3xl lg:text-5xl font-bold">Let's Connect</h1>
                    <p className="text-gray-300 text-lg">
                        If you have any questions or would like to work together, feel free to reach out!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <i className="fa fa-phone text-blue-500 text-2xl"></i>
                            <span className="text-lg">+8801601394910</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="fa fa-envelope text-blue-500 text-2xl"></i>
                            <a href="mailto:redwantahsin2002@gmail.com" className="text-lg underline">
                            emon22205101732@diu.edu.bd
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="fa fa-map-marker text-blue-500 text-2xl"></i>
                            <span className="text-lg">Dhaka, Bangladesh</span>
                        </div>
                    </div>
                    <div className="flex space-x-6 mt-4">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                <i className={`${link.icon} ${link.color} text-2xl hover:text-pink-300`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="bg-blue-500/10 p-6 rounded-lg shadow-md lg:w-1/2">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-white text-lg mb-2">
                                Your Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-md border border-blue-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-white text-lg mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded-md border border-blue-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-white text-lg mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Write your message"
                                className="w-full p-3 rounded-md border border-blue-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
            <footer className="bg-gray-900 text-white py-6 mt-10">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <p className="text-sm text-gray-400">
                        © 2025 emon Portfolio. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
