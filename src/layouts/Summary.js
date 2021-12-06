import Button from "../components/Button/indext";
import Icon from "../components/Icons";

const Summary = ({summaryData}) => {
    return ( 
        <>
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
        </>
     );
}
 
export default Summary;