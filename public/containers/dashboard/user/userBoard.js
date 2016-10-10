import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUserInformation, updateUserInfo } from 'actions/dashboard/userActions';
import { getUserInfo, isFetching } from 'reducers/dashboard/userReducer';
import { getUserError } from 'reducers/dashboard/errorReducer';
import FormField from 'components/dashboard/user/formComponent';
import ErrorMessage from 'containers/general/errors/errorMessage';
import style from '../../../../assets/stylesheets/dashboard/user.scss';
import spinner from '../../../../assets/img/updating.gif';
import foreach from 'lodash/forEach';

class UserBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: { value: '', error: false },
			email: { value: '', error: false },
			password: { value: '', error: false },
			confirmPassword: { value: '', error: false }
		}
	}
	componentDidMount() {
		this.props.fetchUserInformation('asdf');
	}
	componentWillReceiveProps(nextProps) {
		const { user } = nextProps;
		this.setState({
			username: { value : user.username, error: false },
			email: { value: user.email, error: false },
			password: { value: user.password, error: false }
		});
	}

	onInputChange(event, type) {
		this.setState({ [type]: { value: event.target.value, error: this['state'][type]['error'] }});
	}

	formInputControl() {
		let successful = true;
		const inputElements = ['username', 'email', 'password', 'confirmPassword'];
		foreach(inputElements, (input) => {
			if(this['state'][input]['value'] == ''){
				successful = false;
				this.setState({ [input]: { value: this['state'][input]['value'], error: true }});
			} else {
				if(input === 'confirmPassword' && this.state.confirmPassword.value !== this.state.password.value) {
					successful = false;
					this.setState({ confirmPassword: { value: this.state.confirmPassword.value, error: true }});
				} else {
					this.setState({ [input]: { value: this['state'][input]['value'], error: false }});
				}
			}
		});
		return successful;
	}

	handleFormSubmit(event){
		event.preventDefault();
		if(this.formInputControl()) {
			const userData = {
				username: this.state.username.value,
				email: this.state.email.value,
				password: this.state.password.value
			};
			this.props.updateUserInfo(userData);
		}
	}

	updateUser() {
		let important = {
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			width: '130px',
			height: '40px'
		};
		if(this.props.isFetching){
			important.backgroundImage = `url("${spinner}")`;
			return <button style={important} className="btn btn-primary"/>;
		} else {
			return <button type="submit" style={important} className="btn btn-primary">Save</button>
		}
	}

	render() {
		const user = this.state;
		return (
			<div className="row">
				<div className="col-lg-12 headline">
					<h5> Change your profile information </h5>
				</div>
				<div className="col-md-10">
					<ErrorMessage reducerSelector={ getUserError } />
				</div>
				<div className="user-board col-lg-6">
					<form onSubmit={ this.handleFormSubmit.bind(this) }>
						<FormField
							label="Username"
							type="text"
							value={ user.username.value }
							error={ user.username.error }
							errorMessage="The username already exist"
							inputType="username"
							onInputChange={ (event, type) => this.onInputChange(event, type) }/>
						<FormField
							label="Email"
							type="email"
							value={ user.email.value }
							error={ user.email.error}
							errorMessage="The email already exist"
							inputType="email"
							onInputChange={ (event, type) => this.onInputChange(event, type) }/>
						<FormField
							label="Password"
							type="password"
							value={ user.password.value }
							error={ user.password.error}
							errorMessage="The password is empty"
							inputType="password"
							onInputChange={ (event, type) => this.onInputChange(event, type) }/>
						<FormField
							label="Confirm the password"
							type="password"
							value={ user.confirmPassword.value }
							error={ user.confirmPassword.error}
							errorMessage="The password does not match, please try again"
							inputType="confirmPassword"
							onInputChange={ (event, type) => this.onInputChange(event, type) }/>
						{ this.updateUser() }
					</form>
				</div>
			</div>
		);
	}
}

UserBoard.PropTypes = {
	fecthUserInformation: React.PropTypes.func.isRequired,
	updateUserInfo: React.PropTypes.func.isRequired,
	user: React.PropTypes.object.isRequired,
	errorMessage: React.PropTypes.string,
	isFetching: React.PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchUserInformation, updateUserInfo }, dispatch);
};

const mapStateToProps = (state) => {
	return {
		user: getUserInfo(state.dashboard.user),
		isFetching: isFetching(state.dashboard.user)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);