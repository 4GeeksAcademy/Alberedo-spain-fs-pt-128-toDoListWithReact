import React from "react";
import List from "./List";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">My ToDoList</h1>
			<List/>
			
		</div>
	);
};

export default Home;