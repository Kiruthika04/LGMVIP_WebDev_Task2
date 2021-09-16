import React from "react";
import "./style.css";

function footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>KIRTHI_BRAND</h1>
            <ul>
              <li>
                Contact: <a href="mailto:xyz@gmail.com">contact@kirthibrand.com</a>
              </li>
              <li>
                Tel: <a href="tel: +123456789012">+91 012-345-6789</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default footer;