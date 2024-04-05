function Item({dueDate,todoName} ) {
    return <>
        <div className="row kg-row">
                            <div className="col-4">
                                {todoName}
                                
                            </div>
                            <div className="col-4">
                                {dueDate}
                            </div>
                           <div className="col-2">
                                 <button type="button" className="btn btn-danger kg-btn" onClick={()=>console.log()}>delete</button>
                           </div>
                       </div>
    </>
    
}

export default Item;