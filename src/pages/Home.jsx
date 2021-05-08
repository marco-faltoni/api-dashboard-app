import React, { useState } from "react";
// Redux
import { useSelector, useDispatch} from 'react-redux';
// actions
import {deleteProduct} from '../actions/LocalStoreAction';
import {
  StyledContainer,
  StyledNav,
  StyledCards,
  StyledCard,
  StyledOverlay,
  StyledTitle,
  StyledReview,
  StyledCategory
} from "../styles/Home.styles";
import {ReactComponent as Grid} from '../assets/grid.svg';
import {ReactComponent as Column} from '../assets/column.svg';
import {ReactComponent as Reload} from '../assets/reload.svg';
import {ReactComponent as Cookie} from '../assets/cookie.svg';
import {ReactComponent as Menu} from '../assets/menu.svg';
import user from '../assets/user.png';
// import routing
import { Link } from "react-router-dom";
// framer motion
import {motion} from "framer-motion";
// import { pageAnimation, pageAnimationMobile, fade } from "../animation";
import { useAlert } from "react-alert";
import ReactTooltip from "react-tooltip";

const Home = () => {

  const dispatch = useDispatch();

  const alert = useAlert();

  // getting back the data from redux
  const {store, products, isLoading} = useSelector((store) => store.store);

  const deleteItem = (id) => { 
    dispatch(deleteProduct(id));
    alert.success("Prodotto eliminato con successo!");
  }

  return (
    <StyledContainer >
      <StyledNav>
        <div className="store">
          <h1>{store.name}</h1>
          <p>{store.category}</p>
        </div>
        
        <div className="icons">
          <i>
            <Grid />
          </i>
          <i>
            <Column />
          </i>
          <i>
            <Reload className="reload" />
          </i>
        </div>
        <img src={user} alt="prop-pic" title="prop-pic"/>
      </StyledNav>
      <StyledOverlay>
        <StyledCards>
          {products.map((item, key) => {
            // console.log(item.data.reviews);
            return (
              <StyledCard key={key}>
                <StyledTitle>
                  <h3>{item.data.title}</h3>
                  <p>{item.data.description}</p>
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
                  <h3 onClick={() => deleteItem(item.id)}>Cancella prodotto</h3>
                </ReactTooltip>
                <StyledReview>
                  <div className="empl">
                    <h3>Dipendente</h3>
                    <p>{item.data.employee}</p>
                  </div>
                  <div className="rev">
                    <h3>Recensioni</h3>
                    {item.data.reviews !== undefined && item.data.reviews.length > 0 ? (
                      item.data.reviews.map((item, key) => {
                        return (
                          <p key={key}>"{item}"</p>
                        )
                      })
                    ) : (
                      <p>Non ci sono ancora recensioni.</p>
                    )}
                  </div>
                </StyledReview>
                <h3 id="price"> <span>€</span> {item.data.price}</h3>
                <StyledCategory>
                  <i>
                    <Cookie />
                  </i>
                </StyledCategory>
              </StyledCard>
            );
          })}
          
        </StyledCards>
      </StyledOverlay>
      
    </StyledContainer>
  );
};


export default Home;