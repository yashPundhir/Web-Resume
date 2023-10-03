const Experience = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[31px] font-semibold ">EXPERIENCE</h1>
				<div className="border-2 border-black mr-4 -mt-1"></div>
			</div>
			<div>
				<h1 className="text-2xl ">Jr. Software Developer</h1>
				<h1 className="text-xl font-bold">Cognizant Technology Solutions</h1>
				<div className="flex gap-2.5 justify-start items-center mt-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-calendar2-check"
						viewBox="0 0 16 16"
					>
						<path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
						<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
						<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
					</svg>
					<span className="text-[14px]">08/2021 - 11/2022</span>
				</div>
				<ul className="list-disc ml-[22px] mt-2 mr-7 text-[15px]">
					<li>
						Developing and maintaining web applications using React.js and other
						related technologies.
					</li>
					<li>
						Implementing responsive design and ensuring cross-browser
						compatibility.
					</li>
					<li>
						Participating in code reviews and providing constructive feedback to
						other developers.
					</li>
					<li>
						Collaborating with cross-functional teams including designers,
						product managers, and other developers to create high-quality
						products.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
