import PropTypes from 'prop-types';

const Search = ({ onChange, value }) => {
  return <input value={value} onChange={onChange} />;
};

export default Search;

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};