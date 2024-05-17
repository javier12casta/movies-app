import React from 'react';
import './ImageDetail.css';
import profileImg from '../../assets/profile.svg';

const Image = ({ image }) => {
  const imageUrl = image || profileImg;

  return (
    <div
      className="image__container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
  );
};

export default Image;
