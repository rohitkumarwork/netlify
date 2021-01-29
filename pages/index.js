import ClientLayout from "../layouts/clientLayout.js";
import { useState, useEffect } from "react";
import ContentfulClient from "../lib/contentful";
import { withApollo } from '../lib/apollo'

// Components
import MainBanner from "../components/index/mainBanner";
import Process from "../components/index/process";
import Statistics from "../components/index/statistics";
import Blog from "../components/index/blog";

import Pillars from "../components/index/pillarPoints";
import Packages from "../components/index/packages";

import Contact from "../components/generic/contact.js";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    ContentfulClient.getEntries({ content_type: "blogPost" }).then((posts) => {
      setBlogs(posts.items);
    });
  }, []);

  return (
    <ClientLayout>
      <MainBanner />
      <Packages />
      <Pillars style={{ marginTop: 100 }} />
      {/* <Process/> */}
      <Statistics />
      {blogs && <Blog blogs={blogs} />}
      {/* <Contact/> */}
    </ClientLayout>
  );
}

export default withApollo(HomePage)
