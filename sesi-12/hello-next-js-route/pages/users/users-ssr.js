import Layout from "../../components/Layout"

export default function Users(props) {
	return (
		<Layout title="users ssr">
			<h1 className="text-xl font-bold text-center m-5">
				Users SSR
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
						props.users?.map(user => (
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

export async function getServerSideProps(context) {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const users = await res.json()

	return {
		props: {users}
	}
}
