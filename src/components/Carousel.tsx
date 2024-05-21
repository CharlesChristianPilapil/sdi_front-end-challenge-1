import useNews from "../hooks/useNews";
import CarouselTab from "./carouselTab/CarouselTab";

const Carousel = () => {
  const { data: newsdata, loading: loadingdata, error: errordata } = useNews();

  return (
    <div>
      {loadingdata && <p> Loading </p>}
      {errordata && <p> Error </p>}
      {newsdata && <CarouselTab data={newsdata} />}
    </div>
  );
};

export default Carousel;
