import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import data from "data";
import Link from "next/link";

const propTypes = {};

const NavSection = (props) => {
  //! State
  const router = useRouter();

  //! Function

  //! Render
  return (
    <div className="nav-profile">
      {data.listNavProfile.map((el) => (
        <Link key={el.href} href={el.href} passHref>
          <a className={`nav-profile-item ${router.pathname === el.href ? "selected" : ""}`}>
            <div className="nav-profile__icon">{el.icon}</div>
            <div className="nav-profile__name">{el.name}</div>
          </a>
        </Link>
      ))}
    </div>
  );
};

NavSection.propTypes = propTypes;
export default NavSection;
