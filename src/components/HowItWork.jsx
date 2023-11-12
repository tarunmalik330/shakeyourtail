import React from "react";
import Container from "react-bootstrap/Container";
import { YellowLock } from "./IconImg";
import { Key } from "./IconImg";
import { Customise } from "./IconImg";
import { Done } from "./IconImg";
import Timelinebell1 from "../assets/images/webp/Timeline_bell1.webp";
import Timelinebell2 from "../assets/images/webp/Timeline_bell2.webp";
import Timelinebell3 from "../assets/images/webp/Timeline_bell3.webp";
import Timelinebell4 from "../assets/images/webp/Timeline_bell4.webp";

const HowItWork = () => {
  return (
    <div className="pt_work">
      <Container>
        <h2
          className="fs_8xl text_black12 ff-roboto fw-medium lh_111"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          How It Work
        </h2>
        <p
          className="mw_585 fs_6md fw-light lh_160 mb-0 pb-3"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          ShakeYourTail is an online scheduling and CRM service & is super easy
          to use, you can trial our premier service free for 30 days.
        </p>
        <div
          className="timeline position-relative d-flex pt-5 flex-lg-row flex-column"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div
            className="Container1 d-flex justify-content-lg-center justify-content-start"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="content position-relative">
              <YellowLock />
              <p className="fs_md fw-medium lh_111 ff-roboto text_black12 mb-0 pt_12">
                Register
              </p>
              <p className="fs_6md ff-HelveticaNeue lh_150 mb-0 text_black12 opacity_07 pt-2">
                Create a account
              </p>
              <div className="timeline_bell1">
                <img src={Timelinebell1} alt="Timelinebell1" />
              </div>
            </div>
          </div>
          <div
            className="Container1 d-flex justify-content-lg-center justify-content-start"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="content position-relative">
              <Key />
              <p className="fs_md fw-medium lh_111 ff-roboto text_black12 mb-0 pt_12">
                Login
              </p>
              <p className="fs_6md ff-HelveticaNeue lh_150 mb-0 text_black12 opacity_07 pt-2">
                Create a account
              </p>
              <div className="timeline_bell1">
                <img src={Timelinebell2} alt="Timelinebell2 " />
              </div>
            </div>
          </div>
          <div
            className="Container1 d-flex justify-content-lg-center justify-content-start"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="content position-relative">
              <Customise />
              <p className="fs_md fw-medium lh_111 ff-roboto text_black12 mb-0 pt_12">
                Customise
              </p>
              <p className="fs_6md ff-HelveticaNeue lh_150 mb-0 text_black12 opacity_07 pt-2 mw_172">
                Customise your emails, SMS & settings.
              </p>
              <div className="timeline_bell2">
                <img src={Timelinebell3} alt="Timelinebell3" />
              </div>
            </div>
          </div>
          <div
            className="Container1 d-flex justify-content-lg-center justify-content-start"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="content position-relative">
              <Done />
              <p className="fs_md fw-medium lh_111 ff-roboto text_black12 mb-0 pt_12">
                Done
              </p>
              <p className="fs_6md ff-HelveticaNeue lh_150 mb-0 text_black12 opacity_07 pt-2 mw_200">
                You're Ready to Rock! Add clients & start booking appointments.
              </p>
              <div className="timeline_bell2">
                <img src={Timelinebell4} alt="Timelinebell4" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWork;
