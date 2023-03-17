import styled from "styled-components";
import { flexCenter } from "styles/common";

function BasicFooter() {
    return <S.Wrapper>Footer</S.Wrapper>;
}

export default BasicFooter;

const Wrapper = styled.div`
    width: 100%;
    height: 4rem;
    background: #eee;
    ${flexCenter}
`;

const S = {
    Wrapper,
};
