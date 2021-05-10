import React, { useState } from "react";
// Redux
import { useSelector} from 'react-redux';
import {
  StyledContainer,
  StyledNav,
  StyledCards,
  StyledOverlay,
} from "../styles/Home.styles";
import {ReactComponent as Grid} from '../assets/grid.svg';
import {ReactComponent as Column} from '../assets/column.svg';
import {ReactComponent as Reload} from '../assets/reload.svg';
import user from '../assets/user.png';
import Card from '../components/Card';
// import routing
import { Link } from "react-router-dom";
// framer motion
import {motion} from "framer-motion";
// import { pageAnimation, pageAnimationMobile, fade } from "../animation";
import ReactTooltip from "react-tooltip";

const Home = () => {

  const [column, setColumn] = useState(false);

  // getting back the data from redux
  const {store, products, isLoading} = useSelector((store) => store.store);

  console.log(column);

  return (
    <StyledContainer >
      <StyledNav>
        <div className="store">
          <h1>{store.name}</h1>
          <p>{store.category}</p>
        </div>
        
        <div className="icons">
          <i className="grid-icon" onClick={() => setColumn(false)}>
            <a data-tip data-for={"grid"} >
              <Grid />
            </a>
          </i>
          <ReactTooltip
            id={"grid"}
            effect="solid"
            textColor='#fff' 
            backgroundColor='#5B5A99'
            className="custom-tooltip"
            globalEventOff='click' 
          >
            <h3 >Vista a Griglia</h3>
          </ReactTooltip>
          
            <i className="column-icon" onClick={() => setColumn(true)}>
              <a data-tip data-for={"column"} >
                <Column />
              </a>
            </i>

          <ReactTooltip
            id={"column"}
            effect="solid"
            textColor='#fff' 
            backgroundColor='#5B5A99'
            className="custom-tooltip"
            globalEventOff='click' 
          >
            <h3>Vista a Colonna</h3>
          </ReactTooltip>
          {/* <i>
            <Reload className="reload" />
          </i> */}
        </div>
        <img src={user} alt="prop-pic" title="prop-pic"/>
      </StyledNav>
        <StyledOverlay>
          <StyledCards className={column ? "column-view" : ""}>
            {products.map((item, key) => {
              // console.log(item.data.reviews);
              return (
                <Card 
                  key={key} 
                  title={item.data.title} 
                  description={item.data.description} 
                  id={item.id} 
                  emp={item.data.employee}
                  category={item.data.category}
                  price={item.data.price}
                  reviews={item.data.reviews} 
                  column={column}
                />
              );
            })}
            
          </StyledCards>
        </StyledOverlay>
    </StyledContainer>
  );
};


export default Home;