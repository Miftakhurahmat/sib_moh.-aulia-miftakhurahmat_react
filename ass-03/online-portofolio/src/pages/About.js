import React from 'react'
import Facebook from '../components/atoms/socialMediaLogo/Facebook'
import Instagram from '../components/atoms/socialMediaLogo/Instagram'
import Linkedin from '../components/atoms/socialMediaLogo/Linkedin'
import Whatsapp from '../components/atoms/socialMediaLogo/Whatsapp'
import Youtube from '../components/atoms/socialMediaLogo/Youtube'

const About = () => {
	return(
		<section id="about" className="text-start py-32 flex">
			<div className="container mx-auto leading-relaxed">
				<div className="flex flex-wrap">
					<div className="w-full px-4 mb-10 lg:w-1/2">
						<h4 className="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
						<h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Saya seorang mahasiswa Semester 5 Teknik Informatika</h2>
						<p className="font-medium text-base text-grey max-w-xl lg:text-lg">
							Menjadi seorang mahasiswa Teknik Informatika merupakan impian saya sejak masih sekolah menengah. Saya sangat tertarik pada pemrograman. Saya memiliki ketelitian yang tinggi terhadap masalah-masalah yang ada. Salah satu keahlian saya adalah menjadi seorang front end developer
						</p>
					</div>
					<div className="w-full px-4 lg:w-1/2">
						<h3 className="font-semibold text-dark text-2xl mb-4 lg:text-4xl lg:pt-10">Mari Berteman</h3>
						<p className="font-medium text-base text-grey mb-6 lg:text-lg">
							Follow berbagai akun sosial media saya di bawah ini supaya kita dapat saling mengenal
						</p>
						<div className="flex items-center">
							<Youtube />	
							<Instagram />
							<Facebook />	
							<Linkedin />
							<Whatsapp />
						</div>
					</div>	
				</div>
			</div>
		</section>
	)
}

export default About