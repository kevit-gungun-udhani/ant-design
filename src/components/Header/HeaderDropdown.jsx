import { Avatar, Divider, Dropdown, Menu, Statistic } from 'antd';
import { useState } from 'react';



export const HeaderDropdown = ({ title, items = [] }) => {
  const [key, setKey] = useState('');
  const index = items.findIndex((item) => item.key === key);
  const label = index >= 0 ? items[index].label : '';

  return (
    <>
      <Dropdown
        trigger={['click']}
        dropdownRender={() => (
          <div className="dropdown">
            <div className="dropdown-title">{title}</div>
            <Menu
              items={items}
              onClick={({ key }) => {
                setKey(key);
              }}
            />
            {title === 'Organization' && (
              <>
                <Divider />
                <a className="dropdown-link">Go to Organization</a>
              </>
            )}
          </div>
        )}
      >
        <div>
          <Statistic
            title={title}
            value={`${label}`}
            valueStyle={{ fontSize: 'small', fontWeight: 'bold' }}
          />
        </div>
      </Dropdown>
    </>
  );
};
