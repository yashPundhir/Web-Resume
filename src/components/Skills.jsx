const Skills = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[24px] font-semibold ">SKILLS</h1>
				<div className="border-2 border-black"></div>
			</div>
			<div className=" flex flex-col gap-2.5 mt-1">
				{/* <div className="flex flex-row gap-5">
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						HTML
					</span>
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						CSS
					</span>
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						TailwindCSS
					</span>
				</div> */}
				<div className="">
					<span className="text-[15px] ">Languages & Technologies:</span>
					<span> </span>
					<span className="text-[14px] font-medium">
						HTML, CSS, TailwindCSS, JavaScript, React, Zustand, Redux Toolkit,
						FlutterFlow, Git, Agile methodologies
					</span>
				</div>
				<div className=" border-2 border-dashed border-gray-300 "></div>
				{/* <div className="flex flex-row gap-5">
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						JavaScript
					</span>
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						React
					</span>
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						Zustand
					</span>
				</div> */}
				<div className="">
					<span className="text-[15px] ">Tools:</span>
					<span> </span>
					<span className="text-[14px] font-medium">
						VS Code, GitHub, JIRA, Postman
					</span>
				</div>
				<div className="mt-0 border-2 border-dashed border-gray-300 "></div>
				{/* <div className="flex flex-row gap-5">
					<span className="px-3.5 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						Git
					</span>
					<span className="px-3 py-1.5 border-2 border-gray-400 rounded-lg font-semibold text-[15px]">
						GitHub
					</span>
				</div> */}
				<div className="">
					<span className="text-[15px] ">Soft Skills:</span>
					<span> </span>
					<span className="text-[14px] font-medium">
						Problem-solving, Teamwork, Communication, Adaptability
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skills;
