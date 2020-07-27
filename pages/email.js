import './index.scss'
import Header from "../partials/head";
import {GlobalNavbar} from "../partials/components";
import React from "react";
import Container from 'react-bootstrap/Container';

export default function Email() {
    return (
        <div>
            <Header page_name="Home"/>
            <GlobalNavbar/>
            <Container>
                <div className='email'>{'{first_name}{at}caltech.edu'}</div>
            </Container>
        </div>
    )
}