import React, { FunctionComponent } from 'react'
import UserSidebar from './UserSidebar'
import { Icon, Row, Col, Layout } from 'antd'
import { ReactComponent as IconFolder } from '../../assets/images/icon-folder.svg'
import { ReactComponent as IconArrowLeft } from '../../assets/images/icon-arrow-left.svg'
import { ReactComponent as IconDocument } from '../../assets/images/icon-document.svg'
import { ReactComponent as IconHandStop } from '../../assets/images/icon-hand-stop.svg'
import { ReactComponent as IconFolderDouble } from '../../assets/images/icon-folder-double.svg'
import CustonContent from '../content/CustonContent'
import CustonHeader from '../header/CustonHeader'
import CustonButton from '../button/CustonButton'
import CustonTitle from '../text/CustonTitle'
import ContentHeader from '../header/ContentHeader'
import ExtraHeader from '../header/ExtraHeader'
import DisplayCard from '../card/DisplayCard'
import DisplayText from '../text/DisplayText'
import CustonTag from '../tag/CustonTag'
import SidebarUserDetails from '../sidebar/SidebarUserDetails'
import Toolbar from '../shared/Toolbar'
import IconCheckSuccess from '../icon/IconCheckSuccess'
import IconDanger from '../icon/IconXDanger'
import IconOnly from '../icon/IconOnly'
import { Link } from 'react-router-dom'

