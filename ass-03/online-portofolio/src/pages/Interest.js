import React, { useEffect, useState } from 'react'

const Interest = () => {
	const [getInterest, setInterest] = useState([]);
	
	const getInterests = () => {
		try {
			setInterest(
				[
					{
						interest: 'Pemrograman WEB',
						caption: 'Pemrograman WEB adalah proses penulisan kode atau bahasa pemrograman tingkat tinggi untuk membangun sebuah situs web.',
						imageLink: './img/interests/web-programing.jfif',
					},
					{
						interest: 'Desain UI/UX',
						caption: 'Desain UI/UX adalah dibagi dua fokus, desain UI adalah keindahan tampilan, sementara fokus desain UX adalah kepuasan menggunakan produk.',
						imageLink: './img/interests/ui-ux-design.jfif',
					},
					{
						interest: 'Desain Grafis',
						caption: 'Desain Grafis adalah  suatu bentuk komunikasi yang dilakukan secara visual.',
						imageLink: './img/interests/graphic-design.jfif',
					},
					{
						interest: 'Penulis Konten',
						caption: 'Penulis Konten adalah pekerjaan yang tugas utamanya membuat konten dalam bentuk tulisan yang relevan dan menarik',
						imageLink: './img/interests/content-writer.jfif',
					},
				]
			)
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		getInterests();
	}, [])

	return (
		<section id='Interest' className='mt-24 mb-12'>
			<div className='p-5 text-center'>
				<h1 className="text-5xl font-bold">My Interest</h1>
				<p className="py-6">
				I love what I do. I take great pride in what I do.
				</p>
			</div>
			<div class="container mx-auto px-2 sm:flex sm:flex-wrap sm:gap-4 sm:justify-evenly bg-base-100 shadow-xl rounded-2xl">
				{
					getInterest.map((interest, i) => (
						<div key={i} className="sm:mb-0 sm:w-64 md:w-80 lg:w-96">
							<figure class="px-10 pt-10">
								<img src={interest.imageLink} alt="Shoes" class="rounded-xl" />
							</figure>
							<div class="card-body items-center text-center">
								<h2 class="card-title">{interest.interest}</h2>
								<p>{interest.caption}</p>
							</div>
						</div>
						
					))
				}
			</div>
		</section>
	)
}

export default Interest