import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useForm from './hooks/logic';
import { BallTriangle } from "react-loader-spinner"

interface Istate{
  state: string,
  _id: string,
  confirmedCases: string,
  casesOnAdmission: string,
  discharged: string,
  death:string
}


function App() {
  const { loading,coroData, error,dispatch, fetchCoroData } = useForm()
  
  useEffect(() => {
    dispatch(fetchCoroData())
   
  }, [])

  if (loading === true) {

    return <div style={{width: "100%",height: "100vh",display: "flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
      <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" />
      <p>loading the virus data</p>
      </div >
    
  }
  
  if (error) {
    return (
      <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", color: "red",justifyContent:"center" }}>
        an error occurred try again
      </div>
    )
  }

  return (
    <div className="App">
      {/* {JSON.stringify(coroData)} */}
      <section>
        <h3>totalSamplesTested:  {coroData.totalSamplesTested} </h3>
        <h3>totalConfirmedCases:  {coroData.totalConfirmedCases} </h3>
        <h3>totalActiveCases:  {coroData.totalActiveCases} </h3>
        <h3>discharged:  {coroData.discharged} </h3>
        <h3>death:  {coroData.death} </h3>

        <div>
          <p>confirmed cases by state</p>
          {
            coroData.states.map((eachItems:Istate) => {
              return (
                <div>
                  <h3>{eachItems.state}</h3>
                  <p>casesOnAdmission: {eachItems.casesOnAdmission}</p>
                  <p>confirmedCases: {eachItems.confirmedCases}</p>
                  <p>death: {eachItems.death}</p>
                  <p>discharged: {eachItems.discharged}</p>
                 
                </div>
              )
            })
          }
        </div>
      </section>
      
    </div>
  );
}

export default App;
