import React, { Fragment, useState } from "react";

const EditJob = ({job}) => {
    const [title, setTitle] = useState(job.title);

    const updateTitle = async (e) => {
        e.preventDefault();
        try {
            const body = { title };
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
        Edit
      </button>

      <div class="modal" id={`id${job.job_id}`} onClick={() => setTitle(job.title)}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Job</h4>
              <button onClick={() => setTitle(job.title)} type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
                <input onChange={e => setTitle(e.target.value)} type="text" className="form-control" value={title}/>
            </div>

            <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={e => updateTitle(e)}>
                Edit
              </button>
              <button onClick={() => setTitle(job.title)} type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditJob;
