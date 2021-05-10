import React, {useState} from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
// actions
import {deleteProduct} from '../actions/LocalStoreAction';
import { useAlert } from "react-alert";
import ReactTooltip from "react-tooltip";
import {ReactComponent as Cookie} from '../assets/cookie.svg';
import {ReactComponent as Cake} from '../assets/candy.svg';
import {ReactComponent as Menu} from '../assets/menu.svg';
import {
  StyledCard,
  StyledTitle,
  StyledReview,
  StyledCategory
} from "../styles/Card.styles";

const Card = ({key, title, description, id, emp, category, price, reviews, column}) => {

  const dispatch = useDispatch();

  const alert = useAlert();

  const deleteItem = (id) => { 
    dispatch(deleteProduct(id));
    alert.success("Prodotto eliminato con successo! Aspetta il ricarimento della pagina :)");
  }

  return (
    <StyledCard key={key} className={column ? "column-view" : ""}>
      <StyledTitle className={column ? "column-view" : ""}>
        <h3>{title}</h3>
        <p>{description}</p>
      </StyledTitle>
      <a className="a-tool" data-tip data-for={`${key}`} data-event='click focus'>
        <Menu className="menu-icon" />
      </a>
      <ReactTooltip
        id={`${key}`}
        place="bottom"
        effect="solid"
        textColor='#fff' 
        backgroundColor='#5B5A99'
        className="custom-tooltip"
        globalEventOff='click' 
      >
        <h3 onClick={() => deleteItem(id)}>Cancella prodotto</h3>
      </ReactTooltip>
      <StyledReview className={column ? "column-view" : ""}>
        <div className="empl">
          <h3>Dipendente</h3>
          <p>{emp}</p>
        </div>
        <div className="rev">
          <h3>Recensioni</h3>
          {reviews !== undefined && reviews.length > 0 ? (
            reviews.map((item, key) => {
              return (
                <p key={key}>"{item}"</p>
              )
            })
          ) : (
            <p>Non ci sono ancora recensioni.</p>
          )}
        </div>
      </StyledReview>
      <h3 id="price"> <span>€</span> {price}</h3>
      <StyledCategory className={column ? "column-view" : ""}>
        <a data-tip data-for={`category ${id}`}>
          <i>
            <Cake />
          </i>  
        </a>
      </StyledCategory>
      <ReactTooltip
        id={`category ${id}`}
        place="bottom"
        effect="solid"
        textColor='#fff' 
        backgroundColor='#5B5A99'
        className="custom-tooltip"
      >
        <h3>{category}</h3>
      </ReactTooltip>
    </StyledCard>
  )
}

export default Card;