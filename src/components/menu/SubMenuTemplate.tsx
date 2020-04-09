import React from 'react'
import { Menu } from 'antd'
import CustonButton from '../button/CustonButton';

const MenuTemplate = (
  <Menu>
    <Menu.Item>
      <CustonButton type="link">
        1st menu item
      </CustonButton>
    </Menu.Item>
    <Menu.Item>
      <CustonButton type="link">
        2nd menu item
      </CustonButton>
    </Menu.Item>
    <Menu.Item>
      <CustonButton type="link">
        3rd menu item
      </CustonButton>
    </Menu.Item>
  </Menu>
);

export default MenuTemplate