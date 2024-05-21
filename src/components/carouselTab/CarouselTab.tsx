import { NewsData } from "../../hooks/useNews";
import carouselTabHelper from "../../utils/carouselTabHelper";
import { activeNewsConst } from "../../utils/constants";
import CarouselDate from "./CarouselDate";
import CarouselDetails from "./CarouselDetails";
import CarouselShare from "./CarouselShare";

interface Props {
  data: NewsData[];
}

const CarouselTab = ({ data }: Props) => {
  const details = data[activeNewsConst];
  const { name, image, month, day, title, body } = carouselTabHelper(details);

  if (!details) return <p> Please wait for the data... </p>;

  const imgStyle =
    "object-cover rounded object-top w-full max-h-[18rem] sm:max-h-[18rem] md:max-h-[22rem] lg:max-h-[28rem] xl:max-h-[35rem] 2xl:max-h-[42rem]";

  return (
    <article>
      <div className="relative">
        <img src={image} alt={title} className={imgStyle} />
        <CarouselDate month={month} day={day} />
      </div>
      <CarouselShare />
      <CarouselDetails title={title} name={name} body={body} />
    </article>
  );
};

export default CarouselTab;
