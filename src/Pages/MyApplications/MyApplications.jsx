import { useEffect, useState } from "react";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
    const {user}=UseAuth()
    const [jobs,setJobs]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setJobs(data)
        })
    },[user.email])
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/job-application/${id}`,{
         method:"DELETE"
        })
         .then(res=>res.json())
         .then(data=>{
           
           const newData = jobs.filter(job=>id!==job._id)
           setJobs(newData)
           if (data.deletedCount === 1) {
             Swal.fire("Successfully deleted one application.");
           } else {
             Swal.fire("No documents matched the query. Deleted 0 documents.");
           }
         })
       } 
    return (
        <div>
           MyApplications :{jobs.length}
           <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Company</th>
        <th>Github Link</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
     {
        jobs.map(job=> <tr key={job._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={job.company_logo}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.title}</div>
                  <div className="text-sm opacity-50">{job.location}</div>
                </div>
              </div>
            </td>
            <td>
              {job.company}
              
            </td>
            <td>{job.github}</td>
            <th>
              <button onClick={()=>handleDelete(job._id)} className="btn btn-ghost btn-xs">X</button>
            </th>
          </tr>)
     }
   
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyApplications;