import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle={"About Page"}>
      <title>About Me</title>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <Link to="/">Index</Link>
    </Layout>
  )
}
// Step 3: Export your component
export default AboutPage