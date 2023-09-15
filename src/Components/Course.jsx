import { useEffect, useState } from "react";
import Subject from "./Subject";

const Course = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setCourse(data))

  }, [])


  return (
    <div className="md:w-3/4 " >
      <h3>course cards {course.length} </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 " >


        {
          course.map(subject => <Subject
            key={subject.id}
            subject={subject}
          ></Subject>)

        }
      </div>

    </div>
  );
};

export default Course;