import React from 'react'
import { blog, latestArticle, topPosts, latestStories } from "../Data/data"
import { AiOutlineTags } from "react-icons/ai"
import { AiOutlineClockCircle } from "react-icons/ai"
import { AiOutlineComment } from "react-icons/ai"
import { AiOutlineShareAlt } from "react-icons/ai"
import { AiOutlineDown } from "react-icons/ai"
import { Link } from 'react-router-dom'

function HomeCard() {
    return (
        <div>
            <section className='blog'>
                <h4 >The Latest</h4>
                <div className="container grid3">
                    {blog.map((item, index) => (
                        <div className=" boxItem" key={item.id}>
                            <div className="img">
                                <Link to={`/details/${item.id}`} state={{ item }} key={index}>
                                    <img src={item.cover} alt="" />
                                </Link>
                            </div>
                            <div className="details">
                                <div className="tag">
                                    <AiOutlineTags className='icon' />
                                    <a href="/">{item.category}</a>
                                </div>
                                <Link to={`/details/${item.id}`} className="link" state={{ item }} key={index} >
                                    <h4>{item.title}</h4>
                                </Link>
                                <p className='description'>{item.desc.slice(0, 180)}...</p>
                                <div className="date">
                                    <AiOutlineClockCircle className='icon' />
                                    <label htmlFor="">{item.date}</label>
                                    <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                                    <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='articles'>
                <h4> Latest Articles</h4>
                <div className='head'></div>
                <div className='section2'>
                    <div className="grid1">
                        {latestArticle.map((item, index) => (
                            <div className="article">
                                <Link to={`/details/${item.id}`} state={{ item }} key={index}>
                                    <img src={item.cover} alt="" />
                                </Link>
                                <div className="date">
                                    <Link to={`/details/${item.id}`} state={{ item }} key={index}>
                                        <h4>{item.title}</h4>
                                    </Link>
                                    <h6>{item.desc}</h6>
                                    {item.category} /
                                    {item.date}
                                </div>
                            </div>
                        ))}
                        <button className='Load'> <AiOutlineDown />
                            Load More
                        </button>
                    </div>
                    <div className="advertisement">
                        <h2 className='ad'>Advertisement</h2>
                    </div>
                    <div className='randomImage'>
                        <img src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg" alt="" />
                    </div>
                    <div className='topPosts'>
                        <h4>Top Posts</h4>
                        <div className='head'></div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrV2oTSFNjrU4ZYREbYVGmio_DB6fxi-7ZipY1owxz4bd3vtvoqNdTN2CBQX4xE3tA59vUwS39b-8&usqp=CAU&ec=48600113" alt="" />
                        {topPosts.map((item, index) => (
                            <div className="topPost">
                                <Link to={`/details/${item.id}`} state={{ item }} key={index}>
                                    <img src={item.cover} alt="" />
                                </Link>
                                <div>
                                    <Link to={`/details/${item.id}`} state={{ item }}  key={index}>
                                        <h2>{item.title}</h2>
                                    </Link>
                                    <h6>{item.category}/{item.date}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='section3'>
                <h4> latest Stories</h4>
                <div className='head'></div>
                <div className="Stories">
                    {latestStories.map((item) => (

                        <div className='sPost'>
                            <h2>{item.title}</h2>
                            <h6>{item.desc}</h6>
                            <h6>{item.date}</h6>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomeCard;