// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Sidebar from '../../components/Sidebar';
import { closeSideBar } from '../../actions/theme';

const mapStateToProps = (state) => ({
  sideBarView: state.sideBar.hide,
});

const mapDispatchToProps = (dispatch) => ({
  handleBar: () => {
    dispatch(closeSideBar());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
