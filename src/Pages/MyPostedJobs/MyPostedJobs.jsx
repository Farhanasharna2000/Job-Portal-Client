import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
    const [jobs,setJobs]=useState([])
    const {user}=UseAuth();
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[user.email])
    return (
        <div>
          <h2 className="text-3xl">My posted jobs : {jobs.length}</h2>  
          <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Job Title</th>
        <th>Deadline</th>
        <th>Application Count</th>
        <th>Applications</th>

      </tr>
    </thead>
    <tbody>
    { jobs.map((job,idx) => <tr key={idx}>
        <th>{idx + 1 }</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>{job.applicationCount}</td>
        <td>
            <Link to={`/viewApplications/${job._id}`}>
            <button className="btn btn-link">View Applications</button>
            </Link>
        </td>

      </tr>)}
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJobs;