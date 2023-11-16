import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartImg from "../assets/images/webp/ChartImg.webp";
import { ScheduleGreen } from "./IconImg";
import { Clients } from "./IconImg";
import { Reports } from "./IconImg";
import { Services } from "./IconImg";
import { Purpleflower, Greenflower, Orangeflower, Blueflower } from "./IconImg";

const CustomerExperience = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centreMode: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Features" className="BgBlue py_Experience mb_negative">
      <Container>
        <Row className="py_chart">
          <Col
            lg={5}
            className="d-flex flex-column justify-content-center align-items-lg-start align-items-center"
          >
            <h2
              className="ff-roboto lh_111 text-lg-start text-center text-capitalize fs_8xl fw-medium text-black mb-0 pb-3"
              data-aos="fade-right"
            >
              Let your customer experience shine
            </h2>
            <p
              className="fw-lighter lh_160 text-lg-start text-center text-black ff-HelveticaNeue fs-6md mw_409 mb-0 pb-4"
              data-aos="fade-right"
            >
              Automated client rating, provides instant feedback on client
              booking history, partner this with your own Loyalty program.
            </p>
            <button
              className="Yellow_btn text-white fs_6md fw-normal ff-roboto mt-2"
              data-aos="fade-right"
            >
              Free Trial
            </button>
          </Col>
          <Col lg={7}>
            <div className="position-relative">
              <img
                src={ChartImg}
                alt="ChartImg"
                className="w-100 pt-4 pt-lg-0"
                data-aos="fade-left"
              />
              <div
                className="White_box position-absolute bottom-0 d-none d-sm-block"
                data-aos="fade-left"
              >
                <div className="Yellow_box">
                  <p className=" text-black lh_150 fs_2dm fw-medium ff-HelveticaNeue mb-0">
                    1:00 - 7:00
                  </p>
                  <p className=" ff-HelveticaNeue lh_150 fs_sm fw-medium text-black mb-0">
                    Half Day
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="pb_features">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2
            className="fw-medium lh_111 fs_8xl text-white text-center ff-roboto mb-0 pb-2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Features
          </h2>
          <p
            className="text-center ff-HelveticaNeue fs_6md lh_160 text-white fw-lighter mw_558 mb-0 pb-5"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            ShakeYourTail provides your business with the following key features
            to run an successful dog grooming business.
          </p>
        </div>
        <Slider {...settings}>
          <div
            className="px_12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="Features_Card1 position-relative">
              <div className="position-absolute purple-flower">
                <Greenflower />
              </div>
              <ScheduleGreen />
              <h4 className="fs_6md ff-roboto fw-medium lh_111 text-black mb-0 pb-2">
                Schedule
              </h4>
              <p className="mb-0 opacity_07 fs_6md lh_150 fw-lighter ff-HelveticaNeue mw_227">
                Powerful and easy to use, book appointments for your team
                members and view a colour coded schedule, at a glance.
              </p>
            </div>
          </div>
          <div
            className="px_12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="Features_Card2 position-relative">
              <div className=" position-absolute purple-flower">
                <Purpleflower />
              </div>
              <Clients />
              <h4 className="fs_6md ff-roboto fw-medium lh_111 text-black mb-0 pb-2">
                Clients & Pets
              </h4>
              <p className="mb-0 opacity_07 fs_6md lh_150 fw-lighter ff-HelveticaNeue mw_227">
                Managing your Clients is effortless; Record Client details, view
                appointment history, breed, photos, medical notes, vet contact,
                groom note Client loyalty and more.
              </p>
            </div>
          </div>
          <div
            className="px_12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="Features_Card3 position-relative">
              <div className="purple-flower position-absolute">
                <Orangeflower />
              </div>
              <Reports />
              <h4 className="fs_6md ff-roboto fw-medium lh_111 text-black mb-0 pb-2">
                Reports
              </h4>
              <p className="mb-0 opacity_07 fs_6md lh_150 fw-lighter ff-HelveticaNeue mw_227">
                Report and export client details, appointments, marketing, no
                shows and more..
              </p>
            </div>
          </div>
          <div
            className="px_12"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="Features_Card4 position-relative">
              <div className="purple-flower position-absolute">
                <Blueflower />
              </div>
              <Services />
              <h4 className="fs_6md ff-roboto fw-medium lh_111 text-black mb-0 pb-2">
                Services
              </h4>
              <p className="mb-0 opacity_07 fs_6md lh_150 fw-lighter ff-HelveticaNeue mw_227">
                Add custom services to appointments, supplementary treatments,
                collection and drop offs, promotion packages and more.
              </p>
            </div>
          </div>
        </Slider>

        <div className="d-flex justify-content-center pt-5">
          <button
            className="Yellow_btn text-white fs_6md fw-medium ff-roboto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            View All Features
          </button>
        </div>
      </Container>
    </div>
  );
};

export default CustomerExperience;
