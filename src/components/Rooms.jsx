import React from "react";
import { useSelector } from "react-redux";

const Rooms = () => {
  const rooms = useSelector((state) => state.room.rooms);

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full mt-12">
      {rooms.map((room) => (
        <div
          key={room.id}
          className="w-96 h-96 border  rounded-lg   p-4 hover:shadow-xl transition duration-500 ease-in-out hover:scale-105 dur"
        >
          <img src={room.image} alt={room.name} className="w-full rounded-lg" />
          <p className="mt-4 text-xl font-semibold">{room.name}</p>
          <p className="mt-2 text-gray-600">{room.description}</p>
          <div className="flex items-center justify-center gap-2 ">
            <div className="flex items-center gap-2 mt-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primaryHover transition duration-150">
                Detaylı Bilgi
              </button>
              <button className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primaryHover transition duration-150">
                Rezervasyon
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rooms;
