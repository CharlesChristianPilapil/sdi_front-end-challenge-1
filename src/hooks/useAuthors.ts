import useData from "./useData";

interface AuthorData {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}

const useAuthors = () => useData<AuthorData>("/authors.json");

export default useAuthors;
