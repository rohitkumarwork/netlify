import styled from 'styled-components'
import Link from 'next/link';

const GridWrap = styled.div`
  width: 357px;
  min-height: 220px;
  display: inline-block;
  margin-bottom: 12px;
  position: relative;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 24px 0 rgba(0,0,0,0.1);
  border: none;
  background-color: #868686;
`;

export default (props) => {
    return (
      <Link href={props.url}>
        <GridWrap>
          {props.children}
        </GridWrap>
      </Link>
    )
}
