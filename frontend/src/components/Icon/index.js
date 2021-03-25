import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTrash,
	faRocket,
	faCamera,
	faBug,
	faCheckCircle,
	faChevronCircleLeft,
	faCloudUploadAlt,
	faEdit,
	faFolderPlus,
	faPlus,
	faSave,
	faStop,
	faUsers,
	faArrowAltCircleLeft,
	faArrowLeft,
	faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export const Icon = ({ type, style = {} }) => {
	return <FontAwesomeIcon icon={type} style={style} />;
};

export {
	faTrash,
	faRocket,
	faCamera,
	faBug,
	faCheckCircle,
	faChevronCircleLeft,
	faCloudUploadAlt,
	faEdit,
	faFolderPlus,
	faPlus,
	faSave,
	faStop,
	faUsers,
	faArrowAltCircleLeft,
	faArrowLeft,
	faArrowRight,
};
