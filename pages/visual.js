import Header from '../partials/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.scss'
import {ColoredButton, GlobalNavbar, ProjectList, StubsList, GlobalFooter, Divider} from '../partials/components';
import React from "react";

class Visuals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    mainContent() {
        return (
            <div>
                <Header page_name="Visuals"/>
                <GlobalNavbar/>
                <div id='rundown-wrapper' style={{height: '50vh'}}>
                    <Container id='rundown-jim'>
                        <p className='nm'>Graphics</p>
                        <div className='ds'>Random graphics I've generated, mostly through programming.</div>
                    </Container>
                </div>
                <div className='main-content'>
                    <Container>
                        <span className='introducer'>Featured Projects</span>
                        <Row>
                            <ProjectList/>
                        </Row>
                        <Divider/>
                        <span className='introducer'>Smaller Projects</span>
                        <Row>
                            <StubsList/>
                        </Row>
                    </Container>
                </div>
                <GlobalFooter/>
            </div>
        )
    }

    render() {

        return (
            this.mainContent()
        )
    }
}

export default Visuals;
