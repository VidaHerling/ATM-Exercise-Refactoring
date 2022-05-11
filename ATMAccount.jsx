const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      <input type="number" width="200" onChange={onChange}></input><br/>
      <button value="Submit">Submit</button>
    </label>
  );
};

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    deposit = Number(event.target.value);
  };

  //choose the action and submit the amount of money deposited or withdrawn
  const handleSubmit = event => {
    event.preventDefault();
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    if(newTotal >= 0) {
      setTotalState(newTotal)
    } else {alert(`account balance is not enough`)};
  };

  //change atmMode to display the ATMDeposit App; change IsDeposit to determine whether is to deposit or withdraw
  const handleModeSelect = event => {
    console.log(`choice: ${event.target.value}`)
    event.preventDefault();
    if(event.target.value === "") setAtmMode(false);
    if(event.target.value === "Deposit") setIsDeposit(true) || setAtmMode(true);
    if(event.target.value === "Withdraw") setIsDeposit(false) || setAtmMode(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label><br/>
      <select onChange={handleModeSelect} name="mode">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="withdraw-selection" value="Withdraw">Withdraw</option>
      </select><br/>
      {atmMode && <ATMDeposit onChange={handleChange}></ATMDeposit>}
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));


