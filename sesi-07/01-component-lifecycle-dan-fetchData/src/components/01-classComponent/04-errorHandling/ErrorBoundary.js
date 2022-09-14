import React, { Component, logComponentStackToMyService } from 'react'

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true};
	}

	componentDidCatch(error, info) {//mengecek apakah ada error atau tidak
		// Example "componentStack";
		//   in ComponentThatThrow (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		logComponentStackToMyService(info.componentStack);
	}

	render() {
		if (this.state.hasError) {
			// you can render any custom fallback UI
			return <h1>Something went wrong.</h1>
		}

		//view component
		return (
			this.props.children
		)
	}
}
