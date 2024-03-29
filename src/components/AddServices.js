import React from "react";
import toast from "react-hot-toast";
import useTitle from "../hooks/useTitle";

const AddServices = () => {
  useTitle("Add-services");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const img = form.img.value;
    const details = form.details.value;

    const addService = {
      name,
      price,
      img,
      details,
    };

    fetch(
      "https://shathys-kitchen-server-sheuliaktershathy.vercel.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Add Services successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <section className="p-6 bg-purple-30">
      <h1 className="text-center font-bold text-3xl my-6">Add Services</h1>
      <form
        onSubmit={handleAddService}
        novalidate=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm w-3/4 mx-auto">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-400 border-2 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="price" className="text-sm">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="price"
                className=" p-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-400 border-2 text-gray-900"
              />
            </div>

            <div className="col-span-full">
              <label for="img" className="text-sm">
                ImgURL
              </label>
              <input
                name="img"
                type="text"
                placeholder="imgURL"
                className="w-full rounded-md focus:ring p-3 focus:ring-opacity-75 focus:ring-pink-400 border-2 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="details" className="text-sm">
                Details
              </label>
              <input
                name="details"
                type="text"
                placeholder=""
                className="w-full p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-pink-400 border-2 text-gray-900"
              />
            </div>
          </div>
        </fieldset>

        <button
          type="submit"
          className="px-8 py-3 font-semibold rounded bg-pink-200 text-gray-800 w-[40%] mx-auto hover:bg-pink-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddServices;
