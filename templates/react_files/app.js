import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

//Need to include Bootstrap link and style.css in all tabs somehow

function App() {
    return (
    <div>
      {/* <!-- HOME PAGE --> */}
  
      {/* <!-- Navigation Bar --> */}
      <Navbar/>
  
    {/* <!-- HOME PAGE BODY --> */}
    <div class="container my-5">
      <div
        class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
      >
        <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 class="display-4 fw-bold lh-1 text-body-emphasis">
            Welcome to the book website!
          </h1>
          <p class="lead">Home of the best book website ever!</p>
          <div
            class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
          >
            <a
              type="button"
              class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              href="/trending"
              >Trending Books</a
            >
            <a
              class="btn btn-outline-secondary btn-lg px-4"
              href="/response"
              >Book Lists</a
            >
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            class="rounded-lg-3"
            src="./static/assets/images/apple-books_reading-now_06122018_big.jpg.large.png"
            alt="Book front app"
            width="370"
          />
        </div>
      </div>
    </div>

      {/* <!-- FOOTER --> */}
      <Footer/>

      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
      ></script>
    </div>
    );
  }
  
export default App;