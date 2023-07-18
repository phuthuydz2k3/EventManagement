import React, {useState} from 'react'
import 'flowbite'

const Search = ({ onSearch }) => {
    const [divDisplayStyle, setDivDisplayStyle] = useState('none');
    const [searchKey, setSearchKey] = useState('Title');
    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
        console.log(searchInput)
        onSearch(searchKey, event.target.value);
    };

    const handleSearchKey = (event) => {
        setSearchKey(event.target.innerHTML)
        handleButtonClick();
        console.log(searchKey)
        onSearch(event.target.innerHTML, searchInput);
    }
    const handleButtonClick = () => {
        setDivDisplayStyle(divDisplayStyle === 'block' ? 'none' : 'block');
    };

    return (
        <div>
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="w-100 relative flex">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="table-search"
                       className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search for items"
                       value={searchInput} onChange={handleSearchInputChange}
                />
                <div className="absolute inset-y-0 right-0 top-2 flex items-center pl-3 h-5">
                    <div
                        className="h-8 inline-flex items-center overflow-hidden rounded-md bg-white border-l-0"
                    >
                        <div
                            className="border-e border-l px-4 py-2 text-sm/none text-gray-600"
                        >
                            Search by
                        </div>

                        <button
                            id="button" className="button h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                            onClick={handleButtonClick}
                        >
                            <span className="key mr-3">{searchKey}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="list" style={{ display: divDisplayStyle }} className="relative">
                    <div
                        className="absolute end-0 z-20 top-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                        role="menu"
                    >
                        <div className="p-2">
                            <div
                                className="searchItem block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                                onClick={handleSearchKey}
                            >
                                Id
                            </div>

                            <div
                                className="searchItem block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                                onClick={handleSearchKey}
                            >
                                Title
                            </div>

                            <div
                                className="searchItem block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                                onClick={handleSearchKey}
                            >
                                Location
                            </div>

                            <div
                                className="searchItem block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                                onClick={handleSearchKey}
                            >
                                Deadline
                            </div>
                            <div
                                className="searchItem block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                                onClick={handleSearchKey}
                            >
                                Status
                            </div>
                            <div
                                className="searchItem block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                                onClick={handleSearchKey}
                            >
                                Budget
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;