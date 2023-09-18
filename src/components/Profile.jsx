const Profile = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[40px] font-semibold ">PROFILE</h1>
				<div className="border-2 border-black -mt-1"></div>
			</div>
			<div className="mr-5 mt-2">
				<ul className="list-disc ml-[22px]">
					<li>
						I specialize in front-end web development, with over 1 year of
						experience in crafting responsive and captivating user interfaces.
					</li>
					<li>
						My JavaScript expertise enables me to create dynamic user
						experiences, coupled with mastery in ReactJS for building complex
						UIs.
					</li>
					<li>
						Currently, I'm learning backend development, using NodeJS,
						ExpressJS, and MongoDB to build robust server-side applications.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
