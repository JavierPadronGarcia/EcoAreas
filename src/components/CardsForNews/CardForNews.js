import "./cardForNews.css";


function cardForNews(props) {
  const ident = props.ident;
  const image = props.image;
  const text = props.text;
  const linkRef = props.linkRef;


  const showCard = () => {
    return (
      <div className='Card-container'>
        <div key={ident} className='new-card'>
          <div id='card-image-container'>
            <img src={`/assets/img/news/${image}`} alt='CardImg' />
          </div>
          <div id='card-text-container'>
            <div>{text}</div>
            <div id='link-news'><a href={linkRef} id="link">Ir a la noticia</a></div>
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