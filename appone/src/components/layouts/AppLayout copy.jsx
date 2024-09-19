import '../../styles/AppLayout.css';
function AppLayout() {
  return (
    <>
      <div className="banner">
        <div className="navbar">
        <div className="navbar-left">
        <ul>
                <li>Home</li>
                <li>Asset Management</li>
                <li>Project Management</li>
                <li>Members Management</li>
            </ul>
        </div>
        <div className="navbar-right"></div>
          
        </div>
        <div class="hamburger">
            ☰
        </div>
        
      </div>

    </>
    )
}

export default AppLayout
