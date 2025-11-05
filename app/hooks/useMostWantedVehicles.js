import { useState, useEffect } from 'react';
import axiosClient from '@/utils/axiosClient';

// type = 'all' | 'new' | 'used' 
export const useMostWantedVehicles = (type = 'all') => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMostWantedVehicles = async () => {
            try {
                const { data } = await axiosClient.get(`/most-wanted-vehicles?type=${type}`);
                setResponse(data);
            } catch (err) {
                console.error("Error in useMostWantedVehicles:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMostWantedVehicles();
    }, []);

    return { response, error, loading };
};
