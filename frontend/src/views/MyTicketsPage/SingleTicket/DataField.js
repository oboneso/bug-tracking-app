import React from 'react';
import Moment from 'react-moment';

// Styles
import style from './SingleTicket.module.css';

const DataField = ({ label, data, date = false }) => {
	return (
		<div className={style.dataFieldContainer}>
			<label className={style.label}>{label}:</label>
			<div className={style.dataField}>
				{date ? (
					<Moment format='MMM-DD-YYYY hh:mm:ss'>{data}</Moment>
				) : (
					<>{data}</>
				)}
			</div>
		</div>
	);
};

export default DataField;
