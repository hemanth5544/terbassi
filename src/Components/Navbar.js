import './Main.css'

const Navbar = () => (
    <nav className="navBar">
        <div className="d-flex flex-row justify-content-between">
                <div className='d-flex flex-row ml-4'>
                   <img src='https://www.terriblytinytales.com/img/home/ttt.svg' alt='nav-image'/>  
                   <div className='line'>
                   <h1 className='nav-header pt-2 ml-2'>S T O R I E S</h1>
                   </div>
                </div>
                <button className='nav-button'>
                    Courses
                </button>
        </div>
    </nav>
)
export default Navbar;