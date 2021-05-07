import React, {useState} from "react";
import {
  StyledForm,
  StyledLabels,
  StyledButton,
  StyledButtonBack
} from "../styles/Form.styles";

const Form = ({open, setOpen}) => {
  return (
    <StyledForm className={`form ${open == true ? 'active-form' : ""} `}>
      <StyledLabels>
        <div className="label-tite">
          <label for="nome">Nome prodotto</label>
          <input id="nome" type="text" name="name" required  />
        </div>
        <div className="label-desc">
          <label for="desc">Breve descrizione</label>
          <input id="desc" type="text-area" name="desc" required  />
        </div>
        <div className="category">
          <label for="category">Categoria prodotto</label>
          <input id="category" type="text" name="category" required />
        </div>
        <div className="price">
          <label for="price">Prezzo</label>
          <input id="price" type="number" name="price" required />
        </div>
        <div className="employee">
          <label for="employee">Dipendente</label>
          <input id="employee" type="text" name="employee" required />
        </div>
      </StyledLabels>
      <div className="buttons">
        <StyledButton>
          <span>Inserisci Prodotto</span>
        </StyledButton>
        <StyledButtonBack onClick={setOpen(false)}>
          <span>Annulla</span>
        </StyledButtonBack>
      </div>
    </StyledForm>
  )
}

export default Form;