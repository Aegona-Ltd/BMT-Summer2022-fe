import { ReactChild, ReactComponentElement, ReactNode } from "react";
import { Link,  useMatch } from "react-router-dom";
import {memo} from 'react';

interface PropLink {
    to:  string,
    children: ReactNode | ReactChild | ReactComponentElement<any>
}


function LinkNav(props: PropLink) {
    const { to, children } = props;
    const match = useMatch(to);

    const classLink = `linkNav__item d-flex align-items-center py-4 ${match ? 'active' :''}`;

    return ( 
        <li className="linkNav">
            <Link to={{pathname: to}} className = {classLink}>
                {children}
            </Link>
        </li>
     );
}

export default memo(LinkNav);