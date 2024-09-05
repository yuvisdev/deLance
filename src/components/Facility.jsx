import FacilityIntro from "./FacilityIntro";

function Facility() {
  return (
    <div className="section-p1">
      <div className="fac">
        <FacilityIntro />
        <FacilityIntro />
        <FacilityIntro />
        <FacilityIntro />
      </div>

      <div className="new">
        <h2>
          <span>Web3 &nbsp;</span>
          freelance services at a click
        </h2>

        <button>Start Exploring</button>
      </div>
    </div>
  );
}

export default Facility;
