import React from "react";

const SidebarRow = ({ selected, Icon, title }) => {

  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
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
