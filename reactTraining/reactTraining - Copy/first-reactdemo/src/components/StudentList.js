import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [{ "id": "10090", "name": "saichandu", "course": "EEE" },
            { "id": "10091", "name": "rakesh", "course": "ECE" },
            { "id": "10092", "name": "adithya", "course": "MEC" }]
        };
    }

    handleRemove = (index) => {
        const current = this.state;
        let newstate = current.students.filter((student, ind) => {
            return ind !== index;
        });
        this.setState({ students: newstate });
    }

    render() {
        return (

            <div>
                <h1>Student List</h1>
                <table className="table table-dark">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Course</th>
                    </thead>

                    <tbody>
                        {
                            this.state.students.map((student, ind) => {
                                return <tr key={ind}>
                                    <td> {student.id}</td>
                                    <td> {student.name}</td>
                                    <td> {student.course}</td>
                                    <button type="button" class="btn btn-info" >edit</button>
                                    <button type="button" class="btn btn-danger" onClick={this.handleRemove}>remove</button>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default StudentList;