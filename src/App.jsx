// import Courses from "./components/Courses";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
// import Interests from "./components/Interests";
// import Languages from "./components/Languages";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="px-3 py-2 flex flex-col">
			<div className="mb-5 w-[790px]">
				<Header />
			</div>

			<div className="mb-5">
				<Profile />
			</div>

			<div className="flex gap-7">
				<div className="flex flex-col w-[430px]  ">
					<div className="mb-5">
						<Experience />
					</div>
					{/* <div>
						<Projects />
					</div> */}
				</div>
				<div className="flex flex-col w-[328px] ">
					<div className="mb-5">
						<Education />
					</div>
					<div className="mb-5">
						<Skills />
					</div>
					<div>
						<Projects />
					</div>
					{/* <div className="mb-10">
						<Courses />
					</div>
					<div className="mb-10">
						<Languages />
					</div>
					<div>
						<Interests />
					</div> */}
				</div>
			</div>

			{/* <div className="mb-10">
				<Skills />
			</div>

			<div className="mb-10">
				<Experience />
			</div>

			<div className="mb-10">
				<Projects />
			</div>

			<div className="mb-10">
				<Education />
			</div>

			<div>
				<Courses />
			</div> */}

			{/* <div className="mb-10">
				<Languages />
			</div>

			<div>
				<Interests />
			</div> */}
		</div>
	);
}

export default App;
