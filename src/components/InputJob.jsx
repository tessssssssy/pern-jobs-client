import React, { Fragment, useState } from "react";

const InputJob = () => {
  const [state, setState] = useState({
    title: "",
    company: "",
    city: "",
    link: "",
    reply: "",
    notes: ""
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }
  const onSubmitForm = () => {
      try {
          const { title, company, link, reply, notes, city } = state;
          const body = { title, company, link, reply, notes, city }; // add a date, and other attributes
          const response = fetch("http://localhost:5000/jobs", {
              method: "POST",
              headers: { "Content-Type": "application/json"},
              body: JSON.stringify(body)
          })
          window.location = "/"
      } catch (err) {
          console.error(err.message);
      }
  }
  return (
    <Fragment>
      <h1 className="text-center mt-5">Job List</h1>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={state.title}
          onChange={handleChange}
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          className="form-control"
          value={state.company}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          value={state.city}
          onChange={handleChange}
        />
        <label htmlFor="link">Link</label>
        <input
          type="text"
          name="link"
          className="form-control"
          value={state.link}
          onChange={handleChange}
        />
        <label htmlFor="reply">Status</label>
        <input
          type="text"
          name="reply"
          className="form-control"
          value={state.reply}
          onChange={handleChange}
        />
        <label htmlFor="notes">Notes</label>
        <input
          type="text"
          name="notes"
          className="form-control"
          value={state.notes}
          onChange={handleChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputJob;
