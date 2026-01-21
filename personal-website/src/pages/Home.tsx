import ProjectCard from "../components/ProjectCard";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>      
      <ProfileCard />

      <ProjectCard title="Portfolio V1" description="My first website" />
      <ProjectCard title="Task App" description="A to-do list app" />
    </div>
  );
}