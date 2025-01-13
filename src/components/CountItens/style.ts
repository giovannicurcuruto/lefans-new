import { motion } from "framer-motion";
import styled from "styled-components";

export const GridCounterdiv = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    height: 244px;
    color: #BE945E;
       
    padding-left: 160px;
    padding-right: 333px;
    padding-top: 100px;
    width: 100%;

    h3{
        font-size: 48px;
    }

    @media (max-width: 768px) {
        grid-template-columns: none;
        grid-template-rows: 2fr 1fr 1fr;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;

        h3{
            
            font-size: 35px;
            padding-bottom: 15px;
        }
    }
`;

export const Itemdiv = styled.div`
    margin: 0 auto;
    text-align: center;
    h4{
        font-size: 24px;
    }

    @media (max-width: 768px) {
        h4{
            font-size: 17px;
        }
    }
`

export const StyledMotionDiv = styled(motion.div)`
    font-size: 55px;
    font-weight: bold;
    color: #BE945E;

    @media (max-width: 768px) {
        font-size: 35px;
    }
`;