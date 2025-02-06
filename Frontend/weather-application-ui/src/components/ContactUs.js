import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import { useFormik } from "formik";
import * as Yup from "yup";
import { senContactUsMessage } from "../service/api";
import '../styles/contactUs.css'

const ContactUs = () => {

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [successBgColor, setSuccessBgColor]=useState("");
  

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name should not contain more than 20 characters")
      .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {

      setIsSubmitted(true);

      try{
        // throw Error("custom error");

        const payloadData = {
          fromMailId: values.email,
          fromName: values.name,
          body: values.message,
        };
        
        await senContactUsMessage(payloadData);

        resetForm();
        setSuccessMsg("Message Sent Successfully!")
        setSuccessBgColor("#4caf50")
      }
      catch(error)
      {
        setSuccessMsg("Something went wrong, please try again after some time!");
        setSuccessBgColor("#af4c4c");
        
      }finally {
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
      
    },
  });

  return (
    <section
      className="d-flex align-items-center"
      style={{
        minHeight: "90vh",
        background:
          "linear-gradient(159deg, rgba(252,177,123,1) 0%, rgba(12,176,250,1) 100%)",
        padding: "100px 0",
      }}
    >
      {isSubmitted && (
        <div className="success-popup" style={{backgroundColor: successBgColor}}>
          <p>{successMsg}</p>
        </div>
      )}
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={5} md={6} className="mb-4">
            <Card
              className="border-0 shadow-lg text-light p-4"
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(8px)",
                borderRadius: "14px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h2 className="fw-bold mb-3">Contact Us</h2>
              <p className="mb-4">
                We'd love to hear from you! Reach out with any questions.
              </p>
              <div className="d-flex align-items-center mb-3">
                <BsGeoAlt size={24} className="text-warning me-3" />
                <span className="fw-medium">
                  Madhapur, Hyderabad, Telangana 50081
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <BsTelephone size={24} className="text-warning me-3" />
                <span className="fw-medium">+91 9666979038</span>
              </div>
              <div className="d-flex align-items-center">
                <BsEnvelope size={24} className="text-warning me-3" />
                <span className="fw-medium">sureshkukkala4455@gmail.com</span>
              </div>
            </Card>
          </Col>

          <Col lg={6} md={6}>
            <Card
              className="border-0 shadow-lg p-4 rounded"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(8px)",
                borderRadius: "14px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h3 className="fw-bold text-dark mb-3 text-center">
                Send Us a Message
              </h3>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-pill px-3 py-2"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <small className="text-danger">{formik.errors.name}</small>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-pill px-3 py-2"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <small className="text-danger">{formik.errors.email}</small>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                    className="rounded px-3 py-2"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <small className="text-danger">
                      {formik.errors.message}
                    </small>
                  )}
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 fw-bold rounded-pill py-2"
                  style={{
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
