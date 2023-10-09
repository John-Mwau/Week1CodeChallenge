
function studentGrade(){
    let studentScore=parseFloat(prompt('Enter Student Score'));// Prompts the user to enter a number; either integer or a float.
    let grade;
    if(studentScore>=79 && studentScore<=100){//checks if score its within the given range: If true; returns A
        return (grade= 'A');
    }else if(studentScore >=60 && studentScore<79){//checks if score its within the given range: If true; returns B
       return (grade='B');
    }else if (studentScore >=49 && studentScore <= 59){////checks if score its within the given range: If true; returns A
       return (grade='C');
    }else if (studentScore >=40 && studentScore <49){//checks if score its within the given range: If true; returns A
        grade='D';
    }else{
        return (grade='E');//A score less than 40; is returned 
    }
 console.log(grade)
}
studentGrade();
console.log(studentGrade())

