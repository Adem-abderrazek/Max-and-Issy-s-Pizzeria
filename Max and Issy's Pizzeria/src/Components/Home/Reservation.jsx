import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faUser,
  faPhone,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfPersons: "",
    seating: "indoor",
    date: "",
    time: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div className="relative bg-black text-white flex justify-center items-center h-screen px-6 md:px-16 w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-black rounded-lg shadow-lg p-8 w-full space-y-6"
      >
        <h2 className="text-bloody text-3xl md:text-4xl font-semibold text-center">
          Make a Reservation
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Name */}
          <div className="col-span-1">
            <label className="block text-peach mb-2" htmlFor="name">
              <FontAwesomeIcon icon={faUser} className="text-xl" /> Whose Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Number of Persons */}
          <div className="col-span-1">
            <label className="block text-peach mb-2" htmlFor="numberOfPersons">
              <FontAwesomeIcon icon={faUser} className="text-xl" /> Number of
              Persons
            </label>
            <input
              type="number"
              id="numberOfPersons"
              name="numberOfPersons"
              value={formData.numberOfPersons}
              onChange={handleChange}
              placeholder="Enter number"
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Date */}
          <div className="col-span-1">
            <label className="block text-peach mb-2" htmlFor="date">
              <FontAwesomeIcon icon={faCalendar} className="text-xl" /> Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Time */}
          <div className="col-span-1">
            <label className="block text-peach mb-2" htmlFor="time">
              <FontAwesomeIcon icon={faClock} className="text-xl" /> Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>

          {/* Phone and Seating */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-peach mb-2" htmlFor="phone">
                <FontAwesomeIcon icon={faPhone} className="text-xl" /> Phone
                Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-3 rounded bg-gray-700 text-white"
              />
            </div>

            {/* Seating Option */}
            <div>
              <label className="block text-peach mb-2">Seating Preference</label>
              <div className="flex space-x-[40px] rounded bg-gray-700   h-[48px] w-auto">
                <label className="flex items-center space-x-2 bg-gray-700 rounded ml-3">
                  <input
                    type="radio"
                    name="seating"
                    value="indoor"
                    checked={formData.seating === "indoor"}
                    onChange={handleChange}
                    className="text-peach bg-gray-700"
                  />
                  <span className="text-gray-400">Indoor</span>
                </label>
                <label className="flex items-center space-x-2 bg-gray-700">
                  <input
                    type="radio"
                    name="seating"
                    value="outdoor"
                    checked={formData.seating === "outdoor"}
                    onChange={handleChange}
                    className="text-peach bg-gray-700"
                  />
                  <span className="text-gray-400">Outdoor</span>
                </label>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="col-span-2">
            <label className="block text-peach mb-2" htmlFor="comments">
              <FontAwesomeIcon icon={faComments} className="text-xl" /> Comments
              (e.g., birthday occasion)
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter comments"
              className="w-full p-3 rounded bg-gray-700 text-white"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center"> <button
          type="submit"
          className="w-[26%] p-3 bg-bloody text-white font-bold rounded hover:bg-peach-dark transition  animate-bounce mr-[100px]"
        >
          Reserve Now
        </button> </div>
       
      </form>
    </div>
  );
};

export default Reservation;
