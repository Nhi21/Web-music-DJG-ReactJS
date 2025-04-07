import React, { useState } from 'react';
import './SongItem.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SongItem = ({ video_id, name, desc, image }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handlePlayClick = (e) => {
    console.log("Chuyển đến trang phát nhạc:", name, "ID:", video_id);
    navigate(`/song/${video_id}`);
  };

  return (
    <div className='song-item' 
      onClick={handlePlayClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
    
      <div className="song-item-img-container">
        <img className="song-item-image" src={image} alt={name} />
        {isHover && (
          <div className="overlay">
            <img src={assets.play_icon} alt="Play" className="play-icon" />
          </div>
        )}
      </div>
      <div className="song-item-info">
          <p className="song-title">{name}</p>
          <p className="song-item-desc">{desc}</p>
          <div className="icons">
            <img className="stars" src={assets.rating_starts} alt="Rating" />
            <img className="love" src={assets.like_icon} alt="Like" />   
          </div> 
      </div>
      {/* Nếu đang phát, hiển thị iframe YouTube */}
      {isHover && video_id && (
        <div className="video-container">
          <iframe
            title={name}
            width="100%"
            height="250px"
            src={`https://www.youtube.com/embed/${video_id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default SongItem;
