import React from 'react'
import { HiOutlineArrowCircleRight } from "react-icons/hi";


function Demo() {
  return (
        <div
            className="relative w-full bg-cover bg-center flex items-center justify-center aspect-[4/3] sm:aspect-[16/6]"
            style={{ backgroundImage: "url('/Demo1.jpg')" }}
          >
            {/* Overlay มืดเพื่อให้ข้อความอ่านง่าย */}
            <div className="absolute inset-0 bg-black/60 z-0 backdrop-brightness-75" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 sm:px-10 md:px-16 max-w-3xl">
              <h3 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                ฟื้นฟูสุขภาพด้วยศาสตร์บำบัดแบบองค์รวม
              </h3>

              <p className="text-white mt-4 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                ปลดปล่อยความเครียด คืนสมดุลให้ร่างกายและจิตใจ
              </p>

              <a
                href="https://www.opl.to/kanhawellness?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExc2tpT0xic0xYZ3UyM0FIUAEel5aku5JkPgPu9VpeBvCrqSErExgCW8sffu7K9ZhVh8rvxZgleu4WuNfAe0Y_aem_oqcKEXWU_dYiPbcL1FWsww"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-cyan-700 text-white text-base sm:text-lg font-medium rounded-md hover:bg-cyan-800 transition-all shadow-md"
              >
                แชทกับเราใน LINE <HiOutlineArrowCircleRight size={20} className="sm:size-6" />
              </a>
            </div>
          </div>
  )
}

export default Demo