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
        <p>Noticias</p>
        <NewsCards />
      </div>
      <TwitterTweet />
      <Footer />
    </div>
  );
}

export default Newspage;