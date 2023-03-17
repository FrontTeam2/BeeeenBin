import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexBetween, flexCenter } from "styles/common";
import ModalPage from "./Modal/modal";

function BasicHeader() {
    const navigate = useNavigate();
    const onNavigateHome = () => {
        navigate("/");
    };

    const [isModal, setIsModal] = useState();
    const cancelModal = () => {
        setIsModal((prev) => !prev);
    };

    return (
        <S.Wrapper>
            <S.Navigator>
                <S.Logo onClick={onNavigateHome}>
                    <img
                        src={`${process.env.PUBLIC_URL}/public_assets/github.png`}
                        alt="Github"
                    />
                </S.Logo>
                <S.Navigation>
                    <h1>REPOSITORY</h1>
                    <div>
                        <button>#Young</button>
                        <button>#Hong</button>
                        <button>#Eun</button>
                        <button>#Nuel</button>
                    </div>
                </S.Navigation>
            </S.Navigator>
            {isModal && <ModalPage cancelModal={cancelModal} />}
            <S.Filter>
                <img
                    src={`${process.env.PUBLIC_URL}/public_assets/search_bk.png`}
                    alt="search"
                />
                <input
                    name={"search"}
                    onClick={cancelModal}
                    autocomplete="off"
                />
            </S.Filter>
        </S.Wrapper>
        /*
        불편한 검색창 UX 개선을 위한 input에 이벤트 발생시,
        모달 컴포넌트를 불러오는 것으로 UI변경 
        */
    );
}

export default BasicHeader;
const Wrapper = styled.div`
    width: 95%;
    max-width: 120rem;
    padding: 2rem 0;
    margin: 0 auto;
    ${flexBetween}
`;

const Navigator = styled.div`
    ${flexCenter}
`;

const Navigation = styled.div`
    & h1 {
        font-size: 2.4rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    & button {
        margin-right: 0.5rem;
    }
`;

const Logo = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    margin-right: 1rem;
    cursor: pointer;

    & img {
        width: 4rem;
    }
`;

const Filter = styled.div`
    ${flexCenter}

    & img {
        width: 2rem;
        margin-right: 1rem;
    }

    & input {
        width: 20rem;
        border-radius: 1.5rem;
        border: 0.1rem solid #a7a7a7;
        text-indent: 1rem;
        box-sizing: border-box;
        height: 3rem;
    }

    @media (max-width: 768px) {
        & input {
            width: 14rem;
        }
    }
`;

const S = {
    Wrapper,
    Navigator,
    Navigation,
    Logo,
    Filter,
};
