import React, { useState } from 'react'

function PageLogin() {
    const [textField, setTextField] = useState("")

    const handleSubmit = () => {
        alert("Bonjour : " + textField)
    }

    const handleText = (event) => {
        setTextField(event.target.value)
    }

  return (
    <div>
      <h1>Bienvenu chez-nous !</h1>
      <br />
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleText} placeholder='Entrez votre prénom...' required />
        <button>Accedez à votre espace</button>
      </form>
    </div>
  )
}

export default PageLogin
