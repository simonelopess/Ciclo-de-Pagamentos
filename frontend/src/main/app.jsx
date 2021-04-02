import '../common/template/dependencias'
import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'

export default props =>

(
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <h1>Coteudo</h1>
        </div>
        <Footer />
    </div>
)