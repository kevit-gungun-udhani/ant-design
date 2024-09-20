import { Divider, Dropdown, Menu, Statistic } from "antd";
import { useState } from "react";

export const HeaderDropdown = ({ title, items = [] }) => {
  const [key, setKey] = useState("2");
  const index = items.find((item) => item.key === key);

  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={() => (
        <div className="dropdown">
          <div className="dropdown-title">{title}</div>
          <Menu
            items={items}
            onClick={({ key }) => {
              setKey(key);
            }}
            defaultSelectedKeys={["2"]}
          />
          {title === "Organization" && (
            <>
              <Divider />
              <a className="dropdown-link">Go to Organization</a>
            </>
          )}
        </div>
      )}
      arrow
    >
      <div>
        <Statistic
          title={title}
          value={`${index ? index.label : "Manish Workspace"}`}
          valueStyle={{ fontSize: "small", fontWeight: "bold" }}
        />
      </div>
    </Dropdown>
  );
};
