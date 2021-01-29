import Select from 'react-select'
import styled from 'styled-components'

export default styled(Select)`
  .select__option {
    color: black;
  }
  .basic-multi-select {
    width: fit-content;
    margin-top: 2px;
    transition: max-width 0.25s ease;
    .select__menu {
      margin-top: 0px;
    }
  }
  .select__control {
    overflow: hidden;
    background-color: transparent;
    .select__value-container {
      padding: 2px 0px;
      flex-wrap: nowrap;
      display: flex;
      min-width: inherit;
      justify-content: flex-start;
      overflow: initial;
      .select__placeholder {
        width: fit-content;
        white-space: nowrap;
      }
    }
  }
  .select__control--menu-is-open {
    .select__value-container {
      overflow: initial;
      justify-content: inherit !important;
    }
  }




  .select__value-container--is-multi.select__value-container--has-value::after {
    width: 23px;
    height: 28px;
    content: " ";
    position: absolute;
    right: 0px;
    top: 1px;
    background-image: linear-gradient(to right, #ff000000 , white);
  }
  .select__placeholder, .select__single-value {
    color: dimgrey;
    font-weight: 300;
    display: contents;
  }

  .select__control {
    min-height: 0px;
    height: 32px;
    min-width: 60px;
    max-width: 250px;
    transition: max-width 0.25s all;
    border: none !important;
    box-shadow: none;
    .select__clear-indicator, .select__dropdown-indicator {
      color: #242A42;
      background-color: white;
    }
    .select__dropdown-indicator {
      padding: 6px;
      border-radius: 2px;
      transition: background-color 0.35s all;
    }
  }
  .select__control--menu-is-open {
    max-width: 1000px;
    box-shadow: 0 2px 8px 4px rgba(0,0,0,0.1);
    .select__dropdown-indicator {
      background-color: #ff8e8e;
      color: white;
      svg {
        transform: rotate(180deg);
      }
    }
    .select__indicator-separator {
      height: 32px;
      margin-top: 0px;
    }
    .select__value-container--is-multi {
      min-width: 120px;
    }
  }
  .select__indicators {
    height: 32px;
    .select__indicator-separator {
      display: none;
    }
  }

  
  .select__multi-value {
    min-width: fit-content;
    z-index: -1;
    .select__multi-value__label, .select__multi-value__remove {
      color: white;
      font-weight: 300;
    }
    .select__multi-value__label {
      background-color: #F89E37;
      padding: 3px 7px;
    }

    .select__multi-value__remove {
      background-color: #333333;
      transition: background-color 0.15s ease-in-out;
    }
    .select__multi-value__remove:hover {
      background-color: #FFBDAD;
      color: #DE350B;
    }
  }

  .select__menu {
    margin-top: 0px;
    .select__option--is-focused {
      background-color: #f89e3780;
    }
  }

`;
