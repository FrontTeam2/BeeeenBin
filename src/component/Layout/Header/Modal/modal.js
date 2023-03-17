import styled from "styled-components";
import useInputs from "../useInputs/useInputs";
import theme from "styles/theme";
import { flexCenter } from "styles/common";

function ModalPage({ cancelModal }) {
    const [{ name }, onChange, onReset] = useInputs("");

    return (
        <S.Modal theme={theme}>
            <S.InnerContainer>
                <h2>이슈를 조회하세요.</h2>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/public_assets/search.png`}
                        alt="search"
                    />
                    <input type="text" onChange={onChange} />
                    <button>GO</button>
                </div>
            </S.InnerContainer>
            <button onClick={cancelModal}>X</button>
        </S.Modal>
    );
}

export default ModalPage;

const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;

    & > button {
        position: absolute;
        font-size: 4.8rem;
        color: ${({ theme }) => theme.PALETTE.white};
        background: none;
        top: 2rem;
        right: 2rem;
        cursor: pointer;
    }
`;

const InnerContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.large};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        text-align: center;
        color: ${({ theme }) => theme.PALETTE.white};
        margin-bottom: 2rem;
    }

    & div {
        ${flexCenter}
    }

    & div > img {
        width: 3rem;
        margin-right: 2rem;
    }

    & div > input {
        width: 24rem;
        height: 3rem;
        margin-right: 1rem;
        box-sizing: border-box;
    }

    & div > button {
        height: 3rem;
        box-sizing: border-box;
        border: none;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
        cursor: pointer;
    }
`;

const S = {
    Modal,
    InnerContainer,
};
