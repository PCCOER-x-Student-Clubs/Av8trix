"use client";
import React,{useState} from 'react'
import Nav from "./components/navbar/nav2"
import "./blog.css";

function Blog() {
  const[viewForm, setViewForm]= useState(true);
  let display = viewForm?{display: 'none'}: {display:'flex'};
  let displayBtn = viewForm?{display: 'block'}: {display:'none'};
  return (
    <>
    <Nav />
    <div className="blog_wrapper">
      <div className="publishBtn">
        <button onClick={()=>{
          setViewForm(false)
        }} style={displayBtn}>Add Blog</button>
      </div>
      <div className="publishForm" style={display}>
        <div className="title">Title/ Question
        <input type="text" name="" id="" placeholder='Please Enter Title or Question' />
        </div>
        <div className="desc">Description
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Description'></textarea>
        </div>
        <button onClick={()=>{
          setViewForm(true);
        }}>Publish</button>
      </div>
      <div className="contentSection">
        <div className="title"><h2>Title</h2></div>
        <div className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nobis. Error pariatur, necessitatibus saepe quos, ab eos vel est magni beatae illo eligendi ea illum possimus soluta. Asperiores sint nulla perferendis tempore consequatur temporibus dolore provident nostrum dolorum quidem corporis porro nemo, inventore deserunt earum. Dicta, asperiores eius veritatis qui adipisci quo natus ad consequatur placeat, maxime sit voluptates fuga. Culpa sint accusamus debitis nobis aut! Sint ullam nulla omnis consequuntur ipsam aperiam eos perspiciatis officiis facere accusantium perferendis vitae esse quam natus totam facilis, rerum dolor ea voluptatibus velit voluptatum, molestias repellendus. Dolore iste cumque totam mollitia, illo aut?</div>
      </div>
    </div>
    </>
  )
}

export default Blog