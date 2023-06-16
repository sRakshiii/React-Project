import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Details.css"
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { BsYoutube } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";
import { BiShareAlt } from "react-icons/bi";
import { detailDesc } from "../Data/data"
import { Link } from 'react-router-dom';


function Details() {
  const value = useLocation().state
  return (
    <div>
      <section className='singlePost'>
        <div className="container">
          <div className="right">
            <h1 className='detailsHead'>{value.item.title}</h1>
            <div className="profile">
              <img src="https://imgs.search.brave.com/fheKHA24ms7oYoRYaBxDV2piKTh8oQQc-2qtESQYCI0/rs:fit:800:930:1/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvNy82/MTgvNTA1L2F2YXRh/ci1pY29uLWZhc2hp/b24tbWVuLXZlY3Rv/ci1hdmF0YXIuanBn" alt="" className='profileimg' />
              <div>
                <h5>Rakshii</h5>
              </div>
              <div className="icons">
                <FaFacebook className='icon' />
                <AiOutlineTwitter className='icon' />
                <GrInstagram className='icon' />
                <BsYoutube className='icon' />
              </div>
            </div>
            <img src={value.item.cover} alt="" className='detailsImg' />
            <h5 className='detailsDesc'>{value.item.desc}</h5>
            <div className='like'>
              <AiTwotoneLike className='likeicon' />
              <h4>Like</h4>
              <BiShareAlt className='shareIcon' />
              <h4>Share</h4>
            </div>
            <hr/>
            <br/> <br/>
            <h4>More from The Siren</h4>
            <hr/> <br/>
          </div>
          <div className='totalfooter'>
            {detailDesc.map((item, index) => (
              <div className="detailDesc" key={index}>
                <Link to={`/details/${item.id}`} state={{ item }}
                  key={index}> <img src={item.cover} alt="" /></Link>
                <Link to={`/details/${item.id}`} state={{ item }}
                  key={index}><h4>{item.title}</h4></Link>
                <div className='footer'>
                  <img src="https://imgs.search.brave.com/fheKHA24ms7oYoRYaBxDV2piKTh8oQQc-2qtESQYCI0/rs:fit:800:930:1/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvNy82/MTgvNTA1L2F2YXRh/ci1pY29uLWZhc2hp/b24tbWVuLXZlY3Rv/ci1hdmF0YXIuanBn" alt="" className='profileimg' />
                  <div>
                    <h5>Rakshii</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details;