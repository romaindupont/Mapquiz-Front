// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Footer from '../../../components/QuestionForm/Footer';
import { levelUp } from '../../../actions/questionForm';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  levelUp: () => {
    dispatch(levelUp());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
