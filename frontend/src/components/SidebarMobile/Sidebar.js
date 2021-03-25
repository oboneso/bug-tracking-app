import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import style from './Sidebar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ListItem from '../ListItem/ListItem'
import routes from '../../routes'
import { sidebarStatus } from '../../actions/navigationActions'

export const listItemStyles = {
    liStyles: {
        position: "relative",
        width: "100%",
        listStyle: "none",
    },
    hoverLiStyles: {
        background: "#ea1d63",
        position: "relative",
        width: "100%",
        listStyle: "none",
    },
    aStyles: {
        position: "relative",
        // display: "block",
        width: "100%",
        display: "flex",
        textDecoration: "none",
        color: "#fff",
    }, 
    iconStyles: {
        position: "relative",
        display: "block",
        minWidth: "60px",
        height: "60px",
        lineHeight: "60px",
        textAlign: "center",
    },
    faStyles: {
        fontSize: "24px",
    },
    titleStyles: {
        position: "relative",
        display: "block",
        padding: "0 10px",
        height: "60px",
        lineHeight: "60px",
        textAlign: "start",
        whiteSpace: "nowrap",
    }
}

const Sidebar = () => {
    const [navigation, setNavigation] = useState(false)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sidebarStatus(navigation))
    }, [dispatch, navigation])
        
    return (
        <>
            <div
                onMouseEnter={() => {
                    setNavigation(true);
                }}
                onMouseLeave={() => {
                    setNavigation(false)
                }}
                className={navigation ? style.active : style.navigation}>
                <ul className={style.ul}>
                    {routes.map(route => (
                        <ListItem
                            key={route.title}
                            icon={route.icon}
                            component={route.component}
                            title={route.title}
                            link={route.path}
                            exact={route.exact ? true : false} />
                    ))}
                </ul>
            </div>
            <div
                onClick={() => navigation ? setNavigation(false) : setNavigation(true)}
                className={navigation ? style.x : style.bars}>
                {navigation ?
                        <FontAwesomeIcon className={style.xIcon} icon={faTimes} />
                    :   <FontAwesomeIcon className={style.icon} icon={faBars} /> 
                }               
            </div>
        </>
    )
}

export default Sidebar
