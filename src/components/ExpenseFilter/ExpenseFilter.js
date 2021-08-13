import React, {useState} from 'react';
import './ExpenseFilter.css';
import ExpenseMonth from './ExpenseMonth';

function ExpenseFilter(props) {

    const [selectedYear, setSelectedYear] = useState("");
    const selectYearHandler= (e) =>{
        setSelectedYear(e.target.value);
        props.onSelectedYearFilter(e.target.value);
    }

    return (
        <div className="expenseFilter">
            <div className="expenseFilter__header">
                <h1>Filter by year</h1>
                <select name="years" onChange={selectYearHandler} value={selectedYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className="expenseFilter_months">
                <ExpenseMonth name={"Jan"} up={80} down={20}/>
                <ExpenseMonth name={"Feb"} up={88} down={12}/>
                <ExpenseMonth name={"Mar"} up={94} down={6}/>
                <ExpenseMonth name={"Apr"} up={100} down={0}/>
                <ExpenseMonth name={"May"} up={90} down={10}/>
                <ExpenseMonth name={"Jun"} up={100} down={0}/>
                <ExpenseMonth name={"Jul"} up={100} down={0}/>
                <ExpenseMonth name={"Aug"} up={100} down={0}/>
                <ExpenseMonth name={"Set"} up={100} down={0}/>
                <ExpenseMonth name={"Oct"} up={100} down={0}/>
                <ExpenseMonth name={"Nov"} up={100} down={0}/>
                <ExpenseMonth name={"Dec"} up={100} down={0}/>
            </div>
        </div>
    );
};

export default ExpenseFilter;
