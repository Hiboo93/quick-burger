import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

function ErrorPage() {

  const error = useRouteError

  return (
    <div>
    <h1>Oops !</h1>
    <p>Page inexistante</p>
    <p>
      <i>{error.statusText || error.message }</i>
    </p>
    <Link to="/login"><button>Retourner à la page d'acceuil</button></Link>
    </div>
  )
}

export default ErrorPage