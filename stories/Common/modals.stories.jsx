/* eslint-disable import/no-anonymous-default-export */
import { useDispatch } from "react-redux";
import { LoginModal } from "../../components/Common";
import { setShowLoginModal } from "../../store/slices/modalsSlice";

export default {
    title: "Common/Modals",

}

export const LoginModalA = () => {
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => dispatch(setShowLoginModal())}>login</button>
            <LoginModal />
        </>
    )
}