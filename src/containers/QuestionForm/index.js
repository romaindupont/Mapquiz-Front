import { connect } from 'react-redux';
import QuestionForm from '../../components/QuestionForm';

const mapStateToProps = (state) => ({
  questions: state.questionForm.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
