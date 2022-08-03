import { ReactChild, ReactComponentElement, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface PropLink {
    to:  string,
    children: ReactNode | ReactChild | ReactComponentElement<any>
}


function LinkNav(props: PropLink) {
    const { to, children } = props
    const location = useLocation()

    const match = location.pathname.includes(to)

    const classLink = `linkNav__item d-flex align-items-center py-4 ${match ? 'active' :''}`

    return ( 
        <li className="linkNav">
            <Link to ={to} className = {classLink}>
                {children}
            </Link>
        </li>
     );
}

export default LinkNav;