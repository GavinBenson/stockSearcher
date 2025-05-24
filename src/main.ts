import './style.css'
import viteLogo from '/1.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="min-h-screen bg-base-200 text-base-content p-6 flex flex-col items-center space-y-6 text-center">
  

  <div class="card bg-base-100 shadow-lg p-4">
    <h2 class="card-title mb-4">Select a Stock Ticker</h2>
    <details class="dropdown">
      <summary class="btn btn-primary" id="dropdownSummary">Ticker</summary>
      <ul class="menu dropdown-content bg-base-100 rounded-box w-41 p-2 shadow z-10" id="tickerList">
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">ABBV</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">ADP</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">AFL</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">ALB</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">APD</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">CB</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">FRT</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">IBM</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">JNJ</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">KO</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">LOW</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">MDLZ</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">NEE</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">O</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">PG</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">QCOM</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">RGLD</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">SPGI</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">V</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">WTRG</a></li>
        <li class="w-full justify-center"><a class="block w-full text-center px-4 py-2 hover:bg-neutral/20 rounded-md">XOM</a></li>
      </ul>
    </details>
  </div>
  
  <div class="flex gap-4 flex-wrap">
    <button class="btn btn-accent" id="btnStockAnalysis">Stock Analysis</button>
    <button class="btn btn-secondary" id="btnDividendInfo">Dividend Info</button>
    <button class="btn btn-info" id="btnNews">News</button>
  </div>
</div>
`

// Add event listener to dropdown <ul> for ticker selection
const tickerList = document.getElementById('tickerList')!

const dropdownSummary = document.getElementById('dropdownSummary')!

let selectedTicker = ''

tickerList.addEventListener('click', (event) => {
    const target = event.target as HTMLElement

    if (target.tagName === 'A') {
        selectedTicker = target.textContent?.trim() ?? ''

        // Update dropdown summary text to show chosen ticker
        dropdownSummary.textContent = selectedTicker

        // Close the dropdown (by toggling <details>)
        const detailsElem = dropdownSummary.parentElement as HTMLDetailsElement
        if (detailsElem) detailsElem.open = false

        console.log('Selected ticker:', selectedTicker)
    }
})

// Example: add button handlers that open links using the selected ticker
document.getElementById('btnStockAnalysis')!.addEventListener('click', () => {
    if (!selectedTicker) return alert('Please select a ticker first.')
    const url = `https://stockanalysis.com/stocks/${selectedTicker.toLowerCase()}`
    window.open(url, '_blank')
})

document.getElementById('btnDividendInfo')!.addEventListener('click', () => {
    if (!selectedTicker) return alert('Please select a ticker first.')
    const url = `https://seekingalpha.com/symbol/${selectedTicker.toLowerCase()}/dividends/history`
    
    window.open(url, '_blank')
})

document.getElementById('btnNews')!.addEventListener('click', () => {
    if (!selectedTicker) return alert('Please select a ticker first.')
    const url = `https://finviz.com/quote.ashx?t=${selectedTicker.toUpperCase()}#news`
    window.open(url, '_blank')
})

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
