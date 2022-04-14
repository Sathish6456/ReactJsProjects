import React, { Component } from 'react';

class Example3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [
                { id: 101, name: "Sathish", gender: "male" },
                { id: 102, name: "Sumanth", gender: "male" },
                { id: 103, name: "Sai Anish", gender: "male" },
                { id: 104, name: "Krithika", gender: "female" },
            ]
        }
    }
    render() {
        var trItems = this.state.employees.map(
            (employee) => {
                return <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.gender}</td>
                    </tr>
            }
        )
        return (
            <div>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Gender</td>
                    </tr>
                    {trItems}
                </table>
            </div>
        );
    }
}

export default Example3;