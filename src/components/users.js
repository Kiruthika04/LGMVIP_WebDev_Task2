import React from "react";
import "./style.css";
export default function Cards(props) {
  return (
    <>
      {props.userData.map((user, index) => {
        return (
          <div class="column">
            <div class="image">
              <img src={user.avatar} alt=""></img>
              <div class="details">
                <h2>
                  <span><b>{ user.first_name +' '+ user.last_name }</b></span>
                </h2>
                <p>{user.email}</p>
                <div class="more">
                  <a href="#services" class="read-more">
                    <span> Learn More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}