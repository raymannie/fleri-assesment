import logo from './assets/images/fleri-logo.svg';
import avartar from './assets/images/avatar.png'
import './stylesheet/index.sass';
import {navData, summaryData, tableData} from './utils/data'
import Icon from './components/Icons';
import Button from './components/Button/indext';
import Navigation from './layouts/Navigation';

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

          <div className="row gutter-20 pb-40 flx-row-r">
            <div className="col-4 col-12-lg">
              <div className="balance-card flx-w">
                <div className="mb-20-sm">
                  <div className="flex-a-c d-blk-sm tx-c-sm">
                    <h3 className="balance-card__amount">$400</h3>
                    <Icon className="icon-24 icon-20-xlg" id="eye-icon" />
                  </div>
                  <span className="balance-card__title f-12-xlg">Wallat balance</span>
                </div>
                <Button label="Fund wallet" btnType="white" />
              </div>
            </div>
            <div className="summary col-8 col-12-lg">
                {summaryData.map((data) =>
                <div className="summary__card">
                  <div>
                    <Icon className="icon-40 icon-36-xlg" id={data.icon} />
                    <h3 className="summary__card--title f-18 f-14-xlg mb-8 mb-4-xlg">{data.title}</h3>
                    <span className="co-primary-light f-12-xlg">{data.summary}</span>
                  </div>
                  <div className="summary__card--number">
                    <h4 className="">{data.tagNumber}</h4>
                    <span className="co-primary-light caps f-14 f-12-xlg">{data.tag}</span>
                  </div>
                </div>
                )}
            </div>
            
          </div>
          <div className="row gutter-20">
            
            <div className="col-8 col-12-lg">
              <div className="mb-40 plan-table">
                <h3 className="fw-medium f-16-xlg">Active plans</h3>
                <div className="table-card">
                  <div className="table-card__head">
                      <div>Name</div>
                      <div>Plan</div>
                      <div>Tier</div>
                      <div>Price</div>
                      <div>Usage</div>
                      <div>Expires</div>
                  </div>
                  <div className="table-card__content">
                    {tableData.slice(0, 3).map((data) =>
                    <div className="table-card__row">
                      <div className="co-secondary fw-normal">{data.name}</div>
                      <div className="">{data.plan}</div>
                      <div className="">{data.tier}</div>
                      <div className="">{data.price}</div>
                      <div className="">
                        <div className="d-iflx al-i-c">
                          <div className="usage-bar">
                            <span style={{width: data.usage}}></span>
                          </div>
                          {data.usage}
                        </div>
                      </div>
                      <div className="">{data.expires}</div>
                    </div>)}
                  </div>
                </div>
              </div>
              <h3 className="fw-medium f-16-xlg">Applications in progress</h3>
              <div className="table-card application-table">
                  <div className="table-card__head">
                      <div>Name</div>
                      <div>Plan</div>
                      <div>Tier</div>
                      <div>Price</div>
                      <div>Stage</div>
                  </div>
                  <div className="table-card__content">
                    {tableData.slice(0, 3).map((data) =>
                    <div className="table-card__row">
                      <div className="co-secondary fw-normal">{data.name}</div>
                      <div className="">{data.plan}</div>
                      <div className="">{data.tier}</div>
                      <div className="">{data.price}</div>
                      
                      <div className="">Pollicy underwriting (3 of 5)</div>
                    </div>)}
                  </div>
                </div>
            </div>
            <div className="col-4 col-12-lg benficiaries">
              <div className="sticky-guy">
                <h3 className="fw-medium f-16-xlg">Beneficiary reports</h3>
                <div className="table-card">
                  <div className="table-card__head">
                      <div>Name</div>
                      <div>Report</div>
                  </div>
                  <div className="table-card__content">
                    {tableData.map((data) =>
                    <div className="table-card__row">
                      <div className="fw-normal">{data.name}</div>
                      <div className="co-secondary">
                        <p className="mb-4 fw-normal">{data.plan} Plan</p>
                        <span className="f-14 f-12-xlg">{data.date}</span>
                      </div>
                    </div>)}
                  </div>
                  <div className="table-card__foot">
                      <Button label="View all reports" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
