import React from 'react'
import Style from './clientprofile.module.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ClientProfle = ({ userData }) => {
  let navigate = useNavigate()
  return (
    <div className={`container ${Style.ml40}`}>
      <div className={Style.seller__page__contnr}>
        <div className={Style.user__title}>
          <h2>
            {userData?.first_name} <span>Profile</span>
          </h2>

        </div>
        <Row>
          <Col md={5} lg={3}>
            <div className={Style.cards__container}>
              <div className={Style.user__profile__card}>
                <div className={Style.user__image}>
                  <div className={Style.image}>
                    <img src={userData?.image} alt="" />
                  </div>
                  <img
                    src="asserts/images/seller-page/camera-icon.png"
                    alt=""
                    className={Style.user__camera}
                  />
                </div>
                <div className={Style.user_profile_sectn}>
                  <div className={Style.user__name}>
                    <img
                      src="asserts/images/seller-page/user-profile.png"
                      alt=""
                    />
                    <span className={Style.name}>{userData?.first_name} </span>
                  </div>
                  <div className={Style.user__name}>
                    <img
                      src="asserts/images/seller-page/service-icon.png"
                      alt=""
                    />
                    <span className={Style.service_text}>{userData?.service_Title}</span>
                  </div>
                  <div className={Style.user__name}>
                    <img
                      src="asserts/images/seller-page/verified-icon.png"
                      alt=""
                    />
                    <span className={Style.service_text}>Verified</span>
                  </div>
                </div>
              </div>
              <div className={Style.user__profile__card}>
                <div className={Style.bank_image}></div>
                <div className={Style.bank__amount}>
                  <h2>Rs.{userData?.balance} </h2>
                  <span className={Style.balance__tilte}>
                    Available Balance
                  </span>
                </div>
                <hr className={Style.seprator} />
                <div className={Style.withdraw__sectn}>
                  <div className={Style.withdraw_btn}>Withdraw</div>
                  <div className={Style.withdraw_btn}>Deposit</div>
                </div>
              </div>
              <div className={Style.chat__card}>
                <div className={Style.help_image}></div>
                <div className={Style.help__desc_contnr}>
                  <span className={Style.help__title}>Need Help?</span>
                  <span className={Style.help__desc}>
                    Have questions or concerns regrading your account? Our
                    experts are here to help!.
                  </span>
                  <div className={Style.chat__btn}>
                    <button><Link to={'/contact'} className="text-white">Contact Us</Link></button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className={Style.account__section}>
              <div className={Style.personal__detail__container}>
                <div className={Style.title__section}>
                  <span className={Style.title}>Personal Details</span>
                  <div className={Style.edit__btn}>
                    <a href="#">
                      <img
                        src="/asserts/images/seller-page/edit-icon.png"
                        alt=""
                      />
                      <span onClick={() => { navigate('/signup') }}>Edit</span>
                    </a>
                  </div>
                </div>
                <hr />
                <Row>
                  <Col>
                    <div className={Style.user__detail__sectn}>
                      <div className={Style.personal__detail}>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>Name:</span>
                          <span className={Style.user}>{userData?.first_name} {userData?.last_name}</span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>Email:</span>
                          <span className={Style.user}>{userData?.email}</span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>
                            Date of Birth:
                          </span>
                          <span className={Style.user}>11-10-1997</span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>Address:</span>
                          <span className={Style.user}>
                          {userData?.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* account section  */}
              <div className={Style.personal__detail__container}>
                <div className={Style.title__section}>
                  <span className={Style.title}>Account Settings</span>
                  <div className={Style.edit__btn}>
                    <a href="#">
                      <img
                        src="/asserts/images/seller-page/edit-icon.png"
                        alt=""
                      />
                      <span>Edit</span>
                    </a>
                  </div>
                </div>
                <hr />
                <Row>
                  <Col>
                    <div className={Style.user__detail__sectn}>
                      <div className={Style.personal__detail}>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>Language:</span>
                          <span className={Style.user}>
                          {userData?.language}
                          </span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>Time Zone:</span>
                          <span className={Style.user}>
                            Islamabad, Pakistan
                          </span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>
                            Account Status:
                          </span>
                          {
                            (userData?.account_status === "active"? (<span className={Style.active__status}>
                              <img
                                src="asserts/images/seller-page/active-icon.png"
                                alt=""
                              />
                              <span>{userData?.account_status}</span>
                            </span>)
                            :<span className={Style.active__status}>
                            <span>Not Active</span>
                          </span>)
                          }
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              {/* your stat sec  */}
              <div className={Style.personal__detail__container}>
                <div className={Style.title__section}>
                  <span className={Style.title}>Your Stats</span>
                  <div className={Style.edit__btn}>
                    <a href="#">
                      <img
                        src="/asserts/images/seller-page/edit-icon.png"
                        alt=""
                      />
                      <span>Edit</span>
                    </a>
                  </div>
                </div>
                <hr />
                <Row>
                  <Col>
                    <div className={Style.user__detail__sectn}>
                      <div className={Style.personal__detail}>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>
                            Thepa's:
                          </span>
                          <span className={Style.user}>{userData?.thepa}</span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>
                            Task Performed:{" "}
                          </span>
                          <span className={Style.user}>102 Tasks</span>
                        </div>
                        <div className={Style.user__detail}>
                          <span className={Style.user__nme}>
                            Account Status:
                          </span>
                          <span className={Style.active__status}>
                            <img
                              src="asserts/images/seller-page/active-icon.png"
                              alt=""
                            />
                            <span>active</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
       
      </div>
    </div>
  )
}

export default ClientProfle