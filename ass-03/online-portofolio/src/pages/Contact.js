import React from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = () => {
	const navigate = useNavigate();

	return (
		<section id="contact" className="pt-36 pb-32">
			<div className="container mx-auto">
				<div className="w-full px-4">
					<div className="max-w-xl mx-auto text-center mb-16">
						<h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
						<h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl md:text-5xl">Hubungi Kami</h2>
						<p className="font-medium text-base text-grey md:text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequuntur.
						</p>
					</div>
				</div>
				<form>
					<div className="w-full lg:w-2/3 mx-auto">
						<div className="w-full px-4 mb-8 text-start">
							<label htmlFor="name" className="text-base text-primary font-bold uppercase">Nama</label>
							<input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary"  />
						</div> 
						<div className="w-full px-4 mb-8 text-start">
							<label htmlFor="email" className="text-base text-primary font-bold uppercase">Email</label>
							<input type="email" id="email" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary"  />
						</div> 
						<div className="w-full px-4 mb-8 text-start">
							<label htmlFor="message" className="text-base text-primary font-bold uppercase">Pesan</label>
							<textarea type="text-area" id="massage" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
						</div>
						<div className="w-full px-4">
							<button className="btn btn-primary w-full mx-auto rounded-full mb-5">Kirim</button>
							<button className="btn btn-outline w-full mx-auto rounded-full" onClick={
								window.onpopstate = () => {
									navigate("/");
								}
							}>Kembali </button>
						</div>
					</div>
				</form>
			</div>
		</section>
	)
}

export default Contact