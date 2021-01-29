import styled from 'styled-components'
import StyledSelect from './styledSelect'
import SelectBox from './selectBox'

const Wrap = styled.div`
  padding-top: 10px;
`;

export default ({listingQuery, setListingQuery, label, formName, options, placeholder}) => {
  const handleChange = (event, queryField) => {
    if (event.value === '') {
      delete listingQuery[queryField]
    } else {
      listingQuery[queryField] = event.value
    }
    setListingQuery({...listingQuery})
  };

  return (
    <Wrap>
      <SelectBox label={label} formName={formName}>
        <StyledSelect
          onChange={ e =>  handleChange(e, formName)} 
          defaultValue={{ value: '', label: placeholder }}
          name={formName}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
    </SelectBox>

    </Wrap>

  )
}