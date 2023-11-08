import React, { useState } from 'react';
import CashImg from '../images/Cash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import LineChart from './LineChart';




function InvestmentCalculator() {

    const UserData  = [
        {
          id: 1,
          year: 1,
          profit: 1000
        },
        {
          id: 2,
          year: 10,
          profit: 100000
        },
      ];

      const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: 'Total Investment',
            tension: 0.1,
            data: UserData.map((data) => data.profit),
            backgroundColor: ['rgba(75,192,192,1)', '#ecf0f1', '#50AF95', '#f3ba2f', '#2a71d0'],
            borderColor: 'black',
            borderWidth: 3,
          },
        ],
      });

    


    
    const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
    const [investmentType, setInvestmentType] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [investmentPeriod, setInvestmentPeriod] = useState('');
    const [initialInvestment, setInitialInvestment] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [resultSentence, setResultSentence] = useState('');
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

    const handleCalculate = () => {

        if (!showAdvancedSearch) {
            
            const initialInvestment = parseFloat(document.getElementById('initial_investment').value);
            const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
            const investmentPeriod = parseInt(document.getElementById('investment-period').value, 10);

            const oneYearInvestmentBasic = (initialInvestment * (Math.pow(1 + annualReturn / 100, 1))) +
            (12*monthlyContribution *(Math.pow(1 + (annualReturn / 100), 1) - 1) / (annualReturn / 100));
            
            const totalInvestmentBasic = (initialInvestment * (Math.pow(1 + 5 / 100, investmentPeriod))) +
                (12 * monthlyContribution * (Math.pow(1 + (5 / 100), investmentPeriod) - 1) / (5 / 100));
    
            const resultBasic = `Good day. You have chosen to start with an initial investment of $${initialInvestment}, and a monthly contribution of $${monthlyContribution}. With an average annual return of 5%, and over a period of ${investmentPeriod} years, you are looking to make $${totalInvestmentBasic.toLocaleString()}`;
    
            setResultSentence(resultBasic);
        } else {
            
            const userName = document.getElementById('user_name').value;
            const initialInvestment = parseFloat(document.getElementById('initial_investment').value);
            const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
            const investmentPeriod = parseInt(document.getElementById('investment-period').value, 10);


            const oneYeatInvestmentAdvanced = (initialInvestment * (Math.pow(1 + annualReturn / 100, 1))) +
            (12*monthlyContribution *(Math.pow(1 + (annualReturn / 100), 1) - 1) / (annualReturn / 100));
    
            const totalInvestmentAdvanced = (initialInvestment * (Math.pow(1 + annualReturn / 100, investmentPeriod))) +
            (12*monthlyContribution *(Math.pow(1 + (annualReturn / 100), investmentPeriod) - 1) / (annualReturn / 100));

            const resultAdvanced = `Hey ${userName}. You have chosen to invest in ${investmentType}. Over a period of ${investmentPeriod} years, and with an annual return rate of ${annualReturn}%, your total investment is going to be $${totalInvestmentAdvanced.toLocaleString()}`;

            setResultSentence(resultAdvanced);
        }

        const resultSection = document.getElementById('result-section');
        if (resultSection) {
            resultSection.scrollIntoView({ behavior: 'smooth'});
        }

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
                
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
                        <input onChange={(e) => setUserName(e.target.value)} type="text" id="user_name" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name"/>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Age</label>
                        <input onChange={(e) => setUserAge(e.target.value)} type="text" id="user_age" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age"/>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Initial Investment</label>
                        <input onChange={(e) => setInitialInvestment(e.target.value)} type="text" id="initial_investment" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$1000"/>
                        
                        <label class="mt-4 block mb-3 text-sm font-medium text-gray-900 dark:text-white"> Type of Investment</label>
                        <button onClick={() => handleInvestmentTypeChange('S&P 500')} class="bg-blue-100 text-blue-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:ring-2 ring-blue-800">S&P 500</button>
                        <button onClick={() => handleInvestmentTypeChange('Roth IRA')} class="bg-purple-100 text-purple-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-purple-900 dark:text-purple-300 hover:ring-2 ring-purple-800">Roth IRA</button>
                        <button onClick={() => handleInvestmentTypeChange('Crypto')} class="bg-red-100 text-red-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-red-900 dark:text-red-300 hover:ring-2 ring-red-800">Crypto</button>
                        <button onClick={() => handleInvestmentTypeChange('Stocks')} class="bg-green-100 text-green-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300 hover:ring-2 ring-green-800">Stock</button>
                        <button onClick={() => handleInvestmentTypeChange('Commodity')} class="bg-yellow-100 text-yellow-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 hover:ring-2 ring-yellow-800">Commodity</button>
                        <button onClick={() => handleInvestmentTypeChange('Index Fund')} class="bg-indigo-100 text-indigo-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300 hover:ring-2 ring-indigo-800">Index Fund</button>
                        <button onClick={() => handleInvestmentTypeChange('Bonds')} class="bg-pink-100 text-pink-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-pink-900 dark:text-pink-300 hover:ring-2 ring-pink-800">Bonds</button>
                        <button onClick={() => handleInvestmentTypeChange('Custom')} class="bg-pink-100 text-pink-800 text-[14px] font-medium mr-2 px-3.5 py-1.5 rounded-full dark:bg-orange-800 dark:text-pink-300 hover:ring-2 ring-pink-800 my-4">Custom</button>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Contribution</label>
                        <input onChange={(e) => setInitialInvestment(e.target.value)} type="text" id="monthly-contribution" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$100"/>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Annual return</label>
                        <input onChange={(e) => setAnnualReturn(e.target.value)} type="text" id="annual-return" value={annualReturn} aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 5%"/>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Investment period (years)</label>
                        <input onChange={(e) => setInvestmentPeriod(e.target.value)} type="text" id="investment-period" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 2"/>

                    </div>
                    </>
                ) : (
                    <div class="w-[95%] justify-center items-center m-auto">
                                           
                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Initial Investment</label>
                        <input type="text" id="initial_investment" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$1000"/>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Contribution</label>
                        <input type="text" id="monthly-contribution" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$100"/>

                        <label class="mt-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Investment period (years)</label>
                        <input type="text" id="investment-period" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g 2"/>

                    </div>

                )}

                <div className='flex flex-col'>

                <button onClick={() => setShowAdvancedSearch(!showAdvancedSearch)} class="ml-4 transition duration-150 ease-in-out mt-5 w-48 items-center px-2 py-1 text-xs font-medium text-center text-black bg-white rounded-lg  hover:ring-gray-500 hover:bg-gray-300">
                    <FontAwesomeIcon className="mr-1" icon={faGear} />
                    Advanced Search
                </button>

                <button onClick={handleCalculate} class="py-5 px-2 font-bold text-2xl flex flex-row ml-4 mr-4 mb-4 justify-center align-center transition duration-150 ease-in-out mt-5 w-[95%] items-center text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
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
    )
}

export default InvestmentCalculator


