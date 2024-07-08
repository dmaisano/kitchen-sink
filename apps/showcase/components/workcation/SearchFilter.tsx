import React, { useContext } from "react";
import { WorkcationContext } from "../../pages/workcation";

const SearchFilter: React.FC = () => {
  const { state, toggleIsOpen } = useContext(WorkcationContext);

  return (
    <section className="bg-[#2d3748] xl:w-72">
      <div className="flex justify-between px-4 py-3 xl:hidden">
        <div className="relative w-full max-w-xs">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-6 w-6 fill-current text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </div>
          <input
            className="block w-full rounded-lg bg-gray-900 py-2 pl-10 pr-4 font-medium text-gray-900 placeholder:text-gray-300 focus:bg-white focus:outline-none focus:placeholder:text-gray-900"
            placeholder="Search by keywords"
          />
        </div>
        <button
          type="button"
          className={`focus:shadow-outline ml-4 inline-flex items-center rounded-lg pl-3 pr-4 shadow hover:bg-gray-600 focus:outline-none ${
            state.isOpen ? `bg-gray-500` : `bg-gray-600`
          }`}
          onClick={() => toggleIsOpen()}
        >
          <svg
            className="h-6 w-6 fill-current text-gray-300"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
          </svg>
          <span className="ml-1 font-medium text-white">Filters</span>
        </button>
      </div>
      <form
        className={`xl:flex xl:h-full xl:flex-col xl:justify-between ${
          state.isOpen ? `block` : `hidden`
        }`}
      >
        <div className="lg:flex xl:block xl:overflow-y-auto">
          <div className="border-t border-gray-900 px-4 py-4 lg:w-1/3 xl:w-full xl:border-t-0">
            <div className="-mx-2 flex flex-wrap">
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-400">
                  Bedrooms
                </span>
                <select className="form-select mt-1 block w-full rounded-lg bg-gray-600 text-white shadow focus:bg-gray-500">
                  <option>4</option>
                </select>
              </label>
              <label className="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
                <span className="text-sm font-semibold text-gray-400">
                  Bathrooms
                </span>
                <select className="form-select mt-1 block w-full rounded-lg bg-gray-600 text-white shadow focus:bg-gray-500">
                  <option>2</option>
                </select>
              </label>
              <label className="mt-4 block w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
                <span className="text-sm font-semibold text-gray-400">
                  Price Range
                </span>
                <select className="form-select mt-1 block w-full rounded-lg bg-gray-600 text-white shadow focus:bg-gray-500">
                  <option>Up to $2,000/wk</option>
                </select>
              </label>
            </div>
          </div>
          <div className="border-t border-gray-900 px-4 py-4 lg:w-1/3 lg:border-l xl:w-full">
            <span className="block text-sm font-semibold text-gray-400">
              Property Type
            </span>
            <div className="sm:-mx-2 sm:flex lg:mx-0 lg:block">
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="house"
                />
                <span className="ml-2 text-white">House</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="apartment"
                />
                <span className="ml-2 text-white">Apartment</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="loft"
                />
                <span className="ml-2 text-white">Loft</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-full lg:px-0">
                <input
                  className="form-radio bg-gray-900 focus:bg-gray-700"
                  type="radio"
                  name="propertyType"
                  value="townhouse"
                />
                <span className="ml-2 text-white">Townhouse</span>
              </label>
            </div>
          </div>
          <div className="border-t border-gray-900 px-4 py-4 lg:w-1/3 lg:border-l xl:w-full">
            <span className="block text-sm font-semibold text-gray-400">
              Amenities
            </span>
            <div className="sm:-mx-2 sm:flex sm:flex-wrap">
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="balcony"
                />
                <span className="ml-2 text-white">Balcony</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="pool"
                />
                <span className="ml-2 text-white">Pool</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="beach"
                />
                <span className="ml-2 text-white">Beach</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="petFriendly"
                />
                <span className="ml-2 text-white">Pet friendly</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="kidFriendly"
                />
                <span className="ml-2 text-white">Kid friendly</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="parking"
                />
                <span className="ml-2 text-white">Parking</span>
              </label>
              <label className="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full">
                <input
                  className="form-checkbox bg-gray-900 focus:bg-gray-700"
                  type="checkbox"
                  name="airConditioning"
                />
                <span className="ml-2 text-white">Air conditioning</span>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 px-4 py-4 sm:text-right">
          <button className="block w-full rounded-lg bg-indigo-500 px-4 py-2 font-semibold text-white hover:bg-indigo-400 sm:inline-block sm:w-auto xl:block xl:w-full">
            Update results
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchFilter;
