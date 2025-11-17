import axios from 'axios';
import { useEffect, useState } from 'react';

const Machine = ({lang}) => {

    const [solClaimed, setSolClaim] = useState(0);
    const [accountsRecovered, setAccountsRecovered] = useState(0);
    const [rebates, setRebates] = useState(0);
    const [solsPrice, setSolsPrice] = useState(0)

    useEffect(() => {
        async function getOverview(){
            let url = "https://backend.claimfeesol.com/get-overview.php";

            try {
                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "apllication/json"
                    },withCredentials: true
                })

                if (response.data.status === 'success'){
                    setSolClaim(response.data.sol_recovered);
                    setAccountsRecovered(response.data.acct_recovered);
                    setRebates(response.data.rebates);
                    setSolsPrice(response.data.sols_price);
                }
            } catch (error) {
                console.log("Error fetching overview: ", error);
            }
        }
        getOverview();
    },[])
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
                    <h4>{solClaimed}</h4>
                </div>
                <div className="margin"></div>
                <h3>{lang === 'en' ? 'Total Account Claimed' : '已领取的账户总数'}</h3>
                <h4>{accountsRecovered}</h4>
                <div className="margin"></div>
                <h3>{lang === 'en' ? 'Total Rebates' : '总返利'}</h3>
                <div className="machine-row">
                    <img src="/Solana_logo.svg" alt="" />
                    <h3>{rebates}</h3>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Machine;