import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-gray-100 overflow-y-scroll h-screen"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="scroll-container">
        <section
          className="flex items-center justify-center h-screen p-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="500"
            className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg shadow-[#214973] mt-[-4em] md:mt-[-6em]"
          >
            <div className="md:w-1/2 space-y-6 text-gray-800 md:pr-8">
              <div>
                <h1 className="text-3xl text-[#214973] md:text-4xl font-bold mb-4">
                  Mission Statement
                </h1>
                <p>
                  We aim to reconstruct and empower orphaned youth through
                  sports, particularly football in Nigeria.
                </p>
              </div>
              <div>
                <h1 className="text-3xl text-[#214973] md:text-4xl font-bold mb-4">
                  Vision Statement
                </h1>
                <p className="text-justify">
                  We see ourselves becoming a platform that will not only expose
                  these neglected orphaned youth to sports, particularly
                  football but also present a platform for identifying talent,
                  scouting, scholarship opportunities, and fostering social
                  inclusion.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
              <img
                src="src/assets/collage.png"
                alt="Empowering Youth"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </div>
        </section>

        <section
          className="flex items-center justify-center h-screen p-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg shadow-[#214973] h-95px">
            <div className="md:w-1/2 space-y-6 text-gray-800 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Overview
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mb-8 text-justify">
                The JM9 Foundation is a non-governmental organization whose aim
                is to be a leading foundation, providing orphaned youngsters who
                feel neglected through exposure they need to be the greatest
                they can be in life through sports. We believe every young
                person has the potential to do great things, irrespective of
                their situation in life. This is where sports comes in. We
                believe that sports provide youth with the opportunity to
                explore, learn, invent, and develop their talent and skills.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
              <img
                src="src/assets/founder.png"
                alt="overview"
                className="w-full max-w-sm h-auto rounded-lg shadow"
              />
            </div>
          </div>
        </section>
        <section
          className="flex items-center justify-center h-screen p-8"
          style={{ scrollSnapAlign: "start" }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg shadow-[#214973] h-95px">
            <div className="md:w-1/2 space-y-6 text-gray-800 md:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
                About the Founder
              </h2>
              <p className="text-lg md:text-xl text-gray-800 mb-8 text-justify">
                John Mendie founded the JM9 Football Foundation. John is an
                African-American student currently enrolled at Oral Roberts
                University, USA. He attended Doveland High School and captained
                the school's men's football team. He held the leadership
                position of the Sports Prefect for the entire school. He is an
                alumnus of Juventus Academy and the FCV Academy. His love for
                football made him use it as a tool to tackle orphanage neglect
                and create opportunities in Nigeria. He said he would instead
                put a smile on the faces of the less privileged because they are
                humans just like us. "We see ourselves becoming a platform that
                will not only expose these neglected orphaned youth to sports,
                particularly football, but also present a platform for
                identifying talent, scouting, and scholarship opportunities," he
                said.gain confidence, and find new opportunities for their
                future.
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
              <img
                src="src/assets/founder.png"
                alt="Founder John Doe"
                className="w-full max-w-sm h-auto rounded-lg shadow"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
