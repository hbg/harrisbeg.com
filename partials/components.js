import React, {Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import Icon from "spectrum-icons";
import Nav from "react-bootstrap/Nav";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHammer,
    faHome,
    faNewspaper,
    faDownload
} from "@fortawesome/free-solid-svg-icons";

function renderTooltip(message) {
    return <Tooltip>{message}</Tooltip>;
}

const projects = [
    {
        title: 'skinCAM',
        text: 'In 2013, skin disease diagnosis and treatment costed over $75,000,000,000. The process that dermatologists' +
            ' go through every time - checking a handbook and comparing a skin anomaly to a central database - is tedious and ' +
            'inaccessible by many across the globe - that\'s where skinCAM comes in. With 95% accuracy and 5,000 trained images from DermNetNZ ' +
            'as well as 10 of the most common skin diseases - including melanoma and carcinoma - dermatology comes down to one small cost: $0.',
        image: '/sc_banner.png',
        src: 'https://github.com/skincam/skinCAM-Python',
        specs: '/pdf/skincam_spec.pdf'
    },
    {
        title: 'Smartify',
        text: 'Driving up through Central Valley on a long summer\'s day, the only thing that could console me was my Spotify playlist. ' +
            'I got bored of manually queueing songs, so I did what any normal human being would: I hit \'Shuffle Playlist.\' At one point, I' +
            ' was listening to Rocket Man and then got hit with Rap God, thereby prompting my creation of Smartify, a playlist queue generator that' +
            ' sorts your Spotify playlist by similarity.',
        image: '/smartify.jpg',
        url: 'https://smartify--shadowcypher.repl.co/',
        specs: 'https://repl.it/talk/announcements/APP-OF-THE-WEEK-SMARTIFY/16952',
        src: 'https://repl.it/@ShadowCypher/Smartify'
    },
    {
        title: 'Super Hack: San Diego\'s Premiere High-School Hackathon',
        image: '/16x9.png',
        url: 'http://super-hack.herokuapp.com/',
        text: 'San Diego, America\'s finest city, is faced with an issue. Despite the plethora of educational opportunities and creative minds, students aren\'t actively encouraged to "make." While theory is in our future, practicality must not be overlooked, and the art of practicality is derived through events such as hackathons. In lieu of this demand, Super Hack was started with one goal and one goal only in mind: create an event revolving around making. Raised $5,500 and over $10,000 in prizes. 400+ registrants on devpost, cancelled due to COVID-19.'

    },
    {
        title: 'MySocialHub',
        text: 'Right around 16 when I was added to the developer team behind MySocialHub, I started contributing to a platform that supported over 100,000 users' +
            ' - users that regularly posted content and engaged with YouTube content creators (such as Salomondrin and Daily Driven Exotics). At MySocialHub, I started off ' +
            'as a bug hunter and, as I evolved into the Laravel MVC structure, started contributing to frontend and backend features to the website.',
        url: 'https://mysocialhub.com/',
        specs: 'https://www.facebook.com/MySocialHubTech/videos/1704048033033929/',
        image: '/msh.jpg'
    },
    {
        title: 'Grabify',
        text: 'Grabify is an IP logging utility that attracts ~700,000 users every month, and is used very often by the scambaiting community by creators including ' +
            'Pleasant Green and Nullbyte. It has also been featured on MTV\'s Catfish show thrice. As of the moment, Grabify has over 140,000,000 logs.',
        specs: 'https://www.youtube.com/watch?v=nW9-BJsdSb4',
        url: 'https://grabify.link/',
        image: '/grabify.png'
    }
];

const stubs = [
    {
        title: 'Super Hack',
        s: 'San Diego\'s 100-attendee, premiere high-school hackathon hosted at the ResMed HQ.',
        url: 'https://superhack.org'
    },
    {
        title: 'Hack Club CCA',
        s: 'Organized Canyon Crest Academy\'s first Hack Club, introduced students to Django, webrouting, and basic hacking.',
        url: 'https://superhack.org'
    },
    {
        title: 'SnapNotes',
        s: 'Translate handwritten notes to digital docs with the power of Google Cloud Vision. Won two prizes at Cutie Hack 2019, only high-school student to win.',
        url: 'https://github.com/hbg/snapnotes-web'
    },
    {
        title: 'GeneralReposti',
        s: 'Detects reposts on Reddit using AI and an integrated meme detector that prevents bot from claiming meme formats are reposts.',
        url: 'https://github.com/hbg/GeneralReposti'
    },
    {
        title: 'Hypercharged',
        s: 'Hypercharged car photography + community website. Active business with followers over 1,000, recognized by content creator of over 1M subscribers.',
        url: 'https://github.com/hypercharged/'
    },
    {
        title: 'Blockbook',
        s: "During REHS '19, I designed a whitelisted blockchain utilizing Google Auth and certificates for the purpose of a gradebook.",
        url: 'https://github.com/OpenScienceChain/REHS2019'
    },
    {
        title: 'PicNic',
        s: 'Checklist of picnic items with image classification to validate items.',
        url: '',
        hidden: true
    },
    {
        title: 'GitWork',
        s: 'A tool for GitHub users to network and find potential contributors to their open source.',
        url: '',
        hidden: true
    }
];

