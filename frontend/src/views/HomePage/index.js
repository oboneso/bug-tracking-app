import React from 'react';
import { Link } from 'react-router-dom';
import network from 'img/network.png';

import style from './homepage.module.css';

const HomePage = () => {
	return (
		<div className={style.homepageContainer}>
			<div className={style.contentContainer}>
				<h1 className={style.title}>React Tracker</h1>

				<h4 className={style.subtitleContainer}>
					CAPTURE - PRIORITIZE - RESOLVE
				</h4>

				<p className={style.text}>
					Software to organize website feedback, resolve issues and manage your
					projects.
				</p>

				<Link to={'/login'}>
					<button className={style.heroButton}>Start for Free</button>
				</Link>
			</div>

			<div className={style.imageContainer}>
				<img className={style.image} src={network} alt='' />
			</div>
		</div>
	);
};

export default HomePage;
