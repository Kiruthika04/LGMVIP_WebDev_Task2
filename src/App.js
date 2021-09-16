import React from "react";
// eslint-disable-next-line
import { useState } from "react";
import Cards from "./components/users";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
        <section className="wholecontainer">
          <div class="topnav" id="myTopnav">
            <a
              rel="noreferrer"
              href="https://srblgmvipt1.netlify.app"
              target="_blank"
              class="active"
            >
              KIRTHI_BRAND
            </a>
            <a href="#getusers" class="btn" onClick={handleClick}>
              Get Users
            </a>
          </div>

          <div className="container">
            <div className="row justify-content-center ">
              {isButtonClick ? (
                isDateLoaded ? (
                  <Cards userData={userData} />
                ) : (
                  <div class="loader"></div>
                )
              ) : (
                <div className="instruction">
                  <p> "We provide Best Brands here!!" </p>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
    </>
  );
}

export default App;