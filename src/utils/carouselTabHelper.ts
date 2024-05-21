import useAuthors from "../hooks/useAuthors";
import { NewsData } from "../hooks/useNews";
import { imagesConst } from "./constants";

const carouselTabHelper = (details: NewsData) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: author } = useAuthors();

  const image = imagesConst.find((entry) => entry.includes(details?.image_url));
  const authorName = author.find((entry) => entry.id === details?.author_id);

  const dateString = details?.created_at;

  const date = new Date(dateString);

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  return {
    image,
    name: authorName?.name,
    month,
    day,
    title: details?.title,
    body: details?.body,
  };
};

export default carouselTabHelper;
