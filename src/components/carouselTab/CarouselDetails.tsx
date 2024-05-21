interface Props {
  name: string | undefined;
  title: string;
  body: string;
}

const CarouselDetails = ({ name, title, body }: Props) => {
  return (
    <div className="text-slate-900 flex flex-col gap-5 mt-1 px-2">
      <div>
        <strong className="text-red-600"> {name} </strong>
        <h1 className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-[2.5rem] text-slate-700 font-bold">
          {title}
        </h1>
      </div>
      <p className="text-ellipsis 2xl:text-2xl whitespace-nowrap overflow-x-hidden">
        {body}
      </p>
      <button className="w-fit cursor-pointer relative underline-hover font-bold">
        Read More
      </button>
    </div>
  );
};

export default CarouselDetails;
