const Spinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-400/20 backdrop-blur-3xl">
      <div className="loading"></div>
    </div>
  );
};

export default Spinner;
