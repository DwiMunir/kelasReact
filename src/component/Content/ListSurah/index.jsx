import React from 'react'

const ListSurah =(props)=>{
  // console.log(props.hasilCari,'isi newdata')
  // console.log(props.dataSeluruhSurah,'isiaslinya')
    return(
        <div className='row justify-content-center'>
            {
              (props.dataSeluruhSurah && !props.dataSeluruh)
               ? props.dataSeluruhSurah.map((item,index)=>(
                    <div 
                      className="col-md-4 col-6 col-lg-3 my-2" 
                      key={index}
                    >
                      <div 
                        className="col-12 bg-white text-dark p-2 rounded shadow-lg" 
                        style={{minHeight: '200px'}}
                      >
                        <h3>{item.asma}</h3>
                        <p> {item.nama} </p>
                        <p>({item.arti})</p>
                        <button 
                          className="btn btn-default btn-success" 
                        >
                          Baca Surah
                        </button>
                      </div>
                    </div>
                ))
                : null
              
            }
        </div>
    )
}
ListSurah.defaultProps={
  dataSeluruhSurah : [
    {asma : 'asma surat'},
    {nama : 'nama surat'},
    {arti : 'arti surat'}
  ]
}
export default ListSurah