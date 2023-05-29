import React from "react";

const NavigationBar = () => {
  return (
    <>
      <div class="container display-flex bg-light m-auto navs mt-4">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            Rates
          </a>
        </nav>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            Add Ons
          </a>
        </nav>
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            Confirmation
          </a>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
