/* eslint-disable camelcase */
// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Planetes from '../../components/Planetes';
import { changeViewSideBar } from '../../actions/theme';
import { fetchQuestion } from '../../actions/questionForm';

const mapStateToProps = (state) => ({
  questions: state.questionForm.list,
  loading: state.questionForm.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (id_category) => {
    dispatch(fetchQuestion(id_category));
  },
  handleSideBar: () => {
    dispatch(changeViewSideBar());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Planetes);
