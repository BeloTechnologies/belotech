import { Link } from "react-router-dom";
import "./DropletPrivacy.css";

const sections = [
  { id: "overview", title: "Overview" },
  { id: "data-collection", title: "Data Collection" },
  { id: "data-storage", title: "Data Storage" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "your-rights", title: "Your Rights" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export function DropletPrivacy() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="privacy-page">
      {/* Header */}
      <header className="privacy-header">
        <Link to="/droplet" className="back-link">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Droplet
        </Link>
      </header>

      <main className="privacy-content">
        <div className="privacy-card">
          {/* Title */}
          <div className="privacy-title-section">
            <span className="privacy-badge">Droplet</span>
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-date">Last Updated: January 31, 2026</p>
          </div>

          {/* Key highlight */}
          <div className="privacy-highlight">
            <div className="highlight-icon">🔒</div>
            <div className="highlight-content">
              <h3>Your Privacy is Our Priority</h3>
              <p>
                Droplet is designed with privacy at its core. All your data
                stays on your device. We don't have accounts, servers, or any
                way to access your information.
              </p>
            </div>
          </div>

          {/* Table of Contents */}
          <nav className="privacy-toc">
            <h2 className="toc-title">Contents</h2>
            <ul className="toc-list">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="toc-link"
                  >
                    <span className="toc-number">{index + 1}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="privacy-sections">
            <section id="overview" className="privacy-section">
              <h2>1. Overview</h2>
              <p>
                Droplet ("the App") is a hydration tracking application
                developed by Belo Technologies LLC. This Privacy Policy explains
                how we handle information when you use our iOS application.
              </p>
              <p>
                <strong>The short version:</strong> We don't collect, store, or
                have access to any of your data. Everything stays on your
                device.
              </p>
            </section>

            <section id="data-collection" className="privacy-section">
              <h2>2. Data Collection</h2>
              <p>
                Droplet is designed to function entirely offline and does not
                collect any personal information. Specifically:
              </p>
              <ul className="privacy-list">
                <li>
                  <strong>No Account Required:</strong> You don't need to create
                  an account, provide an email, or share any personal
                  information to use Droplet.
                </li>
                <li>
                  <strong>No Analytics:</strong> We do not use any analytics
                  services or tracking tools. We have no insight into how you
                  use the app.
                </li>
                <li>
                  <strong>No Network Requests:</strong> Droplet does not connect
                  to the internet. The app functions completely offline.
                </li>
                <li>
                  <strong>No Advertising:</strong> We do not display ads or work
                  with any advertising networks.
                </li>
              </ul>
            </section>

            <section id="data-storage" className="privacy-section">
              <h2>3. Data Storage</h2>
              <p>
                All data you enter into Droplet is stored locally on your device
                using Apple's SwiftData framework:
              </p>
              <ul className="privacy-list">
                <li>
                  <strong>Local Only:</strong> Your hydration logs, body weight,
                  and preferences are stored exclusively on your device.
                </li>
                <li>
                  <strong>Your Control:</strong> You can delete all your data at
                  any time through the app's settings. Uninstalling the app will
                  also remove all associated data.
                </li>
                <li>
                  <strong>iCloud Backup:</strong> If you have iCloud backup
                  enabled for your device, your Droplet data may be included in
                  your device backup. This is controlled by your iOS settings,
                  not by us.
                </li>
              </ul>
            </section>

            <section id="data-sharing" className="privacy-section">
              <h2>4. Data Sharing</h2>
              <p>
                We do not share any data because we don't have access to any
                data.
              </p>
              <ul className="privacy-list">
                <li>We do not sell your data</li>
                <li>We do not share data with third parties</li>
                <li>We do not have servers that store your information</li>
                <li>
                  We cannot access your hydration logs or personal information
                </li>
              </ul>
            </section>

            <section id="your-rights" className="privacy-section">
              <h2>5. Your Rights</h2>
              <p>
                Since all data is stored locally on your device, you have
                complete control:
              </p>
              <ul className="privacy-list">
                <li>
                  <strong>Access:</strong> All your data is visible within the
                  app at any time.
                </li>
                <li>
                  <strong>Deletion:</strong> Use the "Clear All Data" option in
                  Settings to permanently delete all your data, or simply
                  uninstall the app.
                </li>
                <li>
                  <strong>Portability:</strong> Your data exists only on your
                  device in the app's local storage.
                </li>
              </ul>
            </section>

            <section id="children" className="privacy-section">
              <h2>6. Children's Privacy</h2>
              <p>
                Droplet does not collect any personal information from anyone,
                including children. The app is safe for users of all ages.
                However, the App Store listing indicates the app is suitable for
                ages 9+.
              </p>
            </section>

            <section id="changes" className="privacy-section">
              <h2>7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make
                any changes, we will update the "Last Updated" date at the top
                of this policy. Since we don't collect your contact information,
                we encourage you to review this policy periodically.
              </p>
            </section>

            <section id="contact" className="privacy-section">
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or Droplet's
                privacy practices, please contact us:
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong> Turner.Naef@gmail.com
                </p>
                <p>
                  <strong>Belo Technologies LLC</strong>
                  <br />
                  Boulder, Colorado
                </p>
              </div>
            </section>
          </div>

          {/* Footer note */}
          <div className="privacy-footer">
            <p>
              Thank you for trusting Droplet with your hydration journey. Your
              privacy matters to us, which is why we built an app that doesn't
              need your data to work.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
