const Profile = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[24px] font-semibold ">PROFILE</h1>
				<div className="border-2 border-black "></div>
			</div>
			<div className="mr-10 mt-0">
				<ul className="list-disc ml-[22px]">
					<li className="text-[15px]">
						Highly skilled software developer with about 2 years of experience
						in front-end development, specializing in React.js and other modern
						technologies.
					</li>
					<li className="text-[15px]">
						Proven track record of developing and maintaining web applications,
						collaborating with cross-functional teams, and creating high-quality
						user experiences.
					</li>
					<li className="text-[15px]">
						Experienced in leading and executing significant projects in both
						corporate and startup environments.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
