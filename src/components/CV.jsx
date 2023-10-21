import { IoLocationSharp, IoMailSharp, IoCallSharp } from "react-icons/io5";

function CV(props) {
  return (
    <div className="CV">
      <div className="name-field">{props.person.name}</div>
      <div className="info-field left-field">
        <div className="info-phone">
          <IoCallSharp className="info-icon" /> {props.person.phoneNumber}
        </div>
        <div className="info-email">
          <IoMailSharp className="info-icon" />
          {props.person.email}
        </div>
        <div className="info-address">
          <IoLocationSharp className="info-icon" />
          <div>{props.person.address}</div>
        </div>
      </div>
      <div className="profile-field">
        <div className="profile-header header">PROFILE</div>
        <div className="profile-description">{props.person.description}</div>
      </div>
      <div className="education-field left-field">
        <div className="header">Education</div>
      </div>
      <div className="skills-field">
        <div className="header">Skills</div>
        <div className="skills-list">
          {!props.person.skills
            ? ""
            : props.person.skills.split(",").map((skill) => <li>{skill}</li>)}
        </div>
      </div>
      <div className="experience-field">
        <div className="header">Experience</div>
      </div>
    </div>
  );
}

export default CV;
