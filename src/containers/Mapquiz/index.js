/* eslint-disable no-dupe-keys */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Mapquiz from '../../components/Mapquiz';

const mapStateToProps = (state) => ({
  theme: state.monde.test,
  redirection: state.user.redirection,
  isLogged: state.user.isConnected,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Mapquiz);
