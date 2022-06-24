import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "/assets/list.png";
import { useForm } from "react-hook-form";




function Form(){
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
    return (
      <div className="col-md-12 flexy main">
        <div className="col-md-2">&nbsp;</div>

        <div className="col-md-8 flexy">
          <div className="col-md-6">
            <ul className="list-unstyled formy">
              <li>
                {" "}
                <img className=" d-block img-fluid " src={List} alt="Scholar" />
                <h6>Get started quickly</h6>
                <p>
                  Integrate with developer-friendly APIs or choose low-code or
                  pre-built solutions.
                </p>
              </li>
              <li>
                <h6>Support any business model</h6>

                <p>
                  E-commerce, subscriptions, SaaS platforms, marketplaces, and
                  more—all within a unified platform.
                </p>
              </li>
              <li>
                <h6>Join millions of businesses</h6>

                <p>
                  Switch App is trusted by ambitious startups and enterprises of
                  every size.
                </p>
              </li>{" "}
            </ul>
          </div>
          <div className="col-md-1">&nbsp;</div>
          <form onSubmit={handleSubmit(onSubmit)} className="card col-md-5">
            {" "}
            <h4 className="form-header">Create your Merchant account</h4>
            <div className="naime">
              <input
                {...register("exampleRequired", { required: true })}
                placeholder="First Name"
                className="col-md-5"
              />
              {/* <div className="col-md-1">&nbsp;</div> */}
              <input
                {...register("exampleRequired", { required: true })}
                placeholder="Last Name"
                className="col-md-5"
              />
            </div>
            <input
              {...register("exampleRequired", { required: true })}
              placeholder="Last Name"
            />
            <input
              {...register("exampleRequired", { required: true })}
              placeholder="Last Name"
            />
            <input placeholder="Email" />
            <input placeholder="Company Name" />
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
              Already have an account? <a href="#"> Sign In</a>
            </p>
          </form>
        </div>
      </div>
    );
}
export default Form;