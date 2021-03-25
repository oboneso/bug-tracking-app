/** @format */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket, ticketComment } from 'store/actions/ticketActions';
import Moment from 'react-moment';

import style from './comment.module.css';
import { TICKET_COMMENT_RESET } from 'store/types';

const Comment = () => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');

	const { ticketId } = useSelector((state) => state.id);

	const { singleTicket, loading, error } = useSelector(
		(state) => state.singleTicket,
	);

	const { commentSuccess, commentError, commentLoading } = useSelector(
		(state) => state.ticketCommentCreate,
	);

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(ticketComment(comment, singleTicket._id));
		setComment('');
	};

	useEffect(() => {
		if (commentSuccess) {
			dispatch({ type: TICKET_COMMENT_RESET });
			dispatch(getTicket(ticketId));
		}
	}, [commentSuccess, dispatch]);

	return (
		<div className={style.commentSection}>
			<div className={style.commentContainer}>
				{loading || commentLoading ? (
					<h6>loading...</h6>
				) : error || commentError ? (
					<h6>{error}</h6>
				) : (
					<>
						{singleTicket.comments.map((item) => {
							return (
								<div
									key={item._id}
									className={style.commentBox}>
									<div className={style.boxHeader}>
										<h6 className={style.name}>
											{item.name}
										</h6>
										<Moment
											className={style.date}
											format='MMM-DD hh:mm'>
											{item.createdAt}
										</Moment>
									</div>

									<p className={style.comment}>
										{item.comment}
									</p>
								</div>
							);
						})}
					</>
				)}
			</div>
			<div className={style.commentForm}>
				<form
					className={style.commentForm}
					onSubmit={(event) => submitHandler(event)}>
					<input
						type='text'
						value={comment}
						placeholder='write a comment'
						onChange={(e) => setComment(e.target.value)}
					/>
					<button className={style.formButton} type='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Comment;
