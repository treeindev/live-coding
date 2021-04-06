import React, { FC } from "react";

const Header: FC = () => {
    return (
        <header className="cmp__header">
            <div className="logotype">
            </div>
            <form>
                <div className="cmp__searcher active">
                    <input type="text" placeholder="Search..." />
                    <i className="look icon ion-ios-search"></i>
                    <i className="close icon ion-ios-close-circle-outline"></i>
                </div>
            </form>
            <div className="user">
                <img src="https://images.megapixl.com/4707/47075627.jpg" />
                <span>Ragnar Lodbrok</span>
                <i className="icon ion-ios-settings secondary"></i>
                <div className="cmp__dropdown"></div>
            </div>
        </header>
    );
}

export default Header;