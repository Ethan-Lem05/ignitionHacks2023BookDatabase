import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

function Questions (){
    return (
     <div>
        {/* <!-- Q&A PAGE --> */}
        {/* <!-- Navigation Bar --> */}
        <Navbar/>

        {/* <!-- Q&A Form --> */}
       <form action="#" method="post" className="row g-3 needs-validation" novalidate>
       <div className="mb-3 needs-validation">
        <label for="validationCustom01" className="form-label"
          >Please enter your first and last name</label
        >

        <div className="input-group has-validation">
          <span className="input-group-text">First and last name</span>
          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div className="invalid-feedback">First and Last Name</div>
        </div>
      </div>
      {/* <!-- Race  --> */}
      <div className="mb-3 needs-validation">
        <label for="validationCustom01" className="form-label"
          >Please select the race</label
        >
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"> Black </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            East Asian
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Latinx
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            South Asian
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"> White </label>
        </div>
      </div>
      {/* <!-- Gender --> */}
      <div className="mb-3 needs-validation">
        <label for="validationCustom01" className="form-label"
          >Please select the gender</label
        >
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"> Male </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Non-binary
          </label>
        </div>
      </div>
      {/* <!-- Sexuality --> */}
      <div className="mb-3 needs-validation">
        <label for="validationCustom01" className="form-label"
          >Please select the Sexuality</label
        >

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Gay/Lesbian
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Bisexual
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"> Queer </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Intersex
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Asexual
          </label>
        </div>
      </div>
      {/* <!-- Religion --> */}
      <div className="mb-3 needs-validation">
        <label for="validationCustom01" className="form-label"
          >Please select the Religion</label
        >

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Athiest
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Hinduism
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"> Islam </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Christianity
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Agnostic
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Buddhism
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Judaism
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Sikhism
          </label>
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </div>
    </form>

    {/* <!-- Footer --> */}
    <Footer/>
    
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script>
    </div>
   );
}

export default Questions