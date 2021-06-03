import React,{useState} from "react";
import Axios from "axios";

function Table({students}) {


    return (
        <table>
            <thead>
                <th> Addmission number </th>
                <th> Name </th>
                <th> Date Of Birth </th>
                <th> Class </th>
                <th> Division </th>
                <th> Gender </th>
            </thead>

            {students.map((student, i) => {
                const {addno, name, dateOfBirth, cls, division, gender} = student;
                return (
                    <tr>
                        <td> {addno} </td>
                        <td> {name} </td>
                        <td> {dateOfBirth} </td>
                        <td> {cls} </td>
                        <td> {division} </td>
                        <td> {gender} </td>
                    </tr>
                )
            })}

        </table>

    )
}
export default Table;