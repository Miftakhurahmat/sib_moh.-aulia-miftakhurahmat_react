const Portfolio = () => {
	return (
		<section id="portfolio" className="pt-36 pb-16 bg-base-200 flex" >
			<div className="container mx-auto">
				<div className="w-full px-4">
					<div className="max-w-xl mx-auto text-center mb-16">
						<h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
						<h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
						<p className="font-medium text-base text-grey">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur minima soluta voluptatem laborum amet maxime asperiores quasi?
						</p>
					</div>
				</div>
				<div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
					<div className="mb-12 p-4 md:w-1/2">
						<div className="rounded-md shadow-md overflow-hidden">
							<img src="img/web1.png" alt="herstel" width="w-full"/>
						</div>
						<h3 className="text-start font-semibold text-xl text-dark mt-5 mb-3">
							Herstel
						</h3>
						<p className="text-start font-medium text-base text-grey">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quisquam dolore porro, vel modi, voluptas nemo nam molestiae illum consequatur incidunt?
						</p>
					</div>
					<div className="mb-12 p-4 md:w-1/2">
						<div className="rounded-md shadow-md overflow-hidden">
							<img src="img/web2.png" alt="herstel" width="w-full"/>
						</div>
						<h3 className="text-start font-semibold text-xl text-dark mt-5 mb-3">
							TravelAja
						</h3>
						<p className="text-start font-medium text-base text-grey">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quisquam dolore porro, vel modi, voluptas nemo nam molestiae illum consequatur incidunt?
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio;