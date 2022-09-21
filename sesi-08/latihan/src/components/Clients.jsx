const Clients = () => {
	return(
		<section id="clients" className="pt-36 pb-32 bg-slate-800">
			<div className="container mx-auto">
				<div className="w-full px-4">
					<div className="max-w-xl mx-auto text-center mb-16">
						<h4 className="font-semibold text-lg text-primary mb-2">Clients</h4>
						<h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl md:text-5xl">Yang Pernah Bekerja Sama</h2>
						<p className="font-medium text-base text-grey md:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur.
						</p>
					</div>
				</div>

				<div className="w-full px-4">
					<div className="flex flex-wrap items-center justify-center">
						<a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
							<img src="img/clients/google.svg" alt="Google" />
						</a>
						<a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
							<img src="img/clients/gojek.svg" alt="Gojek" />
						</a>
						<a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
							<img src="img/clients/tokopedia.svg" alt="Tokopedia" />
						</a>
						<a href="#" className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
							<img src="img/clients/traveloka.svg" alt="Traveloka" />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Clients;