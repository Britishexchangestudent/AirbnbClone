import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer p-2 hover:bg-gray-100 transition-all duration-200 hover:scale-105 ease-out hover:animate-pulse">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg shadow-md" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
