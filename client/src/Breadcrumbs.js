import React from 'react';
import "./Breadcrumbs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight }  from '@fortawesome/free-solid-svg-icons';


const BreadcrumbLink = ({ href, icon, content, isActive }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(!isActive); // never want the active breadcrumb to highlight
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="breadcrumbs">
      {!isActive ?
        <div className="breadcrumbs">
            <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={ href } className={`breadcrumb ${isHovered ? 'hover' : ''}`} >
              <FontAwesomeIcon className={`breadcrumb ${isHovered ? 'hover' : ''}`} icon={icon} />
              <span>{content}</span>
            </a>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        : <div className="breadcrumb">
          <FontAwesomeIcon  icon={icon} />
          <span>{content}</span> 
        </div>
      }
    </div>
  );
};

const Breadcrumbs = ({ crumbs }) => (
  <nav className="breadcrumbs">
      {crumbs.map((crumb, index) => (
        <BreadcrumbLink
          key={index}
          href={crumb.href}
          icon={crumb.icon}
          content={crumb.content}
          isActive={index === crumbs.length - 1}
        />  
      ))}
  </nav>
);

export default Breadcrumbs;
