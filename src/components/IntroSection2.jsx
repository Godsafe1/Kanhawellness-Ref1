import React from 'react'
import shoe1 from '../assets/shoe1.jpg'

function IntroSection2() {
  return (

     <div className="bg-white">
      {/* IntroSection: Traditional Thai Medicine */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-[1320px] px-6 flex flex-col md:flex-row items-center gap-12">
          {/* รูปภาพ */}
          <div className="w-full md:w-1/2 h-auto md:h-[400px]">
            <img
              src="/img3-IntroSection3.JPG"
              alt="Traditional Thai Medicine"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* ข้อความ */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
              Traditional Thai Medicine
            </h2>
            <p className="mt-4 text-lg text-gray-600 whitespace-pre-line">
              Therapeutic acupressure massage in Traditional Thai Medicine involves using fingers to apply pressure and massage specific areas of the body, combining both art and science passed down through Thai healing traditions. It consists of:
            </p>
            <ul className="list-disc list-inside mt-4 text-left text-gray-600 text-base">
              <li>
                <strong>Basic Massage: </strong>: Massaging along energy lines to stimulate blood circulation, lymphatic flow, and the nervous system.
              </li>
              <li>
                <strong>Signal Point Acupressure:</strong>: Applying focused pressure on specific points along energy lines that correspond to particular symptoms or health conditions.
              </li>
            </ul>
            <a
              href="#"
              className="inline-block mt-8 px-8 py-3 bg-cyan-700 text-white text-lg rounded-md hover:bg-cyan-800 transition-all shadow"
            >
              Register
            </a>
          </div>
        </div>
      </section>

      {/* IntroSection:4 */}
      <section className="bg-white/90 py-16 px-4 sm:px-6 backdrop-blur rounded-xl shadow-xl my-10">
        <div className="container mx-auto max-w-[1320px] flex flex-col md:flex-row-reverse items-center gap-12">
          {/* รูปภาพ */}
          <div className="w-full md:w-1/2">
            <video
              className="w-full max-w-[800px] rounded-lg shadow-md"
              src="/Kanhawellnessclinicvideos.mp4"
              controls
              autoPlay={false}
              muted
              loop
            />

          </div>

          {/* ข้อความ */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
             Medicine
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Medicine

Medicine has long been a vital component of human healthcare, from the past to the present. It plays an essential role in treating acute illnesses, relieving chronic conditions, and even preventing diseases before they occur. Medicine has become an integral part of daily life.

In today’s era of advanced medical knowledge, pharmaceuticals have continued to evolve—becoming increasingly precise, safe, and effective.


            </p>
            <a
              href="#"
              className="inline-block mt-8 px-8 py-3 bg-cyan-700 text-white text-lg rounded-md hover:bg-cyan-800 transition-all shadow"
            >
              Register
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}



export default IntroSection2