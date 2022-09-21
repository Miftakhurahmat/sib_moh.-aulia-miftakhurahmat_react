import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
	const [getData, setData] = useState([]);
	
	const getDatas = () => {
		try {
			setData(
				{
					name: 'Moh. Aulia Miftakhurahmat',
					job: 'Mahasiswa',
					major: 'S1 Teknik Informatika',
				}
			)
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		getDatas();
	}, [])

	return (
		<div id="home" className="hero min-h-screen bg-base-200 shadow-md">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src="./img/hero.png" alt={getData.name} className="sm:w-96 w-72" />
				<div className="text-start leading-relaxed md:mt-12">
					<h1 className="text-base font-semibold text-primary mb-1">
						Halo Semua 👋, saya 
						<span className="block font-bold text-dark text-3xl sm:text-4xl">{getData.name}</span>
					</h1>
					<h2 className="font-medium text-grey text-sm sm:text-lg mb-5">
						{getData.job}
						<span className="text-dark"> {getData.major} 🎓</span>
					</h2>
					<p className="font-medium text-grey mb-10">
						Sebuah karya yang besar selalu dimulai dari sebuah titik kecil. Seperti halnya sebuah pemrograman selalu diawali dengan satu baris kode
					</p>
					<button className="btn btn-primary mb-6 md:mb-0 rounded-full">
						<NavLink to='/contact'>Hubungi Saya</NavLink>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home