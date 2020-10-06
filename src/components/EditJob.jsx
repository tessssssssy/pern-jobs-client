import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const EditJob = ({job}) => {
    // const [title, setTitle] = useState(job.title);
    const [state, setState] = useState({
      title: job.title,
      company: job.company,
      city: job.city,
      link: job.link,
      reply: job.reply,
      notes: job.notes
    });

    const handleChange = (e) => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      });
    }
    const onSubmitForm = async (e) => {
        console.log("Submitting form");
        e.preventDefault();
        try {
            const { title, company, link, reply, notes, city } = state;
            const body = { title, company, link, reply, notes, city };
            const response = await fetch(`http://localhost:5000/jobs/${job.job_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
        window.location = "/"
    }
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${job.job_id}`}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>

      <div className="modal text-left" id={`id${job.job_id}`}> 
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Job</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setState(job)} >
                &times;
              </button>
              {/* onClick={() => setState(job)}  */}
            </div>
            <div class="modal-body">
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
        {/* <button className="btn btn-success">Add</button> */}
        <div class="modal-footer">
          <input type="submit" value="Edit" class="btn btn-warning"/>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={() => setState(job)}>
                Close
              </button>
            </div>
      </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditJob;
