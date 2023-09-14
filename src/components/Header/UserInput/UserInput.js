import {useState} from 'react'
const initialUserInput={
    'current-savings':'',
    "yearly-contribution":'',
    "expected-return":'',
    "duration":''
}
const UserInput = (props) => {
   const [userInput,setUserInput]= useState(initialUserInput)
  const submitHandler = (event) => {
    event.preventDefault();
   props.onCalculate(userInput);
  };
  const resetHandler = () => {
   setUserInput(initialUserInput)
  };
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput)=>{
        return {...prevInput,[input]:value}
    })



  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (₹)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            value={userInput['expected-return']}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            value={userInput['duration']}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" >
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
