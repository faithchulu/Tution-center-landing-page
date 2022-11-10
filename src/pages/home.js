import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBBtn,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import heroimage from "../Assets/images/heroimage.jpg";
import image1 from "../Assets/images/image1.jpg";
import image2 from "../Assets/images/image2.jpg";
import image3 from "../Assets/images/image3.jpg";
import image4 from "../Assets/images/image4.jpg";
import image5 from "../Assets/images/image5.jpg";
import image6 from "../Assets/images/image6.jpg";
import image7 from "../Assets/images/image7.png";
import image8 from "../Assets/images/image8.jpg";
import image9 from "../Assets/images/image9.jpg";
import image10 from "../Assets/images/image10.jpg";
import image11 from "../Assets/images/image11.jpg";

const Home = () => {
  const [productimage, setProductimage] = useState(image8);

  const handleClick1 = () => {
    setProductimage(heroimage);
  };

  const handleClick2 = () => {
    setProductimage(image1);
  };

  const handleClick3 = () => {
    setProductimage(image8);
  };

  const handleClick4 = () => {
    setProductimage(image9);
  };

  const handleClick5 = () => {
    setProductimage(heroimage);
  };

  const handleClick6 = () => {
    setProductimage(image1);
  };

  const handleClick7 = () => {
    setProductimage(image8);
  };

  return (
    <div>
      <header>
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: `url(${heroimage})`,
            height: "80vh",
          }}
        >
          <div className="d-flex row justify-content-start h-100">
            <div>
              <MDBNavbar expand="lg" light sticky>
                <MDBContainer fluid>
                  <MDBNavbarToggler
                    aria-controls="navbarExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <MDBIcon fas icon="bars" />
                  </MDBNavbarToggler>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarExample01"
                  >
                    <MDBNavbarNav right className="mb-2 mb-lg-0">
                      <MDBNavbarItem active>
                        <MDBNavbarLink aria-current="page" href="#">
                          Home
                        </MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">Features</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                      </MDBNavbarItem>
                      <MDBNavbarItem>
                        <MDBNavbarLink href="#">About</MDBNavbarLink>
                      </MDBNavbarItem>
                    </MDBNavbarNav>
                  </div>
                </MDBContainer>
              </MDBNavbar>
            </div>
            <div className="text-black w-50">
              GETSTONE
              <h1 className="mb-3">
                Exclusive products made of natural stone. Interior decoration
                and any interior items
              </h1>
              <MDBBtn className="mx-2" color="dark">
                SEND REQUEST
              </MDBBtn>
            </div>
          </div>
        </div>
      </header>
      <main>
        <MDBRow className="p-5">
          <MDBCol md="3" className=" text-wrap">
            <h2> 3 Days</h2>
            <hr className="w-50" />
            <p>Product manufacturing period</p>
          </MDBCol>
          <MDBCol md="3" className=" text-wrap">
            <h2> 10 years</h2>
            <hr className="w-50" />
            <p>Guarantee</p>
          </MDBCol>
          <MDBCol md="3" className=" text-wrap">
            <h2> 300 </h2>
            <hr className="w-50" />
            <p> Stone breeds from all over the world</p>
          </MDBCol>
          <MDBCol md="3" className=" text-wrap">
            <h2> 1th/m &#178;</h2>
            <hr className="w-50" />
            <p>Own production</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="p-5">
          <MDBCol md="6" className=" ">
            <h2>
              Getstone is one of the leading natural stone processing companies
              in Zambia
            </h2>
            <hr className="w-50" />
            <p>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided.
            </p>
            <p>
              But in certain circumstances and owing to the claims of duty or
              the obligations of business it will frequently occur that
              pleasures have to be repudiated and annoyances accepted.
            </p>
            <MDBBtn className="mx-2" color="dark">
              SEND REQUEST
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6">
            <MDBRow>
              <MDBCol>
                <img src={image2} className="img-fluid shadow-4 mb-3" />
                <img src={image1} className="img-fluid shadow-4" />
              </MDBCol>
              <MDBCol>
                <img src={image1} className="img-fluid shadow-4 mb-3" />
                <img src={image5} className="img-fluid shadow-4" />
              </MDBCol>
              <MDBCol>
                <img src={image3} className="img-fluid shadow-4 mb-3" />
                <img src={image1} className="img-fluid shadow-4" />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow
          style={{ backgroundImage: `url(${heroimage})`, height: "60vh" }}
        >
          <MDBCol md="6"></MDBCol>
          <MDBCol md="6" className="p-5">
            <h2>
              The experience of working with natural stone accumulated over many
              years today
            </h2>
            <hr className="w-50" />
            <p>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="6" className="p-5">
            <img src={image7} className="img-fluid mb-5" />
            <h2 className="mb-5">
              FREE
              <br />
              CONSULTAION
            </h2>
            <MDBInput
              label="Phone Number"
              id="form1"
              type="text"
              className="mb-5 w-50"
            />
            <MDBBtn className="mx-2" color="dark">
              SEND REQUEST
            </MDBBtn>
          </MDBCol>

          <MDBCol md="6" className="p-5">
            <MDBRow>
              <MDBCol>
                <img src={image2} className="img-fluid shadow-4 mb-3" />
                <img src={image1} className="img-fluid shadow-4" />
              </MDBCol>
              <MDBCol>
                <img src={image1} className="img-fluid shadow-4 mb-3" />
                <img src={image5} className="img-fluid shadow-4" />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBCol className="p-5">
          <h2 className="text-center"> OUR PROJECTS</h2>

          <MDBCol>
            <MDBRow className="p-5 d-flex justify-content-center align-items-center">
              <MDBCol md="3">
                <img
                  src={image2}
                  style={{ height: "50vh" }}
                  className="img-fluid shadow-4"
                />
              </MDBCol>
              <MDBCol md="3">
                <img
                  src={image3}
                  style={{ height: "50vh" }}
                  className="img-fluid shadow-4"
                />
              </MDBCol>
              <MDBCol md="3">
                <img
                  src={image4}
                  style={{ height: "50vh" }}
                  className="img-fluid shadow-4"
                />
              </MDBCol>
              <MDBCol md="3">
                <img
                  src={image5}
                  style={{ height: "50vh" }}
                  className="img-fluid shadow-4"
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBCol>

        <MDBRow>
          <MDBCol md="6" className="p-5">
            <h2>TYPES OF PRODUCTS</h2>
            <hr className="w-50" />
            <p>
              In a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided.
            </p>
            <img src={productimage} className="img-fluid" />
          </MDBCol>
          <MDBCol md="5" className="p-5">
            <MDBBtn
              outline
              className="mx-2 w-50 p-3 productbutton"
              color="dark"
            >
              Countertops
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick1}
              outline
              className="mx-2 w-50 p-3"
              color="dark"
            >
              Window sills
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick2}
              outline
              className="mx-2 w-50 p-3"
              color="dark"
            >
              Stairs
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick3}
              outline
              className="mx-2 w-50 p-3"
              color="dark"
            >
              Bathrooms and pools
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick4}
              outline
              className="mx-2 w-50 p-3"
              color="dark"
            >
              Fireplaces
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick5}
              outline
              className="mx-2 w-50 p-3"
              color="dark"
            >
              Interior decoration
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick6}
              outline
              className="mx-2  w-50 p-3"
              color="dark"
            >
              Facades
            </MDBBtn>
            <br />
            <MDBBtn
              onClick={handleClick7}
              outline
              className="mx-2 w-50 p-3"
              color="dark"
            >
              Fountains
            </MDBBtn>
            <br />
          </MDBCol>
          <MDBCol md="1"></MDBCol>
        </MDBRow>
        {/* FOOTER */}
        <MDBCol className="p-5" style={{ backgroundColor: "#f6f6f6" }}>
          {/* footer top row */}
          <MDBRow className=" h-50">
            <MDBCol md="6" className="p-5">
              <h2>CONTACT US</h2>
              <hr className="w-50" />
              <p>
                In a free hour, when our power of choice is untrammelled and
                when nothing prevents our being able to do what we like best,
                every pleasure is to be welcomed and every pain avoided.
              </p>
              <MDBInput
                label="Name"
                id="form1"
                type="text"
                className="mb-5 w-50"
              />
              <MDBInput
                label="Phone Number"
                id="form1"
                type="text"
                className="mb-5 w-50"
              />
              <MDBInput
                label="Email"
                id="form1"
                type="text"
                className="mb-5 w-50"
              />
              <MDBBtn className="mx-2" color="dark">
                SEND REQUEST
              </MDBBtn>
            </MDBCol>
            <MDBCol md="6" className="p-5">
              <MDBRow>
                <MDBCol>
                  <img src={image8} className="img-fluid mb-5" />
                  <img src={image10} className="img-fluid mb-5" />
                </MDBCol>
                <MDBCol>
                  <img src={image10} className="img-fluid mb-5" />
                  <img src={image9} className="img-fluid mb-5" />
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

          {/* footer bottom row */}
          <MDBRow>
            <MDBCol md="4">
              <h4>GETSTONE</h4>
              <MDBBtn color="link">Pinterest</MDBBtn> <br />
              <MDBBtn color="link">Facebook</MDBBtn>
              <br />
              <br />
              <br />
              <br />
              <p>&#169; 2010-2022 GETSTONE. All rights reserved</p>
            </MDBCol>
            <MDBCol md="4">
              <h4>CALL US BY PHONE</h4>
              <p>+260 955 234 551 (sales depart.)</p>
              <p>+260 955 234 551 (office.)</p>
              <br />
              <h4>OR WRITE US</h4>
              <p>sale@getstone.me</p>
            </MDBCol>
            <MDBCol md="4">
              <h4>ADDRESS</h4>
              <p>7km. Freedom Way, Lusaka</p>
              <p>Mon-Sat 10:00 - 20:00</p>
              <br />
              <br />
              <MDBBtn color="link">Privacy Policy</MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </main>
    </div>
  );
};

export default Home;
