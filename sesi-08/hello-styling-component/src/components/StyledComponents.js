import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	background-color: #faf16e;
	padding: 30px;
	font-family: "Arial";
`;

function StyledComponents() {
  return (
	<Div>
		<h1>Hello Styled Components</h1>
	</Div>
  )
}

export default StyledComponents