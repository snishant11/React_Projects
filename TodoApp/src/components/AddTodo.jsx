import { useState } from 'react'

function AddTodo() {
    let [item, setItem] = useState('')
    let [date,setDate]= useState('')
    const handleClick = (item,date) => {
        
        console.log(item,date)
    }
    return <div className="container text-center">
                <div className="row kg-row">
                    <div className="col-4">
                        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
                    </div>
                    <div className="col-2">
                        <button
                            type="button"
                            className="btn btn-success kg-btn"
                            onClick={()=>handleClick(item,date)}
                        >
                            Add
                        </button>
                    </div>
                </div>
                
           </div>
}

export default AddTodo