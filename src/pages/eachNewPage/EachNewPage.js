import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AsideCardsForNews from "../../components/asideCardsForNews/AsideCardsForNews";
import NavigationBar from "../../components/navbar/NavigationBar";
import Details from "../../components/details/Details";
import newsService from "../../services/news.service";
import Footer from "../../components/footer/Footer";
import "./EachNewPage.css";

function EachNewPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const data = await newsService.getOneNew(id);
      const information = {
        key: data.key,
        id: data.val().id,
        img: data.val().img,
        text: data.val().text,
        details: data.val().details
      };
      setNews(information);
    };
    getNews();
  }, [id]);

  //show the uncompleted page until get the firebase data
  if (!news) {
    return (
      <div className="container">
        <NavigationBar />
        <div className="new-content">
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="container">
      <NavigationBar />
      <div className="main-container">
        <div className="new-content">
          <div className="title-container">
            <h2>{news.text}</h2>
          </div>
          <div className="img-container">
            <img src={news.img[0]} alt="information" />
          </div>
          <div className="details">
            <Details Object={news.details} />
          </div>
        </div>
        <div className="aside-container">
          <h3>Más noticias</h3>
          <aside className="aside-content">
            <div>
              <AsideCardsForNews />
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EachNewPage;