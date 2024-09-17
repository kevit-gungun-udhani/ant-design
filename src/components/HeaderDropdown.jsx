import { Dropdown, Space, Statistic } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items = [
  {
    label: "1st menu item",
    key: "0",
  },
  {
    label: "item",
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export const HeaderDropdown = () => {
  return (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <Statistic title="organiation" value={'Workspace'} valueStyle={{fontSize: 'small', fontWeight: 'bold'}}/>
    </Dropdown>
  );
};
