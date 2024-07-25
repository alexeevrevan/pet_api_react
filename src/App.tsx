import * as React from 'react';
import "./App.css";
import {AppBody, Container, Description} from "./Styles/styled";
import {fetchDogsData, fetchDogsSubBreed} from "./lib/api";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {combineReducers} from "redux";
import {useCallback, useEffect, useState} from "react";
import DogForm from "./components/DogForm";
import {useSelector} from "react-redux";
import {RootState} from "./reducers";
import Results from "./components/Results";

function App() {

    const [breedList, setBreedList] = useState(null);
    const [subBreedList, setSubBreedList] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const dogStore = useSelector((state:RootState) => state.app);
    const breedState = dogStore?.breed;
    const imageResultState = dogStore?.imageResults;


    const fetchData = useCallback (async () => {
        await fetchDogsData()
            .then((data) => {
            setBreedList(data?.message);
            setIsLoading(false);
        }).catch((error) => {
            console.error(error);
        });

        if (breedState !== "all") {
            await fetchDogsSubBreed(breedState).then((data) => {
                setSubBreedList(data?.message);
                setIsLoading(false);
            })
        }
    }, [breedState]);



    useEffect(() => {
        fetchData();
    }, [fetchData, breedState]);

    if (isLoading) return <Loader/>
    if (!breedList) return <p>No Dogs Found</p>

    return (
    <Container>
        <Description>
            <ul>
                This is a Dog App built with React JS Using the Dog API
            </ul>
        </Description>
        <AppBody>
            <DogForm
                breedList = {breedList}
                subBreedList = {subBreedList}
                setImages = {setImages}
                setIsLoading = {setIsLoading}
            />

            {imageResultState > 0  && <Results images= {images} />}

        </AppBody>
    </Container>
    )
}

export default App
