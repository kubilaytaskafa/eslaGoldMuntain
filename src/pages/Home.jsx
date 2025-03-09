import React from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import dismekan from "../images/dismekan.webp";
import Rooms from "../components/Rooms";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Reservation from "../components/Reservation";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header ve Dropdown */}
      <header id="Home">
        <Header />
        <Dropdown />
      </header>

      {/* Ana İçerik */}
      <main className="flex items-center justify-center flex-col mt-20">
        <section className="relative flex items-center justify-center w-full pt-20">
          {/* Arka Plan Resmi */}
          <div className="absolute inset-0 bg-[url('../src/images/homeBackground.webp')] bg-cover bg-center"></div>

          {/* Overlay (Siyah Opacity Katmanı) */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          {/* İçerik */}
          <div className="relative z-10 text-center text-white container mx-auto flex flex-col items-center justify-start lg:mb-36 mb-14 ">
            <h1 className="text-4xl font-bold shadow-lg mb-6 p-x-4">
              Lüks ve Konforun Adresi
            </h1>
            <p className="text-md lg:text-lg shadow-lg font-bold mb-5">
              Eşsiz manzara ve üstün hizmet kalitesiyle unutulmaz bir tatil
              deneyimi.
            </p>
            <a
              href="#Rezervation"
              className="text-center p-4 bg-primary text-white text-md hover:bg-primaryHover transition duration-150 cursor-pointer rounded-md font-semibold"
            >
              Hemen Rezervasyon Yapın
            </a>
          </div>
        </section>

        {/* About Section */}
        <section
          id="About"
          className="flex items-center justify-center w-full lg:mt-30 mt-24 flex-col"
        >
          <article
            id="About"
            className="flex items-center justify-center flex-col gap-2"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-center font-playfair">
              Esla Gold Mountain Otel'e Hoş Geldiniz
            </h1>
            <div className="h-[3px] w-[80px] bg-primary rounded-xl"></div>
          </article>
          <article className="flex items-center justify-center flex-col lg:flex-row mt-10 gap-4">
            {/* Resim */}
            <div className="w-full lg:w-1/2 rounded-lg flex items-center justify-center">
              <img
                src={dismekan}
                alt="Esla Gold Mountain Otel"
                className="w-full max-w-[400px] lg:max-w-full rounded-3xl p-4 object-cover "
              />
            </div>

            {/* Metin */}
            <div className="flex items-center justify-between gap-4 flex-col p-4 w-full lg:w-1/2 text-gray-800 font-normal text-center lg:text-left ">
              <p className="">
                Esla Gold Mountain Otel, doğanın kalbinde lüks ve konforu bir
                araya getiren eşsiz bir tatil deneyimi sunuyor. Muhteşem dağ
                manzarası eşliğinde, modern tasarım ve geleneksel
                misafirperverliği bir arada yaşayacağınız otelimiz, unutulmaz
                anılar biriktirmeniz için ideal bir seçim.
              </p>
              <p className="mt-1">
                Özenle tasarlanmış odalarımız, dünya standartlarındaki
                restoranlarımız, spa ve wellness merkezimiz ile size özel bir
                tatil deneyimi sunuyoruz. Her detayı düşünülmüş hizmetlerimizle,
                konforunuz için gereken her şeyi sağlıyoruz.
              </p>
              <div className="flex items-start justify-start">
                <button className="bg-primary text-white rounded-lg p-2 hover:bg-primaryHover transition duration-150 cursor-pointer w-32 h-12 t">
                  Detaylı Bilgi
                </button>
              </div>
            </div>
          </article>
        </section>
        <section
          id="Rooms"
          className="flex items-center justify-center w-full lg:mt-30 mt-20 flex-col"
        >
          <article className="flex items-center justify-center flex-col gap-2">
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-center font-playfair">
                Odalarımız
              </h1>
              <div className="h-[3px] w-[80px] bg-primary rounded-xl"></div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap w-full flex-row">
              <Rooms />
            </div>
          </article>
        </section>
        <section
          id="Services"
          className="flex items-center justify-center w-full lg:mt-30 mt-20 flex-col"
        >
          <article className="flex items-center justify-center flex-col gap-2">
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-center font-playfair">
                Hizmetlerimiz
              </h1>
              <div className="h-[3px] w-[80px] bg-primary rounded-xl"></div>
            </div>
            <div>
              <Services />
            </div>
          </article>
        </section>
        <section
          id="Gallery"
          className="flex items-center justify-center w-full lg:mt-30 mt-20 flex-col"
        >
          <article className="flex items-center justify-center flex-col gap-2">
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-center font-playfair">
                Galerimiz
              </h1>
              <div className="h-[3px] w-[80px] bg-primary rounded-xl"></div>
            </div>
            <div>
              <Gallery />
            </div>
          </article>
        </section>
        <section
          id="Reservation"
          className="flex items-center justify-center w-full lg:mt-30 mt-20 flex-col"
        >
          <article className="flex items-center justify-center flex-col gap-2">
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-center font-playfair">
                Rezervasyon
              </h1>
              <div className="h-[3px] w-[100px] bg-primary rounded-xl"></div>
            </div>
            <div className="w-full ">
              <Reservation />
            </div>
          </article>
        </section>
        <section
          id="Contact"
          className="flex items-center justify-center w-full lg:mt-30 mt-20 flex-col"
        >
          <article className="flex items-center justify-center flex-col gap-2">
            <div className="flex items-center justify-center flex-col gap-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-center font-playfair">
                İletişim
              </h1>
              <div className="h-[3px] w-[70px] bg-primary rounded-xl"></div>
            </div>
            <div className="w-full ">
              <Contact />
            </div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
