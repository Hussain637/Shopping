import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import AttachmentsNav from './attachmentsNav';
export default function NavBar() {
  return (
   <>

    <Navbar expand="lg" className="style_nav_bg position-sticky top-0 p-0">
      <Container>
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto navv position-relative">
          <NavDropdown className='text-light drop_padding' title="أقسام التسوق-Store" id="basic-nav-dropdown">
              <h5 className='text-center'>أفضل الأقسام</h5>
             <NavDropdown.Item href="#action/3.1" className='list1 fw_bold_hover d-flex justify-content-between'>
              <span><span className="bi bi-house-door p-1"></span>منتجات المنزلية</span><span className="bi bi-caret-right"></span>
                <ul className='Household_products  position-absolute top-0 style_show_list'>
                 <Nav.Link as={Link} to={"/FurnitureAndTools"} className='hover_link'><li>الأثاث و الأدوات</li></Nav.Link> 
                  <Nav.Link as={Link} to={"/Kitchen_and_home_appliances"} className='hover_link'><li>المطبخ والأجهزة المنزلية</li> </Nav.Link>
                </ul>
             </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className='list2 fw_bold_hover d-flex justify-content-between'>
             <span><span className="bi bi-bucket"></span>الأزياء</span><span className="bi bi-caret-right"></span>
              
                <ul className=' fashion position-absolute style_show_list top-0'>
                  <Nav.Link  as={Link} to={"/PageWomensFashion"}><li>الأزياء النسائية</li></Nav.Link>
                  <Nav.Link as={Link} to={"/PageMensFashion"}><li>أزياء رجالية</li></Nav.Link>
                  <Nav.Link  as={Link} to={"/PageChildrensFashion"}><li>أزياء أطفال</li></Nav.Link>
                </ul>
              </NavDropdown.Item>
               <NavDropdown.Item as={Link} to={"/PageSupermarket"} className='list3 fw_bold_hover'>
                <sapn  className="bi bi-shop p-1"></sapn>السوبر ماركت</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/PageToysAndChildrensProducts"} className='list6 fw_bold_hover'>
                <span  className="bi bi-controller p-1"></span><span>الألعاب ومنتجات أطفال</span></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={"/pageElectronicsAndTelevisions"} className='list4 fw_bold_hover'>
              <span  className="bi bi-lightning-charge p-1"></span>إلكترونيات و أجهزة التلفزيون
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/PageComputersAndOfficeSupplies"} className='list5 fw_bold_hover'><span className="bi bi-display p-1"></span>أجهزةالكمبيوتر والمستلزمات المكتبية</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/PageAccessoriesAndSmartPhones"} className='list6 fw_bold_hover'><span className="bi bi-phone-flip p-1"></span>الإكسسوارت والهواتف الذكية</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="" className="text-light">الصفحة الرئيسية</Nav.Link>
          </Nav>
          <Nav className='px-3'>
          <Nav.Link href="#section1" className="text-light">
            <span className='link_Section'>
            Discounts
            </span>
          </Nav.Link>
          <Nav.Link href="#section2" className="text-light">
          <span className='link_Section'>
            Discounts
            </span>
          </Nav.Link>
          <Nav.Link href="#section3" className="text-light">
          <span className='link_Section'>
           bests goods
            </span>
          </Nav.Link>
            </Nav>
          <Nav>
          <Nav.Link href="" className="text-light">
          <AttachmentsNav/>
          </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}