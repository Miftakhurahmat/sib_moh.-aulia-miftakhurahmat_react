import React from 'react'
import ExternalCSS from './ExternalCSS'
import ExternalCSSModule from './ExternalCSSModule'
import ExtObjectVarCSS from './ExtObjectVarCSS'
import InlineCSS from './InlineCSS'
import ObjectVariabelCSS from './ObjectVariabelCSS'
import StyledComponents from './StyledComponents'

const Main = () => {
  return (
	<div>
		<h1>Belajar Styling Components</h1>
		<InlineCSS />
		<ObjectVariabelCSS />
		<ExternalCSS />
		<ExternalCSSModule />
		<ExtObjectVarCSS />
		<StyledComponents />
	</div>
  )
}

export default Main