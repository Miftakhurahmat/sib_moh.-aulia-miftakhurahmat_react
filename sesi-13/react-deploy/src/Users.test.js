import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import "@testing-library/jest-dom"
import Users from './pages/Users';

test('Render halaman dengan benar', () => {
	render(
		<MemoryRouter>
			<Users />
		</MemoryRouter>
	);

	// mencari text tertentu
	// periksa button kita memiki role="button"
	const btn = screen.getByRole("button");
	expect(btn).toBeInTheDocument();
	expect(btn).toHaveTextContent('Back to Home')

	// menunngu proses fetch user dari API
	// kita bisa kasih waktu sebanyak 5 detik
	// kemudian mencari text sebuah nama dari API
	const user = async ()=> await waitFor(() => {
		return screen.findByText("Leanne Graham")
	},{timeout: 5000})
	
	user().then((res)=>{
		expect(res).toBeInTheDocument()
	})
});
