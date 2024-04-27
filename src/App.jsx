import { useState } from "react";
import InputBox from "./Components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import './App.css'
function App() {

  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (<>
    <div className=" flex flex-row">
      <div className="w-2/3 h-screen flex flex-wrap justify-center items-center  bg-no-repeat bg-[#e2c9d9]">
        <div className="w-full max-w-md mx-auto border border-[#342d50] rounded-3xl p-5 backdrop-blur-sm bg-white/30">
          <div className=" w-full max-w-md mx-auto bg-[#895575] rounded-3xl p-10  px-13 backdrop-blur-sm bg-[white/30] ">
            <h1 className=" font-normal text-4xl text-center text-white">The global economic system must avoid being dominated by a single currency.</h1>
          </div>
        </div>
      </div>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full">
          <div className="max-w-60  mx-auto border border-gray-60 rounded-lg p-2 backdrop-blur-sm bg-[#49274a]">
            <h1 className="text-2xl text-center text-white">Currency Converter</h1>
          </div>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#49274a] text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable

                />
              </div>
              <button type="submit" className="w-full bg-[#49274a] text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App
