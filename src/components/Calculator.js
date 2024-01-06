import React, { useState } from 'react';
import CashImg from '../images/Cash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import LineChart from './LineChart';

function InvestmentCalculator() {

    const [userData, setUserData] = useState({
        labels: [],
        datasets: [
          {
            label: 'Total Investment',
            tension: 0.1,
            data: [],
            backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
            borderColor: 'black',
            borderWidth: 3,
          },
        ],
      });

    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const [investmentType, setInvestmentType] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [investmentPeriod, setInvestmentPeriod] = useState('');
    const [initialInvestment, setInitialInvestment] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [resultSentence, setResultSentence] = useState('');
    const [timesAddedPerYear, setTimesAddedPerYear] = useState('');
    const [investmentData, setInvestmentData] = useState([]);
    const [showLineChart, setShowLineChart] = useState(false);

    const handleInvestmentTypeChange = (type) => {
        setInvestmentType(type);
        if (type === 'S&P 500') {
            setAnnualReturn('10.11');
        }
        else if (type === 'Roth IRA') {
            setAnnualReturn('8.5');
        } 
        else if (type === 'Crypto') {
            setAnnualReturn('30.0');
        }
        else if (type === 'Stocks') {
            setAnnualReturn('10');
        }
        else if (type === 'Commodity') {
            setAnnualReturn('15.13');
        }
        else if (type === 'Index Fund') {
            setAnnualReturn('6.7');
        }
        else if (type === 'Bonds') {
            setAnnualReturn('5.5');
        }
        else if (type === 'Custom') {
            setAnnualReturn('0');
        }
        else {
            setAnnualReturn('1');
        }

    };

    const handleContinuedContributionChange = (type) => {

        if (type === 'Monthly') {
            setTimesAddedPerYear('12');
        }
        else if (type === 'Bi-Monthly') {
            setTimesAddedPerYear('6');
        } 
        else if (type === 'Quarterly') {
            setTimesAddedPerYear('4');
        }
        else if (type === 'Tri-Annually') {
            setTimesAddedPerYear('3');
        }
        else if (type === 'Bi-Annually') {
            setTimesAddedPerYear('2');
        }
        else if (type === 'Annually') {
            setTimesAddedPerYear('1');
        }
        else {
            setTimesAddedPerYear('0');
        }
    };

    const handleCalculate = () => {

        let newUserData;

        if (!showAdvancedSearch) {
            setAnnualReturn('5')
            newUserData = alwaysDisplay();
            
        } else {
            newUserData = alwaysDisplay();
        }

        const resultSection = document.getElementById('result-section');
        if (resultSection) {
            resultSection.scrollIntoView({ behavior: 'smooth'});
        }

        setUserData({
            labels: newUserData.map((data) => data.year),
            datasets: [
                {
                    label: 'Total Investment',
                    tension: 0.1,
                    data: newUserData.map((data) => data.profit),
                    backgroundColor: 'black',
                    borderColor: 'black',
                    borderWidth: 3,
              },
            ],
        });

        setShowLineChart(true);

        

    };

    

    
    

    return (
        <div>
            <div id="main-calculator" class="max-w-2xl justify-center items-center m-auto mt-28 bg-white border border-gray-200 rounded-3xl dark:bg-gray-800 shadow-2xl">
                <a href="#">
                    <img class="rounded-t-3xl text-sm h-10 w-full bg-contain bg-center object-cover" src={CashImg} alt="" />
                </a>
                <div class="p-5 mt-2">
                    <a href="#">
                        <h5 class="align-center text-center mb-2 text-2xl font-bold tracking-tight text-white">Investment Calculator</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">An exceedingly versatile calculator, equipped with a meticulous algorithm, and tailored to accomadate customers. The outcome: an unparalleled fusion of flexibility and steadfast precision.</p>
                </div>


                {showAdvancedSearch ? (
                    <>
                    <div class="w-[95%] justify-center items-center m-auto">
                
                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Initial Investment</label>
                        <input onChange={(e) => setInitialInvestment(e.target.value)} type="text" id="initial_investment" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$1000"/>
                        
                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Investment period (years)</label>
                        <input onChange={(e) => setInvestmentPeriod(e.target.value)} type="text" id="investment-period" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 2"/>

                        <label class="mt-4 block mb-3 text-sm font-medium text-gray-900 dark:text-white"> Deposit Frequency</label>
                        <button onClick={() => handleContinuedContributionChange('Monthly')} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">Monthly</button>
                        <button onClick={() => handleContinuedContributionChange('Bi-Monthly')} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">Bi-Monthly</button>
                        <button onClick={() => handleContinuedContributionChange('Quarterly')} class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">Quarterly</button>
                        <button onClick={() => handleContinuedContributionChange('Tri-Annually')} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">Tri-Annually</button>
                        <button onClick={() => handleContinuedContributionChange('Bi-Annually')} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">Bi-Annually</button>
                        <button onClick={() => handleContinuedContributionChange('Annually')} class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-full text-sm px-4 py-1.5 text-center me-2 mb-2">Annually</button>
                        
                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Continued Contribution</label>
                        <input onChange={(e) => setInitialInvestment(e.target.value)} type="text" id="monthly-contribution" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$100"/>

                        <label class="mt-4 block mb-3 text-sm font-medium text-gray-900 dark:text-white"> Type of Investment</label>
                        <button onClick={() => handleInvestmentTypeChange('S&P 500')} class="bg-blue-100 text-blue-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:ring-2 ring-blue-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">S&P 500</button>
                        <button onClick={() => handleInvestmentTypeChange('Roth IRA')} class="bg-purple-100 text-purple-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-purple-900 dark:text-purple-300 hover:ring-2 ring-purple-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Roth IRA</button>
                        <button onClick={() => handleInvestmentTypeChange('Crypto')} class="bg-red-100 text-red-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-red-900 dark:text-red-300 hover:ring-2 ring-red-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Crypto</button>
                        <button onClick={() => handleInvestmentTypeChange('Stocks')} class="bg-green-100 text-green-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300 hover:ring-2 ring-green-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Stock</button>
                        <button onClick={() => handleInvestmentTypeChange('Commodity')} class="bg-yellow-100 text-yellow-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 hover:ring-2 ring-yellow-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Commodity</button>
                        <button onClick={() => handleInvestmentTypeChange('Index Fund')} class="bg-indigo-100 text-indigo-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 hover:ring-2 ring-indigo-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Index Fund</button>
                        <button onClick={() => handleInvestmentTypeChange('Bonds')} class="bg-pink-100 text-pink-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-pink-900 dark:text-pink-300 hover:ring-2 ring-pink-800  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Bonds</button>
                        <button onClick={() => handleInvestmentTypeChange('Custom')} class="bg-pink-100 text-pink-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-orange-800 dark:text-pink-300 hover:ring-2 ring-pink-800 my-4  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">Custom</button>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Annual return</label>
                        <input onChange={(e) => setAnnualReturn(e.target.value)} type="text" id="annual-return" value={annualReturn} aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 5%"/>

                    </div>
                    </>
                ) : (
                    <div class="w-[95%] justify-center items-center m-auto">

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Initial Investment</label>
                        <input type="text" id="initial_investment" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$1000"/>
                    
                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Investment period (years)</label>
                        <input type="text" id="investment-period" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 2"/>

                    </div>  
                    
                )}
                

                <div className='flex flex-col'>

                <button onClick={() => setShowAdvancedSearch(!showAdvancedSearch)} class="ml-4 transition duration-150 ease-in-out mt-5 w-48 items-center px-2 py-1 text-xs font-medium text-center text-black bg-white rounded-lg  hover:ring-gray-500 hover:bg-gray-300">
                    <FontAwesomeIcon className="mr-1" icon={faGear} />
                    Advanced Search
                </button>

                <button onClick={handleCalculate} class="py-5 px-2 font-bold text-2xl flex flex-row ml-4 mr-4 mb-4 justify-center align-center transition duration-150 ease-in-out mt-5 w-[95%] items-center text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700  focus:ring-2 focus:ring-offset-[3px] focus:ring-gray-900">
                    Calculate
                    <FontAwesomeIcon class="h-7 ml-2 text-center items-center " icon={faCircleArrowRight} /> 
                </button>

                </div>

                

            </div>

            <div id="result-section" class="text-center mt-20 mb-20 text-3xl max-w-7xl m-auto">
                {resultSentence}
            </div>

            {showLineChart && (
                <div className="m-auto mb-10" style={{ width: 1000 }}>
                    <LineChart chartData={userData} />
                </div>
            )}
            
        </div>

                /*

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Contribution</label>
                        <input type="text" id="monthly-contribution" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$100"/>

                */

    )

    function alwaysDisplay(){
        let newUserData;
        const initialInvestment = parseFloat(document.getElementById('initial_investment').value);
        let monthlyContribution;
        let isAdvanced = false;
        let result;
        if (document.getElementById('monthly-contribution') === null){
            monthlyContribution = 0;
        }
        else{
            isAdvanced = true;
            monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
        }
        const investmentPeriod = parseInt(document.getElementById('investment-period').value, 10);

        const totalInvestment = (initialInvestment * (Math.pow(1 + annualReturn / 100, investmentPeriod))) +
        (timesAddedPerYear*monthlyContribution *(Math.pow(1 + (annualReturn / 100), investmentPeriod) - 1) / (annualReturn / 100));

        newUserData = [];

        for (let i = 0; i < investmentPeriod; i++) { 
            const yearAmmount = (initialInvestment * (Math.pow(1 + annualReturn / 100, (i+1)))) +
            (timesAddedPerYear*monthlyContribution *(Math.pow(1 + (annualReturn / 100), (i+1)) - 1) / (annualReturn / 100));
            newUserData.push({id:i, year:i+1, profit: yearAmmount});
        }

        if (isAdvanced && timesAddedPerYear !== '1'){
            result = (
                <div>
                  <p>
                    Good day. You have chosen to start with an initial investment of $
                    <span className='text-blue-700 font-bold'>{initialInvestment}</span>, 
                    and a contribution of $
                    <span className='text-blue-700 font-bold'>{monthlyContribution} </span>
                    <span>{timesAddedPerYear}</span> times a year.
                    With an average annual return of <span className='font-style: italic text-red-500 font-bold'>{annualReturn}</span>%, 
                    and over a period of <span style={{ textDecoration: 'underline' }}>{investmentPeriod}</span> years, 
                    you are looking to make $
                    <span style={{ fontWeight: 'bold', color: 'green' }}>{totalInvestment.toLocaleString()}</span>
                  </p>
                </div>
            );
        }
        else if(isAdvanced){
            result = (
                <div>
                  <p>
                    Good day. You have chosen to start with an initial investment of $
                    <span className='text-blue-700 font-bold'>{initialInvestment}</span>, 
                    and a contribution of $
                    <span className='text-blue-700 font-bold'>{monthlyContribution}</span> a year.
                    With an average annual return of <span className='font-style: italic text-red-500 font-bold'>{annualReturn}</span>%, 
                    and over a period of <span style={{ textDecoration: 'underline' }}>{investmentPeriod}</span> years, 
                    you are looking to make $
                    <span style={{ fontWeight: 'bold', color: 'green' }}>{totalInvestment.toLocaleString()}</span>
                  </p>
                </div>
            );
        }
        else{
            result = (
                <div>
                  <p>
                    Good day. You have chosen to start with an initial investment of $
                    <span className='text-blue-700 font-bold'>{initialInvestment}</span>.
                    With an average annual return of <span className='font-style: italic text-red-500 font-bold'>{annualReturn}</span>%, 
                    and over a period of <span style={{ textDecoration: 'underline' }}>{investmentPeriod}</span> years, 
                    you are looking to make $
                    <span style={{ fontWeight: 'bold', color: 'green' }}>{totalInvestment.toLocaleString()}</span>
                  </p>
                </div>
            );
        }
        

        setResultSentence(result);
        return newUserData;
    }
}



export default InvestmentCalculator


