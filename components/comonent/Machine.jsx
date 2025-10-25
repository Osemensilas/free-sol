const Machine = () => {
    return ( 
        <>
        <div className="machine">
            <div className="machine-left">
                <img src="/atm_mobile.svg" alt="" className="machine-left-img" />
            </div>
            <div className="machine-right">
                <h3>Total $SOL Recovered</h3>
                <div className="machine-row">
                    <img src="/Solana_logo.svg" alt="" />
                    <h4>23,004 ($5.75M)</h4>
                </div>
                <div className="margin"></div>
                <h3>Total Account Claimed</h3>
                <h4>11,218,370</h4>
                <div className="margin"></div>
                <h3>Total Rebates</h3>
                <div className="machine-row">
                    <img src="/Solana_logo.svg" alt="" />
                    <h4>1,035 ($258.75K)</h4>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Machine;