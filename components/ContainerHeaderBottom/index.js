import React from "react";

const ContainerHeaderBottom = ({ children, name }) => {
  return (
    <div name={name} className="dzb-header__bottom is-visible">
      <div className={name}>
        {children}
      </div>
    </div>
  )
}
export default ContainerHeaderBottom;