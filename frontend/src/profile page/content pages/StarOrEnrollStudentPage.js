import React from "react";
import Program from "../../program page/Program";
import Table from "../../components/Table";
import InstructorHomepageServices from "../../services/instructorHomepage";

export default function StarOrEnrollStudentPage(props) {
  // Star Page / Enrolled Student Page
  const myColumns = [
    { field: "email", headerName: "Student Email", width: 220 },
    { field: "firstName", headerName: "First Name", width: 220 },
    { field: "lastName", headerName: "Last Name", width: 220 },
  ];

  const [myRows, setMyRows] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.userType === "instructor"){
      const institutionId = JSON.parse(localStorage.userInfo).institution
      InstructorHomepageServices.GetEnrolledStudents(institutionId)
        .then((response) => response.json())
        .then((result) => {
          const data = JSON.parse(result.data);
          setMyRows(data);
        })
    }
  },[]);

  if (props.userType === "student") {
    return <Program checkStar={true} />;
  } else {
    return (
      <Table
        columns={myColumns}
        rows={myRows}
        height={380}
        PageSize={5}
        tableType="enrolledStudent"
      ></Table>
    );
  }
}
