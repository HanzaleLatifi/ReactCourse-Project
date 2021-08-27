import React,{useState} from 'react'
import Form from './Form'

function OverView({income , expense}) {

    const [isShow, setIsShow] = useState(false)
    return (
        <div className='viewContainer'>
            <div className='topView'>
                <div>Balane : {income-expense}</div>
                <button onClick={()=>setIsShow(!isShow)}> {isShow?'canncel' : 'add'} </button>
                
            </div>
             {isShow && <Form/> }
            <div className="resultView">
                <div> Income : {income} </div>
                <div>Expense : {expense}</div>

            </div>


        </div>
    )
}

export default OverView
