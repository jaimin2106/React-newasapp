import React from 'react';

const Newsitem = ({ title, description, Imgurl, Newsurl }) => {
  // Default image URL
  const defaultImgUrl = "https://www.legrand.com/ecatalogue/modules/custom/legrand_ecat/assets/img/no-image.png";

  return (
    <div className="card">
      <img src={Imgurl ? Imgurl : defaultImgUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={Newsurl} target="_blank" rel="noreferrer" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Newsitem;