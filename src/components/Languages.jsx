const Languages = () => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="w-full">
				<h1 className="text-[40px] font-semibold ">LANGUAGES</h1>
				<div className="border-2 border-black -mt-1"></div>
			</div>
			<div className="mr-5 flex flex-col gap-3.5 mt-3">
				<div className="flex flex-row gap-5">
					<span className="px-4 py-2 border-2 border-gray-400 rounded-xl font-semibold text-lg">
						English
					</span>
				</div>
				<div className=" border-2 border-dashed border-gray-300 "></div>
				<div className="flex flex-row gap-5">
					<span className="px-4 py-2 border-2 border-gray-400 rounded-xl font-semibold text-lg">
						Hindi
					</span>
				</div>
			</div>
		</div>
	);
};

export default Languages;
