import Button from "../components/Button/indext";
import { TableHead, TableContent, Table, TableRow, TableFoot } from "../components/Table";

const PageTable = ({tableData}) => {
    return ( 
        <>
        <div className="row gutter-20">
            <div className="col-8 col-12-lg">
              <div className="mb-40 plan-table">
                <h3 className="fw-medium f-16-xlg">Active plans</h3>
                <Table>
                  <TableHead>
                      {['Name', 'Plan', 'Tier', 'Price', 'Usage', 'Expires'].map((data) =>
                        <div>{data}</div>
                      )}
                  </TableHead>
                  <TableContent>
                    {tableData.slice(0, 3).map((data) =>
                    <TableRow className="table-card__row">
                      <div className="co-secondary fw-normal "><span className="abbr">AO</span>{data.name}</div>
                      <div className="">{data.plan}</div>
                      <div className="">{data.tier}</div>
                      <div className="">{data.price}</div>
                      <div className="">
                        <div className="d-iflx al-i-c f-12">
                          <div className="usage-bar">
                            <span style={{width: data.usage}}></span>
                          </div>
                          {data.usage}
                        </div>
                      </div>
                      <div className="">{data.expires}</div>
                    </TableRow>)}
                  </TableContent>
                </Table>
              </div>
              <h3 className="fw-medium f-16-xlg">Applications in progress</h3>
              <Table className="application-table">
                  <TableHead>
                      {['Name', 'Plan', 'Tier', 'Price', 'Stage'].map((data) =>
                        <div>{data}</div>
                      )}
                  </TableHead>
                  <TableContent>
                    {tableData.slice(0, 3).map((data) =>
                    <TableRow className="table-card__row">
                      <div className="co-secondary fw-normal">{data.name}</div>
                      <div className="">{data.plan}</div>
                      <div className="">{data.tier}</div>
                      <div className="">{data.price}</div>
                      <div className="">Pollicy underwriting (3 of 5)</div>
                    </TableRow>)}
                  </TableContent>
                </Table>
            </div>
            <div className="col-4 col-12-lg benficiaries">
              <div className="sticky-guy">
                <h3 className="fw-medium f-16-xlg">Beneficiary reports</h3>
                <Table>
                  <TableHead>
                    {['Name', 'Report'].map((data) =>
                        <div>{data}</div>
                      )}
                  </TableHead>
                  <TableContent>
                    {tableData.map((data) =>
                    <TableRow className="table-card__row">
                      <div className="fw-normal">{data.name}</div>
                      <div className="co-secondary">
                        <p className="mb-4 fw-normal">{data.plan} Plan</p>
                        <span className="f-14 f-12-xlg">{data.date}</span>
                      </div>
                    </TableRow>)}
                  </TableContent>
                  <TableFoot className="table-card__foot">
                      <Button label="View all reports" />
                  </TableFoot>
                </Table>
              </div>
            </div>
          </div>
        </>
     );
}
 
export default PageTable;