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
            <div class="animation_wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 288 288"
              >
                <linearGradient
                  id="PSgrad_0"
                  x1="70.711%"
                  x2="0%"
                  y1="70.711%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stop-color="rgb(95,54,152)"
                    stop-opacity="1"
                  />
                  <stop
                    offset="100%"
                    stop-color="rgb(247,109,138)"
                    stop-opacity="1"
                  />
                </linearGradient>
                <path fill="url(#PSgrad_0)">
                  <animate
                    repeatCount="indefinite"
                    attributeName="d"
                    dur="5s"
                    values="M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
	
	
	M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4
	c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6
	c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8
	C48.9,198.6,57.8,191,51,171.3z;
	
	M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45
	c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2
	c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7
	c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z	"
                  />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
