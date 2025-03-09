import React from "react";

const Reservation = () => {
  return (
    <form className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-2xl space-y-6 mb-16 ">
      {/* Tarih Alanları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="checkIn">Giriş Tarihi</label>
          <input
            type="date"
            id="checkIn"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="checkOut">Çıkış Tarihi</label>
          <input
            type="date"
            id="checkOut"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Yetişkin ve Çocuk Alanları */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="adults">Yetişkin</label>
          <select
            id="adults"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {[...Array(5).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="children">Çocuk</label>
          <select
            id="children"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          >
            {[...Array(4).keys()].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Oda Tipi */}
      <div className="flex flex-col">
        <label htmlFor="roomType">Oda Tipi</label>
        <select
          id="roomType"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        >
          <option value="standard">Standart Oda</option>
          <option value="deluxe">Deluxe Oda</option>
          <option value="suite">Suit Oda</option>
        </select>
      </div>

      {/* Ad Soyad Alanı */}
      <div className="flex flex-col">
        <label htmlFor="name">Ad Soyad</label>
        <input
          type="text"
          id="name"
          placeholder="Adınızı ve Soyadınızı Girin"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      {/* E-posta ve Telefon */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            placeholder="ornek@mail.com"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone">Telefon</label>
          <input
            type="tel"
            id="phone"
            placeholder="05XX XXX XX XX"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Özel İstekler */}
      <div className="flex flex-col">
        <label htmlFor="requests">Özel İstekler</label>
        <textarea
          id="requests"
          placeholder="Özel isteklerinizi buraya yazabilirsiniz"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary h-24"
        />
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        className="w-full bg-[#bfaa90] text-white p-3 rounded-lg hover:bg-[#a6907d] transition-colors"
      >
        Rezervasyon Yap
      </button>
    </form>
  );
};

export default Reservation;
