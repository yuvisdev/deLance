function Feature({ data }) {
  return (
    <div className="fe-box p-5 text-center">
      <div className="overflow-hidden">
        <img src={data.image} alt={data.department} className="w-full" />
      </div>
      <h6 className="font-semibold text-base">{data.department}</h6>
    </div>
  );
}

export default Feature;
