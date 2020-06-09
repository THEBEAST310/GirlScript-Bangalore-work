import React from "react";
import styles from "./Blog.module.scss";
import { getBlogData } from "../../../services/sheets";

function Blog() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const data = await getBlogData();
      if(data) {
        setBlogs(data);
      }
    })();
  });

  return (
    <section className={styles['blog-section']}>
      {/* The heading should be replaced with the header component */}
      <h2 className={styles['blog-title']}>Our Blogs</h2>

      <div className={styles['blog-list-container']}>
        {blogs.map((elem, index) => {
          return (
            <BlogItem key={index} title={elem["Heading"]} desc={elem["Short Desc"]} img={elem["Image URL"]} link={elem["Medium Link"]} />
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
