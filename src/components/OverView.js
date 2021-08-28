import React,{useState} from 'react'
import Form from './Form'

function OverView({income , expense ,addTransaction}) {

    const [isShow, setIsShow] = useState(false)
    return (
        <div className='viewContainer'>
            <div className='topView'>
                <div>Balane : {income-expense}</div>
                <button onClick={()=>setIsShow(!isShow)}> {isShow?'cancel' : 'add'} </button>
                
            </div>
             {isShow && <Form addTransaction={addTransaction}/> }
            <div className="resultView">
                <div> Income : {income} </div>
                <div>Expense : {expense}</div>

            </div>


        </div>
    )
}

export default OverView
