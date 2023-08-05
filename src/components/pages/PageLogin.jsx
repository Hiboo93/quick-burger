import React, { useState } from 'react'

function PageLogin() {
    const [textField, setTextField] = useState("")

    const handleSubmit = (event) => {
      event.preventDefault()
      alert("Bonjour : " + textField)
      setTextField("")
    }

    const handleInput = (event) => {
        setTextField(event.target.value)
    }

  return (
    <div>
      <h1>Bienvenu chez-nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={textField} placeholder='Entrez votre prénom...' required />
        <button>Accedez à votre espace</button>
      </form>
    </div>
  )
}

export default PageLogin
