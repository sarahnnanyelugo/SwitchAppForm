import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import List from "./assets/list.png";
import Logo from "./assets/logo.png";
import styled from "styled-components";
import Password from "./Password";
import Flag from "./assets/flag.png";
import Back from "./assets/back.svg";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const DropDownContainer = styled("div")`
  // width: 21em;
  margin: 0 auto;
  margin-left:10px;
`;

const DropDownHeader = styled("div")`
  // margin-bottom: 0.8em;
  padding: 10px;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 300;
  // font-size: 20x;
  color: black;
  background: #ffffff;
  border: solid 1px rgb(211, 203, 203);
  border-radius: 5px;
  width: 100% !important;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  // padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  // box-sizing: border-box;
  color: grey;
  transition: ease 5s !important;
  border: solid 1px rgb(71, 173, 221);
  box-shadow: 0 0 15px 15x rgb(71, 173, 221) important;
  font-size: 11px;
  font-weight: 300;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  border-bottom: 1px solid rgb(211, 203, 203);
  padding: 6px;
`;

function Form() {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  // const pages = ["accountType"];
  // const [switcher, setSwitcher] = useState("accountType");
  // const toggleState = (st) => {setSwitcher(st);}
const [isAccountTypeActive, setIsAccountTypeActive] = useState(true);
const [isRegistrationActive, setIsRegistrationActive] = useState(false);
  // console.log(isOpen);
 const handleClick = (event) => {
   // 👇️ toggle isActive state on click
   setIsAccountTypeActive(!isAccountTypeActive);
   setIsRegistrationActive(!isRegistrationActive);
   console.log(isRegistrationActive);
 };


  return (
    <section>
      <div
        className={"col-md-12 flexy " + (!isAccountTypeActive ? "remove" : "")}
        id="accountType"
        style={{ marginTop: "80px" }}
      >
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-3">
          <h6>
            {" "}
            <img className=" img-fluid " src={Back} alt="Scholar" />
            Back
          </h6>
        </div>

        <div className="col-md-4">
          <h3>
            <img className=" img-fluid " src={Logo} alt="Scholar" />
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="card col-md-10">
            <h5>Get started with Switch App</h5>

            <input type="checkbox" />
            <small>
              {" "}
              <h6>Personal Account</h6>
              <span>
                Shop online or send money. All without sharing your payment
                info.
              </span>{" "}
            </small>

            <input type="checkbox" />
            <small>
              {" "}
              <h6>Merchant Account</h6>
              <span>
                Let your customers Shop online and receive instant settlement.
                All without sharing your payment info.
              </span>{" "}
            </small>
            <button className="formbutton2" onClick={handleClick}>
              Continue
            </button>
          </form>
        </div>
      </div>

      <div
        className={
          "col-md-12 flexy main " + (!isRegistrationActive ? "remove" : "")
        }
        id="register"
      >
        <div className="col-md-1">&nbsp;</div>
        <div className="col-md-1">
          <h6>
            {" "}
            <img className=" img-fluid " src={Back} alt="Scholar" />
            Back
          </h6>
        </div>

        <div className="col-md-8 flexy">
          <div className="col-md-6">
            <ul className="list-unstyled formy">
              <h3>
                <img className=" img-fluid " src={Logo} alt="Scholar" />
              </h3>
              <li>
                {" "}
                <h6>
                  {" "}
                  <img className=" img-fluid " src={List} alt="Scholar" />
                  Get started quickly
                </h6>
                <p>
                  Integrate with developer-friendly APIs or choose low-code or
                  pre-built solutions.
                </p>
              </li>
              <li>
                <h6>
                  {" "}
                  <img className="  img-fluid " src={List} alt="Scholar" />
                  Support any business model
                </h6>

                <p>
                  E-commerce, subscriptions, SaaS platforms, marketplaces, and
                  more—all within a unified platform.
                </p>
              </li>
              <li>
                <h6>
                  <img className=" img-fluid " src={List} alt="Scholar" />
                  Join millions of businesses
                </h6>

                <p>
                  Switch App is trusted by ambitious startups and enterprises of
                  every size.
                </p>
              </li>{" "}
            </ul>
          </div>
          <div className="col-md-1">&nbsp;</div>
          <form onSubmit={handleSubmit(onSubmit)} className="card  col-md-5">
            {" "}
            <h4 className="form-header">Create your Merchant account</h4>
            <div className="naime">
              <input
                {...register("exampleRequired", { required: true })}
                placeholder="First Name"
                className="col-md-5 col-12 "
              />

              <input
                {...register("exampleRequired", { required: true })}
                placeholder="Last Name"
                className="col-md-5  col-12"
              />
            </div>
            <input
              {...register("exampleRequired", { required: true })}
              placeholder="Email"
              className="form-control"
            />
            <input
              {...register("exampleRequired", { required: true })}
              placeholder="Company name"
              className="form-control"
            />
            <div className="col-md-12 col-12 drop">
              {" "}
              <DropDownContainer className="col-md-12 col-12 ">
                <DropDownHeader onClick={toggling}>
                  {" "}
                  <img className=" img-fluid flag" src={Flag} alt="Scholar" />
                  Nigeria
                </DropDownHeader>
                {isOpen && (
                  <DropDownListContainer>
                    <DropDownList>
                      <ListItem> Searching...</ListItem>
                      <ListItem> Nigeria</ListItem>
                      <ListItem> Nigeria</ListItem>
                    </DropDownList>
                  </DropDownListContainer>
                )}
              </DropDownContainer>
            </div>
            <Password />
            <input type="checkbox" />
            <small>
              {" "}
              I agree that Switch App may contact me atthe email address or
              phone number above.{" "}
            </small>
            <button href="#" className="formbutton">
              Create Merchant Account
            </button>
            <p>
              Already have an account?{" "}
              <label onClick={handleClick}> Sign In</label>
            </p>
          </form>
        </div>
      </div>

      {/* <div "col-md-12 flexy main " + (!isSignInActive ? "remove" : "") style={{ marginTop: "80px" }} id="signIn">
        <div className="col-<div className="col-md-1">&nbsp;</div>
        <div className="col-md-3">
          <h6>
            {" "}
            <img className=" img-fluid " src={Back} alt="Scholar" />
            Back
          </h6>
        </div>md-4">&nbsp;</div>

        <div className="col-md-4">
          <h3>
            <img className=" img-fluid " src={Logo} alt="Scholar" />
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="card col-md-10">
            <h5>Sign in to your account</h5>

            <input
              {...register("exampleRequired", { required: true })}
              placeholder="Email"
              className="form-control"
            />
<label style={{float:right}}>Forgot Password?</label>
             <Password />

            <button href="#" className="formbutton">
              Continue
            </button>
            <p>
              Don't have an account?{" "}
              <label onclick={toggling}> Sign up</label>
            </p>
          </form>
        </div>
      </div>

      <div className="col-md-12 flexy " style={{ marginTop: "80px" }}>
<div className="col-md-1">&nbsp;</div>
        <div className="col-md-3">
          <h6>
            {" "}
            <img className=" img-fluid " src={Back} alt="Scholar" />
            Back
          </h6>
        </div>
        <div className="col-md-4">
          <h3>
            <img className=" img-fluid " src={Logo} alt="Scholar" />
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="card col-md-10">
            <h5>Forgot Password</h5>

            <input
              {...register("exampleRequired", { required: true })}
              placeholder="Email"
              className="form-control"
            />

            <button href="#" className="formbutton">
              Continue
            </button>
            <p>Don’t have an account? <label onClick={handleClick}>Sign up</label></p>
          </form>
        </div>
      </div>  */}
    </section>
  );
}
export default Form;
