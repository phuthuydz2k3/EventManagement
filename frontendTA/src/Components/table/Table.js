import '../style/table.css'
import Tbody from "./Tbody";
import 'flowbite';
import Search from "./Search";
import {useState} from "react";
import events from './eventsData'
import Sort from "./Sort";

const Table = () => {

    const [filteredData, setFilteredData] = useState(events);

    const handleSearch = (searchKey, searchInput) => {
        if (!searchKey.trim() || !searchInput.trim()) {
            setFilteredData(events);
            return;
        }

        if (searchKey === 'Title')
        {
            searchKey = 'name'
        }
        else if (searchKey === "Location")
        {
            searchKey = 'place'
        }
        else
        {
            searchKey = searchKey.toLowerCase();
        }

        const filtered = events.filter(item =>
            item[searchKey].toLowerCase().includes(searchInput.toLowerCase()));

        setFilteredData(filtered);
    };

    const handleSort = (sortKey) => {
        if (sortKey === 'Title')
        {
            sortKey = 'name'
        }
        else if (sortKey === "Location")
        {
            sortKey = 'place'
        }
        else
        {
            sortKey = sortKey.toLowerCase();
        }

        if (sortKey === 'id')
        {
            const sortedData = [...filteredData].sort((a, b) =>
                parseInt(a[sortKey]) - parseInt(b[sortKey]));
            setFilteredData(sortedData);
        }
        else if (sortKey === 'budget')
        {
            const sortedData = [...filteredData].sort((a, b) => {
                const numA = parseInt(a[sortKey].replace(/[$,]/g, ''));
                const numB = parseInt(b[sortKey].replace(/[$,]/g, ''));
                return numA - numB;
            });
            setFilteredData(sortedData);
        }
        else if (sortKey === 'deadline')
        {
            const sortedData = [...filteredData].sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA - dateB;
            });
            setFilteredData(sortedData)
        }
        else
        {
            const sortedData = [...filteredData].sort((a, b) =>
                a[sortKey].localeCompare(b[sortKey]));
            setFilteredData(sortedData);
        }
    }

    const styles = {
        position: 'absolute',
        inset: 'auto auto 0px 0px',
        margin: '0px',
        transform: 'translate3d(522.5px, 3847.5px, 0px)',
    };

    return (
            <div className="table">
                <div className="searchbar flex items-center justify-between pb-4">
                    <div>
                        <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                type="button">
                            <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                            </svg>
                            Last 30 days
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <div id="dropdownRadio"
                             className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                             data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                             style={styles}>
                            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownRadioButton">
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="filter-radio-example-1"
                                               className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                            day</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input checked="" id="filter-radio-example-2" type="radio" value=""
                                               name="filter-radio"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="filter-radio-example-2"
                                               className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                            7 days</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="filter-radio-example-3"
                                               className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                            30 days</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-4" type="radio" value="" name="filter-radio"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="filter-radio-example-4"
                                               className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                            month</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <input id="filter-radio-example-5" type="radio" value="" name="filter-radio"
                                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label htmlFor="filter-radio-example-5"
                                               className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                                            year</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Sort onSort={handleSort}/>
                    <Search onSearch={handleSearch} />
                </div>
                <section className="table__body">
                    <table>
                        <thead>
                        <tr>
                            <th> Id </th>
                            <th> Title </th>
                            <th> Location </th>
                            <th> Deadline </th>
                            <th> Status </th>
                            <th> Budget </th>
                        </tr>
                        </thead>
                        <Tbody filteredData={filteredData} />
                    </table>
                </section>
                <ol className="pagination flex justify-center gap-1 text-xs font-medium">
                    <li>
                        <a
                            href="#"
                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            1
                        </a>
                    </li>

                    <li
                        className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                    >
                        2
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            4
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ol>
            </div>
    );
};

export default Table;