/* Imports */
import './index.css';

/* YearSelect component */
const YearSelect = ({
    YearSelectChange,
    releaseYear
}) => {
    return(
        <select onChange={YearSelectChange} value={releaseYear}>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            {/* Add more years as needed */}
        </select>
    )
}

export default YearSelect;
