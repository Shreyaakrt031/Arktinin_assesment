import React from 'react';

const Contact = () => {
  return (
    < >
      {/* Contact Section */}
      <div className="bg-gradient-to-r from-green-400 to-teal-500 py-16  relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-start">
            {/* Vertical Line */}
            <div className="w-1 h-32 bg-white mr-6"></div>
            
            {/* Text Content */}
            <div className="text-white">
              <h1 className="text-left font-bold text-4xl">Contact Us</h1>
              <p className="mt-1 md:text-1xl max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris. 
                Ultrices aliquet at quam adipiscing feugiat interdum mattis. 
                Placerat donec risus diam sed et. A in ullamcorper ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:ml-12">
            <h3 className="text-3xl font-bold text-gray-800">Contact Us Today for Personalized Support and Assistance</h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing fringilla nulla diam lorem non mauris.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <span>📞</span> <span className="text-gray-700">+14 5464 8272</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉</span> <span className="text-gray-700">rona@domain.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span> <span className="text-gray-700">Lazy Tower 192, Burn Swiss</span>
              </div>
            </div>
          </div>

          <form className="space-y-6 md:ml-12">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Your first name" className="p-3 border rounded-md" />
              <input type="text" placeholder="Your last name" className="p-3 border rounded-md" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="email@domain.com" className="p-3 border rounded-md" />
              <input type="text" placeholder="+1 228xxx" className="p-3 border rounded-md" />
            </div>
            <textarea placeholder="Your message" className="p-3 border rounded-md w-full" rows="4"></textarea>
            <button className="px-6 py-3 bg-orange-500 text-white text-left rounded-full">Send Message</button>
          </form>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center">
          {/* Subtitle */}
          <p className="text-sm text-gray-500 mb-2">Maps</p>
          
          {/* Main Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Mapping Out Mental Health <br/>Consulting Strategies
          </h2>
          
          {/* Map Placeholder */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-4 grid-rows-2 gap-2">
              <div className="bg-white h-20"></div>
              <div className="bg-black h-20"></div>
              <div className="bg-white h-20"></div>
              <div className="bg-black h-20"></div>
              <div className="bg-black h-20"></div>
              <div className="bg-white h-20"></div>
              <div className="bg-black h-20"></div>
              <div className="bg-white h-20 relative">
                <span className="absolute bottom-3 right-3 text-red-600 text-2xl">📍</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </>
  );
};

export default Contact;
