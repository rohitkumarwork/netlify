import styled from 'styled-components'
import Link from 'next/link';

const Button = styled.button`
  display: block;
  margin: 30px auto;
  border-radius: 24px;
  background-color: rgb(248, 158, 55);
  padding: 16px 25px;
  border: none;
  color: white;
  font-size: 21px;
  font-weight: 600;
`;


const CallToAction = ({buttonText, url}) => (
  <Link href={url}>
    <Button>{buttonText}</Button>
  </Link>
)

export default CallToAction;