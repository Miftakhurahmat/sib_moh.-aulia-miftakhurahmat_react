import React, { useEffect, useState } from 'react'

const Experience = () => {
	const [getExperience, setExperience] = useState([]);
	
	const getExperiences = () => {
		try {
			setExperience(
				[
					{
						experience: 'Herstel',
						periode: '2021-sekarang',
						caption: 'Herstel merupakan penyedia layanan jasa booking barbershop secara online',
						imageLink: './img/experients/web1.png',
					},
					{
						experience: 'TravelAja',
						periode: '2022',
						caption: 'TravelAja merupakan hasil studi kasus pada tugas mata kuliah pemrograman web Semester 4',
						imageLink: './img/experients/web2.png',
					},
				]
			)
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		getExperiences();
	}, [])
	return (
		<section id="portfolio" className="pt-24 pb-16 bg-base-200 flex" >
				<div className="container mx-auto">
					<div className="w-full px-4">
						<div className="max-w-xl mx-auto text-center mb-16">
							<h4 className="font-semibold text-lg text-primary mb-2">Experience</h4>
							<h2 className="font-bold text-dark text-3xl mb-4">Project</h2>
							<p className="font-medium text-base text-grey">
								Berikut ini adalah berbagai contoh hasil pengalaman saya selama menyelesaikan project ataupun studi kasus
							</p>
						</div>
					</div>
					<div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
						{
							getExperience.map((experience, i) => (
								<div key={i} className="mb-12 p-4 md:w-1/2">
									<div className="rounded-md shadow-md overflow-hidden">
										<img src={experience.imageLink} alt="herstel" width="w-full"/>
									</div>
									<h3 className="text-start font-semibold text-xl text-dark mt-5 mb-3">
										{experience.experience}
									</h3>
									<p className="text-start font-medium text-base text-grey">
										{experience.periode} 
									</p>
									<p className="text-start font-medium text-base text-grey">
										{experience.caption}
									</p>
								</div>
							))
						}
						
					</div>
				</div>
			</section>
	)
}

export default Experience