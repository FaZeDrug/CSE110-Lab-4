import React, { useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { fetchBudget } from "../../utils/budget-utils";
import { updateBudget } from "../../utils/budget-utils";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext);

  useEffect(() => {
    loadBudget();
  }, []);

  // Function to load budget
  const loadBudget = async () => {
    try {
    const budget = await fetchBudget();
    setBudget(budget);
    } catch (err: any) {
    console.log(err.message);
    }
  };

// <div>Budget: ${ budget }</div>

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div>Budget: $</div>
      <input
            required
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => {
              const newBudget = parseInt(e.target.value);
              setBudget(newBudget);
              updateBudget(newBudget);
            }}
      ></input>
      {/* <button type="submit" data-testid="Save">
        Save
      </button> */}
    </div>
  );
};

export default Budget;
