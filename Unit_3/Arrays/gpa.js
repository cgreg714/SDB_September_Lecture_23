let grades = {
  
    midterm: {
      grade: 3.3, 
      weight: 1
    },
  
    project: {
      grade: 4.0, 
      weight: 1
    },
    
    final: {
      grade: 3.2, 
      weight: 2
    }
    
  }
  
  function gpa(object) {
    
    let gradesToWeight = Object.keys(object); 
    let gradeSum = 0;
    let weightSum = 0;
    
  }
  
    gradesToWeight.forEach(function(key) {
      let gradeSum = gradeSum + object[key].grade [
        grade * weight + gradeSum
      ]
      let weightSum = weightSum + object[key].grade [
        weight + weightSum
      ]
      
  {
      let weightedGrade = gradeSum / weightSum
      {console.log(weightedGrade)}
  }
},


  console.log('The final GPA is ' + gpa(grades)))


  // Below is correct.

  /* 
  midterm: 3.3,
  project: 4.0,
  final: 3.2
*/

let grades = {

  midterm: {
    grade: 3.3,
    weight: 1
  },

  project: {
    grade: 4.0,
    weight: 1
  },

  final: {
    grade: 3.2,
    weight: 2
  }

}

function gpa(object) {

  let gradesToWeight = Object.keys(object)
  //console.log(gradesToWeight);
  let gradeSum = 0
  let weightSum = 0

  gradesToWeight.forEach(function(key) {
    //console.log(object[key])
    gradeSum += object[key].grade * object[key].weight
    weightSum += object[key].weight
    // console.log("Weight Sum: ", weightSum)
  })

  let weightedGrade = gradeSum / weightSum
  console.log('The final GPA is ' + weightedGrade)

}
gpa(grades);