import React from "react";

const ContactForm = () => {
  return (
    <div className=" w-full h-[500px] ">
      <div className="bg-slate-300 ">
        <div className="cta-form mt-none-10 mb-75">
          <div className="">
            <form className="">
              <div className="form-group mt-10">
                <p>
                  <label id="d">
                    <i className="fal fa-user"></i>
                  </label>
                  <span className="wpcf7-form-control-wrap" data-name="s-name">
                    <input
                      className=""
                      placeholder="Enter your name"
                      value=""
                      type="text"
                      name="s-name"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group mt-10">
                <p>
                  <label id="s">
                    <i className="fal fa-envelope"></i>
                  </label>
                  <span className="wpcf7-form-control-wrap" data-name="s-email">
                    <input
                      className=""
                      placeholder="Enter your email"
                      value=""
                      type="email"
                      name="s-email"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group mt-10">
                <p>
                  <label id="s">
                    <i className="fal fa-book"></i>
                  </label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="s-subject"
                  >
                    <input
                      placeholder="Enter your subject"
                      value=""
                      type="text"
                      name="s-subject"
                    />
                  </span>
                </p>
              </div>
              <div className="form-group mt-10">
                <p>
                  <label id="a">
                    <i className="fal fa-edit"></i>
                  </label>
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="s-textarea"
                  >
                    <textarea
                    //   cols="40"
                    //   rows="10"
                      placeholder="Enter your message"
                      name="s-textarea"
                    ></textarea>
                  </span>
                </p>
              </div>
              <div className="form-group mt-10">
                <p>
                  <input
                    className="wpcf7-form-control wpcf7-submit has-spinner site-btn boxed"
                    type="submit"
                    value="Submit Request"
                  />
                  <span className="wpcf7-spinner"></span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
