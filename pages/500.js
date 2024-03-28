import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Custom500() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>500 - Server-side error occurred</h1>
        <p>Sorry, a server-side error occurred. Please try again later.</p>
      </div>
      <Footer />
    </div>
  )
}
