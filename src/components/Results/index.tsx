import * as React from "react";
import DogInfo from "./DogInfo";
import Images from "./Images";
import { Container } from "./styles";

type Props = {
    images: any
};


function Results ({images}:Props) {
    return (
        <Container>
            <h1>Gallery</h1>
            <DogInfo/>
            <Images images={images}></Images>
        </Container>
    )
}


export default Results;