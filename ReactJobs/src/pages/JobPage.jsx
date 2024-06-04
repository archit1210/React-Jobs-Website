import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { IoArrowBack } from "react-icons/io5";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [job, setJob] = useState(null); // Change initial state to null
  const [loading, setLoading] = useState(true);

  const onDeleteClick = (JobID) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing ?"
    );

    if (!confirm) {
      return;
    }

    deleteJob(JobID);
    toast.success("Job deleted successfully");
    navigate("/jobs");
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`http://localhost:8000/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("Error while fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [id]); // Add id to dependency array

  if (loading) {
    return <Spinner />; // Conditionally render spinner while loading
  }

  if (!job) {
    return <div>Job not found</div>; // Handle case where job is not found
  }

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <IoArrowBack /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
            {" "}
            {/* Fix CSS class */}
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>{" "}
                {/* Dynamically render job type */}
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>{" "}
                {/* Dynamically render job title */}
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">{job.location}</p>{" "}
                  {/* Dynamically render job location */}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4">{job.description}</p>{" "}
                {/* Dynamically render job description */}
                <h3 className="text-indigo-800 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4">{job.salary}</p>{" "}
                {/* Dynamically render job salary */}
              </div>
            </main>
            {/* Sidebar */}
            <aside>
              {/* Company Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>{" "}
                {/* Dynamically render company name */}
                <p className="my-2">{job.company.description}</p>{" "}
                {/* Dynamically render company description */}
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>{" "}
                {/* Dynamically render company email */}
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>{" "}
                {/* Dynamically render company phone */}
              </div>

              {/* Manage */}
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobPage;
