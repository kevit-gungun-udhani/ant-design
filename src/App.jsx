import { Layout, theme } from 'antd';
import { SiteHeader } from './components/Header/SiteHeader';

import './App.css';
import { SiteSider } from './components/Sider/SiteSider';
import { SiteContent } from './components/Content/SiteContent';

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiteHeader />
      <Layout>
        <SiteSider />
        <Layout>
          <SiteContent />
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
