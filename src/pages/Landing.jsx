import Navbar from "../components/navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="text-center mx-auto p-30">
        <h1 className="text-4xl font-semibold">
          Think, plan, and{" "}
          <span className="border-2 border-orange-500 rounded-full">DO!</span>
        </h1>
        <p className="text-3xl font-semibold text-gray-500 mt-2">
          all in one place
        </p>
        <p className="mt-5 text-sm">
          Efficiently manage your tasks and boost productivity.
        </p>
        <button className="bg-orange-500 px-4 py-2 rounded mt-4 text-white text-sm">
          Get free demo
        </button>
      </div>
    </>
  );
}
