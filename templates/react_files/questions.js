import React from "react"
import Navbar from "./navbar"
// import Footer from "./footer"

function Questions (){
    return (
     <div>
        {/* <!-- Q&A PAGE --> */}
    
        {/* <!-- Navigation Bar --> */}
        <Navbar/>
    
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="{{ url_for('home')}}" class="nav-link px-2 text-body-secondary"
               
<form action="#" method = "post">

      {/* <!-- Asks for name of the person-->> */}
      <p style = "margin-left: 50px;"> name </p>
      <p style = "margin-left: 50px;"> <input type="text" name = "name"> </input> </p>


      <p style = "margin-left: 50px;"> Race </p>
        <ul>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "race" value = "Black"> Black </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "race" value =  "East_Asian"> East Asian </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "race" value = "Latinx"> Latinx </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "race" value = "South_Asian"> South Asian </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "race" value = "South_Asian"> South Asian </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "race" value = "White"> White </input> </p>
        </ul>

        <p style = "margin-left: 50px;"> Gender </p>
        <ul>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "gender" value = "Male"> Male </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "gender" value = "Female"> Female </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "gender" value = "Non-binary"> Non-binary </input> </p>
        </ul>

        <p style = "margin-left: 50px;"> Sexuality </p>
        <ul>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "sexuality" value = "Gay/Lesbian"> Gay/Lesbian </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "sexuality" value = "Bisexual"> Bisexual </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "sexuality" value = "Queer"> Queer </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "sexuality" value = "Intersex"> Intersex </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "sexuality" value = "Asexual"> Asexual </input> </p>
        </ul>

        <p style = "margin-left: 50px;"> Religion </p>
        <ul>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Athiest"> Athiest </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Hindu"> Hinduism </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Islam"> Islam </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "Religion" value = "Christianity"> Christianity </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Agnostic"> Agnostic </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Buddhism"> Buddhism </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Judaism"> Judaism </input> </p>
          <p style = "margin-left: 50px;"> <input type="checkbox" name = "religion" value = "Sikhism"> Sikhism </input> </p>

        </ul>

      <p style = "margin-left: 50px;"> <input type="submit" value = "value"/> </p>
    </form>

    {/* <!-- FOOTER --> */}
    <div class="container">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="home.html" class="nav-link px-2 text-body-secondary"
              >Home</a>
          </li>
            <a href="{{ url_for('trending')}}" class="nav-link px-2 text-body-secondary"

              >Trending</a
            >
          </li>
          <li class="nav-item">

            <a href="{{ url_for('response')}}" class="nav-link px-2 text-body-secondary"
              >Book Lists</a
            >
          </li>
          <li class="nav-item">
            <a href="{{ url_for('questions')}}" class="nav-link px-2 text-body-secondary"
              >Q&A</a
              >
          </li>
        </ul>
        <p class="text-center text-body-secondary">© Book Website's name</p>
        </footer>
    </div>
     
    {/* <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
      crossorigin="anonymous"
    ></script> */}
    </div>
   );
}

export default Questions