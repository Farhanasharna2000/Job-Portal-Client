import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";

const JobApply = () => {
    const {id}=useParams()
    const {user}=UseAuth();
    console.log(id,user);
    const navigate=useNavigate()
    const submitJobApplication = e =>{
        e.preventDefault()
        const form = e.target;
        const linkedIn =form.linkedIn.value;
        const github =form.github.value;
        const resume =form.resume.value;
        console.log(linkedIn,github,resume);
        
const jobApplication = {
    job_id:id,
    applicant_email:user.email,
    linkedIn,
    github,
    resume

}
fetch('http://localhost:5000/job-applications',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobApplication)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId) {
        Swal.fire({
       position: "top-end",
       icon: "success",
       title: "Applied successfully",
       showConfirmButton: false,
       timer: 1500
     });
     navigate('/myApplications')
       }
    
})

    }
    return (
       
          <div className="card bg-base-100 w-full  shadow-2xl">
          <h1 className="text-5xl font-bold">Apply Job and Good Luck!</h1>

            <form onSubmit={submitJobApplication} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">LinkedIn URL</span>
                </label>
                <input type="url"  name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Github URL</span>
                </label>
                <input type="url"  name="github" placeholder="Github URL" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resume URL</span>
                </label>
                <input type="url"  name="resume" placeholder="Resume URL" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Apply</button>
              </div>
            </form>
          </div>
      
    );
};

export default JobApply;