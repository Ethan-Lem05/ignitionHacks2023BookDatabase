import React from "react"

function Footer() {
  return (
    <div>
      {/* <!-- FOOTER --> */}
      <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="/"
              className="nav-link px-2 text-body-secondary"
              >Home</a
            >
          </li>
          <li className="nav-item">
            <a
              href="/trending"
              className="nav-link px-2 text-body-secondary"
              >Trending</a
            >
          </li>
          <li className="nav-item">
            <a
              href="/response"
              className="nav-link px-2 text-body-secondary"
              >Book Lists</a
            >
          </li>
          <li className="nav-item">
            <a
              href="/questions"
              className="nav-link px-2 text-body-secondary"
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

export default Footer
