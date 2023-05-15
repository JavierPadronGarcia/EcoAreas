import NavigationBar from "../../components/navbar/NavigationBar";
import newsService from "../../services/news.service";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Details from "../../components/details/Details";

function EachNewPage() {
  const { id } = useParams();
  const [key, setKey] = useState(null);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState([]);
  const [image, setImage] = useState([]);

  const getNews = () => {
    newsService.getOneNew(id).then(data => {
      console.log(data.val())
      setDetails(data.val().details);
      setImage(data.val().img);
      setTitle(data.val().text);
      setKey(data.val().key);
      showNews();
    })
  }

  const showNews = () => {
    return (
      <div>
        <h1>{title}</h1>
        <p>{key}</p>
      </div>
    );
  }

  useEffect(() => {
    showNews()
  })

  return (
    <div className="container">
      <NavigationBar />
      {showNews()}
      <Footer />
    </div>
  );

}

export default EachNewPage;