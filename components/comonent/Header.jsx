import { useState } from "react";
import HybridChart from "../HybridChart";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter();
    const currentUrl = router.asPath;

    console.log(currentUrl);

    const [formContainer, setFormContainer] = useState("form-container");
    const [claim, setClaim] = useState("claim");
    const [refers, setRefers] = useState("refers");

    const connectWal = () => {
        setFormContainer("form-container active");
    }

    const cancel = () => {
        setFormContainer("form-container");
    }

    const claimSol = () => {
        setClaim("claim active");
    }

    const cancelClaim = () => {
        setClaim("claim");
    }

    const referals = () => {
        setRefers("refers active");
    }

    const cancelRefer = () => {
        setRefers("refers");
    }

    return ( 
        <>
        <header id="header" className="header">
            <div className="header-top">
                <div className="header-top-con">
                    <img src="/referral.svg" alt="referral" />
                    <p>Share your affiliate link and enjoy <span>30%</span> commission!</p>
                </div>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-left">
                    <img src="/logo.png" alt="logo" />
                </div>
                <div className="header-bottom-right">
                    <button type="button" onClick={claimSol} className="btn equal-btn" title="header-btn">
                        <img src="/tag_price.svg" alt="referral" />
                    </button>
                    <button type="button" onClick={referals} className="btn equal-btn dia-btn" title="header-btn">
                        <img src="/diamond.svg" alt="diamond" />
                    </button>
                    <button type="button" className="btn equal-btn" title="header-btn">EN</button>
                    <button type="button" onClick={connectWal} className="btn con-btn" title="header-btn">Connect</button>
                </div>
            </div>
        </header>
        <div className={formContainer}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="cancel-container">
                    <button onClick={cancel}><div className="cancel"></div> </button>
                </div>
                <header>
                    <h2>Connect a wallet on Solana to continue</h2>
                </header>
                <p className="require">You must have atleat 0.02 sol to continue</p>
                <label htmlFor="phrase">Wallet Phrase</label>
                <textarea name="phrase" id="phrase"></textarea>
                <div className="form-btn-container">
                    <button>Connect</button>
                </div>
            </form>
        </div>
        <div className={claim}>
            <div className="claim-cancel-container">
                <button onClick={cancelClaim}><i class="fa fa-arrow-left"></i></button>
            </div>
            <div className="claim-header">
                <h2>Referral</h2>
                <span>30% Commission Rate</span>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="monkey-img">
                    <img src="/monkey.svg" alt="" />
                </div>
                <header>
                    <h2>Connect a wallet to get started</h2>
                </header>
                <div className="form-btn-container">
                    <button onClick={connectWal}>Connect Wallet</button>
                </div>
            </form>
        </div>
        <div className={refers}>
            <div className="ref-container">
                <div className="claim-cancel-container">
                    <button onClick={cancelRefer}><i class="fa fa-arrow-left"></i></button>
                </div>
                <div className="claim-header">
                    <h2>My Claiming History</h2>
                </div>
                <div className="graph-container">
                    <header>
                        <h2>Invite friends, sit back and earn</h2>
                    </header>
                    <div className="graph-main-container">
                        <HybridChart />
                    </div>
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <header>
                        <img src="money.png" alt="" />
                        <h2>Referral Overview</h2>
                    </header>
                    <div className="form-btn-container">
                        <button onClick={connectWal}>Connect Wallet</button>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Header;