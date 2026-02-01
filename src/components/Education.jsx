import { useState } from "react";
import "../styles/education.css";

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setEducation({
      ...education,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <section>
      <h2>Education</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            placeholder="School"
            value={education.school}
            onChange={handleChange}
            required
          />

          <input
            name="degree"
            placeholder="Degree"
            value={education.degree}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
            required
          />

          <input
            type="date"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Date of starting the education: {education.startDate}</p>
          <p>Date of finishing the education: {education.endDate}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}
