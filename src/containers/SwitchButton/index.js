// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import SwitchButton from '../../components/SwitchButton';
import { changeTheme } from '../../actions/theme';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  changeTheme: () => {
    dispatch(changeTheme());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
