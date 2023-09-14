import {useState} from 'react'
import Header from './components/Header/Header';  
import UserInput from './components/Header/UserInput/UserInput';
import ResultTable from './components/ResultTable/ResultTable';
function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
    <Header/>
<UserInput onCalculate={calculateHandler}/>
{!userInput &&<p style={{textAlign:'center', color:'#482673'}}>No investment calculated yet.</p>}
{userInput && <ResultTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
