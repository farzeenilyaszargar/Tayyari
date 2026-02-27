<<<<<<< HEAD
import Benifits from "@/components/benifits";
import HeroSection from "@/components/heroSection";
import StartTest from "@/components/startTest";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StartTest />
      <Benifits />
    </div>
  );
}
=======
export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container" style={{ flex: 1 }}>
        <nav className="navbar">
          <div className="logo">TAYYARI.</div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="#">Tests</a>
            <div className="dropdown">
              <button className="dropbtn">
                Resources
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div className="dropdown-content">
                <a href="#">Download Books</a>
                <a href="#">Previous Year Papers (PYQs)</a>
                <a href="#">Formula Sheets</a>
                <a href="#">Strategy Guides</a>
              </div>
            </div>
            <a href="#">Leaderboard</a>
          </div>
          <div className="flex gap-4">
            <a href="/login" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Sign In</a>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Enroll Now</button>
          </div>
        </nav>

        <main>
          <section className="hero">
            <div style={{ marginBottom: '2rem', display: 'inline-block', padding: '0.25rem 0.75rem', border: '1px solid var(--gray-300)', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 500 }}>
              Admissions Open for 2026 Batch
            </div>
            <h1 className="h1">
              Rigorous preparation for <br />
              the focused JEE aspirant.
            </h1>
            <p className="subtitle">
              An uncompromising platform designed for serious students. Execute highly-calibrated mock exams,
              leverage deep performance analytics, and measure your standing against the nation's best.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">
                Commence Evaluation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
              <button className="btn btn-secondary">
                View Methodology
              </button>
            </div>
          </section>

          <section className="features-section">
            <h2 className="section-title">Core Infrastructure</h2>
            <div className="grid grid-cols-3 gap-8">

              {/* Feature 1 */}
              <div className="card">
                <div className="icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Exam Simulations</h3>
                <p style={{ color: 'var(--text-muted)' }}>High-fidelity mock examinations matching exact NTA parameters. Includes normalized percentile projection algorithms based on historical variance.</p>
              </div>

              {/* Feature 2 */}
              <div className="card">
                <div className="icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Diagnostic Analytics</h3>
                <p style={{ color: 'var(--text-muted)' }}>Granular breakdown of your performance metrics. Isolate structural weaknesses in conceptual understanding and optimize revision allocation.</p>
              </div>

              {/* Feature 3 */}
              <div className="card">
                <div className="icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>Curated Academia</h3>
                <p style={{ color: 'var(--text-muted)' }}>Unrestricted access to our proprietary index of definitive textbooks, theorem proofs, and advanced problem-solving compilations.</p>
              </div>

            </div>
          </section>

          <section className="features-section">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Competitive Index</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '90%' }}>
                  Preparation is not conducted in a vacuum. Evaluate your trajectory against a highly vetted cohort of top-percentile candidates nationwide. Metrics are updated in real-time post-examination.
                </p>
                <div className="flex gap-4 flex-col" style={{ borderLeft: '2px solid var(--black)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Aggregate Leaderboards</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>National, demographic, and cohort-specific performance rankings.</p>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Consistency Tracking</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Quantitative measurement of test-taking frequency and score stability.</p>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--border-color)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', background: 'var(--gray-50)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>National Top Cohort</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gray-500)', fontWeight: 600 }}>UPDATED: TODAY</span>
                </div>
                <div style={{ padding: '1rem' }}>
                  {[1, 2, 3, 4, 5].map((rank) => (
                    <div key={rank} className="leaderboard-item">
                      <div className="flex items-center gap-4">
                        <span className="leaderboard-rank" style={{ color: rank <= 3 ? 'var(--black)' : 'var(--gray-400)' }}>{String(rank).padStart(2, '0')}</span>
                        <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                          {['A. Rao', 'S. Kapoor', 'M. Deshmukh', 'K. Iyer', 'V. Singh'][rank - 1]}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>
                          Consistency: <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{['99.8', '99.5', '98.9', '98.2', '97.5'][rank - 1]}%</span>
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '1rem' }}>
                          {['99.98', '99.95', '99.91', '99.85', '99.80'][rank - 1]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="logo" style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>TAYYARI.</div>
              <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', maxWidth: '300px', lineHeight: 1.6 }}>
                The definitive assessment and analytics infrastructure for serious Joint Entrance Examination candidates.
              </p>
            </div>
            <div className="footer-nav">
              <div className="footer-col">
                <h4>Platform</h4>
                <ul>
                  <li><a href="#">Exam Engine</a></li>
                  <li><a href="#">Analytics Dashboard</a></li>
                  <li><a href="#">Curriculum Library</a></li>
                  <li><a href="#">Performance Index</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Methodology</a></li>
                  <li><a href="#">Syllabus Coverage</a></li>
                  <li><a href="#">System Status</a></li>
                  <li><a href="#">Security Protocol</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Organization</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Support</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Tayyari Evaluation Systems. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
>>>>>>> c260406 (made basic)
