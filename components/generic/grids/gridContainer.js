import styled from 'styled-components'
import StructuralWrap from '../structural/wrap'
import {Title} from '../GenericComponents'

export default (props) => {
    return (
      <StructuralWrap backgroundColor={'#f1f1f1'}>
        {props.title &&
          <Title>{props.title}</Title>
        }
        <Grid>
          {props.children}
        </Grid>
      </StructuralWrap>
    )
}

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
