import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import Content from './component/Content/'

import axios from 'axios'
import SearchBar from './component/SearchBar';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      dataSeluruhSurah : [],
      inputValue       : '',
      newData          : null,
      isiSurah         : null,
      judulSurah       : ''
     }
  }

  componentDidMount () {
    // render function GetDataSurah
    console.log('render function GetDataSurah')
    this.getDataSeluruhSurat()
  }

  // getData API seluruh surat 
  getDataSeluruhSurat = () => {
    axios.get(`https://api.banghasan.com/quran/format/json/surat`)
    .then(result => {
      console.log( result.data.hasil, 'getDataSeluruhSurataaaaa')
      this.setState({
        dataSeluruhSurah : result.data.hasil
      },() => {
        console.log(this.state.dataSeluruhSurah, 'new stateDataseluruh surah')
      })
    })
    .catch(err => console.log(err, 'fetch api failed'))
  }

  onHandleInput = (event) => {
    console.log('sedang mengetik', event.target.value)
    this.setState({
      inputValue : event.target.value,
      isiSurah : null
    }, () => {
      if(this.state.dataSeluruhSurah){
        const searchedSurah = this.state.dataSeluruhSurah.filter( item => (
            item.nama.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) > -1
          )
        )
     
        this.setState({
          newData : searchedSurah,
        }, () => {
          console.log(this.state.newData, 'eventDataSeluruhsurah')
        })
      }else{
        console.log('else')
      }
    })
  }

  bacaSurah = (nomor,namaSurah) => {
    axios.get(`https://api.banghasan.com/quran/format/json/surat/${nomor}/ayat/1-10`)
    .then(res=>{
      // console.log(res.data.ayat.data.ar) 
      this.setState({
        isiSurah : res.data.ayat.data.ar,
        judulSurah : namaSurah,
        inputValue : ''
      },()=>{
        console.log(this.state.judulSurah)
        console.log(this.state.isiSurah)
      })
    })
    .catch(err => console.log(err),'error bung')
  }
  backHome =()=>{
    this.setState({
      isiSurah : null,
      newData : null
    })
  } 

  render() {

    return (
      <div className="App">
          
        {/* component header */}
        <Header />

        {/* searchBar */}
        <SearchBar 
          onHandleInput = {this.onHandleInput}
          searchValue   = {this.state.inputValue}
        />
        
        {/* component content */}
        <Content
          dataSeluruhSurah = {this.state.dataSeluruhSurah}
          dataSeluruh      = {this.state.newData}
          bacaSurah        = {this.bacaSurah}
          namaSurah        = {this.state.judulSurah}
          isiSurah         = {this.state.isiSurah}
          backHome         = {this.backHome}
        />


      </div>
  
    );
  }
}
export default App;
