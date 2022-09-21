const Hero = () => {
	return (
		<div id="home" className="hero min-h-min bg-base-200 shadow-md">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src="./img/hero.png" className="sm:w-96 w-72" />
				<div className="text-start leading-relaxed md:mt-12">
					<h1 className="text-base font-semibold text-primary mb-1">Halo Semua 👋, saya <span className="block font-bold text-dark text-3xl sm:text-4xl">Moh. Aulia Miftakhurahmat</span></h1>
					<h2 className="font-medium text-grey text-sm sm:text-lg mb-5">Mahasiswa <span className="text-dark">S1 Teknik Informatika 🎓</span></h2>
					<p className="font-medium text-grey mb-10">Dalam sebuah kehidupan, sekecil apapun yang kita perbuat pasti akan berdampak. Seperti halnya sebuah pemrograman selalu diawali dengan satu baris kode</p>
					<button className="btn btn-primary mb-6 md:mb-0 rounded-full">Hubungi Saya</button>
				</div>
			</div>
		</div>
	)
}

export default Hero;