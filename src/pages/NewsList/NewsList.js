import { useEffect, useState } from "react";
import "./NewsList.css";
import News from "../../components/News/News";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-11-12&sortBy=publishedAt&apiKey=482852d15f9546a2b6dbef46e01709c6"
      );

      if (response.status === 200) {
        const responseJSON = await response.json();
        const data = responseJSON.articles;
        setNewsList(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="news__list">
      {newsList.length > 0 && newsList.map((news, i) => <News news={news} key={i} />)}
    </div>
  );
};

export default NewsList;
