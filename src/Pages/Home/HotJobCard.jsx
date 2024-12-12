import { FaMapMarkerAlt } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const HotJobCard = ({job}) => {
    const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
<div className="flex gap-2 items-center m-2">
<figure>
    <img
    className="w-16"
      src={company_logo}
      alt="logo" />
  </figure>
  <div >
    <h2 className="font-bold text-lg">{company}</h2>
    <p className="flex items-center gap-1 text-gray-400"><FaMapMarkerAlt></FaMapMarkerAlt>{location}</p>
  </div>
</div>
  <div className="card-body">
    <h2 className="card-title">{title}
    <div className="badge badge-secondary">NEW</div>

    </h2>
    <p>{description}</p>
    <div className="flex gap-2 flex-wrap">
        {requirements.map((skill,idx)=><p className="border rounded-md px-2 text-center hover:text-blue-600 hover:bg-gray-200" key={idx}>{skill}</p>)}
    </div>
    <div className="card-actions  mt-2 justify-end ">
        <p className="font-bold">Salary : <span className="text-blue-600">{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</span></p>
<Link to={`/jobs/${_id}`}>
<button className="btn btn-primary">Apply Now</button>

</Link>
    </div>
  </div>
</div>
    );
};
HotJobCard.propTypes = {
  
    job: PropTypes.array,
}
export default HotJobCard;