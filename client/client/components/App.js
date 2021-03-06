import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
	console.log ("STATE")
	console.log(state)
	return {
		posts : state.posts,
		comments: state.comments,
		users: state.user.list,
		receipes: state.receipe.list,
		categories: state.category.list
	}
}

function mapDispachToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;