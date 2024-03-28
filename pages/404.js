import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Custom404() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <Footer />
    </div>
  )
}
