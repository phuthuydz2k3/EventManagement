import React, {useState} from "react";
import '../style/sort.css'

const Sort = ({ onSort }) => {

    const [divDisplayStyle, setDivDisplayStyle] = useState('none');
    const [sortKey, setSortKey] = useState('Id');

    const handleSearchKey = (event) => {
        setSortKey(event.target.innerHTML)
        handleButtonClick();
        onSort(event.target.innerHTML)
    }
    const handleButtonClick = () => {
        setDivDisplayStyle(divDisplayStyle === 'block' ? 'none' : 'block');
    };

    return (
        <div className="sort">
            <div className="absolute flex items-center pl-3 h-5">
                <div
                    className="h-8 inline-flex items-center overflow-hidden rounded-md bg-white border"
                >
                    <div
                        className="border w-20 px-4 py-2 text-sm/none text-gray-600"
                    >
                        Sort by
                    </div>

                    <button
                        id="button" className="button h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                        onClick={handleButtonClick}
                    >
                        <span className="key mr-3">{sortKey}</span>
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
            <div id="listSort" style={{ display: divDisplayStyle }} className="relative">
                <div
                    className="end-0 z-20 top-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
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
    );
}

export default Sort;