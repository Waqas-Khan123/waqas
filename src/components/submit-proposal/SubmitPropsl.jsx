import React, { useState } from "react";
import Style from "./submitPropsl.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const SubmitPropsl = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState({});
  console.log(preview)
  if (image) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }
  return (
    <div className="container">
      <div className={Style.image__container}>
        <div className={Style.back__image}>
          <img src="/asserts/images/job-detail/jobdetail-back.png" alt="" />
        </div>
      </div>

      <div className={Style.detail__container}>
        <div className={Style.job__detail}>
          {/* your status section  */}
          <div className={Style.status__sctn}>
            <div className={Style.status__title}>
              <h2>Proposal Information</h2>
            </div>
            <div className={Style.status__contents}>
              <div>
                <span className={Style.status__contnt_title}>
                  This proposal requires{" "}
                  <span className={Style.status__contnt_value}>
                    30 connects
                  </span>
                  . When you submit this proposal.
                </span>
              </div>
            </div>
            <hr className="hr__style" />
          </div>
          {/* status__section end  */}

          {/* job description  */}
          <div className={Style.job__description}>
            <div className={Style.desc__title}>
              <h2>Job Details</h2>
            </div>
            <div className={Style.desc__container}>
              <h2>Job Title Here Job Title Here</h2>
              <div className={Style.service__box}>
                <span className={Style.service__title}>
                  <a href="#">UI/UX Designer</a>
                </span>
                <span className={Style.posted__date}>Posted Jun 16, 2023</span>
              </div>
            </div>
          </div>
          {/* job description end  */}
          {/* resposibilities section  */}
          <div className={Style.responsibilites__container}>
            <div className={Style.resp__paras}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo con Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatu
              </span>
            </div>
          </div>

          {/* responsibilites section end  */}
          {/* requirement section  */}
          <div className={Style.requiremnt__container}>
            <div className={Style.list__items}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore . Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore .
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore . Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore .
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                </li>
              </ul>
              <div className={Style.resp__paras}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo con Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatu
                </span>
              </div>
            </div>
            <h2 className={Style.require__scnd__title}>
              What is the full amount you’d like to bid for this job?
            </h2>
            <span className={Style.bidding__title}>Pricing of Project</span>
            <div className={Style.bidding__box}>
              <div className={Style.bidding}>
                <span>No. of bids</span>
                <div className={Style.bid__input__box}>
                  <input type="text" placeholder="Type in your bid no." />
                </div>
              </div>
              <div className={Style.bidding}>
                <span>Your payment</span>
                <div className={Style.bid__input__box}>
                  <div className={Style.payment__box}>
                    <span>$</span>
                    <span>19.50</span>
                  </div>
                </div>
              </div>
              <div className={Style.bidding}>
                <span>Service charges</span>
                <div className={Style.bid__input__box}>
                  <div className={Style.bid__input__box}>
                    <div className={Style.payment__box}>
                      <span>$</span>  
                      <span>19.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="hr__style" />
            {/* how long will it take  */}
            <div className={Style.how__long__will__take}>
              <span>How long will this project take?</span>
              <div className={Style.calender__box}>
                <input type="date" />
              </div>
            </div>
            <hr className="hr__style" />

            <div className={Style.link__sectn}>
              <div className={Style.cover__letter}>
                <span>Add Cover Letter</span>
                <textarea
                  rows="8"
                  placeholder="Enter some info about your and your working experience..."
                ></textarea>
              </div>
              <span className={Style.social__links}>
                Include a link to your GitHub profile or website link
              </span>
              <div className={Style.git__container}>
                <div>
                  <div className={Style.git}>
                    <img src="/asserts/images/submit-proposal/git.png" alt="" />
                    <span>Github</span>
                  </div>
                  <div className={Style.git__inp}>
                    <input type="text" placeholder="Enter Username" />
                  </div>
                </div>
                <div>
                  <div className={Style.git}>
                    <img
                      src="/asserts/images/submit-proposal/website.png"
                      alt=""
                    />
                    <span>Website</span>
                  </div>
                  <div className={Style.git__inp}>
                    <input type="text" placeholder="Enter Website" />
                  </div>
                </div>
              </div>
              <hr className="hr__style" />
              {/* attachment  */}
              <div className={Style.attach__containet}>
              <span>Attachment </span>
              <p>Drag or upload file</p>
                {/* upload code  */}
                <div>
                  <input
                    type="file"
                    id="actual-btn"
                    hidden
                    accept="image/*"
                    name="image"
                    onChange={(e) => setImage(e.currentTarget.files[0])}
                  />
                  <label for="actual-btn">
                  <div>
                    <img
                      src="/asserts/images/submit-proposal/upload.png"
                      alt=""
                    />
                  </div>
                  </label>
                 
                  
                 
                </div>
                {/* -----------------------  */}
              </div>

              {/* boost your proposal  */}
              <div className={Style.boost__container}>
                <h2>Boost your proposal (optional) </h2>
                <p>
                  Bid for one of four boosted spaces at the top of the client’s
                  proposal list
                </p>
                <div className={Style.premium}>
                  <span>How bidding works</span>
                  <span>Premium</span>
                </div>
                <ul className={Style.list}>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu{" "}
                  </li>
                </ul>

                <div className={Style.boost__bidding}>
                  <Row>
                    <Col sm>
                      <div className={Style.boost__bid__box}>
                        <span>Bid: 01</span>
                        <span>
                          13 Connects.{" "}
                          <span className={Style.connects__updated}>
                            2 hours ago
                          </span>
                        </span>
                      </div>
                    </Col>
                    <Col sm>
                      <div className={Style.boost__bid__box}>
                        <span className={Style.bid__five}>Bid: 05</span>
                        <span className={Style.number__of__connects}>
                          0 Connects
                        </span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      {" "}
                      <div className={Style.boost__bid__box}>
                        <span>Your Bid</span>
                        <span>
                          17 Connects.
                          <span className={Style.connects__updated}>
                            Just Now
                          </span>
                        </span>
                      </div>
                    </Col>
                    <Col sm>
                      <div className={Style.set__bid__btn}>
                        <div>
                          <span>+</span>
                          <span>Set a Bid</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr className="hr__style" />
                </div>
                {/* last section  */}
                <div className={Style.last__section__btns}>
                  <button className={Style.send__btn}>
                    Send for 17 Connects
                  </button>
                  <button className={Style.cancel}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropsl;
