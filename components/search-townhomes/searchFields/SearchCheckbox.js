
import styled from 'styled-components'

import Checkbox from './checkbox'

  const Label = styled.label`
    display: block;
    text-align: left;
  `;


export default ({listingQuery, setListingQuery, label, formName, value}) => {
  const handleChange = () => {
    if (listingQuery && listingQuery[formName] && listingQuery[formName].includes(value)) {
      if (listingQuery[formName].length == 1) {
        delete listingQuery[formName]
      } else {
        const filteredValues =  listingQuery[formName].filter(item => item !== value)
        listingQuery[formName] = filteredValues
      }

    } else if (listingQuery && !listingQuery[formName]) {
      listingQuery[formName] = [ value ]
    } else {
      listingQuery[formName] = [
        ...listingQuery[formName],
        value
      ]
    }
    setListingQuery({...listingQuery})
  }

  return (
    <Label>
      <Checkbox
        checked={listingQuery && listingQuery[formName] && listingQuery[formName].includes(value)}
        onChange={handleChange}
      />
      <span style={{ marginLeft: 8 }}>{label}</span>
    </Label>

  )
}