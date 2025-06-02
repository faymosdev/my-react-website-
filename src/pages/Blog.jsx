export default function () {
  return (
    <>
      <navbar />
      <div className="p-10">
        <h1 className="text-4xl font-semibold mb-2 text-orange-500">
          Blogs & Articles
        </h1>
        <p>
          The best insights free resources for your increasing productivity,
          growth and development as a person, brand or startup.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-5 p-5 lg:grid-cols-2 mb-10">
        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            {" "}
            "The Power of Batching: How to Streamline Your Workload":
          </h1>
          <p>
            Explore the concept of batching similar tasks together to maximize
            efficiency and minimize context switching, according to Scott H.
            Young.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "Time Blocking for Peak Productivity: A Practical Guide":
          </h1>
          <p>
            Introduce time blocking as a method for scheduling specific blocks
            of time for specific tasks, according to TimeTap.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "Mastering the Art of Delegation: How to Delegate Effectively":
          </h1>
          <p>
            Discuss the importance of delegation and provide practical tips on
            how to effectively delegate tasks to others, according to The
            Digital Project Manager.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "The Science of Productivity: Understanding Your Energy Levels":
          </h1>
          <p>
            Examine the science behind productivity and discuss how to optimize
            your energy levels throughout the day, according to HubSpot.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "Productivity Hacks for the Digital Age: Utilizing Technology":
          </h1>
          <p>
            Explore various tools and techniques that can be used to enhance
            productivity in the digital age, according to ClearVoice.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "The Importance of Breaks: How to Rest and Rejuvenate":
          </h1>
          <p>
            Highlight the importance of taking breaks and discuss how to
            effectively rest and rejuvenate to maintain productivity, according
            to Ali Abdaal.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "Prioritization Techniques: Focusing on What Matters Most":
          </h1>
          <p>
            Introduce various prioritization techniques, such as the Eisenhower
            Matrix, to help individuals focus on the most important tasks.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>

        <div className="bg-gray-100 p-2 shadow rounded-lg">
          <h1 className="font-bold">
            "Overcoming Procrastination: Strategies for Getting Started":
          </h1>
          <p>
            Provide practical tips and strategies for overcoming procrastination
            and getting started on tasks.
          </p>
          <button className="bg-white shadow w-full rounded-full text-orange-500 font-bold my-3">
            Read More
          </button>
        </div>
      </div>

      <div className="bg-black text-center mb-5 p-5">
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-sm mb-4 mt-10 font-medium text-orange-500">OUR NEWSLETTER</p>
          <h1 className="text-2xl mb-3 font-medium">
            Join 320k+ Users Who Have Increased Their Productivity
          </h1>
          <button className="rounded-full bg-gray-100 shadow w-1/3 p-2 mt-2 border-orange-500 border-2">Enter your email</button>
        </div>
      </div>
    </>
  );
  
}
