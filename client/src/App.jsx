import React from 'react';
// Importing icons from lucide-react library
import { Github, Linkedin, Mail, Code, Database, Smartphone, ExternalLink, Terminal, Globe, Cpu } from 'lucide-react';
// Importing framer-motion for simple animations
import { motion } from 'framer-motion';

// IMPORT IMAGE
// Note: I placed the image in the assets folder to keep the project organized
import profilePic from './assets/profile.jpeg';

// Main Application Component
function App() {
  
  // Animation settings: elements will fade in and slide up
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    // Main Container: Sets the dark background gradient and full screen height
    <div style={{ 
      width: '100%',
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b)', 
      color: 'white', 
      fontFamily: "'Inter', sans-serif",
      overflowX: 'hidden',
      margin: 0,
      padding: 0
    }}>
      
      {/* Centered Container: Keeps content readable on wide screens */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        
        {/* --- HEADER SECTION --- */}
        {/* Using motion.header to animate the entire top section */}
        <motion.header 
          initial="hidden" 
          animate="visible" 
          variants={fadeIn}
          style={{ textAlign: 'center', padding: '4rem 0' }}
        >
          {/* Profile Picture with a "Spring" animation pop effect */}
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ 
              width: '160px', 
              height: '160px', 
              margin: '0 auto 1.5rem', 
              borderRadius: '50%', 
              overflow: 'hidden', 
              border: '4px solid #38bdf8',
              boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)'
            }}
          >
            <img 
              src={profilePic} 
              alt="Brayden Govender" 
              onError={(e) => {e.target.style.display='none';}} // Hides image if file is missing
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

          <div style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            borderRadius: '50px', 
            background: 'rgba(56, 189, 248, 0.1)', 
            color: '#38bdf8', 
            marginBottom: '1rem',
            fontWeight: 'bold',
            fontSize: '0.9rem'
          }}>
            Available for Hire
          </div>
          
          <h1 style={{ 
            fontSize: '3.5rem', 
            margin: '1rem 0', 
            background: 'linear-gradient(to right, #38bdf8, #818cf8)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontWeight: '800'
          }}>
            Brayden Govender
          </h1>
          
          <p style={{ fontSize: '1.5rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Full Stack Developer | Android Specialist | Software Engineer
          </p>
          
          {/* Social Media Links using the reusable SocialBtn component */}
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <SocialBtn href="https://github.com/Bray-govender" icon={<Github size={20} />} label="GitHub" />
            <SocialBtn href="https://www.linkedin.com/in/brayden-govender-321830299/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialBtn href="mailto:braydengovender07@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </motion.header>

        {/* --- SKILLS SECTION --- */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" // Animates only when the user scrolls down to it
          viewport={{ once: true }} 
          variants={fadeIn}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#38bdf8' }}>#</span> Technical Arsenal
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            {/* Displaying skills in cards */}
            <SkillCard 
              icon={<Globe size={32} color="#38bdf8" />} 
              title="Web Stack" 
              desc="Building responsive full-stack applications."
              tags={["HTML", "CSS", "JavaScript", "PHP"]} 
            />

            <SkillCard 
              icon={<Smartphone size={32} color="#38bdf8" />} 
              title="Mobile Development" 
              desc="Native Android applications with complex backends."
              tags={["Android Studio", "Java", "XML"]} 
            />

            <SkillCard 
              icon={<Terminal size={32} color="#38bdf8" />} 
              title="Software Engineering" 
              desc="High-performance logic and automation."
              tags={["C++", "C#", "Python"]} 
            />

          </div>
        </motion.section>

        {/* --- PROJECTS SECTION --- */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          style={{ marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#38bdf8' }}>#</span> Featured Projects
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            
            {/* Project 1: PantryPals */}
            <ProjectCard 
              title="PantryPals" 
              desc="A complete Inventory Management System with OTP auth, database normalization, and automated backup scripts."
              tags={["PHP", "MySQL", "JavaScript"]}
            />

            {/* Project 2: This Portfolio */}
            <ProjectCard 
              title="Future Interns Portfolio" 
              desc="A high-performance personal portfolio built with React and Vite, featuring animations and responsive design."
              tags={["React", "Vite", "Framer Motion"]}
            />

          </div>
        </motion.section>

        {/* --- CONTACT FORM SECTION --- */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeIn}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div style={{ 
            background: 'linear-gradient(to right, #1e293b, #0f172a)', 
            padding: '3rem', 
            borderRadius: '20px', 
            border: '1px solid #334155' 
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Work Together</h2>
            <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
              Have a project in mind or want to hire me? Send me a message!
            </p>
            
            {/* Simple Contact Form */}
            <form style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
              <div style={{ display: 'grid', gap: '1rem' }}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea rows="4" placeholder="How can I help you?" style={inputStyle}></textarea>
                <button style={{ 
                  background: '#38bdf8', color: '#0f172a', padding: '1rem', 
                  fontSize: '1.1rem', fontWeight: 'bold', border: 'none', 
                  borderRadius: '8px', cursor: 'pointer', marginTop: '1rem',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.section>

        <footer style={{ textAlign: 'center', color: '#64748b', padding: '2rem', borderTop: '1px solid #1e293b' }}>
          <p>© 2026 Brayden Govender. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}

// ----------------------------------------------------
// HELPER COMPONENTS (To keep the main code clean)
// ----------------------------------------------------

// 1. Social Button Component
function SocialBtn({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       style={{ 
         display: 'flex', alignItems: 'center', gap: '0.5rem', 
         background: '#1e293b', padding: '0.8rem 1.2rem', 
         borderRadius: '8px', color: 'white', textDecoration: 'none', 
         border: '1px solid #334155', transition: 'all 0.3s' 
       }}
       // Hover effects
       onMouseOver={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.color = '#38bdf8'; }}
       onMouseOut={(e) => { e.currentTarget.style.borderColor = '#334155'; e.currentTarget.style.color = 'white'; }}
    >
      {icon} <span>{label}</span>
    </a>
  );
}

// 2. Skill Card Component
function SkillCard({ icon, title, desc, tags }) {
  return (
    <div style={{ 
      background: '#1e293b', padding: '2rem', borderRadius: '15px', 
      border: '1px solid #334155', textAlign: 'center', transition: 'transform 0.3s' 
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '50%', display: 'inline-block', marginBottom: '1rem' }}>
        {icon}
      </div>
      <h3 style={{ margin: '0.5rem 0' }}>{title}</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>{desc}</p>
      
      {/* Mapping through tags to create badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
        {tags.map(tag => (
           <span key={tag} style={{ 
             fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px', 
             background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' 
           }}>
             {tag}
           </span>
        ))}
      </div>
    </div>
  );
}

// 3. Project Card Component
function ProjectCard({ title, desc, tags }) {
  return (
    <div style={{ 
      background: '#1e293b', padding: '2rem', borderRadius: '15px', 
      border: '1px solid #334155', transition: 'all 0.3s', position: 'relative', overflow: 'hidden'
    }}
    onMouseOver={(e) => { e.currentTarget.style.borderColor = '#38bdf8'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
    onMouseOut={(e) => { e.currentTarget.style.borderColor = '#334155'; e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <h3 style={{ fontSize: '1.5rem', marginTop: 0 }}>{title}</h3>
        <ExternalLink size={20} color="#94a3b8" />
      </div>
      <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>{desc}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span key={tag} style={{ 
            fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px', 
            background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)' 
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// Styling for inputs to keep inline styles clean
const inputStyle = {
  width: '100%', padding: '1rem', background: '#0f172a', 
  border: '1px solid #334155', borderRadius: '8px', 
  color: 'white', outline: 'none', fontSize: '1rem'
};

export default App;