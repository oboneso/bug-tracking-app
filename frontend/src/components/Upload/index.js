import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon, faCloudUploadAlt, faFolderPlus } from 'components/Icon';

import style from './Upload.module.css';
import styles from './styles';

import { getPresignedURL, sendImageToS3 } from 'store/actions/uploadActions';

const Upload = () => {
	const dispatch = useDispatch();
	const [image, setImage] = useState();

	const { uploadURL } = useSelector((state) => state.uploadURL);

	const chooseImageChangeHandler = (event) => {
		setImage(event.target.files[0]);
	};

	const submitHandler = async (event) => {
		event.preventDefault();
		dispatch(sendImageToS3(uploadURL, image));
	};

	useEffect(() => {
		dispatch(getPresignedURL());
	}, []);

	return (
		<div className={style.uploadContainer}>
			{image ? (
				<img
					className={style.newImage}
					src={URL.createObjectURL(image)}
				/>
			) : (
				<label className={style.imageContainer} htmlFor='upload-button'>
					<div className={style.dottedLine}>
						<Icon
							style={styles.uploadIcon}
							type={faCloudUploadAlt}
						/>
						<span className={style.addImageText}>
							{' '}
							Click here to add an image
						</span>
					</div>
				</label>
			)}

			<form className={style.formContainer} onSubmit={submitHandler}>
				<input
					type='file'
					id='upload-button'
					onChange={chooseImageChangeHandler}
					style={{ display: 'none' }}
				/>

				<button className={style.uploadButton} type='submit'>
					<Icon style={styles.folderIcon} type={faFolderPlus} />
					<span>Upload Image</span>
				</button>
			</form>
		</div>
	);
};

export default Upload;
// event.preventDefault();
// const formData = new FormData();
// formData.append('image', file);
// const config = {
// 	headers: {
// 		'Content-Type': 'multippart/form-data',
{
	/* <form onSubmit={(event) => submitHandler(event)}></form>
					<button type='submit'>submit</button>
			</form> */
}

// const handleResponse = (response) => {
// 	if (response.data.uploadURL) {
// 		setUploadURL(response.data.uploadURL);
// 		return;
// 	} else if (res.statusText === 'OK') {
// 		dispatch(createAlert(`${200} - Image uploaded successfully`));
// 		dispatch(modalStatusAction(false, ''));
// 		return;
// 	} else {
// 		const message = 'No data found. Creating an alert message ';
// 		dispatch(createAlert(message));
// 		return message;
// 	}
// };
