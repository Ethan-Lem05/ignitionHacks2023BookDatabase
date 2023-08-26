

function App() {
    return (
      <div>
      {/* <!-- HOME PAGE --> */}
  
      {/* <!-- Navigation Bar --> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="home.html">Book Website</a>
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
                <a className="nav-link active" aria-current="page" href="/home"
                  >Home</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="trending.html">Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="response.html">Book Lists</a>
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
                    <a className="dropdown-item" href="questions.html"
                      >Common Question 1</a
                    >
                  </li>
                  <li>
                    <a className="dropdown-item" href="questions.html"
                      >Common Question 2</a
                    >
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="questions.html"
                      >Other Questions</a
                    >
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
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="home.html" className="nav-link px-2 text-body-secondary"
                >Home</a
              >
            </li>
            <li className="nav-item">
              <a href="trending.html" className="nav-link px-2 text-body-secondary"
                >Trending</a
              >
            </li>
            <li className="nav-item">
              <a href="response.html" className="nav-link px-2 text-body-secondary"
                >Book Lists</a
              >
            </li>
            <li className="nav-item">
              <a href="questions.html" className="nav-link px-2 text-body-secondary"
                >Q&A</a
              >
            </li>
          </ul>
          <p className="text-center text-body-secondary">© Book Website's name</p>
        </footer>
      </div>
    </div>
    );
  }
  
export default App;