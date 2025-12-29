import { RadarChart } from "./RadarChart";
import {RadarSkills} from "@/dataConstants/constants"
const Skills = () => {
 
  return(
    <div >
      {RadarSkills.map((skills)=>(
       <RadarChart key = {skills.id} topic = {skills} > </RadarChart>
      ))}
      
    </div>
  )
};
export default Skills;
