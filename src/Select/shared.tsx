const black = '#000';
const primary = '#06c';
const primaryDark = '#435a70';
const primaryDarker = '#17324d';

// Types here depend of react-select internal emotion dep + more parametric stuff
// @TODO: fix it this way for now, will review later on
export const styles = {
  container: (provided: any) => ({ ...provided, height: '2.5rem' }),
  control: (provided: any) => ({
    ...provided,
    height: '2.5rem',
    borderRadius: '0',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: `solid ${primaryDark} 1px`,
    boxShadow: 'none',
    '&:hover': { borderBottom: `solid ${primaryDark} 1.25px` } // border style on hover
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    fill: primaryDark
  }),
  option: (provided: any, { isDisabled, isFocused, isSelected }: any) => ({
    ...provided,
    background: 'white',
    textDecoration: isFocused || isSelected ? 'underline' : 'none',
    color: isSelected ? primaryDarker : primary,
    cursor: isDisabled ? 'not-allowed' : 'pointer'
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fill: primaryDark
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: black,
    fontWeight: 'bold'
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    height: '2.5rem'
  })
};
