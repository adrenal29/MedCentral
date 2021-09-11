import React from 'react'
import Navbar from './Navbar';
import Main from './Main';
import Shop from './Shop';
import Member from './Member';
import Workflow from './Workflow';
import Book from './Book';
export default function Landing() {
    return (
        <>
            
            <Main/>
            <Shop/>
            <Member/>
            <Workflow/>
            <Book/>
        </>
    )
}
