import React, { useState } from 'react';
import './App.css';
import TableData from './Components/TableData';


let data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
]
function App() {
  let [dataOfTable,setDataTable] = useState([...data])
  const sortByDate = ()=>{
    let arr = [...dataOfTable];
    arr.sort((a,b)=>{
      let arr1 = a.date.split('-');
      let arr2 = b.date.split('-');
      
      if(Number(arr1[0]) !== Number(arr2[0])){
          if(Number(arr1[0]) > Number(arr2[0])) return -1;
          else return 1;
      }
      else if(Number(arr1[1]) !== Number(arr2[1])){
           if(Number(arr1[1]) > Number(arr2[1])) return -1;
          else return 1;
      }
      else if(Number(arr1[2]) !== Number(arr2[2])){
           if(Number(arr1[2]) > Number(arr2[2])) return -1;
          else return 1;
      }
    }) 
    setDataTable(arr)
  }

  const sortByViews = ()=>{
    let arr = [...dataOfTable];
    arr.sort((a,b)=>{
      let v1 = a.views;
      let v2 = b.views;
      if(v1 !== v2){
        if(v1>v2) return -1;
        else return 1
      }else{
        if(a.date>b.date) return -1
        else return 1
      }
    })
    setDataTable(arr)
   


  }
  return (
    <div className="App">
      <h1>
        Date and Views Table
      </h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table style={{textAlign:"center"}}>
        <thead>
          <tr>
            <th>Date </th>
            <th>Views</th>
            <th>Articles</th>
          </tr>
        </thead>
        <tbody>
          {
            dataOfTable.map((row)=>{
              return <TableData date={row.date} view={row.views} article={row.article}/>
            })
          }  
        </tbody>
      </table>
    </div>
  );
}

export default App;
