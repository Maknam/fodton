"use client";

import { useState } from "react";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    telephone: "",
    preferredDate: "",
    preferredTime: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateTelephone = (phone) => {
    // Basic international format check
    const re = /^[\d\s\-\+\(\)]{7,}$/;
    return re.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Telephone is required";
    } else if (!validateTelephone(formData.telephone)) {
      newErrors.telephone = "Please enter a valid phone number";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Preferred time is required";
    }

    if (!formData.purpose) {
      newErrors.purpose = "Please select a purpose";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Connect to backend/WordPress in implementation phase
      // Simulated submission with delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({
        name: "",
        organisation: "",
        email: "",
        telephone: "",
        preferredDate: "",
        preferredTime: "",
        purpose: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="eyebrow">Book an appointment</span>
      <h2>Request an appointment</h2>

      {submitStatus === "success" && (
        <div className="alert alert-success">
          ✓ Thank you! Your appointment request has been submitted. We'll be in
          touch shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="alert alert-error">
          ✗ There was an error submitting your form. Please try again.
        </div>
      )}

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="error-message">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="organisation">Organisation</label>
          <input
            id="organisation"
            type="text"
            value={formData.organisation}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="email">
            Email <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="error-message">
              {errors.email}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="telephone">
            Telephone <span className="required">*</span>
          </label>
          <input
            id="telephone"
            type="tel"
            value={formData.telephone}
            onChange={handleChange}
            required
            aria-invalid={!!errors.telephone}
            aria-describedby={errors.telephone ? "telephone-error" : undefined}
          />
          {errors.telephone && (
            <span id="telephone-error" className="error-message">
              {errors.telephone}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="preferredDate">
            Preferred Date <span className="required">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            aria-invalid={!!errors.preferredDate}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
          />
          {errors.preferredDate && (
            <span id="preferredDate-error" className="error-message">
              {errors.preferredDate}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="preferredTime">
            Preferred Time <span className="required">*</span>
          </label>
          <input
            id="preferredTime"
            type="time"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            aria-invalid={!!errors.preferredTime}
            aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
          />
          {errors.preferredTime && (
            <span id="preferredTime-error" className="error-message">
              {errors.preferredTime}
            </span>
          )}
        </div>

        <div className="field full">
          <label htmlFor="purpose">
            Purpose <span className="required">*</span>
          </label>
          <select
            id="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            aria-invalid={!!errors.purpose}
            aria-describedby={errors.purpose ? "purpose-error" : undefined}
          >
            <option value="">Select purpose</option>
            <option>Training consultation</option>
            <option>Research & consultancy</option>
            <option>Corporate/institutional training</option>
            <option>Home-care consultation</option>
            <option>Partnership discussion</option>
            <option>General institutional enquiry</option>
          </select>
          {errors.purpose && (
            <span id="purpose-error" className="error-message">
              {errors.purpose}
            </span>
          )}
        </div>

        <div className="field full">
          <label htmlFor="message">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="error-message">
              {errors.message}
            </span>
          )}
        </div>

        <div className="field full">
          <button
            type="submit"
            className="btn red"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Appointment"}
          </button>
        </div>
      </div>
    </form>
  );
}
