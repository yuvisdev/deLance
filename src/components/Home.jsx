import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen  flex items-center justify-center absolute inset-0 bg-red-50">
      <div className="flex gap-x-3 text-3xl mb-20">
        <Link
          to="/users"
          className="bg-yellow-50 border border-yellow-950 px-4 py-1 inline-block font-semibold"
        >
          Hire a talent?
        </Link>
        <Link
          to="/main"
          className="bg-slate-50 border border-slate-900 px-4 py-1 inline-block font-semibold"
        >
          Earn via <span className="italic text-[#83043d]">freelancing</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
