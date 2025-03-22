import React, { useState } from "react";

const Home = () => {
	// To-Do List
	// it will contain a list of tasks
	// received from user input
	const [tasks, setTasks] = useState(["Exercise for 1 hour", "Practice more Javascript", "Journal"]);
	const [userInput, setUserInput] = useState("");

	const addToList = (e) => {
		e.preventDefault();
		console.log(e)
		setTasks([...tasks, userInput]);
	}

	const removeTask = (IndexInput) => {
		const newArray = tasks.filter((task, index) => {
			if (IndexInput != index)
				return (
					task 
				)
		})

		setTasks(newArray)

	}

	return (
		<div className="text-center">

			<input value={userInput} onChange={(e) => { setUserInput(e.target.value) }}></input>
			<button onClick={(e) => addToList(e)}>Add To List</button>

			{/* we have an array of tasks and we want to display as a list on our page*/}
			<ul>
				{tasks?.map((task, index) => {
					return <li key={index}>{task}<span onClick={()=>removeTask(index)}> X</span></li>
				}
				)}
			</ul>
		</div>
	);
};

export default Home;