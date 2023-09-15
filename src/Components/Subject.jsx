
const Subject = ({ subject }) => {
  const { image, course_name } = subject;


  return (
    <div className="">
      <img src={image} alt="" />
      <h2> {course_name} </h2>
      <p>It is a long established fact that a reader
        will be distracted by the readable content
        of a page when looking at its layout.</p>
    </div>
  );
};

export default Subject;