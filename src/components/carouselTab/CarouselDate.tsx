interface Props {
  day: number;
  month: string;
}

const CarouselDate = ({ month, day }: Props) => {
  return (
    <div
      className="bg-red-600 absolute bottom-0 font-mono -skew-x-[10deg] 
        left-5 -mb-[1rem] h-[4rem] w-[4rem] md:h-[5rem] md:w-[5rem] md:left-10"
    >
      <div className="h-full w-full flex flex-col items-center justify-center relative">
        <p className="text-white font-semibold text-3xl leading-5">{day}</p>
        <p className="text-white font-semibold leading-5"> {month} </p>
        <div className="triangle" />
      </div>
    </div>
  );
};

export default CarouselDate;