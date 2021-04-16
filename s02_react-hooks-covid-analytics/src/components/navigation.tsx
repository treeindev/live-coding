import React, { FC } from "react";

const Navigation: FC<any> = ({section, activate}) => {
    return (
        <aside className="cmp__navigation">
            <nav>
                <ol>
                    <li className={section === "all" ? "active" : ""} onClick={()=>{activate("all")}}>
                        <div>
                            <i className="icon ion-md-globe"></i>
                            <span>All countries</span>
                        </div>
                    </li>
                    <li className={section === "favourites" ? "active" : ""} onClick={()=>{activate("favourites")}}>
                        <div>
                            <i className="icon ion-ios-bookmark"></i>
                            <span>Favourites</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </aside>
    )
}

export default Navigation;