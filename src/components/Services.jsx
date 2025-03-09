import React from "react";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { IoMdRestaurant } from "react-icons/io";
import { BiSolidSpa } from "react-icons/bi";
import { FaSwimmingPool } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Restoran & Bar",
      description:
        "Yerel ve uluslararası lezzetleri sunan restoranımızda damak zevkinize uygun seçenekler bulabilirsiniz.",
      icon: <IoMdRestaurant />,
    },
    {
      id: 2,
      title: "Spa & Wellness",
      description: "Uzman terapistlerimiz eşliğinde rahatlayın ve yenilenin.",
      icon: <BiSolidSpa />,
    },
    {
      id: 3,
      title: "Havuz",
      description:
        "İç ve dış mekan havuzlarımızda serinleyin ve güneşin tadını çıkarın.",
      icon: <FaSwimmingPool />,
    },
    {
      id: 4,
      title: "Fitness Merkezi",
      description:
        "Modern ekipmanlarla donatılmış fitness merkezimizde formunuzu koruyun.",
      icon: <MdOutlineFitnessCenter />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 w-full mt-10">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col items-center justify-center rounded-lg w-full sm:w-1/2 lg:w-1/4 p-4 hover:shadow-xl transition duration-300  hover:scale-105 gap-4 h-full"
        >
          <div>
            <h1 className="text-4xl text-primary">{service.icon}</h1>
          </div>
          <h1 className="text-xl font-bold">{service.title}</h1>
          <p className="text-xl p-x-2 text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
