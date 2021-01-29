import styled from 'styled-components'

const SearchBoxWrap = styled.div`
  display: inline-block;
  height: 100%;
  width: fit-content;
  margin: 0px 5px;
  position: sticky;
  z-index: 99999;
`;

export default (props) => {
    return (
      <SearchBoxWrap>
        {props.children}
      </SearchBoxWrap>
    )
}