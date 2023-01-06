import React from 'react'
import { useState } from 'react';

const Todos = () => {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const [editId ,setEditId]=useState(0)

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo !== "") {
			setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
			setTodo(" ");
		}

		if(editId){
			const editTodo = todos.find((i) => i.id === editId)
			const updatetodos =todos.map((data)=>
			data.id ===editTodo.id?
			(data ={id:data.id, todo}):
			{id:data.id,todo:data.todo}
			)
			setTodos(updatetodos)
			setEditId(0)
			setTodo("")

		}

	}
	const handleupdate =(id)=>{
const todoUpdate = todos.find((upd)=>upd.id === id )
setTodo(todoUpdate.todo)
setEditId(id)
	}

	const handledelete =(id)=>{
		const deletetodo = todos.filter((del) => del.id !== id )
		setTodos([...deletetodo])
	}
	return (
		<div>
			<div className="container bg-gray-900 flex justify-center items-center h-screen  w-screen" >
				<div className=" lg:w-[60%] lg:h-[80%] w-[100%] h-[80%] border-2 border-gray-200  flex flex-col  items-center">
					<h1 className='text-gray-100 font-bold text-5xl '>To Do List</h1>
					<form action="" className='bg-gray-300 lg:w-[80%]  w-[95%] lg:p-5 rounded-xl my-5' onSubmit={handleSubmit}>
						<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} className=' rounded-xl p-2 lg:w-[80%] w-[80%] ' />
						<button type='submit' className=' bg-blue-400 text-gray-900 lg:p-3 p-1 lg:ml-16 ml-4 rounded-lg'>{editId? "Edit":"Add"} </button>
					</form>

					{
						todos.map((data) => (
							<div className='  lg:w-[80%]  w-[90%] flex justify-center  items-center  mt-1'>

								<ul className='  rounded-xl flex bg-blue-400 lg:w-[80%] w-[90%]' >
									<li className=' rounded-xl p-2 flex flex-between  my-1 lg:w-[80%] w-[90%]'>
										<div className='lg:w-[100%] w-[100%] bg-blue-200  rounded-lg'>

											<span className=' rounded-xl p-3 text-gray-900  text-center flex items-center ' key={data.id} >{data.todo}</span>
										</div>

									</li>
										<div className="btn lg:w-[30%] flex ">

											<button onClick={()=>handleupdate(data.id)} className='bg-white text-black m-2 rounded-lg lg:px-2 lg:py-0 px-1 '>Edit</button>
											<button  onClick={()=> handledelete(data.id)} className='bg-white text-black m-2 rounded-lg lg:px-2 lg:py-0 px-1 '>Delete</button>
										</div>
								</ul>
							</div>
						))
					}

				</div>
			</div>
		</div>
	)
}

export default Todos
