import { connect } from 'react-redux';

// == Import : local
import Trophy from '../../components/Trophy';
import { fetchTrophies } from '../../actions/questionForm';

const mapStateToProps = (state) => ({
  trophies: state.questionForm.listOfTrophies,
  waitTrophies: state.questionForm.waitTrophies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrophies: () => {
    dispatch(fetchTrophies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Trophy);
