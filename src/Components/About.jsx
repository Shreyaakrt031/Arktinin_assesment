import React from 'react';

const About = () => {
  return (
    <div >
     
      <section className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPcE1ywz3QL7GNaFsVFGrtuhBCidle6vHA4KnHnwymbdUA3wN-AQs3LbH6pXrPznRvnU&usqp=CAU" 
              alt="Mental Health Consultant Illustration" 
              className="w-3/4 md:w-full"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 h-auto md:h-screen justify-center">
            <h1 className="text-left">About Us</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Discover the Faces <br />
              Behind Our Mental <br />
              Health Consultancy
            </h2>
            <p className="text-gray-600 text-left max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h1 className="text-center text-3xl md:text-4xl mb-8">Why?</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Why Our Mental Health Consultants are<br/> the Best Choice
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-start gap-12 relative">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-8 border border-gray-300 rounded-lg shadow-md text-center w-full md:w-80">
              <img
                src="https://static.vecteezy.com/system/resources/previews/025/725/813/non_2x/psychology-icon-design-free-vector.jpg"
                className="h-20 w-20 mb-4"
                alt="Holistic Approach"
              />
              <h4 className="text-xl font-semibold mb-2">Holistic Approach</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Convallis ut orci eu lobortis fringilla nulla diam venenatis mauris.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative z-10 flex flex-col items-center p-8 border rounded-lg shadow-md bg-gradient-to-r from-green-300 to-green-500 text-white w-full md:w-80 h-auto md:h-80 -translate-y-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsARIX3uLz_McKC1R848yJo6L4pkxYXAKvuMG4gkhiiZJ_bGbYh-kl99A_u1_xghWmqcI&usqp=CAU"
                className="h-20 w-20 mb-4"
                alt="Expertise Team"
              />
              <h3 className="text-xl font-semibold mb-2">Expertise Team</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur. Convallis ut orci eu lobortis fringilla nulla diam venenatis mauris.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center p-8 border border-gray-300 rounded-lg shadow-md text-center w-full md:w-80">
              <img
                src="https://as1.ftcdn.net/jpg/02/13/49/30/160_F_213493022_AXw1SYhIfmqmGSRwUc9Tu2YJkpjofQIg.jpg"
                className="h-20 w-20 mb-4"
                alt="Accessibility"
              />
              <h4 className="text-xl font-semibold mb-2">Accessibility</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Convallis ut orci eu lobortis fringilla nulla diam venenatis mauris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-left">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevcCM-Hg1uRVqLBBrx6siYrjEDihhzYZ4Mnosy88CoCxuNdICzsJlnK6qUou_J2uPJ20&usqp=CAU" 
              alt="Mental Health Consultant Illustration" 
              className="w-2/4 md:w-half"
            />
          </div>
          <div className="flex flex-col items-start space-y-8 h-auto md:h-screen justify-center">
            <h1 className="text-left">Welcome Message</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Start Your Mental Health Journey <br />
              A Warm Welcome to Our <br />
              Health Consultancy
            </h2>
            <p className="text-gray-600 text-left max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <cite className="text-gray-700 font-bold">- Alexander G, Founder of Mindfulcare</cite>
          </div>
        </div>
      </section>

    
      <section className="flex md:h-[240px] h-[150px] mt-24 relative">
        <div className="absolute w-full h-full bg-black opacity-60 text-white text-center flex items-center justify-center md:text-3xl text-xl font-bold">
          <p className='md:w-3/4 w-11/12'>
            "Self-Care is not a luxury. It's a necessity. Without it, we cannot be our best selves mentally, emotionally, or physically."
          </p>
        </div>
        <div className="flex-1 bg-black"></div>
        <div className="flex-1"></div>
        <div className="flex-1 bg-black"></div>
        <div className="flex-1"></div>
        <div className="flex-1 bg-black"></div>
      </section>

     
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-4 h-auto md:h-screen justify-center">
            <h1 className="text-left">Team</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">
              Caring for Your Mental Health <br />
              Get to Know Our Team of Experts
            </h2>
            <p className="text-gray-600 text-left max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="rounded-full bg-yellow-500 text-white py-2 px-4 hover:bg-orange-600">
              See More
            </button>
          </div>
          <div className="flex justify-left">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevcCM-Hg1uRVqLBBrx6siYrjEDihhzYZ4Mnosy88CoCxuNdICzsJlnK6qUou_J2uPJ20&usqp=CAU" 
              alt="Mental Health Consultant Illustration" 
              className="w-2/3 md:w-half"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-gradient-to-r from-green-400 to-green-600 py-10">
        <div className="max-w-6xl mx-auto px-4 flex justify-between text-white">
          <div className="text-center">
            <p className="text-sm">Experience</p>
            <h2 className="text-4xl font-bold">8+</h2>
          </div>
          <div className="text-center">
            <p className="text-sm">Teams</p>
            <h2 className="text-4xl font-bold">15+</h2>
          </div>
          <div className="text-center">
            <p className="text-sm">Clients Served</p>
            <h2 className="text-4xl font-bold">350+</h2>
          </div>
          <div className="text-center">
            <p className="text-sm">Consultants</p>
            <h2 className="text-4xl font-bold">60+</h2>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start space-y-4 h-screen justify-center">
            <h1 className="text-left">Succes Story</h1>
            <h2 className="text-3xl font-bold mb-4 text-left">
              Breaking the Stigma The  <br />
              Success Story of a Mental <br />
              Health Consultant
            </h2>
            <p className="text-gray-600 text-left max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
            </p>
            <p className="text-gray-600 text-left max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
            </p>
            
          </div>
          <div className="flex justify-left">
            <img 
              src="https://90heal.com/wp-content/uploads/2023/05/image-success-story.png" 
              alt="Mental Health Consultant Illustration" 
              className="w-2/3 md:w-half"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
