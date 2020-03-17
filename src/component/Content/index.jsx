import React from 'react'
import ListSurah from './ListSurah'
import IsiSurah from './isiSurah'

const Content = (props) => {
    
    // console.log(props.dataSeluruh, 'page content ')

    return (
        <div className="container bg-info mt-3 py-3">
            <div className="container-fluid">
              {
                props.dataSeluruhSurah && !props.isiSurah
                ? <div>
                    <h3 className="text-light p-5">
                      Daftar Surah
                    </h3>
                    <ListSurah 
                      dataSeluruhSurah = {props.dataSeluruhSurah}
                      dataSeluruh = {props.dataSeluruh}
                      // lihatsurah= {props.lihatsurah}
                    />
                  </div>
                :null
              }
                
            </div>
        </div>
    )   
  }
  
  export default Content
  // : props.isiSurah
  //   ? <IsiSurah 
  //       isiSurah = {props.isiSurah}
  //       namaSurah= {props.namaSurah}
  //       BackHome = {props.BackHome}
  //     />
    // : null