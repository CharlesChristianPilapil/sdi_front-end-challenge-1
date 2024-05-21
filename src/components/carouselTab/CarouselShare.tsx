import { PiShareFatLight } from "react-icons/pi";

const CarouselShare = () => {
  return (
    <div className="flex justify-end border-b-[1px] border-b-black/10 py-3 px-2">
      <span className="flex items-center justify-end gap-1 cursor-pointer w-fit text-slate-800 hover:text-red-700">
        <PiShareFatLight /> <p className="font-semibold"> SHARE </p>
      </span>
    </div>
  );
};

export default CarouselShare;
