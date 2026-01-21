import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa"; 
import '../css/ProfileCard.css'
import profileImage from '../assets/profile.jpeg';

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <img 
        src={profileImage} 
        alt="Profile" 
        className="avatar"
      />

      <span className="profile-name">Rodrigo Venâncio</span>
      <span className="divider">|</span>
      <span className="profile-description">Master's student @ UTAD - Engenharia Informática</span>
      <span className="divider">|</span>

      <a href="https://github.com/rodrigovenancio77" target="_blank" className="icon-link">
        <FaGithub />
      </a>

      <a href="https://www.linkedin.com/in/rodrigovenancio77/" target="_blank" className="icon-link">
        <FaLinkedin />
      </a>
      
      <a href="mailto:rodrigovenancio77@gmail.com" className="icon-link">
        <FaEnvelope />
      </a>

      <a href="/resume.pdf" target="_blank" className="icon-link">
        <FaFileAlt />
      </a>
    </div>
  );
}