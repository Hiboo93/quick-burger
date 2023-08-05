import React, { useState } from "react";

function LoginForm() {
  const [textField, setTextField] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Bonjour : " + textField);
    setTextField("");
  };

  const handleInput = (event) => {
    setTextField(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenu chez-nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        onChange={handleInput}
        value={textField}
        placeholder="Entrez votre prénom..."
        required
      />
      <button>Accedez à votre espace</button>
    </form>
  );
}

export default LoginForm;
