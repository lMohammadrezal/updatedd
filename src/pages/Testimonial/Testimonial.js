import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import TestimonialCard from "./TestimonialCard"; // Assuming TestimonialCard is already created
import LanguageContext from "../../Context/LanguageContext";
import LoadingContext from "../../Context/LoadingContext";
import Spinner from "../../components/Spinner/Spinner";

const Testimonial = () => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { language, translations } = useContext(LanguageContext);
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    comment: "",
    profession: "",
    image: "", // This will be replaced by a random color
  });
  const [formError, setFormError] = useState({
    name: false,
    comment: false,
    profession: false,
  });

  const itemsPerPage = 4; // Number of testimonials per page
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from the API
  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);

      try {
        const usersResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = usersResponse.data;

        const commentsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=50"
        );
        const comments = commentsResponse.data;

        const avatarsResponse = await axios.get(
          "https://randomuser.me/api/?results=50"
        );
        const avatars = avatarsResponse.data.results;

        const repeatedUsers = [];
        for (let i = 0; i < 50; i++) {
          repeatedUsers.push(users[i % 10]); // Repeat users' names in a cycle
        }

        const formattedData = repeatedUsers.map((user, index) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          comment: comments[index]
            ? comments[index].body
            : "No comment available",
          image: avatars[index]
            ? avatars[index].picture.thumbnail
            : "https://via.placeholder.com/50",
          profession: "Software Engineer",
        }));

        setTestimonials(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle new testimonial submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    let isValid = true;
    const newErrorState = { name: false, comment: false, profession: false };

    if (!newTestimonial.name) {
      isValid = false;
      newErrorState.name = true;
    }
    if (!newTestimonial.comment) {
      isValid = false;
      newErrorState.comment = true;
    }
    if (!newTestimonial.profession) {
      isValid = false;
      newErrorState.profession = true;
    }

    setFormError(newErrorState); // Set error state for form fields

    if (!isValid) return; // Prevent submission if the form is invalid

    const testimonialToAdd = {
      ...newTestimonial,
      id: Date.now(), // Temporary ID for local state
      image: generateRandomColor(), // Set random color for new testimonial card
    };

    try {
      // Send the testimonial to JSONPlaceholder (simulating POST request)
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/comments",
        {
          name: testimonialToAdd.name,
          email: `${testimonialToAdd.name.toLowerCase()}@example.com`, // Fake email
          body: testimonialToAdd.comment,
          postId: 1, // Arbitrary postId for testing
        }
      );

      // Log user data and HTTP status in the console
      console.log("User Data:", testimonialToAdd);
      console.log("HTTP Status:", response.status);

      // Update localStorage and state
      const updatedTestimonials = [...testimonials, testimonialToAdd];
      setTestimonials(updatedTestimonials);
      localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));

      // SweetAlert success message with user data
      Swal.fire({
        title: translations[language].success,
        html: `
          <p>${translations[language].your_testimonial_has_been_added}</p>
          <p><strong>${translations[language].name}:</strong> ${testimonialToAdd.name}</p>
          <p><strong>${translations[language].profession}:</strong> ${testimonialToAdd.profession}</p>
          <p><strong>${translations[language].comment}:</strong> ${testimonialToAdd.comment}</p>
        `,
        icon: "success",
        confirmButtonText: translations[language].cool,
      });

      // Reset form
      setNewTestimonial({
        name: "",
        comment: "",
        profession: "",
        image: "", // Reset the image field
      });
    } catch (error) {
      console.error("Error sending testimonial to JSONPlaceholder:", error);
      Swal.fire({
        title: "Oops!",
        text: "There was an error submitting your testimonial.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  // Generate a random color for the background of the testimonial card
  const generateRandomColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  // Get current page data for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle pagination button click
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Handle previous and next button clicks
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  const pagesToShow = 5; // You can adjust how many page numbers to show at once
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage < pagesToShow - 1) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  // ...................................................................
  const convertToFarsiDigits = (number) => {
    return number.toString().replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);
  };

  return (
    <div>
      <div
        className="container-xxl py-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="text-center">
            <h5
              className={`section-title ff-secondary text-center text-primary fw-normal ${
                language === "fa" ? "farsi_font_md" : ""
              }`}
            >
              {translations[language].testimonial}
            </h5>
            <h1
              className={`mb-5 ${language === "fa" ? "farsi_font" : ""}`}
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              {translations[language].our_client_say}
            </h1>
          </div>
          {/* ..................................... */}
          {loading ? (
            <Spinner show={loading} className="d-flex justify-content-center align-items-center"/>
          ) : (
            <div className="row">
              {currentTestimonials.map((testimonial) => (
                <div
                  className="col-lg-6"
                  key={testimonial.id}
                  data-aos="zoom-in"
                >
                  <TestimonialCard
                    name={testimonial.name}
                    comment={testimonial.comment}
                    profession={testimonial.profession}
                    image={testimonial.image} // This is now a random color
                  />
                </div>
              ))}
            </div>
          )}

          {/* Add new testimonial */}
          <div className="my-5">
            <h3 className={`${language === "fa" ? "farsi_font_md" : ""}`}>
              {translations[language].share_your_opinion}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={translations[language].your_name}
                  value={newTestimonial.name}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      name: e.target.value,
                    })
                  }
                />
                {formError.name && (
                  <span
                    style={{
                      color: "#dc3545",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {translations[language].name_is_required}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={translations[language].your_profession}
                  value={newTestimonial.profession}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      profession: e.target.value,
                    })
                  }
                />
                {formError.profession && (
                  <span
                    style={{
                      color: "#dc3545",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {translations[language].profession_is_required}
                  </span>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder={translations[language].your_opinion}
                  value={newTestimonial.comment}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      comment: e.target.value,
                    })
                  }
                />
                {formError.comment && (
                  <span
                    style={{
                      color: "#dc3545",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    {translations[language].comment_is_required}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${
                  language === "fa" ? "rounded-3" : ""
                }`}
                style={{
                  fontFamily: `${language === "fa" ? "Rubik" : ""}`,
                  fontWeight: `${language === "fa" ? "900" : ""}`,
                }}
              >
                {translations[language].submit}
              </button>
            </form>
          </div>

          {/* Pagination */}
          <div className="pagination d-flex justify-content-center mt-4">
            <button
              className="btn btn-primary mx-1"
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              <span className={`${language === "fa" ? "farsi_font" : ""}`}>
                {language === "fa" ? "« قبلی" : "« Prev"}
              </span>
            </button>
            {pageNumbers.map((number) => (
              // Important
              <button
                key={number}
                className={`btn btn-primary mx-1 ${
                  currentPage === number ? "active" : ""
                }
                ${language === "fa" ? "farsi_font" : ""}
                `}
                onClick={() => handlePageChange(number)}
              >
                {/* .......................... */}
                {language === "fa" ? convertToFarsiDigits(number) : number}
              </button>
            ))}
            <button
              className="btn btn-primary mx-1"
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              <span className={`${language === "fa" ? "farsi_font" : ""}`}>
                {language === "fa" ? "بعدی »" : "Next »"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
