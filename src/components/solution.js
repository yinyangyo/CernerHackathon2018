







export {solution};

function solution(email)
{
var height,weight,gender,age,ideal_weight,current_activity_level,target_activity_level=0;
var currentBMR,targetBMR,netCalorieDifference=0;

/*var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "DietChart"
});


var rows[] = con.connect(function(err)
{
  if (err) throw err;
  var someVar = [];
  con.query("SELECT * FROM personDetails WHERE email = '" + email + "''", function (err, result, fields) {
    if (err) throw err;
    else
    {
      setValue(result);
      console.log(result);
      gender = result.gender;
      weight = result.weight;
      height = result.height;
      ideal_weight = result.ideal_weight;
      age = result.age;
      current_activity_level = result.current_activity_level;
      target_activity_level = result.target_activity_level;
      return result;
    }

  });
});

gender = rows[0].gender;
weight = rows[0].weight;
height = rows[0].height;
ideal_weight = rows[0].ideal_weight;
age = rows[0].age;
current_activity_level = rows.current_activity_level;
target_activity_level = rows.target_activity_level;

function setValue(value)
{
  someVar = value;
  console.log(someVar);
}*/
gender = 0;
weight = 120;
height = 67;
ideal_weight = 140;
age = 21;
current_activity_level = 0;
target_activity_level = 3;

if(gender===0)
{
  currentBMR = 655 + (4.35*weight) + (4.7*height) - (4.7*age);
  targetBMR =  655 + (4.35*ideal_weight) + (4.7*height) - (4.7*age);
}
else
{
    currentBMR = 66 + (6.23*weight) + (12.7*height) - (6.8*age);
    targetBMR = 66 + (6.23*ideal_weight) + (12.7*height) - (6.8*age);
}

 switch(current_activity_level)
 {
   case 0:
          currentBMR = currentBMR*(1.2);
          break;
   case 1:
          currentBMR = currentBMR*(1.375);
          break;
   case 2:
          currentBMR = currentBMR*(1.55);
          break;
   case 3:
          currentBMR = currentBMR*(1.725);
          break;
   case 4:
          currentBMR = currentBMR*(1.9);
          break;
 }

 switch(target_activity_level)
 {
   case 0:
          targetBMR = targetBMR*(1.2);
          break;
   case 1:
          targetBMR = targetBMR*(1.375);
          break;
   case 2:
          targetBMR = targetBMR*(1.55);
          break;
   case 3:
          targetBMR = targetBMR*(1.725);
          break;
   case 4:
          targetBMR = targetBMR*(1.9);
          break;
 }

netCalorieDifference = targetBMR - currentBMR;
console.log("currentBMR is ",currentBMR.toFixed(2));
console.log("targetBMR is ",targetBMR.toFixed(2));
console.log("Net Calorie difference is ",netCalorieDifference.toFixed(2));

return {currentBMR:currentBMR.toFixed(2),targetBMR:targetBMR.toFixed(2),netCalorieDifference:netCalorieDifference.toFixed(2)}

}
