const Machine = ({lang}) => {
    return ( 
        <>
        <div className="machine">
            <div className="machine-left">
                <img src="/atm_mobile.svg" alt="" className="machine-left-img" />
            </div>
            <div className="machine-right">
                <h3>{lang === 'en' ? 'Total $SOL Recovered' : '总回收的 $SOL'}</h3>
                <div className="machine-row">
                    <img src="/Solana_logo.svg" alt="" />
                    <h4>23,004 ($5.75M)</h4>
                </div>
                <div className="margin"></div>
                <h3>{lang === 'en' ? 'Total Account Claimed' : '已领取的账户总数'}</h3>
                <h4>11,218,370</h4>
                <div className="margin"></div>
                <h3>{lang === 'en' ? 'Total Rebates' : '总返利'}</h3>
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