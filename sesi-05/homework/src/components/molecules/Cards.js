import React, { Component, useState } from "react";

export default function Cards() {
	const [meetups, setAnimals] = useState([
		{
			"id" : 1,
			"date" : "27 November 2017",
			"title" : "#39 JakartaJS April Meetups with kumparan",
			"members" : 139
		},
		{
			"id" : 2,
			"date" : "27 October 2017",
			"title" : "#38 JakartaJS April Meetups with BliBli",
			"members" : 113
		},
		{
			"id" : 1,
			"date" : "27 September 2017",
			"title" : "#37 JakartaJS April Meetups with Hactiv8",
			"members" : 110
		}
	]);
	return (
		<div className="Cards mx-5 flex">
			{meetups.map((meetup, index) => (
				<div key={index} className="card w-96 xl:w-1/3 bg-primary shadow-xl rounded-none mx-5">
					<div className="card-body p-5">
						<h2 className="card-title">{meetup.date}</h2>
						<hr />
						<p>{meetup.title}</p>
						<p>{meetup.members} <span className="font-light">went</span></p>
						<div className="card-actions justify-start">
							<button className="btn rounded-none w-24 bg-base-100 text-slate-200">view</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}