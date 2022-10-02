import { useEffect, useState } from 'react'
import Layout from '../../components/Layout';

export default function home(){
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => setUsers(data))
	}, []);
	
	return(
		<Layout title="users no ssr">
			<h1 className="text-xl font-bold text-center m-5">
				Users No SSR
			</h1>
			<table className="table table-zebra w-full">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map(user => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.name}</td>
								<td>{user.email}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</Layout>
	)
}