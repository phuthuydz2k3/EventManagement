import React from 'react';
import Sidebar from "./Sidebar";
import Table from "./table/Table";
import Header from "./Header";

const HomePageEmployee = () => {
    return (
        <div>
            <Header title={"Events"} />
            <Sidebar/>
            <Table />
        </div>
    );
};

export default HomePageEmployee;
