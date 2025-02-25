import * as React from "react";
import { Container } from '../Images/styles';
import {ImageContainer} from "./ImageContainer";

interface Props {
    images: string[];
}

function Images({ images }: Props) {
    return (
        <Container>
            {images?.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image} alt="Dog" loading="lazy" />
                </ImageContainer>
            ))}
        </Container>
    );
}

export default Images;
