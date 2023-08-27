import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

function Trending (){
    return (
    <div>
    {/* <!-- TRENDING PAGE --> */}

    {/* <!-- Navigation Bar --> */}
    <Navbar/>
        
    {/* <!-- TRENDING PAGE BODY --> */}
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./static/assets/images/ataleforthetimebeing.jpeg"
              className="d-block w-100"
              alt="A tale for the time being"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./static/assets/images/doubtingthomas.jpeg"
              className="d-block w-100"
              alt="Doubting Thomas"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./static/assets/images/fiebretropical.jpeg"
              className="d-block w-100"
              alt="Fiebre Tropical"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className="container marketing">
      {/* <!-- Three columns of text below the carousel --> */}
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://i.guim.co.uk/img/media/5c31b21be07d49876dd77ed77b262f9bb458892d/0_441_6634_3981/master/6634.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=586dd064f4de20ec52a235d8686f58b9"
            alt="Ruth Ozenki"
            className="rounded-circle"
            width="140"
            height="140"
          />
          <h2 className="fw-normal">Ruth Ozenki</h2>
          <p>
            Ruth Ozeki is an American-Canadian author, filmmaker and Zen
            Buddhist priest.
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src="https://s26162.pcdn.co/wp-content/uploads/2021/06/Ethan-Rutherford-300x300.jpg"
            alt="Matthew Clark Davison"
            className="rounded-circle"
            width="140"
            height="140"
          />
          <h2 className="fw-normal">Matthew Clark Davison</h2>
          <p>
            Matthew Clark Davison is a writer and educator living in San
            Francisco.
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
        <div className="col-lg-4">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmtrT-IjzY3evHqjX0ZODj7dATCEtDnxIPLPrNR_vx736IYRyN"
            alt="Julián Delgado Lopera"
            className="rounded-circle"
            width="140"
            height="140"
          />
          <h2 className="fw-normal">Julián Delgado Lopera</h2>
          <p>
            Julián Delgado Lopera is a queer Colombian writer and performer.
          </p>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>
        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}

      {/* <!-- START THE FEATURETTES --> */}

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            NightCrawling
            <span className="text-body-secondary">Leila Mottley</span>
          </h2>
          <p className="lead">
            Based on a true crime in 2015 involving institutional exploitation,
            brutality and corruption in the Oakland police department,
            Nightcrawling gives voice to 17-year-old Kiara Johnson, who, after
            her father's death and mother's detention in a rehab facility,
            becomes a sex worker to pay for rent hikes.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="./static/assets/images/nightcrawling.jpeg"
            alt="NightCrawling"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            No Honour
            <span className="text-body-secondary">Awais Khan</span>
          </h2>
          <p className="lead">
            A young woman defies convention in a small Pakistani village, with
            devastating results for her and her family. A stunning, immense
            beautiful novel about courage, family and the meaning of love, when
            everything seems lost...
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img
            src="./static/assets/images/nohonour.jpeg"
            alt="No honour"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            Sour Heart
            <span className="text-body-secondary">Jenny Zhang</span>
          </h2>
          <p className="lead">
            Narrated by the daughters of Chinese immigrants who fled imperiled
            lives as artists back home only to struggle to stay afloat —
            dumpster diving for food and scamming Atlantic City casino buses to
            make a buck — these seven stories showcase Zhang's compassion and
            moral courage, and a darkly funny and intimate rendering of
            girlhood.
          </p>
        </div>
        <div className="col-md-5">
          <img
            src="./static/assets/images/sourheart.jpeg"
            alt="Sour Heart"
            width="500"
            height="500"
          />
        </div>
      </div>

      <hr className="featurette-divider" />

    {/* <!-- /END THE FEATURETTES --> */}
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

export default Trending