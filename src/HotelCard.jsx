import React from "react";

const HotelCard = ({ title, description, id, setShowForom }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4" onClick={() => setShowForom(false)}>
          <img
            src="https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg"
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title ? title : "Card Title"}</h5>
            <p className="card-text">
              {description
                ? description
                : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
            </p>
            <div className="row text-align-right">
              <a href="/">Compare packages</a>
            </div>
            <div className="row m-3">
              <div class="row g-0 text-center">
                <div class="col-sm-6 col-md-8 ">
                  <span className="text-left">
                    Best Available Rate Krukshtra
                  </span>
                </div>
                <div class="col-6 col-md-4 text-right">GBP 100.7</div>
              </div>
            </div>
            <div className="row m-3">
              <div class="row g-0 text-center">
                <div class="col-sm-6 col-md-8 text-left">NT</div>
                <div class="col-6 col-md-4 text-right">GBP 131.91</div>
              </div>
            </div>
            <div className="row m-3">
              <div class="row g-0 text-center">
                <div class="col-sm-6 col-md-8 text-left">API Be HUB Bar</div>
                <div class="col-6 col-md-4 text-right">GBP 900.00</div>
              </div>
            </div>
            <div className="row text-align-right">
              <a href="/">more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