const TransactionDetailPage: React.SFC = (props) => {

  return (
    <CustonContent direction="row" fullSize={true}>
      <SidebarUserDetails />
      <Layout>
        <Toolbar name="User name" />
        <CustonContent>
          <CustonHeader>
            <ContentHeader>
              <CustonButton size="small" type="link" onClick={(e: any) => window.history.back()}>
                <Icon component={IconArrowLeft as FunctionComponent} />
                Voltar para transação do usuário
              </CustonButton>
              <CustonTitle level={2}>
                749478502-482974930-927342934230-23422
              </CustonTitle>
            </ContentHeader>
            <ExtraHeader>
              <CustonButton type="primary" size="small"><Icon component={IconFolder as FunctionComponent} />Exportar</CustonButton>
              <Link to="/comparar">
                <CustonButton type="primary" size="small"><Icon component={IconDocument as FunctionComponent} />Comparar</CustonButton>
              </Link>
              <CustonButton type="danger" size="small"><Icon component={IconHandStop as FunctionComponent} />Sinalizar como Fraude</CustonButton>
            </ExtraHeader>
          </CustonHeader>
          <Layout>
            <Row gutter={16}>
              <Col xs={8} md={6}>
                <UserSidebar />
              </Col>
              <Col xs={16} md={18}>
                <DisplayCard title="Usuário">
                  <Row gutter={16}>
                    <DisplayText
                      span={8}
                      label="user"
                      text="Gustavo@tempest.com.br" />
                    <DisplayText
                      span={4}
                      label="Autorizado"
                      text={<IconCheckSuccess > Sim</IconCheckSuccess>} />
                    <DisplayText
                      span={4}
                      label="Novo device"
                      text={<IconDanger > Não</IconDanger>} />
                    <DisplayText
                      span={4}
                      label="Similaridade"
                      text="100%" />
                    <DisplayText
                      span={4}
                      label="Classificação"
                      text="Nenhuma" />
                  </Row>
                </DisplayCard>
                <DisplayCard title="Detalhes do usuário">
                  <Row gutter={16}>
                    <DisplayText
                      span={6}
                      label="Logins com sucesso"
                      text="97.84%" />
                    <DisplayText
                      span={6}
                      label="Tempo de conta"
                      text="482 dias" />
                    <DisplayText
                      span={12}
                      label="Conta vinculada"
                      text={
                        <div>
                          Gustavo@tempest.com.br
                        <IconOnly
                            color="#50b7d8"
                            component={IconFolderDouble as FunctionComponent} />
                        </div>
                      } />
                  </Row>
                  <Row gutter={16}>
                    <DisplayText
                      span={12}
                      label="Regras que o usuário caiu"
                      text={
                        <div>
                          <CustonTag type="stroked">Não está no histórico</CustonTag>
                          <CustonTag type="stroked">Dispositivo sem root</CustonTag>
                          <CustonTag type="stroked">SO sim</CustonTag>
                        </div>
                      } />
                  </Row>
                </DisplayCard>
                <DisplayCard title="Detalhes do aparelho">
                  <Row gutter={16}>
                    <DisplayText
                      span={12}
                      label="ID transação"
                      text="749478502-482974930-927342934230-2342" />
                    <DisplayText
                      span={12}
                      label="Fingerprint"
                      text="749478502-482974930-927342934230-2342" />
                  </Row>
                  <Row gutter={16}>
                    <DisplayText
                      span={12}
                      label="Identificador"
                      text="749478502-482974930-927342934230-2342" />
                    <DisplayText
                      span={12}
                      label="Tempo do device"
                      text="211 dias" />
                  </Row>
                </DisplayCard>
                <DisplayCard title="Browser">
                  <Row gutter={16}>
                    <DisplayText
                      span={6}
                      label="Browser"
                      text="Chrome" />
                    <DisplayText
                      span={8}
                      label="Versão"
                      text="74" />
                    <DisplayText
                      span={6}
                      label="Canvas fingerprint:"
                      text="749478502482974930927342934230" />
                  </Row>
                  <Row gutter={16}>
                    <DisplayText
                      span={6}
                      label="Lingua"
                      text="EN-US" />
                    <DisplayText
                      span={8}
                      label="WebGL fingerprint"
                      text="749478502482974930927342934230" />
                    <DisplayText
                      span={6}
                      label="Audio fingerprrint"
                      text="749478502482974930927342934230" />
                  </Row>
                  <Row gutter={16}>
                    <DisplayText
                      span={24}
                      label="Cookie"
                      text="749478502482974930927342934230" />
                  </Row>
                </DisplayCard>
                <DisplayCard title="Sistema operacional">
                  <Row gutter={16}>
                    <DisplayText
                      span={8}
                      label="Audio Stack info"
                      text="44100_2_1_0_2explicit_speakers" />
                    <DisplayText
                      span={8}
                      label="Placa de video"
                      text="AMD Readeon 560" />
                    <DisplayText
                      span={8}
                      label="Plataforma:"
                      text="MacIntel" />
                  </Row>
                </DisplayCard>
                <DisplayCard title="Sistema operacional">
                  <Row gutter={16}>
                    <DisplayText
                      span={8}
                      label="Núcleos CPU"
                      text="8" />
                    <DisplayText
                      span={16}
                      label="Memória"
                      text="8GB" />
                  </Row>
                </DisplayCard>
                <DisplayCard title="Network">
                  <Row gutter={16}>
                    <DisplayText
                      span={6}
                      label="Endereço de IP"
                      text="189.19.189.184" />
                    <DisplayText
                      span={18}
                      label="IP interno"
                      text="189.19.189.184" />
                  </Row>
                </DisplayCard>
                <DisplayCard 
                  extra={
                    <CustonButton
                      size="small"
                      type="warning">
                      Google Maps
                    </CustonButton>}
                  title="Geolocalização" >
                  <Row gutter={16}>
                    <DisplayText
                      span={6}
                      label="Source"
                      text="IP Adress" />
                    <DisplayText
                      span={6}
                      label="Latitude"
                      text="-46.5624" />
                    <DisplayText
                      span={6}
                      label="Latitude"
                      text="-23.6243" />
                    <DisplayText
                      span={6}
                      label="Local"
                      text="São Paulo, Brasil" />
                  </Row>
                </DisplayCard>
              </Col>
            </Row>
          </Layout>
        </CustonContent>
      </Layout>
    </CustonContent>
  );
}

// ExampleComponent.propTypes = {
//   show: React.PropTypes.bool.isRequired
// };

export default TransactionDetailPage; 