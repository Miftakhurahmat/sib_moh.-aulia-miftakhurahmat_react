const Blog = () => {
	return(
		<section id="blog" className="pt-36 pb-32 bg-slate-100">
			<div className="container mx-auto">
				<div className="w-full px-4">
					<div className="max-w-xl mx-auto text-center mb-16">
						<h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
						<h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl md:text-5xl">Tulisan Terkini</h2>
						<p className="font-medium text-base text-grey md:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur.
						</p>
					</div>
				</div>

				<div className="flex flex-wrap">
					<div className="w-full p-4 lg:w-1/2 xl:w-1/3">
						<div className="bg-white rounded-xl shadow-lg overflow-hidden md-10">
							<img src="https://source.unsplash.com/360x200?programing" alt="Programing" className="w-full"/>
							<div className="py-8 px-6 text-start">
								<h3><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Tips Belajar Programing</a></h3>
								<p className="font-medium text-base text-grey mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ratione impedit officia mollitia odio!</p>
								<a href="#" className="btn btn-secondary">Baca Selengkapnya</a>
							</div>
						</div>
					</div>
					<div className="w-full p-4 lg:w-1/2 xl:w-1/3">
						<div className="bg-white rounded-xl shadow-lg overflow-hidden md-10">
							<img src="https://source.unsplash.com/360x200?mechanical+keyboard" alt="Mechanical Keyboard" className="w-full"/>
							<div className="py-8 px-6 text-start">
								<h3><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Review Keyboard Armageddon MKA-2C</a></h3>
								<p className="font-medium text-base text-grey mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ratione impedit officia mollitia odio!</p>
								<a href="#" className="btn btn-secondary">Baca Selengkapnya</a>
							</div>
						</div>
					</div>
					<div className="w-full p-4 lg:w-1/2 xl:w-1/3">
						<div className="bg-white rounded-xl shadow-lg overflow-hidden md-10">
							<img src="https://source.unsplash.com/360x200?coffe" alt="Coffe" className="w-full"/>
							<div className="py-8 px-6 text-start">
								<h3><a href="#" className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Menikmati Secangkir Kopi</a></h3>
								<p className="font-medium text-base text-grey mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ratione impedit officia mollitia odio!</p>
								<a href="#" className="btn btn-secondary">Baca Selengkapnya</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blog;