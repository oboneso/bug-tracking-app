// Packages
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

// Actions
import { login } from '../../store/actions/userActions';
import { showComponent } from 'store/actions/navigationActions';

// 	Styles
import style from './loginform.module.css';

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	// Local state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login(email, password));
	};

	const { userInfo, loading, error } = useSelector((state) => state.userLogin);

	useEffect(() => {
		if (userInfo) {
			dispatch(showComponent('home'));
			history.push('/dashboard');
		}
	}, [history, userInfo, dispatch]);

	return (
		<div className={style.loginFormContainer}>
			<div className={style.loginHeaderContainer}>
				<h1 className={style.loginTitle}>Sign In</h1>
			</div>
			{error ? (
				<h6>{error}</h6>
			) : loading ? (
				<h6>loading...</h6>
			) : !userInfo ? (
				<>
					<form className={style.formContainer} onSubmit={handleSubmit}>
						<div className={style.inputBox}>
							<span className={style.inputSpan}>
								<label>Email</label>
							</span>

							<input
								type='email'
								value={email}
								className={style.input}
								placeholder='Enter Email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className={style.inputBox}>
							<span className={style.inputSpan}>
								<label>Password</label>
							</span>
							<input
								type='password'
								value={password}
								className={style.input}
								placeholder='Enter Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button className={style.inputSubmit} type='submit'>
							Sign In
						</button>
					</form>
					<div className={style.registerContainer}>
						Don't have an account?
						<Link to='/register' className={style.a}>
							<button className={style.registerButton}>
								Create an Account
							</button>
						</Link>
					</div>
				</>
			) : (
				<h6>May need extram error handing if this gets displayed</h6>
			)}
			;
		</div>
	);
};
export default LoginForm;
