import styled from "styled-components";

import Popover from "react-tiny-popover";

import React, { useState } from "react";

const Wrap = styled.div`
  color: #323232;
  font-weight: 300;
  cursor: pointer;
  border: 1px solid #e6e6e6;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0px;
  text-align: center;
  @media (max-width: 750px) {
    height: fit-content;
    padding-top: 0px;
    width: 100%;
    display: block;
    text-align: center;
    font-size: 30px;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 1px solid #eaeaea;
  }
`;

const PopoverWrap = styled.div`
  background-color: white;
  border-radius: 0px;
  padding: 20px;
  z-index: 999;
  min-width: 100px;
  border: 1px solid #dadada;
  text-align: center;
  box-shadow: 3px 5px 43px -10px #0000005e;
`;

export default ({
  listingQuery,
  setListingQuery,
  label,
  formName,
  options,
  placeholder,
  children,
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <Popover
      containerStyle={{ overflow: "visible", "z-index": 10 }}
      isOpen={popoverOpen}
      position={"bottom"} // preferred position
      onClickOutside={() => setPopoverOpen(false)} // handle click events outside of the popover/target here!
      content={<PopoverWrap>{children}</PopoverWrap>}
    >
      <Wrap onClick={() => setPopoverOpen(!popoverOpen)}>{label}</Wrap>
    </Popover>
  );
};
