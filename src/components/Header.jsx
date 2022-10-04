// import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;

// Header.defaultProps = {
//   text: "New App Name"
// }

// Type checking
// Header.propTypes = {
//   text: PropTypes.string
// }
