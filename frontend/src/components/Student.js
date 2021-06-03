import React,{useState} from "react";
import Axios from "axios";



function Student ({getdata}) {


    const url = "http://localhost:6039/insert"
    const[data, setData] = useState({
        name: "",
        dateOfBirth: "",
        cls: "I",
        division: "A",
        gender: ""
    })

    
    function submit(e) {
        e.preventDefault();
        console.log(data.gender)
        Axios.post(url, {
            name: data.name, 
            dateOfBirth: data.dateOfBirth,
            cls: data.cls,
            division: data.division,
            gender: data.gender
        })

        .then(res => {
            console.log(res.data);
            getdata();
        })
    }

    function handle(e){

        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }

    return (
      <div>
        <center><h1><b>STUDENT INFORMATION</b></h1></center>
     
        
        <form onSubmit= {(e) => submit(e)}>
        Name:
        <input onChange= {(e) => handle(e)} id = "name" value = {data.name} type = "text">

         </input>
        <br></br>
        DOB:
        <input onChange= {(e) => handle(e)} id = "dateOfBirth" value = {data.dateOfBirth} type = "date"></input>
        <br></br>
        Class
        <select onChange= {(e) => handle(e)} id = "cls" value = {data.cls}>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="X">X</option>
              <option value="XII">XII</option>
              <option value="XI2">XI2</option>
        </select>
        <br></br>
        Division
        <select onChange= {(e) => handle(e)} id = "division" value = {data.division}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
        </select>
        <br></br>

        <div>
        Gender:<br />
        Male
        <input onChange= {(e) => handle(e)} id = "gender" value = "male" type = 'radio' checked = {data.gender === "male"}/>  
        <br />
        Female
        <input onChange= {(e) => handle(e)} id = "gender" value = "Female" type = 'radio' checked = {data.gender === "Female"} />
        </div>

        <input type ='submit' value ="Submit"></input>   
        </form>
        </div>
        
    );
};

export default Student;
