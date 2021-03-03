/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import RegistrationPage from '../../components/RegistrationPage';
import { fetchAvatars } from '../../actions/questionForm';
import { changeValue, registration, changeInfo } from '../../actions/theme';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  password2: state.user.password2,
  nickname: state.user.nickname,
  avatar_id: state.user.avatar_id,
  isLogged: state.user.isConnected,
  avatars: state.questionForm.listOfAvatars,
  load: state.questionForm.load,
  id_user: state.user.id_user,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  },
  handleRegistration: (id_avatar) => {
    dispatch(registration(id_avatar));
  },
  fetchAvatars: () => {
    dispatch(fetchAvatars());
  },
  handleChangeUserInfo: (avatar_id) => {
    dispatch(changeInfo(avatar_id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
