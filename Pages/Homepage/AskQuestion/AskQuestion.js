import React from "react";
import gluimage from "../../../img/hot.jpg";
const AskQuestion = () => {
  return (
    <div className="FrequentlyAskSection featureProduct py-4">
      <div className="container">
        <h2 className="section-title mb-4 featureTitle">
          Frequently Asked Questions
        </h2>
        <div className="row column-reverse-sm">
          <div className="col-md-6 py-3 ">
            <div className="AccordionSec">
              <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How long do glue guns last?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      While it can be very profitable when done well The answer
                      depends on how often the glue gun is used. With average
                      use and care, it should last
                      <strong>between 5 and 10 years.</strong> The lithium-ion
                      battery in a cordless glue gun should last 3 to 5 years,
                      or 300 to 500 full charges
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      For what purpose glue gun is used?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Aside from industrial uses of hot glue, glue guns are used
                      in small joint attachment, surface lamination, and other
                      product assembly applications in appliances, HVAC units,
                      and mattresses. Glue guns can also be used to adhere to
                      small joints in furniture assembly and woodworking
                      projects.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can you leave a glue stick in a glue gun?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Should you remove a glue stick from a glue gun? You should
                      never remove a part-melted glue stick from a glue gun it
                      can damage the applicator. Instead, extrude any remaining
                      molten glue when you've finished using the gun. But leave
                      the in-tact glue stick in the applicator
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Is hot glue waterproof?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The precise answer is yes, hot glue is waterproof. Hot
                      glue is extremely water-resistant and has the capability
                      of dealing with other solvents too. Not only just water,
                      but hot glue can also endure varying temperatures,
                      chemicals, or eroding.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-center mt-5">
            <img src={gluimage} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
