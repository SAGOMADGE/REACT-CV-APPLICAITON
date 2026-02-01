import { useState } from "react";
import "../styles/generalInfo.css";

export default function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setInfo({
      ...info,
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

  function capitalize(str) {
    if (!str) return;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <section>
      <h2>General Information</h2>

      {/* ternary operator is allowed in JSX, because it is an expression */}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {capitalize(info.name)}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}
