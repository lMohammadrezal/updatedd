import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import LanguageContext from "../../Context/LanguageContext";

const BookingForm = () => {
  const { language,translations } = useContext(LanguageContext);
  const getIranTime = () => {
    // Get the current time in Iran (UTC+3:30)
    const iranTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Tehran",
    });
    const date = new Date(iranTime);
    
    // Format it to match the 'datetime-local' input requirement (YYYY-MM-DDTHH:MM)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Return formatted date in 'YYYY-MM-DDTHH:MM' format
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: getIranTime(), // Set default to Iran's local date and time
    people: "1",
    message: "",
  });

  const [errors, setErrors] = useState({}); // For storing validation errors

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.name.trim()) newErrors.name = translations[language].name_is_required;
    if (!formData.email.trim()) newErrors.email = translations[language].email_is_required;
    if (!formData.datetime.trim()) newErrors.datetime = translations[language].date_and_time_is_required
    if (!formData.message.trim()) newErrors.message = translations[language].special_request_is_required

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: "error",
        title: translations[language].invalid_submission,
        text: translations[language].please_fill_all_required_fields_correctly,
        confirmButtonText:translations[language].ok
      });
      return;
    }

    console.log("Submitting Form Data:", formData);

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts", // Replace with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Log the HTTP status code and response data
      console.log("HTTP Status Code:", response.status); // Logs status code like 200, 201, etc.
      console.log("Response Data:", response.data); // Logs the data returned by the API

      // Show SweetAlert with reservation details and success message
      Swal.fire({
        icon: "success",
        title: translations[language].reservation_saved,
        html: `
          <p><strong>${translations[language].name}:</strong> ${formData.name}</p>
          <p><strong>${translations[language].email}:</strong> ${formData.email}</p>
          <p><strong>${translations[language].date_and_time}:</strong> ${formData.datetime}</p>
          <p><strong>${translations[language].no_of_people}:</strong> ${formData.people}</p>
          <p><strong>${translations[language].special_request}:</strong> ${formData.message}</p>
          <p>${translations[language].your_reservation_has_been_saved_successfully}</p>
        `,
        confirmButtonText:translations[language].ok
      });

      setFormData({
        name: "",
        email: "",
        datetime: getIranTime(), // Reset to Iran's local date and time
        people: "1",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error saving reservation:", error);
      if (error.response) {
        // Log the HTTP status code in case of an error response
        console.log("HTTP Status Code (Error):", error.response.status);
        console.log("Error Response Data:", error.response.data);
      }
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "An error occurred while saving your reservation.",
      });
    }
  };

  return (
    <Fragment>
      <div className="col-md-6 bg-dark d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className={`section-title ff-secondary  text-primary fw-normal ${language==="fa"?"farsi_font_sm text-end":"text-start"}`}>
            {translations[language].reservation}
          </h5>
          <h1 className={`text-white mb-4 ${language==="fa"?"farsi_font_md":""}`}
            data-aos={`${language==="fa"?"fade-left":"fade-right"}`} data-aos-duration="1500"
          >{translations[language].book_a_table_online}</h1>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className={`${language==="fa"?"farsi_font_md":""}`}>{translations[language].your_name}</label>
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating" >
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className={`${language==="fa"?"farsi_font_md":""}`}>{translations[language].your_email}</label>
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="datetime-local"
                    className={`form-control ${errors.datetime ? "is-invalid" : ""}`}
                    id="datetime"
                    value={formData.datetime}
                    onChange={handleChange}
                  />
                  <label htmlFor="datetime" className={`${language==="fa"?"farsi_font_md":""}`}>{translations[language].date_and_time}</label>
                  {errors.datetime && (
                    <div className="invalid-feedback">{errors.datetime}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select
                    className={`form-select ${language==="fa"?"farsi_font_md":""}`}
                    id="people"
                    value={formData.people}
                    onChange={handleChange}
                  >
                    <option value="1">{language==="fa"?"۱ نفر" :"People 1"}</option>
                    <option value="2">{language==="fa"?"۲ نفر"  :"People 2"}</option>
                    <option value="3">{language==="fa"?"۳ نفر"  :"People 3"}</option>
                    <option value="4">{language==="fa"?"۴ نفر"  :"People 4"}</option>
                    <option value="5">{language==="fa"?"۵ نفر"    :"People 5"}</option>
                  </select>
                  <label htmlFor="people" className={`${language==="fa"?"farsi_font_md":""}`}>{translations[language].no_of_people}</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    placeholder="Special Request"
                    id="message"
                    style={{ height: "100px" }}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message" className={`${language==="fa"?"farsi_font_md":""}`}>{translations[language].special_request}</label>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
              </div>
              <div className="col-12">
                <button className={`btn btn-primary w-100 py-3 ${language==="fa"?"rounded-3":""}`} 
                style={{fontFamily:`${language==="fa"?"Rubik":""}`,fontWeight:`${language==="fa"?"900":""}`}}
                type="submit">
                  {translations[language].book_now}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingForm;
