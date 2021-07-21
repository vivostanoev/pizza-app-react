import styled from "styled-components"
import { Title } from "../Styles/title.js"

export const FoodGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    padding-bottom: 40px;
`

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Food = styled.div`
    height: 120px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({ img }) => `url(${img});`}
    background-position: center;
    background-size: cover;
    margin-top:5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: .1s;
    filter: contrast(75%);
    border-radius: 7px;
    box-shadow: 0px 0px 3px 1px grey;
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        margin-top:0px;
        margin-bottom:5px;
        box-shadow: 0px 5px 5px 1px grey;
    }
`