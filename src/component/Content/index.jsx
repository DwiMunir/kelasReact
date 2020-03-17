import React from 'react'
import ListSurah from './ListSurah'
import IsiSurah from './isiSurah'

const Content = (props) => {
    
    // console.log(props.dataSeluruh, 'page content ')
    console.log('isiSurah',props.isiSurah)

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
                      bacaSurah      = {props.bacaSurah}
                      // lihatsurah= {props.lihatsurah}
                    />
                  </div>
                : props.isiSurah
                  ? <IsiSurah
                      namaSurah = {props.namaSurah}
                      isiSurah  = {props.isiSurah}
                      backHome  = {props.backHome}
                  />
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