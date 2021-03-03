/* eslint-disable no-console */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UnsubscribePage from '../../components/UnsubscribePage';
import { unsubscribe } from '../../actions/theme';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  password2: state.user.password2,
  nickname: state.user.nickname,
  avatar_id: state.user.avatar_id,
  isLogged: state.user.isConnected,
  id_user: state.user.id_user,
});

const mapDispatchToProps = (dispatch) => ({
  handleUnsubscribe: () => {
    console.log('dans le container');
    dispatch(unsubscribe());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UnsubscribePage);
