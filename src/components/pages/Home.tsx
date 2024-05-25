import React from "react";

const Home: React.FC = () => {
  return (
    <div
      className="bg-gray-100 overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="scroll-container">
        <section className="flex items-center justify-center h-screen p-8 scroll-snap-align-start">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-8 rounded-lg shadow-lg shadow-[#214973] mt-[-4em] md:mt-[-6em] scroll-snap-align-start">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              className="md:w-1/2 space-y-6 text-gray-800 md:pr-8"
            >
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Mission Statement
                </h1>
                <p>
                  We aim to reconstruct and empower orphaned youth through
                  sports, particularly football in Nigeria.
                </p>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Vision Statement
                </h1>
                <p>
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

        <section className="py-12 px-8 scroll-snap-align-start">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview</h2>
            <p className="text-lg md:text-xl text-gray-800 mb-8 text-justify">
              The JM9 Foundation is a non-governmental organization whose aim is
              to be a leading foundation, providing orphaned youngsters who feel
              neglected through exposure they need to be the greatest they can
              be in life through sports. We believe every young person has the
              potential to do great things, irrespective of their situation in
              life. This is where sports comes in. We believe that sports
              provide youth with the opportunity to explore, learn, invent, and
              develop their talent and skills.
            </p>
          </div>
        </section>

        <section className="container mx-auto scroll-snap-align-start">
          <img
            src="src/assets/overview.png"
            alt="Empowering Youth"
            className="w-full rounded-lg shadow"
          />
        </section>
      </div>
    </div>
  );
};

export default Home;
