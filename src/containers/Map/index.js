/* eslint-disable camelcase */
import { connect } from 'react-redux';
import Map from '../../components/Map';
import { fetchQuestion } from '../../actions/questionForm';

const mapStateToProps = (state) => ({
  questions: state.questionForm.list,
  loading: state.questionForm.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (id_category) => {
    dispatch(fetchQuestion(id_category));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
