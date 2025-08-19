import React, { useState } from 'react';

const data = [
      {
          image: "/Carousel4.JPG",
          title: "กรุงเทพมหานคร",
          description: "เมืองหลวงของประเทศไทย"
        },
        {
          image: "/Carousel2.jpg",
          title: "ทะเลอันดามัน",
          description: "น้ำทะเลใส หาดทรายขาว"
        },
        {
          image: "/9124dadb815d76b0.jpg",
          title: "ภูเขาสูง",
          description: "เหมาะกับการเดินป่า"
        },
      ];


function Header() {

    const [current, setCurrent] = useState(0);
  
    const prevSlide = () => {
      setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };


  
  return (
  <div className="relative w-full h-[800px] overflow-hidden">
       
                {/* Carousel Slide ภาพพื้นหลัง */}
                <img
                  src={data[current].image}
                  alt={data[current].title}
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 ease-in-out"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-cyan-100 to-transparent opacity-50 z-0" />
                <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-30 z-0" />

                {/* Content (โลโก้ + ข้อความ) */}
                <div className="relative z-20 w-full h-full flex items-center justify-center md:justify-end px-6 sm:px-12 lg:px-24">
                  <div className="text-center md:text-right max-w-2xl text-white space-y-4 sm:space-y-6 md:mr-8 lg:mr-16">
                    
                    {/* โลโก้ */}
                    <img
                      src="/628ee29fd0ad0d02.png"
                      alt="Logo"
                      className="mx-auto md:ml-auto md:mr-0 h-[100px] sm:h-[140px] md:h-[180px] lg:h-[300px] w-auto mb-4 sm:mb-6 drop-shadow-lg "
                    />

                    {/* Headline */}
                    <h1 className="text-[28px] sm:text-[40px] font-medium leading-tight whitespace-pre-line">
                      <span className="text-cyan-700 drop-shadow-black py-2">Natural Wisdom</span><br />
                      <span className="text-cyan-700 drop-shadow-black">Modern Wellness</span>
                      <p className="text-[20px] sm:text-[24px] font-medium opacity-90 py-2">Timeless Luxury</p>
                    </h1>

                    {/* ปุ่ม */}
                    <a
                      href="#"
                      className="inline-flex justify-center items-center py-4 px-10 text-lg sm:text-xl bg-cyan-700 text-white rounded-md hover:bg-cyan-800 transition"
                    >
                      Register
                    </a>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 py-5 text-white backdrop-blur-sm z-10">
                  <h2 className="text-2xl font-semibold">{data[current].title}</h2>
                  <p className="mt-1 text-sm opacity-90">{data[current].description}</p>
                </div>

                {/* ปุ่มควบคุม Carousel */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black p-2 md:p-3 rounded-full shadow-md transition"
                >
                  ❮
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-black p-2 md:p-3 rounded-full shadow-md transition"
                >
                  ❯
                </button>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {data.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        current === idx ? 'bg-cyan-800 scale-110' : 'bg-white/50'
            }`}
          />
      ))}
    </div>
  </div>

  );
}

export default Header;