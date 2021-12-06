import logo from './assets/images/fleri-logo.svg';
import avartar from './assets/images/avatar.png'
import './stylesheet/index.sass';
import {navData, summaryData, tableData} from './utils/data'
// import Icon from './components/Icons';
import Button from './components/Button/indext';
import Navigation from './layouts/Navigation';
import Summary from './layouts/Summary';
import PageTable from './layouts/PageTable';

function App() {
  
  return (
    <div className="App app-body">
      <Navigation logo={logo} avartar={avartar} navData={navData} />
      <div className="main">
        <div className="main__content">
          <div className="flex-fs-sb mb-44 flx-w">
            <div className="mb-20-sm">
              <h1 className="mb-20 mb-16-xlg f-32 f-24-xlg fw-medium">Hello Austin 👋🏾</h1>
              <span>Welcome to your dashboard.</span>
            </div>
            <Button btnSize="big" label="Add new beneficiary" icon="add-icon" />
          </div>
          <Summary summaryData={summaryData} />
          <PageTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
