import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div>
        <p className="text-4xl text-center mt-20 font-bold mb-2">ABOUT US</p>
        <h1 className="text-center text-orange-500 font-medium mb-7">
          Helping you get things done through personalised routines.
        </h1>
        <div className="bg-black h-2 w-2 w-full rounded ">
          <div className="bg-orange-300 w-100 w-2 h-2 rounded"></div>
        </div>
        <div className="text-center mt-5 grid grid-cols-2 gap-3 p-2 lg:text-xl">
          <p className="bg-gray-200 rounded p-3 mb-2">
            “If you spend too much time thinking about a thing, you'll never get
            it done.” —Bruce Lee.
          </p>
          <p className="bg-gray-200 rounded p-5 mb-2">
            “Productivity is never an accident. It is always the result of a
            commitment to excellence, intelligent planning, and focused effort.”
          </p>
        </div>
      </div>

      <div className="bg-orange-300 text-center mb-5 p-5">
        <div className="bg-white shadow rounded-lg p-7">
          <p className="text-sm mb-4 mt-10 font-medium text-orange-500">
            OUR NEWSLETTER
          </p>
          <h1 className="text-2xl mb-3 font-medium">
            Join 320k+ Users Who Have Increased Their Productivity
          </h1>
          <input
            className="rounded-lg bg-gray-100 shadow w-1/3 p-2 mt-2 border-orange-500 border-2 text-sm lg:text-xl lg:rounded-full"
            placeholder="Enter Your Email..."
          />
        </div>
      </div>
    </>
  );
}
