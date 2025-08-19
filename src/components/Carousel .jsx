import React, { useState } from 'react';
import imgs from '../../public/-backgroundHeader.jpg'

const data = [
  {
    image: "/Carousel1.JPG",
    title: "กรุงเทพมหานคร",
    description: "เมืองหลวงของประเทศไทย"
  },
  {
    image: "/Carousel2.jpg",
    title: "ทะเลอันดามัน",
    description: "น้ำทะเลใส หาดทรายขาว"
  },
  {
    image: "/Carousel4.JPG",
    title: "ภูเขาสูง",
    description: "เหมาะกับการเดินป่า"
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
          <div className="relative w-full overflow-hidden shadow-xl">
              {/* ภาพหลัก */}
              <img
                src={data[current].image}
                alt={data[current].title}
                className="w-full h-[800px] object-cover transition-all duration-500 ease-in-out"
              />

              {/* Caption Overlay */}
              <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent w-full text-white px-6 py-5 backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold">{data[current].title}</h2>
                  <p className="mt-1 text-sm opacity-90">{data[current].description}</p>
              </div>

              {/* ปุ่ม Previous */}
              <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 md:p-3 rounded-full shadow-md transition"
                >
                  ❮
              </button>

              {/* ปุ่ม Next */}
              <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 md:p-3 rounded-full shadow-md transition"
                >
                  ❯
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {data.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === idx ? 'bg-blue-500 scale-110' : 'bg-white/50'
                      }`}
                    />
                  ))}
              </div>
        </div>
  );
}

export default Carousel;
