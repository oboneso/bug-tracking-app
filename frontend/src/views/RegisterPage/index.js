/** @format */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { register } from '../../store/actions/userActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import style from 'views/RegisterPage/registerPage.module.css';

const RegisterPage = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const history = useHistory();
	const dispatch = useDispatch();

	const userRegister = useSelector((state) => {
		return state.userRegister;
	});
	const { loading, error, userInfo } = userRegister;

	useEffect(() => {
		if (userInfo) {
			history.push('/dashboard');
		}
	}, [history, userInfo]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(name, username, email, password));
		}
	};

	return (
		<div className={style.registerContainer}>
			<Link to='/'>
				<FontAwesomeIcon icon={faChevronCircleLeft} className={style.icon} />
			</Link>

			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}

			<div className={style.formContainer}>
				<form onSubmit={handleSubmit}>
					<div className={style.formHeader}>
						<h2 className={style.h2}>Sign Up</h2>
					</div>

					<div className={style.inputGroup}>
						<div className={style.inputBox}>
							<label>Name</label>
							<input
								type='text'
								value={name}
								className={style.input}
								placeholder='Enter Name'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className={style.inputBox}>
							<label>Username</label>
							<input
								type='text'
								value={username}
								className={style.input}
								placeholder='Enter username'
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div className={style.inputBox}>
							<label>Email</label>
							<input
								type='email'
								value={email}
								className={style.input}
								placeholder='Enter Email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className={style.inputBox}>
							<label>Password</label>
							<input
								type='password'
								value={password}
								className={style.input}
								placeholder='Enter Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className={style.inputBox}>
							<label>Confirm Password</label>
							<input
								type='password'
								value={confirmPassword}
								className={style.input}
								placeholder='Confirm Password'
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>

					<div className={style.formFooter}>
						<button type='submit' className={style.inputSubmit}>
							Register
						</button>

						<Link to='/login'>
							Already registered?{' '}
							<span className={style.footerSpan}>Login</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