export class GlobalFooter extends Component {
    render() {
        return <div className="footer">
            <div className="footer-content">
                <script> </script>
                <div className="nm">h<span className="hbg">arris</span>b<span className="hbg">e</span>g</div>
                <Row>
                    <Col>
                        <a href="https://github.com/hbg" className={"hover-icon"}>
                            <Icon glyph="github" size={48} color={"black"}/>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://blog.harrisbeg.com" className={"hover-icon"}>
                            <Icon glyph="post-fill" size={48} color={"black"}/>
                        </a>
                    </Col>
                    <Col>
                        <a href="mailto:contact@harrisbeg.com" className={"hover-icon"}>
                            <Icon glyph="email-fill" size={48} color={"black"}/>
                        </a>
                    </Col>
                    <Col>
                        <a href="" className={"hover-icon"}>
                            <Icon glyph="profile-fill" size={48} color={"black"}/>
                        </a>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export class Divider extends Component {
    render() {
        return <img src={"/divider.svg"} className={"divider"}>

        </img>
    }
}

export class GlobalNavbar extends Component {
    render() {
        return <Navbar className="nbar" collapseOnSelect expand="lg">
            <Navbar.Brand href="/#home">
                <div id="profile-image-container">

                </div>
            </Navbar.Brand>
            <a href={'/#home'}><p className='nm d-none d-sm-block'>hbg</p></a>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"><Icon glyph="menu" size={48}
                                                                       color={"#ffdf00"}/></Navbar.Toggle>
            <Navbar.Collapse className='navbar-links'
                             id='responsive-navbar-nav'>
                <Nav className="ml-auto">
                    <Nav.Item>

                        <Nav.Link href="/">
                            <FontAwesomeIcon icon={faHome}/> <span className='mobile-text'>Home</span>
                        </Nav.Link>

                    </Nav.Item>
                    <Nav.Item>

                        <Nav.Link href="/#projects">
                            <FontAwesomeIcon icon={faHammer}/> <span className='mobile-text'>Projects</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>

                        <Nav.Link href="/pdf/resume.pdf">
                            <FontAwesomeIcon icon={faDownload}/> <span className='mobile-text'>Resume</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>

                        <Nav.Link href="https://blog.harrisbeg.com">
                            <FontAwesomeIcon icon={faNewspaper}/> <span className='mobile-text'>Blog</span>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    }
}

export class ColoredButton extends Component {
    render() {
        return <a href={this.props.url}>
            <Button variant="primary" style={{backgroundColor: this.props.color || 'red'}}>{this.props.text}</Button>
        </a>
    };
};

export class Stub extends Component {
    render() {
        return <Col sm={4}>
            <a href={this.props.url} className={"no_underline"}>
                {this.props.hidden ? (
                    <OverlayTrigger
                        placement="top"
                        delay={{show: 250, hide: 400}}
                        overlay={renderTooltip("This item is pending completion.")}>
                        <Card className="stub hide">
                            <Card.Body>
                                <Card.Title className="card-title">{this.props.title || 'Stub Title'}</Card.Title>
                                <p style={{fontSize: "12pt", color: "#666666"}}>{this.props.description}</p>
                            </Card.Body>
                        </Card>
                    </OverlayTrigger>
                ) : (
                    <Card className="stub">
                        <Card.Body>
                            <Card.Title className="card-title">{this.props.title || 'Stub Title'}</Card.Title>
                            <p style={{fontSize: "12pt", color: "#666666"}}>{this.props.description}</p>
                        </Card.Body>
                    </Card>
                )
                }
            </a>
        </Col>
    }
}

export class ProjectCard extends Component {
    render() {
        return <Col sm={6}>
            <Card>
                <Card.Img variant="top"
                          src={this.props.image || 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2019/11/the_mandalorian_still_embed.jpg'}/>
                <Card.Body>
                    <Card.Title className="card-title">{this.props.title || 'Card Title'}</Card.Title>
                    <Card.Text>
                        {this.props.text || 'A sample description.'}
                    </Card.Text>
                    {this.props.url ?
                        (
                        <a href={this.props.url}>
                            <Button variant="primary">Web</Button>
                        </a>
                    ) : (
                        ''
                    )
                    }
                    {this.props.specs ?
                        (
                            <a href={this.props.specs}>
                                <Button variant="info">About</Button>
                            </a>
                        ) : (
                            ''
                        )
                    }
                    {this.props.src ?
                        (
                            <a href={this.props.src}>
                                <Button variant="dark">Source</Button>
                            </a>
                        ) : (
                            ''
                        )
                    }
                </Card.Body>
            </Card>
        </Col>
    };
};

export class ProjectList extends Component {
    render() {
        return (
            <Row>
                {projects.map((value, _) => {
                    return <ProjectCard title={value.title} text={value.text} image={value.image} src={value.src}
                                        specs={value.specs} url={value.url}/>;
                })}
            </Row>
        )
    }
}

export class StubsList extends Component {
    render() {
        return <Row id="projects">
            {stubs.map((value, _) => {
                return <Stub title={value.title} text={value.text} image={value.image} url={value.url}
                             hidden={value.hidden} description={value.s}/>;
            })}
        </Row>
    }
}

export default {ProjectCard, ColoredButton, GlobalNavbar, ProjectList, StubsList, Stub, GlobalFooter, Divider};