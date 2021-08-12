import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-all ease-out">
      {/* Top Image */}
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-md shadow-md" />
      </div>

      {/* Bottom Title */}
      <div className="mt-2">
        <p className="text-lg font-medium">{title}</p>
      </div>
    </div>
  );
}

export default MediumCard;
