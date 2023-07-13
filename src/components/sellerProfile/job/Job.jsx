import React from "react";
import Style from "./job.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Pagination from "react-bootstrap/Pagination";
import { Data } from "../data";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
const Job = () => {
  const [key, setKey] = useState("bestjobs");
  // console.log(data.titele)
  return (
    <React.Fragment>
      <div className={Style.jobs__contnr}>
        <div className={Style.second__section}>
          <div className={Style.user__title}>
            <h2>
              Muhammad's Jobs <span>You</span> Might Like
            </h2>
          </div>
        </div>
        <div className={Style.gigs__sectn}>
          <div className={Style.gigs__contnr}>
            <div className={Style.search__box}>
              <input
                type="text"
                placeholder="Search Your Keyword Here..."
                className={Style.search__inpt}
              />
              <button className={Style.search__btn}>Search</button>
            </div>
            {/* best jobs section  */}

            <div className={Style.tabs}>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab
                  eventKey="bestjobs"
                  title="Best Jobs"
                  tabClassName={Style.tab__style}
                >
                  <p className={Style.preference__para}>
                    Browse jobs that match your experience to a client’s hiring
                    preference. Order by most relevant.
                  </p>
                  <div className={Style.job__contnr}>
                    {Data.map((data, index) => {
                      return (
                        <div className={Style.job} key={index}>
                          <Row>
                            <Col sm={12} lg={10}>
                              <div className={Style.job__contnr}>
                                <div className={Style.title__main__contnr}>
                                  <div className={Style.title__sectn}>
                                    <div className={Style.title__contnr}>
                                      <h2>{data.titele}</h2>
                                    </div>
                                    <div className={Style.fix__price__contnr}>
                                      <h3>{data.fixPrice}</h3>
                                    </div>
                                    <div className={Style.job__descptn}>
                                      <p>{data.desc}</p>
                                    </div>
                                  </div>
                                  <div className={Style.props__locatn}>
                                    <div className={Style.propsal}>
                                      <p>Proposals: </p>
                                      <span>{data.propsal}</span>
                                    </div>
                                    <div className={Style.locatn}>
                                      <p>Location:</p>
                                      <span>{data.location}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm={12} lg={2}>
                              <div className={Style.whislist__contnr}>
                                <img
                                  src="asserts/images/seller-page/whislist.png"
                                  alt=""
                                />
                              </div>
                            </Col>
                          </Row>
                          <hr className={Style.hr} />
                        </div>
                      );
                    })}
                  </div>
                </Tab>
                <Tab
                  eventKey="savedjobs"
                  title="SavedJobs"
                  tabClassName={Style.tab__style}
                >
                  <p className={Style.preference__para}>
                    Browse jobs that match your experience to a client’s hiring
                    preference. Order by most relevant.
                  </p>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className={Style.pagination}>
            <Pagination.Prev />
            <Pagination.Item active href="" className={Style.page_item}>
              {1}
            </Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Next />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Job;
