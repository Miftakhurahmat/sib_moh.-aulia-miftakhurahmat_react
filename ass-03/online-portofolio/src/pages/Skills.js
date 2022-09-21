import React, { useEffect, useState } from "react";

const Skills = () => {
	const [getSkill, setSkill] = useState([]);
	
	const getSkills = () => {
		try {
			setSkill(
				[
					{
						skill: 'HTML CSS JavaScript',
						caption: 'Adalah sebuah dasar dari pemrograman web',
						imageLink: './img/skills/html-css-js.svg',
					},
					{
						skill: 'React',
						caption: 'Merupakan salah satu library javascript yang paling sering digunakan',
						imageLink: './img/skills/react.svg',
					},
					{
						skill: 'Tailwind CSS',
						caption: 'Merupakan salah satu library CSS yang paling sering digunakan',
						imageLink: './img/skills/Tailwind_CSS_logo.svg',
					},
					{
						skill: 'Bootstrap',
						caption: 'Merupakan salah satu library CSS yang paling sering digunakan',
						imageLink: './img/skills/Bootstrap_logo.svg',
					},
				]
			)
		} catch (error) {
			console.log(error.message);
		}
	}

	useEffect(() => {
		getSkills();
	}, [])

	return (
		<section id="skills">
			<div className="hero min-h-screen bg-base-100 pt-20">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<img
						src="./img/skils-image.png"
						alt-text="Skill Ilustration"
						className="max-w lg:w-80 rounded-lg"
					/>
					<div>
						<h1 className="text-5xl font-bold">My Skills</h1>
						<p className="py-6">
						Some Interesting Facts About Me.
						</p>
						<div className="w-2/3 mx-auto">
							<div className="grid lg:grid-cols-2 gap-4">
								{
									getSkill.map((skill, i) => (
										<div key={i} className="card card-side bg-base-100 greyscale-effect hover:cursor-pointer">
											<figure>
												<img src={skill.imageLink} alt="Movie"/>
											</figure>
											<div className="card-body">
												<h2 className="card-title text-sm sm:text-2xl">{skill.skill}</h2>
												<p className="text-xs sm:text-base">{skill.caption}</p>
											</div>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
