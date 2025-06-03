import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="text-center p-8 space-y-3">
        <h1 className="text-3xl font-semibold text-orange-500">
          Get In Contact
        </h1>
        <p>Your Questions. Our Answers. Just a Message Away!</p>
      </div>
      <form className=" bg-gray-100 p-5 pt-2 max-w-sm lg:max-w-2xl mx-auto rounded text-sm">
        <div className="grid grid-cols-2 my-5 gap-2 font-medium">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded-md shadow p-2"
          />
          <input
            type="text"
            placeholder="Email"
            className="rounded-md shadow p-2"
          />
          <input
            type="text"
            placeholder="Organization"
            className="rounded-md shadow p-2"
          />
          <input
            type="text"
            placeholder="Subject"
            className="rounded-md shadow p-2"
          />
        </div>

        <textarea
          name=""
          placeholder="Message..."
          className="w-full  font-bold shadow px-1 py-5 mb-2"
        ></textarea>
        <button className="w-full bg-orange-600 p-2 rounded text-white">
          Send Message
        </button>
      </form>
    </>
  );
}
