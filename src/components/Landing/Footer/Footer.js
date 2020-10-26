import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./footer.scss";

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer">
        <div className="block-1">
          <label>
            all rights reserved by <a>PARNAZ PIRHADI</a>
          </label>
          {/* <img src="/images/logo.png"/>
                    <span>
                    آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی
                    </span>
                    <div className="google-plus">
                        <a href="#">
                            <div className="socialMedia">
                                <i className="icon-linkedin"></i>
                            </div>
                        </a>
                    </div>
                    <div className="google-plus">
                        <a href="#">
                            <div className="socialMedia">
                                <i className="icon-google-plus"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="block-2">
                    <a>سایت دانشگاه تهران</a>
                    <a>سایت بانک انصار</a>
                    <a>سایت فناوران اطلاعات انصار</a>
                </div>
                <div className="block-3"> */}
          {/* <a>سوابق حرفه‌ای</a>
          <a>سوابق تدریس</a>
          <a>مدارک تخصصی</a> */}
        </div>
      </div>
    );
  }
}
export default Footer;
