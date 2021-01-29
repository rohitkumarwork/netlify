import styled from 'styled-components'
import Geosuggest from 'react-geosuggest';

export default styled(Geosuggest)`
  .geosuggest__suggests {
    background-color: white;
    margin: 0px;
  }
  .geosuggest, .geosuggest__input-wrapper {
    height: 100%;
    position: relative;
  }
  .geosuggest__input {
    font-size: 17px;
    padding: 6px 5px 7px 6px;
    margin-top: 12px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-weight: 500;
  }
  .geosuggest__suggests {
    list-style-type: none;
    padding: 4px 7px;
    .geosuggest__item {
      letter-spacing: 0.7px;
      padding: 5px 0px;
      cursor: pointer;

    }
  }
  .geosuggest__suggests--hidden {
    display: none;
  }
`;