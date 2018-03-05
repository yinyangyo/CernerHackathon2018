import React from 'react';
import PropTypes from 'prop-types';
import ReactSvgPieChart from "react-svg-piechart"
import { auth } from '../firebase';
import './App.css';
import {solution} from './solution';
const data = [
  {title: "Carbohydrates", value: 60, color: "#22594e"},
  {title: "Fat", value: 60, color: "#6666B2"},
  {title: "Proteins", value: 60, color: "#ff1a1a"},
]
//var BEmail = localStorage.getItem("VEmail");
const AccountPage = (props, { authUser }) =>
  <div>
   {
       authUser? 
       <table className="table-responsive table">
          <tr>
           <td>Name</td>
           <td>{authUser.email}</td>
          </tr>
          
          <tr>
           <td>Deficient/surplus Calorie</td>
           <td>{solution(authUser.email).netCalorieDifference} Calories</td>
          </tr>
          <tr>
           <td>Total number of calories to be consumed per day</td>
           <td>{solution(authUser.email).targetBMR} Calories</td>
          </tr>
          <tr>
           <td>Current BMR</td>
           <td>{solution(authUser.email).currentBMR} Calories</td>
          </tr>
          <tr>
           <td>Target BMR</td>
           <td>{solution(authUser.email).targetBMR} Calories</td>
          </tr> 
        </table>
        
       
       
       : console.log("no")
   }
   <MyCompo/>
  </div>

AccountPage.contextTypes = {
    authUser: PropTypes.object,
  };
  const MyCompo = () => (
    <div className="pieChart ">
  <ReactSvgPieChart
    data={data} 
    expandOnHover={true}
    expandSize={5}
    shrinkOnTouchEnd={false}
    strokeColor="#fff"
    strokeLinejoin="round"
    strokeWidth={1}
    viewBoxSize={100}/>
    </div>
)

export default AccountPage;

/*function callThis()
{
  window.document.location.href = 'demo.html';
}*/
//window.document.location.href = 'demo.html';