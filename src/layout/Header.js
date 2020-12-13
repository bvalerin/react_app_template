import styled from 'styled-components'

const Nav = styled.div`
    margin:0;
    padding: 0;
    overflow: hidden;
    background-color: #e9e9e9;
`;

const Link = styled.a`
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
        background-color: #ddd;
        color: black;
    }

    &:active {
        background-color: green;
        color: white;
    }
`;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  
//   /* Change the color of links on hover */
//   .topnav a:hover {
//     background-color: #ddd;
//     color: black;
//   }
  
//   /* Add an active class to highlight the current page */
//   .topnav a.active {
//     background-color: #4CAF50;
//     color: white;
//   }
  
//   /* Hide the link that should open and close the topnav on small screens */
//   .topnav .icon {
//     display: none;
//   }

const Header = () => {
    return <div>
        <div>
            <Nav>
                <Link onClick={openNav} href="#" >Menu</Link>
                <Link href="#" >About Us</Link>
                <Link href="#" >Portfolio</Link>
                <Link href="#" >Contact</Link>
            </Nav>
        </div>
    </div>;
}

export default Header;