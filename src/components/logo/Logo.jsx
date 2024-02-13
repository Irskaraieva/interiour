import './../logo/logo.scss';
import logoCircle from './../../images/photo-content/ellipse.svg';

const Logo = () => {
    return (
        <div className="logo">
            <p className='logo-text'>Interiour
              <img src={logoCircle} alt="img" className='logo-img' />
            </p>          
        </div>
    );
}

export default Logo;