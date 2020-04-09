import React, { Component, FunctionComponent } from 'react'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'
import { Icon, Typography, Dropdown, Badge } from 'antd';
import { ReactComponent as IconDown } from '../../../assets/images/icon-arrow-down.svg'
import { ReactComponent as IconQuestionMark } from '../../../assets/images/icon-question-mark.svg'
import { ReactComponent as IconSetting } from '../../../assets/images/icon-setting.svg'
import { ReactComponent as IconBell } from '../../../assets/images/icon-bell.svg'
import { ReactComponent as IconUserDouble } from '../../../assets/images/icon-user-double.svg'
import { ReactComponent as IconDashboard } from '../../../assets/images/icon-dashboard.svg'
import brand from '../../../assets/images/marca.svg'
import CustonButton from '../../button/CustonButton'
import CustonMenuItem from '../../menu/CustonMenuItem';
import CustonMenu from '../../menu/CustonMenu';
import CustonSidebar from '../CustonSidebar';
import MenuTemplate from '../../menu/SubMenuTemplate';

const { Text } = Typography;

class SidebarMenu extends Component<RouteComponentProps> {

  state = {
    collapsed: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize() {
    if (window.innerWidth > 992) {
      this.setState({
        collapsed: false,
      });
    }
  }

  renderDropDown() {
    return (
      <div className="sidebar-dropdown">
        <Text>Contas:</Text>
        <Dropdown overlay={MenuTemplate} placement="bottomRight">
          <CustonButton type="flat">
            Todas integrações
            <Icon component={IconDown as FunctionComponent} />
          </CustonButton>
        </Dropdown>
      </div>
    )
  }
  renderMenuFooter(path:string) {
    return (
      <CustonMenu selectedKeys={[path]}>
        <CustonMenuItem key="/help">
          <Icon component={IconQuestionMark as FunctionComponent}/>
          <span>Precisa de ajuda?</span>
        </CustonMenuItem>
        <CustonMenuItem key="/settings">
          <Icon component={IconSetting as FunctionComponent} />
          <span>Configurações</span>
        </CustonMenuItem>
      </CustonMenu>
    )
  }

setCurrentPath(path:string) {
    if(path === '/regras' || path === '/detalhes-regras'){
      return '/rules'
    } else if(
        path === '/usuario' || 
        path === '/detalhe-usuario' || 
        path === '/detalhe-transacao' || 
        path === 'comparar' || 
        path === '/detalhe-endereco'
      ){
      return '/usuario'
    }

    return '/dashboard'
  }

  renderMenuMain(path: string) {
    return (
      <CustonMenu selectedKeys={[path]}>
        <CustonMenuItem key="/dashboard" type="highlight">
          <Link to='/' onClick={(e) => this.toggle()}>
            <Icon component={IconDashboard as FunctionComponent} />
            <span>Dashboard</span>
          </Link>
        </CustonMenuItem>
        <CustonMenuItem key="/usuario" type="highlight">
          <Link to='/usuario' onClick={(e) => this.toggle()}>
            <Icon component={IconUserDouble as FunctionComponent} />
            <span>Usuários</span>
          </Link>
        </CustonMenuItem>
        <CustonMenuItem key="/rules" type="highlight">
          <Link to='/regras' onClick={(e) => this.toggle()}>
          <Badge dot={true}>

            <Icon component={IconBell as FunctionComponent} />
          </Badge>
            <span>Regras</span>
          </Link>
        </CustonMenuItem>
      </CustonMenu>
    )
  }

  renderBrand() {
    return (
      <div className="sidebar-brand">
        <Link to='/' onClick={(e: any) => this.toggle()}>
          <img src={brand} alt="" />
        </Link>
      </div>
    )
  }

  toggle = () => {
    if (window.innerWidth > 992) return
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const currentPath = this.setCurrentPath(this.props.location.pathname)
    return (
      <CustonSidebar
        collapsedWidth="0"
        breakpoint="lg"
        onCollapse={() => this.toggle()}
        collapsed={this.state.collapsed}>
        <div>
          {this.renderBrand()}
          {this.renderDropDown()}
          {this.renderMenuMain(currentPath)}
        </div>
        {this.renderMenuFooter(currentPath)}
      </CustonSidebar>
    )
  }
}

export default withRouter(SidebarMenu);