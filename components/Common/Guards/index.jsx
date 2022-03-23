import { useEffect } from "react";
import { useSelector } from "react-redux";

const Guards = ({ type, fallbackUrl, children }) => {
    const { isLoggedIn, user: {
        profile: {
            publicData: {
                account_type
            }
        }
    } } = useSelector(state => state.auth);

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isLoggedIn) {
                if (account_type != type) {
                    window.location.href = window.location.origin + fallbackUrl;
                }
            } else {
                window.location.href = window.location.origin + fallbackUrl;
            }
        }

    }, [])

    return (
        <>
            {
                isLoggedIn && account_type === type ? children : null
            }

        </>
    );
};

export default Guards;