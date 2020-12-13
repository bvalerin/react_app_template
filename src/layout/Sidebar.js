import styled from 'styled-components';

const Side = styled.div`
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
`;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }


const Sidebar = () => {
    return <div>

            <Side id="mySidenav">
                <a 
                href="javascript:void(0)" 
                // class="closebtn" 
                onClick={closeNav}>&times;</a>
            </Side>

        </div>;
}

// {
    /* <div id="mySidenav" class="sidenav">
  
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<!-- Use any element to open the sidenav -->
<span onclick="openNav()">open</span>

<!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
<div id="main">
  ...
</div> */

export default Sidebar;