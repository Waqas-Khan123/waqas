import React from "react";
import Style from "./jobDetail.module.css";
import Notificatn from '../notification/Notificatn'
const JobDetail = () => {
  return (
    <React.Fragment>
      <div className="container">
      <div className={Style.image__container}>
        <div className={Style.back__image}>
          <img src="/asserts/images/job-detail/jobdetail-back.png" alt="" />
        </div>
      </div>
  
        <div className={Style.detail__container}>
          <div className={Style.job__detail}>
            <div className={Style.job__title__sectn}>
              <div className={Style.header__contnr}>
                <div>
                  <h2 className={Style.title__styling}>
                    Job Title Here Job Title HereJob <br /> Title Here
                  </h2>
                  <div className={Style.data__time__contnr}>
                    <span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.33333 3.66667V1M9.66667 3.66667V1M3.66667 6.33333H10.3333M2.33333 13H11.6667C12.0203 13 12.3594 12.8595 12.6095 12.6095C12.8595 12.3594 13 12.0203 13 11.6667V3.66667C13 3.31304 12.8595 2.97391 12.6095 2.72386C12.3594 2.47381 12.0203 2.33333 11.6667 2.33333H2.33333C1.97971 2.33333 1.64057 2.47381 1.39052 2.72386C1.14048 2.97391 1 3.31304 1 3.66667V11.6667C1 12.0203 1.14048 12.3594 1.39052 12.6095C1.64057 12.8595 1.97971 13 2.33333 13Z"
                          stroke="#888888"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      29 May 2023
                    </span>
                    <span>
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.5293 4.33333V7L9.5293 9M13.5293 7C13.5293 7.78793 13.3741 8.56815 13.0726 9.2961C12.771 10.0241 12.3291 10.6855 11.7719 11.2426C11.2148 11.7998 10.5534 12.2417 9.8254 12.5433C9.09744 12.8448 8.31723 13 7.5293 13C6.74137 13 5.96115 12.8448 5.2332 12.5433C4.50524 12.2417 3.84381 11.7998 3.28666 11.2426C2.7295 10.6855 2.28755 10.0241 1.98602 9.2961C1.68449 8.56815 1.5293 7.78793 1.5293 7C1.5293 5.4087 2.16144 3.88258 3.28666 2.75736C4.41187 1.63214 5.938 1 7.5293 1C9.1206 1 10.6467 1.63214 11.7719 2.75736C12.8972 3.88258 13.5293 5.4087 13.5293 7Z"
                          stroke="#888888"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      5 mins read
                    </span>
                  </div>
                </div>
                <div className={Style.apply__save__btns}>
                  <span className={Style.apply__btn}>
                    <img src="asserts/images/job-detail/apply.png" alt="" />
                    Apply Now
                  </span>
                  
                 
                  
                  <span className={Style.save__btn}>
                    <img src="asserts/images/job-detail/save.png" alt="" />
                    Save Job
                  </span>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
            {/* your status section  */}
            <div className={Style.status__sctn}>
              <div className={Style.status__title}>
                <h2>Your Stats</h2>
              </div>
              <div className={Style.status__contents}>
                <div>
                  <span className={Style.status__contnt_title}>
                    Available Connects
                  </span>
                  <span className={Style.status__contnt_value}>
                    1,289 Connects{" "}
                  </span>
                </div>
                <div>
                  <span className={Style.status__contnt_title}>
                    Proposal for
                  </span>
                  <span className={Style.status__contnt_value}>16 Connect</span>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
            {/* status__section end  */}

            {/* job description  */}
            <div className={Style.job__description}>
              <div className={Style.desc__title}>
                <h2>Job Description </h2>
              </div>
              <div className={Style.desc__container}>
                <div className={Style.desc_first_col}>
                  <div className={Style.all__descps}>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Job Level</span>
                      <span className={Style.descp__value}>Experienced </span>
                    </div>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Experience</span>
                      <span className={Style.descp__value}>1 - 2 Years</span>
                    </div>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Interviewing</span>
                      <span className={Style.descp__value}>4 Persons</span>
                    </div>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Location</span>
                      <span className={Style.descp__value}>Australia </span>
                    </div>
                  </div>
                </div>
                <div className={Style.desc_second_col}>
                  <div className={Style.all__descps}>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Project Length</span>
                      <span className={Style.descp__value}>50 to 55 Days</span>
                    </div>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Budget</span>
                      <span className={Style.descp__value}>30hr/ Week</span>
                    </div>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Proposal</span>
                      <span className={Style.descp__value}>5 to 10</span>
                    </div>
                    <div className={Style.single__descp}>
                      <span className={Style.descp__title}>Created at</span>
                      <span className={Style.descp__value}>10/07/2023</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-5" />
            </div>
            {/* job description end  */}
            {/* resposibilities section  */}
            <div className={Style.responsibilites__container}>
              <h2 className={Style.resp__title}>Responsibilities</h2>
              <div className={Style.resp__paras}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo con Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatu
                </span>
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

            {/* responsibilites section end  */}
            {/* requirement section  */}
            <div className={Style.requiremnt__container}>
              <h2 className={Style.require__title}>Requirements</h2>
              <div className={Style.list__items}>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                </ul>
              </div>
              <h2 className={Style.require__scnd__title}>What’s on Offer</h2>
              <div className={Style.list__items}>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, se
                  </li>
                </ul>
              </div>
            </div>

            <div className={Style.applynow__btn}>
              <span className={Style.apply__btn}>
                <img src="asserts/images/job-detail/apply.png" alt="" />
                Apply Now
              </span>
              
            </div>

            {/* requirement section end  */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobDetail;
