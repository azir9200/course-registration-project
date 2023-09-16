import { useState } from "react";
import Shoppingcart from "./Shoppingcart";

const Subject = ({ subject }) => {
  const { image, course_name, course_details, price, credit } = subject;


  return (
    <div>

      <div className=" text text-center max-w-sm:w-72  shadow-xl">
        <img className="m-4 w-64 " src={image} alt="" />
        <h2 className=" text-xl font-semibold sm:p-4  md:my-4" > {course_name} </h2>
        <p> {course_details} </p>
        <div className="flex justify-evenly m-0 p-0 gap-0">
          <p>Price  :  {price} </p>
          <p>credit : {credit} </p>
        </div>
        <button onClick={() => handleSelectCourse(subject)} className="bg bg-blue-500 px-24 py-2 rounded-md" >Select</button>
      </div>


    </div>


  );
};
export default Subject;