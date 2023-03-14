import {Container} from './styles.js'


export function InputCategory({selectedValue, options,onSelectionChange, icon: Icon, ...rest}) {


  return(
    <Container >
  <select value={selectedValue} onChange={onSelectionChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  )
}

