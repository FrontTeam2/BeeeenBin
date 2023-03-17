import { Outlet } from "react-router-dom";
import styled from "styled-components";
import BasicFooter from "./Footer/Footer";
import BasicHeader from "./Header/Header";

function Layout() {
    return (
        <S.Wrapper>
            <BasicHeader />
            <Outlet />

            {/* children으로는 자식 못가져옴 */}
            <BasicFooter />
        </S.Wrapper>
    );
}

export default Layout;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #f7f7f7;
`;

const S = {
    Wrapper,
};
