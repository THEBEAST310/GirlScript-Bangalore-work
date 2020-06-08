import React from "react";
import styles from "./Blog.module.scss";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Blog Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "https://google.com",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iL12gXXoS9IorW6SNe6xBQHaEK%26pid%3DApi&f=1"
    },
    {
      id: 2,
      title: "Blog Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "https://google.com",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iL12gXXoS9IorW6SNe6xBQHaEK%26pid%3DApi&f=1"
    },
    {
      id: 3,
      title: "Blog Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "https://google.com",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iL12gXXoS9IorW6SNe6xBQHaEK%26pid%3DApi&f=1"
    },
    {
      id: 4,
      title: "Blog Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." + 
      " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," + 
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "https://google.com",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iL12gXXoS9IorW6SNe6xBQHaEK%26pid%3DApi&f=1"
    },
  ];

  return (
    <section className={styles['blog-section']}>
      {/* The heading should be replaced with the header component */}
      <h2 className={styles['blog-title']}>Our Blogs</h2>

      <div className={styles['blog-list-container']}>
        {blogs.map(elem => {
          return (
            <BlogItem key={elem.id} title={elem.title} desc={elem.desc} img={elem.img} link={elem.link} />
          )}
        )}        
      </div>

      {/* The button should be implemented with the custom button component */}
      <button>Go To Medium</button>
    </section>
  );
}

function BlogItem({ title, desc, img, link }) {
  return (
    <div className={styles['blog-item-container']}>
      <div style={{ backgroundImage: `url("${img}")` }} className={styles['blog-item-image']}></div>
      <div className={styles['blog-item-contents']}>
        <h4 className={styles['blog-item-title']}>{title}</h4>
        <div className={styles['blog-item-desc']}>{desc}</div>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles['blog-item-btn']}>Read More</a>
      </div>
    </div>
  );
}

export default Blog;
