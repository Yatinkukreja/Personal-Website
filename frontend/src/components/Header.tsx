import React, { FC } from 'react';

const Header: FC = () => {
    return(
        <div className="flex justify-between px-40 py-4 sticky top-0 bg-sky-400 bg-opacity-80 backdrop-blur-sm">
            <div className="space-x-4 flex items-end">
                <span className="font-semibold text-4xl">Yatin Kukreja</span>
                <span className="font-medium text-xl"> Projects </span>
                <span className="font-medium text-xl"> Skills </span>
                <span className="font-medium text-xl"> Hobbies </span>
            </div>
            <div className="flex items-end">
                <span className="font-medium text-xl"> Contact Me </span>
            </div>
        </div>
    )
};

export default Header;