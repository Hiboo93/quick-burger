import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    navigate(`/order/${name}`);
  };

  const handleInput = (event) => {
    setName(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenu chez-nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        onChange={handleInput}
        value={name}
        placeholder="Entrez votre prénom..."
        required
      />
      <Link to={`/order/${name}`}>
        <button>Accéder à mon espace</button>{" "}
      </Link>
    </form>
  );
}

export default LoginForm;
