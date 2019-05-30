var Loader = require('react-loaders').Loader;
// also available as `default`

function renderLoader() {
  return <Loader type="pacman" active />
}

renderLoader.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    color: PropTypes.string,
    innerClassName: PropTypes.string
  };
  
   export default renderLoader;
