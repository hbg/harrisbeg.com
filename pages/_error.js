import './index.scss'
import './error.scss'
import Header from "../partials/head";
import {GlobalFooter, GlobalNavbar} from "../partials/components";
import React from "react";


function Error({statusCode}) {
    return (
        <div>
            <Header page_name={statusCode + " Error"}/>
            <GlobalNavbar/>
                <div className={"error-wrapper"}>
                    <p className={"prefix"}>May the</p>
                    <h1 className={"error-large-text"}>
                        {statusCode}
                    </h1>
                    <p className={"prefix"}>be with you.</p>
                </div>
            <GlobalFooter />
        </div>
    )
}

Error.getInitialProps = ({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {statusCode}
}

export default Error