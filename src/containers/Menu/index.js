// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import {
  toggleOpen,
  login,
  changeValue,
  logout,
} from '../../actions/theme';
import Menu from '../../components/Menu';

const mapStateToProps = (state) => ({
  isConnected: state.user.isConnected,
  open: state.menu.open,
  email: state.user.email,
  password: state.user.password,
  nickname: state.user.nickname,
  error: state.user.error,
  waitError: state.user.waitError,
  avatar_id: state.user.avatar_id,
});

const mapDispatchToProps = (dispatch) => ({
  changeOpen: () => {
    dispatch(toggleOpen());
  },
  handleLogin: () => {
    dispatch(login());
  },
  changeField: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  },
  handleLogout: () => {
    dispatch(logout());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
