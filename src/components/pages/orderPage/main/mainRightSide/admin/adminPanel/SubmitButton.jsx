import React from 'react'
import Button from '../../../../../../reusable-ui/Button.jsx'
import SubmitMessage from './SubmitMessage.jsx'

export default function SubmitButton({ isSubmitted }) {
  return (
    <>
      <Button
        className={"submit-button"}
        label={"ajouter un nouveau produit au menu"}
        version="success"
      />
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
