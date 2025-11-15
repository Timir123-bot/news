import React from 'react'

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((item, index) => {
        if (!item.urlToImage) return null;

        return (
          <div className="card fade-in" key={index}>
            <img src={item.urlToImage} alt="" />

            <div className="Content">
              <a 
                className="title"
                onClick={() => window.open(item.url)}>
                {item.title}
              </a>

              <p className="url">{item.url}</p>

              <button 
                className="readmore vibrate-button"
                onClick={() => window.open(item.url)}>
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Card;
