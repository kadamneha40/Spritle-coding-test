import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


function App() {
  const initialVar = 0;
  const [expense, setExpense] = useState(initialVar);
  const [total, setTotal] = useState(initialVar);
  const [detail, setDetail] = useState([]);

  const addNewCost = () => {
    setTotal(parseInt(total) + parseInt(expense));
    setDetail(arr => [...arr, `${new Date().toString()}-${expense}- Add`]);
    setExpense(0)
  };
  const removeNewCost = () => {
    setTotal(parseInt(total) - parseInt(expense))
    setDetail(arr => [...arr, `${new Date().toString()}-${expense}- Remove`]);
    setExpense(0)

  }


  return (
    <div className="table">
      <div className="table-title">Expense Tracker</div>
      <div className="table-content">
        <div className="table-header">
          <div className="table-row">
            <div className="table-data">
              <div className="fontStyle">Expense Total:{total}</div>
            </div>
          </div>
        </div>
        <div className="table-body">
          <div className="table-row">

            <div className="table-data">
              <input
                type="number"
                value={expense}
                onChange={e => setExpense(e.target.value)}
              />
            </div>

          </div>
          <div className="table-row">
            <div className="table-data">
              <button onClick={() => addNewCost()} disabled={expense ===0}>Add</button>

              <button className="leftCss" onClick={() => removeNewCost()} disabled={expense ===0}>Remove</button>
            </div>
          </div>
        </div>
       
        <div className="table-footer">
          <div className="table-row">
            <div className="table-data">{detail && detail.map(entry =>
              <div>{entry}</div>
            )}

            </div>
          </div>
        </div>
      </div>
      </div>
      
      );
};



      const rootElement = document.getElementById("root");
      ReactDOM.render(<App />, rootElement);
