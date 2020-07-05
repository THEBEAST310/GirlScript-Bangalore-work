import Headings from "../../Headings/Headings";
import React from "react";
import styles from "./Blog.module.scss";
import { getData as getBlogData, dataKeys } from "../../../services/blog";
import Button from "../../Button/Button";

function Blog() {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getBlogData();
    if (data) {
      setBlogs(data);
    }
  };

  return (
    <section className={styles["blog-section"]}>
      <Headings>OUR BLOGS</Headings>
      <div className={styles["blog-list-container"]}>
        {blogs.map((elem, index) => {
          return (
            <BlogItem
              key={index}
              title={elem[dataKeys.title]}
              desc={elem[dataKeys.description]}
              img={elem[dataKeys.img]}
              link={elem[dataKeys.link]}
            />
          );
        })}
      </div>

      <Button href="https://medium.com/@girlscriptblr">Go To Medium</Button>
    </section>
  );
}

function BlogItem({ title, desc, img, link }) {
  return (
    <div className={styles["blog-item-container"]}>
      <div
        style={{ backgroundImage: `url("${img}")` }}
        className={styles["blog-item-image"]}
      ></div>
      <div className={styles["blog-item-contents"]}>
        <h4 className={styles["blog-item-title"]}>{title}</h4>
        <div className={styles["blog-item-desc"]}>{desc}</div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles["blog-item-btn"]}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Blog;
