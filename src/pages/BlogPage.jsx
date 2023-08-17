import React from "react";
import TopPost from "../components/Blog/TopPost";
import RecentPost from "../components/Blog/RecentPost";
import Footer from "../components/UI/Footer";
import MainPost from "../components/Blog/MainPost";

const BlogPage = (props) => {
  return (
    <div>
      <TopPost />
      <RecentPost />
      <MainPost />
      <Footer />
    </div>
  );
};

export default BlogPage;
