import "../../assets/styles/elements/Blog.scss";
import BlogItem from "../../elements/BlogItem";

function Blog() {
  return (
    <div className="blog">
      <p className="text">Blog</p>
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}

export default Blog;
