import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addTodo } from "../redux/feature/todoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store/store";

const HeadTitle = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [todoText, setTodoText] = useState("");

	return (
		<>
			<Typography
				style={{
					textAlign: "center",
					marginTop: "20px",
					backgroundColor: "#0ba7aa",
					color: "#ffffff",
					borderRadius: "10px",
					marginBottom: "10px",
					padding: "5px 5px",
				}}
				variant='h3'
			>
				Todo App
			</Typography>
			<TextField
				autoComplete='off'
				variant='outlined'
				label='Add New Todo'
				fullWidth
				onChange={(e) => setTodoText(e.target.value)}
				value={todoText}
				autoFocus
			/>
			<Button
				style={{
					textAlign: "center",
					backgroundColor: "#09b869",
					marginBottom: "15px",
					marginTop: "10px",
				}}
				variant='contained'
				color='primary'
				fullWidth
				onClick={() => {
					dispatch(addTodo(todoText));
					setTodoText("");
				}}
			>
				Click to Add Item
			</Button>
		</>
	);
};

export default HeadTitle;
