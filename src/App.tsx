import { BrowserRouter } from 'react-router-dom';
import Layout from '@/layouts/default-layout';
import Router from '@/router';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
