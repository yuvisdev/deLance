const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border-2 border-blue-500 hover:border-blue-700 transition duration-300 ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{job.title}</h2>
          <p className="text-gray-600 text-sm">{job.hiringOrganizationName}</p>
        </div>
        <div className="flex justify-end items-center">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            View Job
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-600 text-sm">Location: {job.region}</p>
          <p className="text-gray-600 text-sm">
            Employment Type: {job.employmentType}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">
            Posted on: {new Date(job.published_since).toLocaleDateString()}
          </p>
          <p className="text-gray-600 text-sm">Posted by: {job.websiteName}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
