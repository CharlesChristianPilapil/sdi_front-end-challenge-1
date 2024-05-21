import useData from "./useData";

export interface NewsData {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: Date;
}

const useNews = () => useData<NewsData>("/news.json");

export default useNews;
