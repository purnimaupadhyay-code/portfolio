function About({data}) {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title"><span className="gradient-text"> ABOUT</span></h2>
          <p className="muted">{data.about}</p>
          <p className="muted">{data.goals}</p>
        </div>

        <div className="card">
          <h3>Interest</h3>
          <div className="badges">
          {
            data.interests.map((item)=>(
              <span key={item}className="badge"></span>
            ))
          }
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
