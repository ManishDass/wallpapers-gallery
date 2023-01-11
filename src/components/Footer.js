import React from 'react'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import style from '../style/footer.module.css'

const Footer = () => {
    return (
        <div>
            <div className={style.footerWrapper}>
            <p>© 2023 Wallpaper-Gallery</p>
            <section className={style.linkWrapper}>
            <Link to='/'>Terms of Use</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>License</Link>
            <Link to='/'>Imprint</Link>
            </section>
            <select name="language" id="language">
                <option value="volvo">English</option>
                <option value="saab">Português</option>
                <option value="mercedes">Español</option>
                <option value="audi">Deutsch</option>
            </select>
            </div>
        </div>
    )
}

export default Footer