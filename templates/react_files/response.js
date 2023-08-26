import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

function Response (){
    return (
    <div>
    {/* <!-- BOOK LISTS PAGE --> */}

    {/* <!-- Navigation Bar --> */}
    <Navbar/>

    <div className="d-flex flex-nowrap"><div className="flex-shrink-0 p-3" style="width: 280px;">
{/* <!--    <a href=" {{ url_for('home') }}" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">-->
<!--      <svg className="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>-->
<!--      <span className="fs-5 fw-semibold">The Book Website</span>-->
<!--    </a>--> */}
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
          Genre
        </button>
        <div className="collapse show" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Genre 1</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Genre 2</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Genre 3</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Author
        </button>
        <div className="collapse" id="dashboard-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Author 1</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Author 2</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Author 3</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Author 4</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Processed</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Shipped</a></li>
            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Returned</a></li>
          </ul>
        </div>
      </li>
{/* <!--      <li className="border-top my-3"></li>-->
<!--      <li className="mb-1">-->
<!--        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">-->
<!--          Account-->
<!--        </button>-->
<!--        <div className="collapse" id="account-collapse">-->
<!--          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">-->
<!--            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">New...</a></li>-->
<!--            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Profile</a></li>-->
<!--            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Settings</a></li>-->
<!--            <li><a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Sign out</a></li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </li>--> */}
    </ul>
  </div>
    {/* <!-- BOOK LISTS PAGE BODY --> */}
    <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
    <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
      <svg className="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span className="fs-5 fw-semibold">List group</span>
    </a>
    <div className="list-group list-group-flush border-bottom scrollarea">
      <a href="#" className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small>Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>

      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Wed</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Tues</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <strong className="mb-1">List group item heading</strong>
          <small className="text-body-secondary">Mon</small>
        </div>
        <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
      </a>
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

export default Response