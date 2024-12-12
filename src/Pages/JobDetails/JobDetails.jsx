import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const{title,company,description,jobType,salaryRange,location,applicationDeadline} = useLoaderData()

    return (
        <div className="m-10 space-y-4 border rounded-xl p-4 md:w-3/4 mx-auto">
           <h2 className="text-3xl">Job details for {title}</h2> 
           <div className="divider"></div>
           <div className="flex justify-between">
            <div className="flex-1">

          <p><span className="font-semibold text-gray-400">Apply for : </span> {company}</p>
          <p><span className="font-semibold text-gray-400">Description : </span>{description}</p>
          <p><span className="font-semibold text-gray-400">JobType : </span>{jobType}</p>

            </div>

          <div className="flex-1">
          <p> <span className="font-semibold text-gray-400">Location : </span>{location}</p>
          <p ><span className="font-semibold text-gray-400">Salary : </span>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <p><span className="font-semibold text-gray-400">Deadline : </span>{applicationDeadline}</p>
          </div>
           </div>
           <button className="btn btn-primary">Apply now</button>
        </div>
    );
};

export default JobDetails;