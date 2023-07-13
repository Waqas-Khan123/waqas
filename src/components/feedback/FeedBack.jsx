import React from "react";
import Style from "./feedback.module.css";
import ReactStars from "react-stars";
const FeedBack = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <React.Fragment>
      <div className={Style.comment__box__main__contnr}>
        
          <div className={Style.feedback__page}>
            <div className={Style.feedback__title}>
              <h2>
                Give <span>Feedback</span>
              </h2>
              <p>
                Share youe experience with the community to help them make
                better desicions.
              </p>
              <hr className={Style.hr__style} />
            </div>
            {/* rating section  */}
            <div className={Style.rating}>
              <div className={Style.rating__title}>
                <h2>Rating</h2>
                <p>Please rate the student’s performance</p>
              </div>
              <div className={Style.rating__star__contnr}>
                <div className={Style.service__rating}>
                  <div>
                    <ul className={Style.list__items}>
                      <li>
                        Service as described
                        <p>Did the result match the profile description ?</p>
                      </li>
                    </ul>
                  </div>
                  <div className={Style.star__style}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                      half={false}
                    />
                  </div>
                </div>
                <div className={Style.service__rating}>
                  <div>
                    <ul className={Style.list__items}>
                      <li>
                        Service as described
                        <p>Did the result match the profile description ?</p>
                      </li>
                    </ul>
                  </div>
                  <div className={Style.star__style}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                      half={false}
                    />
                  </div>
                </div>
                <div className={Style.service__rating}>
                  <div>
                    <ul className={Style.list__items}>
                      <li>
                        Service as described
                        <p>Did the result match the profile description ?</p>
                      </li>
                    </ul>
                  </div>
                  <div className={Style.star__style}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={"#ffd700"}
                     half={false}
                    />
                  </div>
                </div>
                <hr className={Style.hr__style} />
              </div>
            </div>

            {/* comment section  */}
            <div className={Style.comnt__sectn}>
              <div className={Style.comnt__titles}>
                <h2>Comment</h2>
                <p>Share your experience with student</p>
              </div>
              <div className={Style.text__box}>
                <textarea
                  rows="5"
                  placeholder="Describe the student’s performance..."
                ></textarea>
              </div>
              <div className={Style.submit__sectn}>
                <button>cancel</button>
                <button>Submit</button>
              </div>
            </div>
          </div>
       
      </div>{" "}
    </React.Fragment>
  );
};

export default FeedBack;
