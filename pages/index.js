import Header from '../partials/head';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.scss'
import {ColoredButton, GlobalNavbar, ProjectList, StubsList, GlobalFooter, Divider} from '../partials/components';
import React from "react";

class Index extends React.Component {
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
                <Header page_name="Home"/>
                <GlobalNavbar/>
                <div id='rundown-wrapper'>
                    <Container id='rundown-jim'>
                        <p className='nm'>Hello, I'm Harris Beg!</p>
                        <div className='ds'>Maker, software developer, undergrad @ Caltech.</div>
                        <ColoredButton color='#f44d00' text='GitHub' url="https://github.com/hbg"/>
                    <ColoredButton color='#ff6c0c' text='LinkedIn' url="https://www.linkedin.com/in/~harris/"/>
                        <ColoredButton color='#ffaa00' text='Resume' url="/pdf/resume.pdf"/>
                        <ColoredButton color='#ffce00' text='Email'
                                       url='/email'/>
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

export default Index;
