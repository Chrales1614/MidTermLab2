import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  // Sample group members data
  const groupMembers = [
    {
      id: 1,
      name: "Charles Delgado",
      course: "Bachelor of Science in Information Technology",
      year: "4th Year",
      skills: ["React", "JavaScript", "Node.js", "Database Design"],
      image: "https://via.placeholder.com/200x200/007bff/ffffff?text=JD",
      description: "Passionate about web development and user experience design."
    },
    {
      id: 2,
      name: "Princes Duran",
      course: "Bachelor of Science in Computer Science",
      year: "4th Year",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX"],
      image: "https://via.placeholder.com/200x200/28a745/ffffff?text=MS",
      description: "Creative designer with a focus on modern web interfaces."
    },
    {
      id: 3,
      name: "Jeffry Duria",
      course: "Bachelor of Science in Information Technology",
      year: "4th Year",
      skills: ["Python", "Node.js", "Database", "API Development"],
      image: "https://via.placeholder.com/200x200/dc3545/ffffff?text=CR",
      description: "Backend specialist with expertise in server-side technologies."
    },
    {
      id: 4,
      name: "Lemuel Ellasus",
      course: "Bachelor of Science in Computer Science",
      year: "4th Year",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      image: "https://via.placeholder.com/200x200/ffc107/000000?text=AG",
      description: "Design enthusiast focused on creating intuitive user experiences."
    },
    {
      id: 5,
      name: "Kurt Esquarez",
      course: "Bachelor of Science in Computer Science",
      year: "4th Year",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      image: "https://via.placeholder.com/200x200/ffc107/000000?text=AG",
      description: "Design enthusiast focused on creating intuitive user experiences."
    },
    {
      id: 6,
      name: "Cedric Gabi",
      course: "Bachelor of Science in Computer Science",
      year: "4th Year",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      image: "https://via.placeholder.com/200x200/ffc107/000000?text=AG",
      description: "Design enthusiast focused on creating intuitive user experiences."
    },
    {
      id: 7,
      name: "Mary Ann Garganera",
      course: "Bachelor of Science in Computer Science",
      year: "4th Year",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      image: "https://via.placeholder.com/200x200/ffc107/000000?text=AG",
      description: "Design enthusiast focused on creating intuitive user experiences."
    }
  ];

  return (
    <div className="blog-post-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <article className="blog-post">

              {/* Post Header */}
              <header className="post-header">
                <div className="post-meta">
                  <span className="post-category">
                    <i className="fas fa-tag me-1"></i>
                    Team
                  </span>
                  <span className="post-date">
                    <i className="fas fa-calendar me-1"></i>
                    December 10, 2024
                  </span>
                  <span className="post-read-time">
                    <i className="fas fa-clock me-1"></i>
                    4 min read
                  </span>
                </div>
                  <h1 className="post-title">Meet Our Development Team</h1>
                  <p className="post-subtitle">Get to know the dedicated students behind this project from Pamantasan ng Cabuyao</p>
              </header>

              {/* Featured Image */}
              <div className="post-featured-image">
                <img src="/images/pnc-computer-lab.png" alt="PNC Team" />
              </div>

              {/* Post Content */}
                <div className="post-content">
                  <p className="lead">
                    We are a group of dedicated students from Pamantasan ng Cabuyao, working together to create this Single Page Application as part of our ITP110 Web Technologies course. Each member brings unique skills and perspectives to deliver a quality project.
                  </p>
                  <h2>Our Team Members</h2>
                  <p>
                    This website was developed collaboratively by students from the College of Computer Studies at Pamantasan ng Cabuyao. We applied modern web technologies including React, React Router, and Bootstrap to create this responsive and professional website.
                  </p>

                <div className="team-grid">
                  {groupMembers.map((member) => (
                    <div key={member.id} className="team-member-card">
                      <div className="member-image">
                        <img 
                          src={member.image} 
                          alt={member.name}
                        />
                      </div>
                      <div className="member-content">
                        <h4 className="member-name">{member.name}</h4>
                        <div className="member-details">
                          <p><strong>Course:</strong> {member.course}</p>
                          <p><strong>Year Level:</strong> {member.year}</p>
                          <p className="member-description">{member.description}</p>
                        </div>
                        <div className="member-skills">
                          <h6>Skills:</h6>
                          <div className="skills-tags">
                            {member.skills.map((skill, index) => (
                              <span key={index} className="skill-tag">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                  <h2>About This Project</h2>
                  <p>
                    This Single Page Application was developed as part of our ITP110 Web Technologies course at Pamantasan ng Cabuyao. The project demonstrates our understanding of modern web development practices and our ability to work collaboratively as a team.
                  </p>

                  <div className="project-info-grid">
                    <div className="info-card">
                      <div className="info-icon">
                        <i className="fas fa-code"></i>
                      </div>
                      <div className="info-content">
                        <h4>Technologies Used</h4>
                        <p>React, React Router DOM, Bootstrap 5, CSS3</p>
                      </div>
                    </div>
                    <div className="info-card">
                      <div className="info-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="info-content">
                        <h4>Team Collaboration</h4>
                        <p>Developed by IT & CS students from PnC</p>
                      </div>
                    </div>
                    <div className="info-card">
                      <div className="info-icon">
                        <i className="fas fa-laptop-code"></i>
                      </div>
                      <div className="info-content">
                        <h4>Project Type</h4>
                        <p>Single Page Application (SPA) with Routing</p>
                      </div>
                    </div>
                  </div>

                <div className="post-footer">
                  <div className="post-tags">
                    <span className="tag-label">Tags:</span>
                    <span className="tag">Team</span>
                    <span className="tag">About Us</span>
                    <span className="tag">Students</span>
                    <span className="tag">Project</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
