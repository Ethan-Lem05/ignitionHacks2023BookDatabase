import React from "react"

function Navbar() {
    return (
      <div>
        {/* <!-- Navigation Bar --> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="home.html">
              Book Website
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="trending.html">
                    Trending
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="response.html">
                    Book Lists
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="questions.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Q&A
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="questions.html">
                        Common Question 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="questions.html">
                        Common Question 2
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="questions.html">
                        Other Questions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Please enter a book title, genre or name of an author"
                  aria-label="Please enter a book title, genre or name of an author "
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }

export default Navbar
  