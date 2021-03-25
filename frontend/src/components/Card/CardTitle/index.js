import React from 'react';
import style from './cardTitle.module.css';

const CardTitle = ({ children }) => {
	return <div className={style.buttonTitle}>{children}</div>;
};

export default CardTitle;
