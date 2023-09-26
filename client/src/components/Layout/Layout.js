import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast"
import Ex from "../Ex.js"


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70px" }}>
        <Toaster />

        {children}
      </main>
    
      <Footer />
      <Ex/>
     
    </div>
  );
};

Layout.defaultProps = {
  title: "Thebandwala - Book Best Bands,Dhol",
  description: "Best service made for you",
  keywords: "Band,Dhol,Ghodi",
  author: "Thebandwala",
};

export default Layout;
