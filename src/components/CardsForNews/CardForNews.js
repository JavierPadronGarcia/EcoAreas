import "./cardForNews.css";

function cardForNews(props) {
  const ident = props.ident;
  const image = props.image;
  const text = props.text;

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

  const showCard = () => {
    return (
      <div className='Card-container'>
        <div key={ident} className='new-card'>
          <div id='card-image-container'>
            <img src={`/assets/img/news/${image}`} alt='CardImg' />
          </div>
          <div id='card-text-container'>
            <div id='text-title'>{text}</div>
            <div id='link-news'><div><button id="link" onClick={showDetails}>Ver detalles</button></div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showCard()}
    </>
  );
}



export default cardForNews;