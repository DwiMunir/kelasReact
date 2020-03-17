import React from 'react'

const IsiSurah =(props)=>{
    return(
      <div>
        <div className="alert alert-success">
          {props.namaSurah}
        </div>
        <button  
          className='btn btn-default btn-danger'
          onClick  = {()=>props.BackHome()}
        >
          Back Home
        </button>
        <div className="col-12">
          <ol>
            {
              props.isiSurah.map((item,index)=>(
                <li key={index} className='my-3 text-left' style={{fontSize:'20px'}}>
                  {item.teks}
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
}

IsiSurah.defaultProps={
  isiSurah : [
    {teks : 'surat pertama'},
    {teks : 'surat kedua'}
  ]
}

export default IsiSurah