import React from 'react'

function Transaction({transaction}) {
    return (
        <div className='transaction'>
            {transaction.map(t=>{
              return  <div key={t.id} style={{borderRight:t.type==='expense'&&'1px solid red'}} >{t.desc} </div>
            })}
           
            
        </div>
    )
}

export default Transaction
