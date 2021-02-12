import React from "react";

const SidebarRow = ({ Icon, title }) => {

  return (
    <div className="sidebarRow">
      <div className="sidebarRow__icon">
        <Icon />
      </div>
      <h2 className="sidebarRow__title">
        {title}
      </h2>
    </div>
  )
}

export default SidebarRow
