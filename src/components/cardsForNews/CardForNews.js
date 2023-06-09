import { useNavigate } from "react-router-dom";
import "./cardForNews.css";

function CardForNews(props) {
  const ident = props.ident;
  const image = props.image;
  const text = props.text;
  const navigate = useNavigate();

  /*
  const showDetails = () => {
    
    let newsList = document.querySelectorAll('#news-details>div');
    document.getElementById("scollBackButton").style.display = "block";

    for (let index = 0; index < newsList.length; index++) {
      let currElement = newsList[index];
      let hide = !currElement.classList.contains(`button${ident}`);
      newsList[index].style.display = hide ? "none" : "block";
    }

    document.getElementById("news-details").scrollIntoView({ behavior: 'smooth' });
  }
*/
  return (
    <div className='Card-container'>
      <div key={ident} className='new-card'>
        <div id='card-image-container'>
          <img src={image} alt='CardImg' />
        </div>
        <div id='card-text-container'>
          <div id='text-title'>{text}</div>
          <div id='link-news'>
            <div><button id="link" onClick={() => navigate(`/news/${ident}`)}>Ver detalles</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardForNews;
