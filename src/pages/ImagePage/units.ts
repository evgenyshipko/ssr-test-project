import sneakers from '@images/sneakers.jpg';
import styled from '@emotion/styled';

export const MainBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100%;
    background-color: lightgray;
`;

export const SneakerImage = styled.div`
    height: 400px;
    width: 400px;
    background-image: url(${sneakers});
`;
