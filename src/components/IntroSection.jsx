import React from 'react';

function IntroSections() {
  return (
    <div className="bg-white">
      {/* Section 1: Traditional Chinese Medicine */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="container mx-auto max-w-[1320px] px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          {/* ข้อความ */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
              Traditional Chinese Medicine
            </h1>
            <p className="mt-4 text-lx text-gray-600 whitespace-pre-line">
              Acupuncture is an ancient practice rooted in Traditional Chinese Medicine (TCM). It is a therapeutic method with a long-standing history, using fine needles to stimulate specific points on the body in order to balance the flow of life energy (Qi) and activate various bodily systems. The approach focuses on restoring the body’s balance, which is considered a vital part of the healing process.

              Acupuncture stimulates sensory receptors in the nervous system located in different layers of tissue, resulting in the dilation of blood vessels and improved blood circulation. This helps relax tense muscles, enhances flexibility, and promotes the release of natural pain-relieving chemicals while also regulating hormonal balance.

              The World Health Organization (WHO) recognizes acupuncture and lists over 100 conditions that can be effectively treated with it, including neurological disorders, chronic pain, stress-related issues, and other health problems. Acupuncture is not only highly effective but also safe and capable of reducing side effects associated with medication use.
            </p>
            <a
              href="#"
              className="inline-block mt-8 px-8 py-3 bg-cyan-700 text-white text-lg rounded-md hover:bg-cyan-800 transition-all shadow"
            >
              Register
            </a>
          </div>

          {/* รูปภาพ */}
          <div className="w-full md:w-1/2 h-auto md:h-[400px] relative">
            <img
              src="/img2-IntroSection2.JPG"
              alt="Traditional Chinese Medicine"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Conventional Medicine */}
      <section className="bg-white/80 py-16 backdrop-blur rounded-xl shadow-xl mt-10 mx-4">
        <div className="container mx-auto max-w-[1320px] px-6 flex flex-col md:flex-row-reverse items-center gap-12">
          {/* รูปภาพ */}
          <div className="w-full md:w-1/2">
            <img
              src="/img1-IntroSection.jpg"
              alt="Conventional Medicine"
              className="w-full h-auto object-contain rounded-lg shadow-md"
            />
          </div>

          {/* ข้อความ */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
              Conventional Medicine
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Modern medicine refers to medical treatment based on scientific knowledge and Western medical practices used to diagnose and treat diseases. Practitioners in this field must complete a Doctor of Medicine (M.D.) degree and obtain a professional medical license.

Modern medicine relies on advanced technology and pharmaceutical drugs to provide accurate, fast, and effective treatment.
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

export default IntroSections;
