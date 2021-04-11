import React from "react";
import Link from "next/link";
import data from "data";

const propTypes = {};

const InformationDrawer = (props) => {
  //! Render
  return (
    <div className="info">
      <h2 className="info__name">{data.fullName}</h2>
      <div className="info__avatar">
        <img
          alt="avatar"
          src={data.avatar}
        />
      </div>
      <p className="info__desc" dangerouslySetInnerHTML={{ __html: data.description }}></p>
      <div className="info__social">
        {data.listSocial.map((item) => {
          return (
            <Link href={item.path} key={item.path} passHref>
              <a target="_blank">{item.icon}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

InformationDrawer.propTypes = propTypes;
export default InformationDrawer;
