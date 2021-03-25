// Packages
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PAGE_TWO, REPORT_A_BUG, REQUEST_A_FEATURE } from 'store/types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styles ~ css
import style from './pageOne.module.css';

const PageOne = () => {
	const dispatch = useDispatch();

	// If modalStatus.open is true, the appropriate container class will activate
	const { open } = useSelector((state) => state.modalStatus);

	// Form data from each step is saved to redux global state
	const { ticketType } = useSelector((state) => state.buildForm);

	const [selection, setSelection] = useState(ticketType);

	const ticketTypeClickHandler = (userSelected) => {
		setSelection(userSelected);
		if (userSelected === 'bug') {
			dispatch({ type: REPORT_A_BUG });
		} else if (userSelected === 'feature') {
			dispatch({ type: REQUEST_A_FEATURE });
		}
	};

	return (
		<div
			className={
				open ? style.createTicketContainerModal : style.createTicketContainer
			}>
			<div className={style.headerContainer}>
				<h6 className={style.headerTitle}>Would you like to:</h6>
			</div>
			<div className={style.chooseTicketContainer}>
				<div
					onClick={() => ticketTypeClickHandler('bug')}
					className={selection === 'bug' ? style.active : style.notActive}>
					Report A Bug
					{selection === 'bug' ? (
						<FontAwesomeIcon
							className={style.icon}
							icon={faCheckCircle}></FontAwesomeIcon>
					) : null}
				</div>

				<div
					onClick={() => ticketTypeClickHandler('feature')}
					className={selection === 'feature' ? style.active : style.notActive}>
					Request A Feature
					{selection === 'feature' ? (
						<FontAwesomeIcon
							className={style.icon}
							icon={faCheckCircle}></FontAwesomeIcon>
					) : null}
				</div>
			</div>
			<div className={style.buttonContainer}>
				{selection ? (
					<button
						onClick={() => dispatch({ type: PAGE_TWO })}
						className={style.nextButton}>
						NEXT
					</button>
				) : null}
			</div>
		</div>
	);
};

export default PageOne;
