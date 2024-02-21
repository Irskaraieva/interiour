import './aside.scss';
import Logo from '../logo/Logo';
import Filters from '../filters/Filters';

const Aside = () => {

    return (
        <aside className='aside'>
            <Logo />
            <Filters />
        </aside>
    );
}

export default Aside;