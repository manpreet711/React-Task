import React, { useState } from "react";
import HotelCard from "./HotelCard";
import NavigationBar from "./NavigationBar";
import MyForm from "./MyForm";

const Home = () => {
  const [showForm, setShowForom] = useState(true);
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="container m-auto">
        <div class="row g-0 text-center">
          <div class="col-sm-6 align-datePromocode  ">
            <input type="date"></input>
            <input type="text" placeholder="PROMO CODE"></input>
          </div>
          <div class="col-4 text-right align-datePromocode">
            <button className=""> CHECK AVAILABILITY</button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="container">
          <HotelCard
            title={"Bedroom one"}
            description={
              "My new desc My new desc My new desc My new descMy new desc My new desc My new desc My new desc My new desc My new desc"
            }
            id={1}
            setShowForom={setShowForom}
            showForm={showForm}
          />
          <HotelCard
            title={"Bedroom two"}
            description={
              "My new desc for bed 2 My new desc for bed 2 My new desc for bed 2 My new desc for bed 2 My new desc for bed 2 My new desc for bed 2 My new desc for bed 2"
            }
            id={2}
            setShowForom={setShowForom}
            showForm={showForm}
          />
          <HotelCard
            title={"Bedroom three"}
            description={
              "My new desc for bed 3 My new desc for bed 3 My new desc for bed 3 My new desc for bed 3 My new desc for bed 3 My new desc for bed 3 My new desc for bed 3"
            }
            id={3}
            setShowForom={setShowForom}
            showForm={showForm}
          />
        </div>
      )}
      {!showForm && <MyForm></MyForm>}
    </>
  );
};

export default Home;
