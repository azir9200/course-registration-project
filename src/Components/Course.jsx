import { useEffect, useState } from "react";

const Course = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setCourse(data))

  }, [])
  return (
    <div>

    </div>
  );
};

export default Course;