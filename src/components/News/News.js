import React from 'react';
import './News.css';

const News = props => {

  const { news } = props;
  
  const openNewTab = () => {
    const lang = localStorage.getItem("i18nextLng");
    window.open(`/${lang}/detail-news?ref=${news.url}`, "_blank");
  }

  return (
    <div className='news'>
      <div className='news__thumbnail'>
        <img src={news.urlToImage} alt="" />
      </div>
      <div className='news__content'>
        <h2 className='news__content__title'>{news.title}</h2>
        {
          news.author !== "" && <h3 className='news__content__owner'>by {news.author}</h3>
        }
        <p className='news__content__body'>{news.description}</p>
        <span href="#" className='read_more' onClick={() => openNewTab()}>Read more</span>
      </div>
    </div>
  );
}

export default News;
