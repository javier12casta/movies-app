import React from 'react';

function PlayerComponent({videoId}) {
  return (
    <div>
    <iframe
      title="YouTube Video Player"
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
    ></iframe>
  </div>
  )
}

export default PlayerComponent;