import { Link } from "react-router-dom";
import Template from "./template";
import React, { useState } from "react";

const CreateResume = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    certification1: "",
    certification2: "",
    certification3:'',
    skill1: "",
    skill2: "",
    skill3: "",
    projn1:"",
    projn2:"",
    projectd1: "",
    projectd2: "",
    about:"",
    role:"",
    bcol:"",
    bcgpa:"",
    byear:"",
    icol:"",
    icgpa:"",
    iyear:""
  });
const [issubmit,setsubmit]=useState(false);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setsubmit(true);
    console.log(formData);
    // code to submit the form data to a backend API or database
  };
if(issubmit){
  return(
    <Template firstName={formData.firstName} lastName={formData.lastName} email={formData.email} phone={formData.phone}
    address={formData.address} c1={formData.certification1} c2={formData.certification2} s1={formData.skill1} s2={formData.skill2}
    s3={formData.skill3} role={formData.role} pd1={formData.projectd1} pd2={formData.projectd2} p1={formData.projn1} p2={formData.projn2}about={formData.about}
    bcol={formData.bcol} bcgpa={formData.bcgpa}byear={formData.byear} icol={formData.icol} icgpa={formData.icgpa} c3={formData.certification3}iyear={formData.iyear} />
  )
}
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    width: "100%",
  };

  const textAreaStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "15px",
    width: "100%",
    height: "100px",
  };

  const formStyle = {
    width: "80%",
    margin: "0 auto",
  };

  const formContainer = {
    backgroundColor: "#f2f2f2",
    padding: "50px",
  };

  const nameContainer = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  };

  const inputContainer = {
    width: "48%",
  };

  return (
    <div style={formContainer}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "25px" }}>
          Create Your Resume
        </h2>
        <div style={nameContainer}>
          <div style={inputContainer}>
            <label style={labelStyle}>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
          <div style={inputContainer}>
            <label style={labelStyle}>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={labelStyle}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={labelStyle}>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={labelStyle}>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Certification 1:</label>
    <input
      type="text"
      name="certification1"
      value={formData.certification1}
      onChange={handleChange}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Certification 2:</label>
    <input
      type="text"
      name="certification2"
      value={formData.certification2}
      onChange={handleChange}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Certification 3:</label>
    <input
      type="text"
      name="certification3"
      value={formData.certification3}
      onChange={handleChange}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Skill 1:</label>
    <input
      type="text"
      name="skill1"
      value={formData.skill1}
      onChange={handleChange}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Skill 2:</label>
    <input
      type="text"
      name="skill2"
      value={formData.skill2}
      onChange={handleChange}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Skill 3:</label>
    <input
      type="text"
      name="skill3"
      value={formData.skill3}
      onChange={handleChange}
      style={inputStyle}
    />
  </div>
  <div style={{ marginBottom: "15px" }}>
  <h3 >Education:</h3>
    <label style={labelStyle}>University Name</label>
    <input type='text' value={formData.bcol} name='bcol'onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>CGPA:</label>
    <input type='text' value={formData.bcgpa} name='bcgpa'onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>Academic Year</label>
    <input type='text' value={formData.byear} name='byear'onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>Inter/Diplamo College Name</label>
    <input type='text' value={formData.icol} name='icol' onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>Inter/Diplamo CGPA:</label>
    <input type='text' value={formData.icgpa} name='icgpa'onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>Academic Year</label>
    <input type='text' value={formData.iyear} name='iyear' onChange={handleChange} style={inputStyle}/>
  </div>

  <div style={{ marginBottom: "15px" }}>
    <h3>Project1</h3>
    <label style={labelStyle}>Project 1 Name :</label>
    <input type='text' value={formData.projn1} name="projn1" onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>Project Description</label>
    <textarea
      name="projectd1"
      value={formData.projectd1}
      onChange={handleChange}
      style={textAreaStyle}
    ></textarea>
  </div>
  <div style={{ marginBottom: "15px" }}>
    <h3>Project 2</h3>
  <label style={labelStyle}>Project 2 Name :</label>
    <input type='text' value={formData.projn2} name="projn2"   onChange={handleChange} style={inputStyle}/>
    <label style={labelStyle}>Project Description</label>

    <textarea
      name="projectd2"
      value={formData.projectd2}
      onChange={handleChange}
      style={textAreaStyle}
    ></textarea>
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Role</label>
    <textarea
      name="role"
      value={formData.role}
      onChange={handleChange}
      style={textAreaStyle}
    ></textarea>
  </div>
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>About</label>
    <textarea
      name="about"
      placeholder="Each line should not exced more than 40 characters"
    value={FormData.about}
      onChange={handleChange}
      style={textAreaStyle}
    ></textarea>
  </div>
  {/* <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>Photo:</label>
    <input
      type="file"
      name="photo"
      onChange={handleChange}
      style={{ marginBottom: "15px" }}
    />
  </div> */}
  <button type="submit" className="btn btn-success" style={{ padding: "10px 20px" }}>
  Submit
  </button>
</form>
</div>
  );
};
export default CreateResume;






