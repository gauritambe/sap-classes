import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Courses',
      links: [
        { label: 'SAP FICO', path: '/course-catalog' },
        { label: 'SAP MM', path: '/course-catalog' },
        { label: 'SAP SD', path: '/course-catalog' },
        { label: 'SAP ABAP', path: '/course-catalog' },
        { label: 'View All Courses', path: '/course-catalog' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Our Instructors', path: '/about' },
        { label: 'Success Stories', path: '/about' },
        { label: 'Careers', path: '/about' },
        { label: 'Contact', path: '/about' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Student Dashboard', path: '/student-dashboard' },
        { label: 'Career Guide', path: '/homepage' },
        { label: 'Certification Path', path: '/homepage' },
        { label: 'Blog', path: '/homepage' },
        { label: 'FAQs', path: '/homepage' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '/homepage' },
        { label: 'Terms of Service', path: '/homepage' },
        { label: 'Privacy Policy', path: '/homepage' },
        { label: 'Refund Policy', path: '/homepage' },
        { label: 'Contact Support', path: '/homepage' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'Linkedin', icon: 'Linkedin', url: '#' },
    { name: 'Youtube', icon: 'Youtube', url: '#' },
    { name: 'Instagram', icon: 'Instagram', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerSections?.map((section) => (
            <div key={section?.title}>
              <h3 className="footer-section-title">{section?.title}</h3>
              <ul className="footer-links">
                {section?.links?.map((link) => (
                  <li key={link?.label}>
                    <Link to={link?.path} className="footer-link">
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} SAP Classes Pro. All rights reserved.
          </p>
          <div className="footer-social">
            {socialLinks?.map((social) => (
              <a
                key={social?.name}
                href={social?.url}
                className="footer-social-link"
                aria-label={social?.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={social?.icon} size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;