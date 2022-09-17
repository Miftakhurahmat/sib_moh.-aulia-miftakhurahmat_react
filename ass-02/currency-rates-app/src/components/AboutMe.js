import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutMe = () => {
	return (
		<>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Tentang Saya</h1>
						<p className="py-6">Saya merupakan seorang mahasiswa Teknik Informatika di Universitas Singaperbangsa yang tertarik dengan Pemrograman terutama di Front-end Development</p>
						<hr />
						<h2 className='text-4xl font-bold py-6'>Biodata</h2>
						<h3 className='text-2xl font-bold'>Nama</h3>
						<p className="pb-6">Moh. Aulia Miftakhurahmat</p>
						<h3 className='text-2xl font-bold'>Universitas</h3>
						<p className="pb-6">Universitas Singaperbangsa Karawang</p>
						<h3 className='text-2xl font-bold'>Tanggal Lahir</h3>
						<p className="pb-6">11 Juni 2002</p>
						<h3 className='text-2xl font-bold'>Prinsip</h3>
						<p className="pb-6">Sebuah karya yang besar selalu dimulai dari sebuah titik kecil</p>
						<h3 className='text-2xl font-bold'>Visi Misi</h3>
						<p className="pb-6">Konsistensi merupakan pondasi menuju keberhasilan, 1% perubahan ke arah yang lebih baik setiap hari akan berdampak besar dikemudian hari</p>
						<button className="btn btn-primary"><NavLink to='/'>⬅️ Back</NavLink></button>
					</div>
				</div>
			</div>
		</>
	)
}

export default AboutMe