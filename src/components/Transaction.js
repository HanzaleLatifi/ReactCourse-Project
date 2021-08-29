import React,{useState , useEffect} from 'react'

function Transaction({transaction }) {
    const [searchItem , setSearchItem]=useState('');
    const [filteredTrans , setFilterTrans]=useState(transaction);

    
    const filterTransaction=(search)=>{
        if( !search){
            setFilterTrans(transaction);
            return;
        }
          const filter=transaction.filter((t)=>t.desc.toLowerCase().includes(search.toLowerCase() ));
          setFilterTrans(filter);
        

    }

    useEffect(()=>{

        filterTransaction(searchItem)
        
    },[transaction]);


    const changeHandler=(e)=>{
        setSearchItem(e.target.value);
        filterTransaction(e.target.value);
       

    }
  


    return (
        <div>
            <input value={searchItem} onChange={changeHandler} ></input>
            <div className='transaction'>
            {filteredTrans.map(t=>{
              return  <div key={t.id} style={{borderRight:t.type==='expense'&&'1px solid red'}} >{t.desc} </div>
            })}
           
            
        </div>
        </div>
        
    )
}

export default Transaction
