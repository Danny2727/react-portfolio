export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Reed.
                        <br className="hidden lg:inline-block" />Hello my name is Danny Edouard.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a passionate fullstack developer with a strong foundation in both frontend and backend technologies.
                        In my frontend work, I specialize in creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript frameworks such as React. I have a keen eye for design and strive to create visually appealing and intuitive user experiences.
                        On the backend, I am proficient in languages like Node.js, Express.js, and MongoDB, as well as database technologies such as SQL and NoSQL. I have experience building RESTful APIs and integrating third-party services to create robust and scalable web applications.


                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
        </section>
    );
}
