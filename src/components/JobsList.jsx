import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import Spinner from "./Spinner";

const JobsList = () => {
  const jobs = useSelector((state) => state.jobs.jobs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default JobsList;
