import React, {useState, useEffect} from "react";

function Example() {
	// Deklarasi variabel state baru yang kita sebut "count"
	const [count, setCount] = useState(0);

	// Mirip dengan componentDidMount dan componentDidUpdate:
	useEffect(() => {
		// Memperbarui judul dokumen menggunakan API browser
		document.title = `you clicked ${count} times`;
	})

	return (
		<div>
			<p>Anda menekan sebanyak {count} kali</p>
			<button onClick={() => setCount(count + 1)}>
				Klik saya
			</button>
		</div>
	)
}