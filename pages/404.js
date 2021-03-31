import Header from "../partials/head";
import {GlobalFooter, GlobalNavbar} from "../partials/components";
import './index.scss'
import './error.scss'
import React from "react";


function NoPageFoundError() {
    return (
        <div>
            <Header page_name={"404 Error"}/>
            <GlobalNavbar/>
                <div className={"error-wrapper"}>
                    <p className={"prefix"}>May the</p>
                    <h1 className={"error-large-text"}>
                        404
                    </h1>
                    <p className={"prefix"}>be with you.</p>
                </div>
            <GlobalFooter />
        </div>
    )
}

export default NoPageFoundError