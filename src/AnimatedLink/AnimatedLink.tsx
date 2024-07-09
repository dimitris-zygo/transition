import {Link, useNavigate} from "react-router-dom";
import {flushSync} from "react-dom";
import * as React from "react";

export const AnimatedLink = ({ to, children }) => {
    const navigate = useNavigate();

    return (
        <Link
            to={to}
            onClick={(e) => {
                e.preventDefault();
                document.startViewTransition(() => {
                    flushSync(() => {
                        navigate(to);
                    });
                });
            }}
            className="text-white"
        >
            {children}
        </Link>
    );
};
