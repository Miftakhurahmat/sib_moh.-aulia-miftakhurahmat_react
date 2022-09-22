import React, { useEffect, useState } from 'react'

const Awards = () => {
	const [getAward, setAward] = useState([]);
	
	const getAwards = () => {
		try {
			setAward(
				[
					{
						award: 'Sertification',
						caption: 'Dasar Pemrograman Web Dicoding',
						imageLink: './img/sertifications/dicoding-dasar-pemrograman-web.png',
					},
					{
						award: 'Sertification',
						caption: 'Front End Web Dicoding',
						imageLink: './img/sertifications/dicoding-front-end-web.png',
					},
					{
						award: 'Sertification',
						caption: 'Junior Network Administrator BPPTIK',
						imageLink: './img/sertifications/junior-network-administrator.png',
					},
				]
			)
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		getAwards();
	}, [])

	return (
		<section id='awards' className='mt-24'>
			<div className='p-5 text-center'>
				<h1 className="text-5xl font-bold">Awards and Sertifications</h1>
				<p className="py-6">
				Tidak ada usaha yang sia-sia. Sekecil apapun yang kita lakuakn pasti akan ada imbalannya
				</p>
			</div>
			<div className="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
				{
					getAward.map((award, i) => (
						<div key={i} className="rounded-md shadow-lg overflow-hidden mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 lg:w-96">
							<figure className="px-10 pt-10">
								<img src={award.imageLink}alt="Shoes" className="rounded-xl" />
							</figure>
							<div className="card-body items-center text-center">
								<h2 className="card-title">{award.award}</h2>
								<p>{award.caption}</p>
							</div>
						</div>
					))
				}
				
			</div>
			<div className="card w-96 m-5 bg-base-100 shadow-xl">
				
			</div>
		</section>
	)
}

export default Awards