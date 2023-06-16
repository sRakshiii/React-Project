import React from 'react';
import { Total } from "../Data/data";
import { Link } from 'react-router-dom';

function Food() {
  return (
    <div className='p1'>
    <div className='Main'>
    <section className='section1'>
      <h4>Food</h4>
      <div className='head'></div>
      <div className="allPosts">
        {Total.filter((e) => { return e.class === "food1" }).map((item, index) => (
          <div className="latest1">
            <Link to={`/details/${item.id}`} state={{ item }} key={index}><img src={item.cover} alt="" /></Link>
            <div>
              <Link to={`/details/${item.id}`} state={{ item }} key={index}><h4>{item.title}</h4></Link>
              <h6>{item.desc.slice(0, 180)}</h6>
              <h6>{item.category} / {item.date}</h6>
            </div>
          </div>
        ))
        }
      </div>
    </section>
    <section className='bollyS2'>
      <h4> Top Posts</h4>
      <div className='head'></div>
      <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg" alt="" className='natureImg' />
      <div className="allTopPosts">
        {Total.filter((e) => { return e.class === "food2" }).map((item, index) => (
          <div className="latest2">
            <Link to={`/details/${item.id}`} state={{ item }} key={index}><img src={item.cover} alt="" /></Link>
            <div>
              <Link to={`/details/${item.id}`} state={{ item }} key={index}><h4>{item.title}</h4></Link>
              <h6>{item.desc.slice(0, 180)}</h6>
              <h6>{item.category} / {item.date}</h6>
            </div>
          </div>
        ))
        }
      </div>
      <div className="advertisment">
        <h4>Advertisment</h4>
      </div>
    </section>
    </div>
  </div>
  )
}

export default Food