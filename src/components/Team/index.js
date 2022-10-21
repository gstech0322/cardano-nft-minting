import { TeamMemberInfos } from "constants/team"
import "./style.scss"

const generateTeamMembers = () =>
  TeamMemberInfos.map((data, index) => (
    <div key={index} className="team-item flex flex-column">
      <img src={data.avatar} alt="avatar" loading="lazy" />
      <span>{data.name}</span>
      <span>{data.role}</span>
    </div>
  ))

const Team = () => (
  <>
    <div className="team flex flex-column">
      <div className="team-title container">THE TEAM</div>
      <div className="team-wrapper container">{generateTeamMembers()}</div>
    </div>
  </>
)

export default Team
