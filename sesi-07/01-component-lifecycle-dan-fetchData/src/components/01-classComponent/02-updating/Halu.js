import React from 'react'

export default class Halu extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count: 0,
			users: [],
			isLoading: true
		};
	}

	shouldComponentUpdate(nextProps, nextState){ //membatasi, keadaan / kejadian apa saja yang bisa men-trigger re-render, defaultnya true
		if (this.state.users.length !== nextState.users.length){
			return true;
		}
		return false;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.selectedState !== this.props.selectedState) {
			fetch('https://jsonplaceholder.typicode.com/posts/1')
				.then(resp => resp.json())
				.then((respJson) => {
					// do what ever you want with your 'response'
					this.setState({ 
						isLoading: false,
						users: respJson.slice(0, 20)
					})
					console.log("test")
				})
				
				.catch(err => {
					console.log(err)
				})
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(resp => resp.json())
			.then((respJson) => {
				// do what ever you want with your 'response'
				this.setState({ 
					isLoading: false,
					users: respJson.slice(0, 20)
				})
				console.log("test")
			})
			
			.catch(err => {
				console.log(err)
			})
	}

	// eventData remove event listener (untuk menghapus)
	componentWillUnmount(){
		// eventData.removeEventListener()
	}


	render() {
		const { postTodo } = this.state
		return (
			<div>
				<table>
					<tbody>
					{this.state.map((todo, index) => {
						return (
							<tr key={index}>
								<td>
									<p>{todo.id}</p>
								</td>
								<td>
									<p>{todo.title}</p>
								</td>
							</tr>
						)
					})}
					</tbody>
				</table>
				
			</div>
		)
	}

}
