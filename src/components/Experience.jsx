import { useState } from "react";
import "../styles/experience.css";

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);

  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setExperience({
      ...experience,
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
      <h2>Practical Experience</h2>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            placeholder="Company name"
            value={experience.company}
            onChange={handleChange}
            required
          />

          <input
            name="position"
            placeholder="Company position"
            value={experience.position}
            onChange={handleChange}
            required
          />

          <textarea
            name="responsibilities"
            placeholder="Main responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />

          <label htmlFor="startDate">Start date:</label>
          <input
            type="date"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="endDate">End date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p></p>
          <p>Starting date of working in a company: {experience.startDate}</p>
          <p>The date of quitting working in a company {experience.endDate}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}
