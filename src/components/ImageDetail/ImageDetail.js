import React from 'react';

const styles = {
  ImageContainer: {
    top: '115px',
    left: '88px',
    width: '192px',
    height: '288px',
    borderRadius: '24px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const Image = ({ image }) => {
  const imageUrl = image || 'https://assets.api.uizard.io/api/cdn/stream/50c3aee7-b594-4591-9bc0-dbd3079c23eb.png';

  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${imageUrl})`,
    }} />
  );
};

export default Image;