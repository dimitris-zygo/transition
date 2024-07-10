import {Link, useNavigate} from "react-router-dom";
import {flushSync} from "react-dom";
import * as React from "react";

function isViewTransitionSupported(){
    return document.startViewTransition;
}

export const AnimatedLink = ({ to, children }) => {
    const navigate = useNavigate();

    return (
        <Link
            to={to}
            onClick={(e) => {
                e.preventDefault();
                if (isViewTransitionSupported()){
                    document.startViewTransition(() => {
                        flushSync(() => {
                            navigate(to);
                        });
                    });
                } else {
                    navigate(to);
                }
            }}
            className="text-white"
        >
            {children}
        </Link>
    );
};
