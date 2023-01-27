import React, { useEffect, useState } from "react";
import "./viewissues.scss";
import { auth, db } from "../../firebase";
import { ref, onValue, get, child } from "firebase/database";
import {
  InterestsRounded,
  LocalFireDepartment,
  LocationCity,
  LocationOn,
  ReportProblem,
  Title,
  TitleRounded,
} from "@mui/icons-material";
import Content from "../content/Content";

const ViewIssues = () => {
  const [getComplaints, addComplaints] = useState([]);

  const [singleComplaint, setSingleComplaint] = useState({});

  const dbRef = ref(db, "/Complaints/");
  useEffect(() => {
    const listenToData = onValue(
      dbRef,
      (snapshot) => {
        let list = [];
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          list.push(childData);
        });
        addComplaints(list);
      },
      {
        onlyOnce: false,
      }
    );
    return () => {
      listenToData();
    };
  });

  const handleClick = (complaint) => {
    setSingleComplaint(complaint);
  };

  return (
    <div className="viewIssuesContainer">
      <div className="viewIssuesWraper">
        {/* Issue Container */}
        <div className="issueContainer">
          {getComplaints.map((complaint) => (
            <div
              style={
                complaint.solved
                  ? { backgroundColor: "#00800099" }
                  : { backgroundColor: "#ff000098" }
              }
              key={complaint.complaintId}
              onClick={() => handleClick(complaint)}
              className="issueItem"
            >
              <img src={complaint.imageUrlList[0]} />
              <div className="issueContent">
                <div className="titleItem">
                  <ReportProblem className="reportProblem" />
                  <span className="title">{complaint.title}</span>
                </div>
                <div className="contentItem">
                  <LocationOn className="reportProblem" />
                  <span className="loc">Issue location</span>
                </div>

                <div className="contentItem">
                  <LocalFireDepartment className="reportProblem" />
                  <span className="loc">Department</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Container */}

        <Content complaintProps={singleComplaint} />
      </div>
    </div>
  );
};

export default ViewIssues;
