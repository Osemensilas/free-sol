import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DashboardPage() {
  const [solsToClaim, setSolsToClaim] = useState(0);
  const [coinFlip, setCoinFlip] = useState('');
  
  // ✅ Keep only one totals state
  const [totals, setTotals] = useState({
    solsRecovered: 0,
    accountsRecovered: 0,
    rebates: 0,
  });

  useEffect(() => {
  
    async function getOverview(){
      try {
        let url = "https://backend.claimfeesol.com/get-language.php/get-overview.php";

        const response = await axios.get(url, {
          headers: {
            "Content-Type" : "application/json"
          },withCredentials: true
        });
        
        if (response.data.status === 'success'){
          setTotals({
            solsRecovered: response.data.sol_recovered,
            accountsRecovered: response.data.acct_recovered,
            rebates: response.data.rebates,
          });
        }
      } catch (error) {
        console.log("Error fetching overview: ", error);
      }
    }
    getOverview();
  },[])

  // 🔹 Increase / Decrease buttons
  const increaseSols = () => setSolsToClaim(prev => prev + 1);
  const decreaseSols = () => setSolsToClaim(prev => (prev > 0 ? prev - 1 : 0));

  // 🔹 Handle claim button
  const claimBtn = async () => {
    try {
      let url = "https://backend.claimfeesol.com/get-language.php/claim-sol.php";

      const response = await axios.post(url, {sols: solsToClaim}, {
        headers: {
          "Content-Type" : "application/json"
        },withCredentials: true
      })
      
      if (response.data.status === "error"){
        alert(response.data.message);
        return;
      }
      alert(response.data.message);
    } catch (error) {
      console.log("Error sending sols to claim: ", error);
    }
  };

  // 🔹 Handle totals input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTotals({...totals, [name]: value});
  };

  // 🔹 Handle coin flip form
  const handleCoinFlipSubmit = async (e) => {
    e.preventDefault();
    if (!coinFlip) return alert("Please select a result");
    
    try {
      const url = "https://backend.claimfeesol.com/get-language.php/flipped.php";

      const response = await axios.post(url, {"flip": coinFlip}, {
        headers: {
          "Content-Type" : "application/json"
        },withCredentials: true
      })
      if (response.data.status === "error"){
        alert(response.data.message);
        return;
      }
      alert(response.data.message);
    } catch (error) {
      console.log("Error updating overview: ", error);
    }
  };

  const overviewClicked = async () => {
    try {
      const url = "https://backend.claimfeesol.com/get-language.php/overview.php";

      const response = await axios.post(url, {totals}, {
        headers: {
          "Content-Type" : "application/json"
        },withCredentials: true
      })
      if (response.data.status === "error"){
        alert(response.data.message);
        return;
      }
      alert(response.data.message);
    } catch (error) {
      console.log("Error updating overview: ", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* 1️⃣ Form — Adjust SOLs to Claim */}
        <form onSubmit={(e) => e.preventDefault()} className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Adjust SOLs to Claim</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={decreaseSols}
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
              type="number"
              value={solsToClaim}
              onChange={(e) => setSolsToClaim(Number(e.target.value))}
              className="border border-gray-300 rounded-lg w-24 text-center py-2"
            />
            <button
              onClick={increaseSols}
              type="button"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
          <button
            type="submit"
            onClick={claimBtn}
            className="mt-4 py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>

        {/* 2️⃣ Form — Totals Overview */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Totals Overview</h2>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-3 gap-4 text-center">
            <div>
              <label className="text-gray-500 text-sm block mb-1">SOLs Recovered</label>
              <input
                type="number"
                name="solsRecovered"
                value={totals.solsRecovered}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-gray-500 text-sm block mb-1">Accounts Recovered</label>
              <input
                type="number"
                name="accountsRecovered"
                value={totals.accountsRecovered}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="text-gray-500 text-sm block mb-1">Rebates</label>
              <input
                type="number"
                name="rebates"
                value={totals.rebates}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button onClick={overviewClicked}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>

        {/* 3️⃣ Form — Coin Flip */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Coin Flip Result</h2>
          <form onSubmit={handleCoinFlipSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <select
              value={coinFlip}
              onChange={(e) => setCoinFlip(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
            >
              <option value="">-- Select Result --</option>
              <option value="Got Rugged">Got Rugged</option>
              <option value="Doubled">Doubled</option>
            </select>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
