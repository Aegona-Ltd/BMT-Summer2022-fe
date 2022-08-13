import Header from '../../Home/comp_home/Header';
import Bottom from '../../Home/comp_home/Bottom';
import '../../../styles/Defautl.css';

function DefaultLayout({ children}) {
    return (
        <div>
            <Header></Header>
            <div className='contentLayout'>
                {children}
            </div>
            <div className='dev_bot'>
            <Bottom></Bottom>
            </div>

        </div>
    );
}

export default DefaultLayout;