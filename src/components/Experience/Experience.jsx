import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [yearsExperience, setYearsExperience] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [companiesWorked, setCompaniesWorked] = useState(0);
  const targetYears = 3; // Set your target number for years of experience
  const targetProjects = 12; // Set your target number for completed projects
  const targetCompanies = 5; // Set your target number for companies worked

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment years of experience
      if (yearsExperience < targetYears) {
        setYearsExperience((prev) => prev + 1);
      }

      // Increment completed projects
      if (completedProjects < targetProjects) {
        setCompletedProjects((prev) => prev + 1);
      }

      // Increment companies worked
      if (companiesWorked < targetCompanies) {
        setCompaniesWorked((prev) => prev + 1);
      }
    }, 100); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [yearsExperience, completedProjects, companiesWorked]);

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--primary)" : "" }}
        >
          {yearsExperience}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--primary)" : "" }}
        >
          {completedProjects}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--primary)" : "" }}
        >
          {companiesWorked}+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>companies </span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
