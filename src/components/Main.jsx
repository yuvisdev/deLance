import { useState } from "react";
import Features from "./Features";
import Services from "./Services";
import Overview from "./Overview";
import Facility from "./Facility";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function Main() {
  const userName = useSelector((state) => state.user.name);

  const [job, setJob] = useState("");

  function jobQuery() {
    if (!job) alert("enter a job");
    console.log(job);
  }
  return (
    <main>
      <div className="hero">
        <h2>
          World Best <span>Blockchain</span>
        </h2>
        <h2>Based Freelance Platform</h2>
        <h3>{userName ? `Namaste, 👋 ${userName}` : ""}</h3>

        <div>
          <input
            type="text"
            placeholder="Search your dream job?"
            value={job}
            onChange={(e) => setJob(e.target.value)}
          ></input>
          <button className="normal" onClick={jobQuery}>
            🔍
          </button>
        </div>
      </div>

      <Features />

      <Services />

      <Overview />

      <Facility />

      <Footer />
    </main>
  );
}

export default Main;
