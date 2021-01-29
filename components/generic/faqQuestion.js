import styled from 'styled-components'
import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown  } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 100%;
  border-radius: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 2px solid #f89e3780;
  transition: background-color 0.25s ease;
  :hover {
    background-color: #f89e371f;
  }
`;
const Question = styled.p`
  padding: 15px 20px;
  border-radius: 2px;
  font-size: 21px;
  color: black;
  position: relative;
  font-weight: 600;
  .svg-inline--fa {
    width: 40px;
    height: 40px;
    margin: auto;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 14px;
    color: black;
  }
`;

const Answer = styled.p`
  padding: 0px 40px 20px;
  border-radius: 2px;
  font-size: 17px;
  color: black;
`;

const FaqQuestion = ({question, answer}) => {
  const [open, setOpen] = useState(false)

  return (
    <Wrap>
      <Question onClick={() => {setOpen(!open)}} >{question} <FontAwesomeIcon icon={open ? faCaretDown : faCaretUp } /></Question>
      { open &&
        <Answer>{answer}</Answer>
      }
     
    </Wrap>
  )
}

export default FaqQuestion;