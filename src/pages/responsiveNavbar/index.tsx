import { useState } from 'react';
import { Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { StyledMenu } from './styling';



const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    return (
      <nav>
        <StyledMenu mode="horizontal" defaultSelectedKeys={['home']} >
            {!collapsed && (
            <>
              <Menu.Item key="home">Home</Menu.Item>
              <Menu.Item key="about">About</Menu.Item>
              <Menu.Item key="services">Services</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
            </>
          )}
          <Menu.Item className={`lg:hidden ${collapsed ? '' : 'hidden'}`} key="menu" onClick={toggleCollapsed}>
            <MenuOutlined />
          </Menu.Item>
        </StyledMenu>
        {/* Render the hamburger menu when collapsed */}
        {!collapsed && (
          <div>
            {/* Render your collapsed menu items here */}
          </div>
        )}
      </nav>
    );
  };
export default Navbar;
