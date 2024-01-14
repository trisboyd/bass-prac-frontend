import axios from 'axios';
import { useState } from 'react';

import { songType, songUpdateType } from '../types/types';

// this can be used for an individual song or multiple
export const useGet = (url: string) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    async function getData() {
        await axios.get(url)
        .then(response => {
            if (response.data) {
                setData(response.data);
            }
        })
        .catch(error => {
            setError(error);
        });
    }
}

export const usePut = (url: string, putSong: songType) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    async function putData() {
        await axios.put(url, putSong)
        .then(response => {
            if (response.data) {
                setData(response.data);
            }
        })
        .catch(error => {
            setError(error);
        });
    }
}


// to make this generic over posts, we need to trade out the songType for a
// union type based on whatever other post types will be added
export const usePost = (url: string, update: songUpdateType) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    async function postData() {
        await axios.post(url, update)
        .then(response => {
            if (response.data) {
                setData(response.data);
            }
        })
        .catch(error => {
            setError(error);
        });
    }
}