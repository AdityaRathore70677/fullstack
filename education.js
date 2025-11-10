import React from "react";

class EdTable extends React.Component {
  render() {
    const education = [
      {
        id: 1,
        name: "National Public School",
        place: "Bengaluru",
        stddeg: "10th",
        grade: "A+",
      },
      {
        id: 2,
        name: "Indian Institute of Science",
        place: "Bengaluru",
        stddeg: "Undergraduate",
        grade: "9.8",
      },
    ];

    const edudetails = education.map((educ) => (
      <EdRow
        key={educ.id}
        id={educ.id}
        name={educ.name}
        place={educ.place}
        stddeg={educ.stddeg}
        grade={educ.grade}
      />
    ));

    return (
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Place</th>
            <th>Education</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>{edudetails}</tbody>
      </table>
    );
  }
}

class EdRow extends React.Component {
  render() {
    const { id, name, place, stddeg, grade } = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{place}</td>
        <td>{stddeg}</td>
        <td>{grade}</td>
      </tr>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education Details</h2>
        <EdTable />
      </section>
    );
  }
}

export default Education;
