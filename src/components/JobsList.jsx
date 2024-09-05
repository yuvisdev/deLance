import JobCard from "./JobCard";
import Spinner from "./Spinner";
import jobData from "../utils/data";

const JobsList = () => {
  // const jobs = useSelector((state) => state.jobs.jobs);

  if (jobData.length === 0) return <Spinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
      {jobData.map((job) => (
        <JobCard key={job.url} job={job} />
      ))}
    </div>
  );
};

export default JobsList;
