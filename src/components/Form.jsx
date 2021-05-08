import React, {useState} from "react";
// Redux
import {useDispatch, useSelector} from 'react-redux';
// actions
import {hideForm, addProduct} from '../actions/LocalStoreAction';
import {
  StyledForm,
  StyledLabels,
  StyledButton,
  StyledButtonBack
} from "../styles/Form.styles";
import { useAlert } from "react-alert";

const Form = () => {

  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [employeeInput, setEmployeeInput] = useState("");
  
  const alert = useAlert();

  const addForm = async (e) => {
    e.preventDefault();
    // console.log(titleInput, descInput, categoryInput, priceInput, employeeInput);
    
    if (titleInput === "" || descInput === "" || categoryInput === "" || priceInput === "" || employeeInput === "") {
      alert.error("Compila tutti i campi!");
    } else {
      dispatch(addProduct(titleInput, descInput, categoryInput, priceInput, employeeInput));
      dispatch(hideForm());
      alert.success("Prodotto aggiunto con successo!");
    }
  }

  return (
    <StyledForm onSubmit={addForm}>
      <StyledLabels>
        <div className="label-tite">
          <label for="nome">Nome prodotto</label>
          <input onChange={(e)=> setTitleInput(e.target.value)} id="nome" type="text" name="name" required  />
        </div>
        <div className="label-desc">
          <label for="desc">Breve descrizione</label>
          <input onChange={(e)=> setDescInput(e.target.value)} id="desc" type="text-area" name="desc" required  />
        </div>
        <div className="category">
          <label for="category">Categoria prodotto</label>
          <input onChange={(e)=> setCategoryInput(e.target.value)} id="category" type="text" name="category" required />
        </div>
        <div className="price">
          <label for="price">Prezzo</label>
          <input onChange={(e)=> setPriceInput(e.target.value)} id="price" type="number" name="price" required />
        </div>
        <div className="employee">
          <label for="employee">Dipendente</label>
          <input onChange={(e)=> setEmployeeInput(e.target.value)} id="employee" type="text" name="employee" required />
        </div>
      </StyledLabels>
      <div className="buttons">
        <StyledButton type='submit'>
          <span>Inserisci Prodotto</span>
        </StyledButton>
        <StyledButtonBack onClick={ () => dispatch(hideForm()) }>
          <span>Annulla</span>
        </StyledButtonBack>
      </div>
    </StyledForm>
  )
}

export default Form;