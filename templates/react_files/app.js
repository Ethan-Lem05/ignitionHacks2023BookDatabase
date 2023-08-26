import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

function App() {
    return (
      <div>
      {/* <!-- HOME PAGE --> */}
  
      {/* <!-- Navigation Bar --> */}
      <Navbar/>
  
      {/* <!-- HOME PAGE BODY --> */}
  
      <div className="container my-5">
        <div
          className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
        >
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Welcome to the book website!
            </h1>
            <p className="lead">Home of the best book website ever!</p>
            <div
              className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
            >
              <a
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                href="trending.html"
                >Trending Books</a
              >
              <a
                className="btn btn-outline-secondary btn-lg px-4"
                href="response.html"
                >Book Lists</a
              >
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="./images/apple-books_reading-now_06122018_big.jpg.large.png"
              alt="Book front app"
              width="370"
            />
          </div>
        </div>
      </div>
      {/* <!-- FOOTER --> */}
      <Footer/>
    </div>
    );
  }
  
export default App;