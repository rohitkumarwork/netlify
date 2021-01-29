
import StyledSelect from './styledSelect'
import SelectBox from './selectBox'

export default ({listingQuery, setListingQuery, label, formName, options, placeholder}) => {
  const handleMultipleChange = (event, queryField) => {
    if (event == null || event.length == 0) {
      delete listingQuery[queryField]
    } else {
      const filteredValues = event.map((item) => { return item.value})
      listingQuery[queryField] = filteredValues
    }
    setListingQuery({...listingQuery})
  }
  const generateOptions = (fieldName) => {
    // options = listingQuery[fieldName].map((item) => {   { value: item, label: item }  })
    // console.log('generating options for ', fieldName);
    // return [{ value: '1', label: '1 b' }]
    return []
  }

  return (
    <SelectBox label={label} formName={formName}>
      <StyledSelect
        onChange={e => handleMultipleChange(e, formName)} 
        defaultValue={generateOptions(formName)}
        isMulti
        
        placeholder={placeholder}
        name={formName}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        closeMenuOnSelect={false}
      />
  </SelectBox>

  )
}