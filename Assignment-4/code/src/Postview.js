import React from 'react';
import './Postview.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Postview = () => {

  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3004/user")
      .then(res => setPost(res.data));
    console.log(posts)
    // fetch("http://localhost:3004/user")
    // .then((res)=>res.json())
    // .then((data)=>setPost(data))
    // console.log(posts)
  }, []);
  // React.useEffect(()=>{
  //   axios.get("http://localhost:3004/user").then(res=>{
  //     setPost(res.data);
  //     console.log(posts)
  //   })
  // },[]);
  return (
    <div className="site-container">
      <div className='header'>
        <h1>InstaClone</h1>
        <img className='img-top' src='https://cdn-icons.flaticon.com/png/512/2956/premium/2956744.png?token=exp=1644816275~hmac=e525d1a8847dcc056850e512ef1680f5' alt="image-icon" />
      </div>
      <div className='parent'>
        {posts.map((post, index) => {
          return (
            <div className='mid1'>
              <h3>{post.name}</h3>
              <p>{post.location}</p>
              <p className='threedots'>...</p>
              <div>
                <img className='photo' src={post.PostImage} alt="phot1" />
              </div>
              <img className='icon' style={{ width: "20px", height: "20px" }} src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff1%2FHeart_coraz%25C3%25B3n.svg%2F1200px-Heart_coraz%25C3%25B3n.svg.png&sp=1644817446Ted74a1619ef27eb8355f16d1bdebc9e509f479d35ad37aa0a412dcb07fd793db' alt="photo2" />
              <img style={{ width: "20px", height: "20px" }} src='https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.transum.org%2FNewsletter%2Fimages%2FArrow.png&sp=1644818177T198e7f9fa4d15214d5b43ed784d63cf8d2e71d6da445f006fab9c0970a4a6ead' alt="photo3" />
              <p className='date'>{post.date}</p>
              <p> {post.likes} likes</p>
              <h3>{post.description}</h3>
            </div>
          );
        })}
      </div>
      );
    </div>
  );
}

export default Postview;
