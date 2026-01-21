// src/components/ProjectCard.tsx

// 1. We define the "Shape" of the data this component accepts
interface ProjectCardProps {
  title: string;
  description: string;
}

// 2. We tell the function to expect these props
export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}