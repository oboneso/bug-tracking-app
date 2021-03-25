import React from 'react';
import styled, { css } from 'styled-components';

const StyledBox = styled.div`
	color: red;

	${(props) =>
		props.primary &&
		css`
			background: white;
			color: blue;
		`}
`;

const Box = ({ text, children }) => {
	return <StyledBox>{(text, children)}</StyledBox>;
};

export default Box;
