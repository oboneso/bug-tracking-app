Start in the projects main js file...
Step 1: install passport - authentication software for node and alerts our
express app
Step 2: install passport-google-oauth20, save module to a variable called
GoogleStrategy. We are interested in the .Strategy property from
this module. This instructs passport on exactly how to
authenticate users.
Step 3: <passport.use>(new GoogleStrategy()) registers/informs passport library
how to make use of the GoogleStrategy
Step 4: inst all passport
Step 5: install passport
Step 6: install passport
Step 7: install passport

public token clientId:
867045366629-1a3p88pis9tme2olfe2sc8h30gjfcs5t.apps.googleusercontent.com

private token secret:
YUGEEvTq13z_W9P0n6JRT6rp

  	<div
				onClick={() => setValue('projects')}
				className={style.singleButtonContainer}>
				<div className={style.innerContainer}>
					<p className={style.buttonTitle}>Projects</p>
					<div
						style={{ background: '#28a745' }}
						onClick={() => setValue('projects')}
						className={style.largeButton}>
						<FontAwesomeIcon
							onClick={() =>
								dispatch(
									modalStatusAction(true, 'createProject'),
								)
							}
							className={style.addIcon}
							icon={faPlus}
						/>

    					{projects.length}
    				</div>
    			</div>
    		</div>
    		<div
    			onClick={() => setValue('users')}
    			className={style.singleButtonContainer}>
    			<div className={style.innerContainer}>
    				<p className={style.buttonTitle}>Users</p>
    				<div
    					style={{ background: 'orange' }}
    					onClick={() => setValue('users')}
    					className={style.largeButton}>
    					<FontAwesomeIcon
    						className={style.addIcon}
    						icon={faPlus}
    					/>
    					{num}
    				</div>
    			</div>
    		</div>
