import React, { FC } from "react";

const Navigation: FC = () => {
    return (
        <aside className="cmp__navigation">
            <nav>
                <ol>
                    <li className="active open">
                        <div>
                            <i className="icon ion-md-globe"></i>
                            <span>All countries</span>
                        </div>
                    </li>
                    <li>
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