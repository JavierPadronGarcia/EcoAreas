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
          <div id="left-side-container"></div>
          <p id="news">Noticias</p>
          <div id="right-side-container">
            <a href="/login" className="login-link">modificar noticias</a>
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