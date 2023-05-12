import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import NewsCards from "../../components/newsCards/NewsCards";
import TwitterTweet from "../../components/twitterTweet/TwitterTweet";
import "./Newspage.css";

function Newspage() {

  return (
    <div className="container">
      <NavigationBar />
      <div className="news-section">
        <div className="title">
          <div><p id="news">Noticias</p></div>
          <div id="link-modify">
            <a href="/modifyNews" className="modify-link">modificar noticias</a>
          </div>
        </div>
        <NewsCards />
      </div>
      <TwitterTweet />
      <Footer />
    </div>
  );
}

export default Newspage;