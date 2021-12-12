import React from 'react';
import './DetailNews.css'

const DetailNews = () => {

  // const newsLink = localStorage.getItem("news-link");
  
  const search = window.location.search;
  const newsLink = search.split("=")[1];

  return (
    <iframe src={newsLink} className='page'>
    
    </iframe>
  );
}

export default DetailNews;
