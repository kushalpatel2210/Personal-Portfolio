import './App.css';
import {Layout,Header,Navigation,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'; 

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" style={{background:'#181818'}}title={<Link style={{textDecoration:'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
    
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>

</div>
  );
}

export default App;
