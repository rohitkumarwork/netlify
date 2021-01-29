import styled from 'styled-components'

const PackageWrap = styled.div`
  border: 3px solid #F89E37;
  min-height: 500px;
  border-radius: 19px;
  width: 100%;
  margin: 5px;
  overflow: hidden;
  `;
  const PackageTitle = styled.div`
  text-align: center;
  width: 100%;
  background-color: #F89E37;
  padding: 10px 0px;
  height: fit-content;
  min-height: 33px;
  h3 {
    color: white;
    font-size: 24px;
    margin-bottom: 4px;
    display: inline-block;
  }
  h4 {
    font-style: italic;
    font-weight: 500;
    display: inline-block;
    margin-left: 15px;
    line-height: 31px;
  }
  h5 {
    margin: 0px;
    font-size: 18px;
  }
`

const Package = (props) => (
  <PackageWrap className="packageWrap">
    <PackageTitle>
      {
        props.count &&
        <h3>Package {props.count}</h3>
      }
      <h4>"{props.title}"</h4>
      <h5>{props.qualifier}</h5>
    </PackageTitle>
    {props.children}
  </PackageWrap>
)

export default Package;