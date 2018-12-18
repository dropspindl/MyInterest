import { connect } from 'react-redux';
import PinBuilder from './pin_builder';
// import { createPin } from '../../actions/pin_actions';

const mapStateToProps = state => ({
  boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinBuilder);
