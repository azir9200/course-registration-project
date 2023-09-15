
const Subject = ({ subject }) => {
  const { image, course_name, price, credit } = subject;


  return (
    <div className=" text text-center max-w-sm:w-72  shadow-xl">
      <img className="m-4 w-64 " src={image} alt="" />
      <h2 className=" sm:p-4  md:my-4" > {course_name} </h2>
      <p>It is a long established fact that a reader
        will be distracted by the readable content
        of a page when looking at its layout.</p>
      <div className="flex justify-between m-0 p-0 gap-0">
        <p>Price  :  {price} </p>
        <p>credit : {credit} </p>
      </div>
      <button className="bg bg-blue-500 px-20 py-2 rounded-md" >Select</button>
    </div>
  );
};

export default Subject;