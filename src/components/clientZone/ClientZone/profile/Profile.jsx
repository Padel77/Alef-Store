import React, { useEffect, useState } from "react";
import { Formik, ErrorMessage, Form, Field } from "formik";
import { registerValidation } from "../../../../ValidationSchema/registerValidation";
import { useTranslation } from "react-i18next";
import axios from "../../../../config/axiosConfig";
const USER_URL = "/users/";
import Spinner from "react-bootstrap/Spinner";
export default function Profile({data}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  console.log(data);
  const hundleSubmit = async (e) => {
    console.log(e);
    setLoading(true);
    try {
      const res = await axios.patch(USER_URL+userid,e, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzUwMTAwMTM0Y2Y0NmE4NDRiMmRkZiIsImlhdCI6MTY4NTM4OTU5NH0.26zyfxpYchRego4180tU958pVPiIu1xM0W4ayxUbzQw",
        },
      });
      console.log(res);
      swal("updated succefully", "You clicked the button!", "success");
      setLoading(false);
    } catch (err) {
      if (!err?.res) {
        swal("updated rejected ", "You clicked the button!", "warning");
        setLoading(false);
      } else if (err.res?.status === 400) {
        setErrMsg("Missing data validation");
      } else if (err.res?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Register Faild ");
      }
      errRef.current.focus();
    }
  };
  const initialValues = {
    firstName: "",
    lastName: "",
    email: data.email,
    phoneNumber: "",
    address: "",
    country: "",
  };
  return (
    <div className="profile box-primary">
      <div className="profile-container">
        <Formik
          className="bg-body text-center"
          initialValues={initialValues}
          validationSchema={registerValidation}
          onSubmit={hundleSubmit}
        >
          <Form id="clientProfile">
            {loading ? (
              <Spinner
                animation="border"
                role="status"
                className="container d-flex align-items-center justify-content-center"
              >
                <span className="visually-hidden ">Loading...</span>
              </Spinner>
            ) : (
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  {/* First name */}
                    <label htmlFor="first_name">
                      {t("client-zone.profile.l-fname")}
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder={data.firstName}
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="p"
                      className="text-danger"
                    />
                  {/* Address*/}
                    <label htmlFor="address">
                      Address
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder={data.address}
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="address"
                      component="p"
                      className="text-danger"
                    />
                    <label htmlFor="address">
                      {t("client-zone.profile.l-country")}
                    </label>
                    <Field
                      type="text"
                      name="country"
                      placeholder={data.country}
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="country"
                      component="p"
                      className="text-danger"
                    />
                </div>
                <div className="col-xs-12 col-md-6">
                  {/* Last name */}
                    <label htmlFor="last_name">
                      {t("client-zone.profile.l-lname")}
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder={data.lastName}
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="p"
                      className="text-danger"
                    />
                  {/* Phone */}
                    <label htmlFor="phone">
                      {t("client-zone.profile.l-phone")}
                    </label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder={data.phoneNumber}
                      className="form-control mb-3 p-3"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />{" "}
                    <ErrorMessage
                      name="phoneNumber"
                      component="p"
                      className="text-danger"
                    />
                  <div className="form-group profile-container-subscribe">
                    <label className="text-danger" htmlFor="unsubscribe">
                      {t("client-zone.profile.l-sub")}
                    </label>
                    <div className="checkbox">
                      <label className="checkbox-label">
                       
                        <span className="checkbox-custom" />
                        &nbsp;
                        <span className="input-title">
                        - if you want {t("client-zone.profile.check")} Profile data Click <span className="text-danger">Save</span> 
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="form-group profile-container-btn">
              <button className="btn btn-primary" type="submit">
                {loading ? (
                  <Spinner
                    animation="border"
                    role="status"
                    className="container d-flex align-items-center justify-content-center"
                  >
                    <span className="visually-hidden ">Loading...</span>
                  </Spinner>
                ) : (
                  <span>{t("client-zone.profile.btn")}</span>
                )}
              </button>
            </div>
          </Form>
          
        </Formik>
      </div>
    </div>
  );
}
