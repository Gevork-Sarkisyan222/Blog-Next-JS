'use client';

import React from 'react';
import './post.scss';

interface props {
  image: string;
  date: string;
  title: string;
  info: string;
}

const Post: React.FC<props> = ({ image, date, title, info }) => {
  return (
    <div className="Post">
      <img src={image} alt="" />
      <h2>{date}</h2>
      <h1>{title}</h1>
      <p>{info}</p>
      <div className="buttons">
        <button className="first-btn">Leadership</button>
        <button className="second-btn">Management</button>
      </div>
    </div>
  );
};

export default Post;
