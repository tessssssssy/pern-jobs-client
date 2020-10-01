import React, { Fragment, useEffect, useState } from "react";
import EditJob from './EditJob';

const ListJobs = () => {
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
      const response = await fetch("http://localhost:5000/jobs");
      const jsonData = await response.json();
      setJobs(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteJob = async (id) => {
      try {
          const deleteJob = await fetch(`http://localhost:5000/jobs/${id}`, {
              method: "DELETE"
          });
          setJobs(jobs.filter(job => job.job_id !== id))
      } catch (err) {
          console.error(err.message);
      }
  }

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>City</th>
            <th>Reply</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => {
            return (
              <tr key={job.job_id}>
                <td><a href={job.link} target="_blank">{job.title}</a></td>
                <td>{job.company}</td>
                <td>{job.city}</td>
                <td>{job.reply}</td>
                <td><EditJob job={job}/></td>
                <td><button onClick={() => deleteJob(job.job_id)}className="btn btn-danger">Delete</button></td>
              </tr>
            );
          })}
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListJobs;
