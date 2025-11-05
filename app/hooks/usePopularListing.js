import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePopularListing = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularListing = async () => {
            try {
                const response = await axios.get('/popular-listing-vehicles');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularListing();
    }, []);

    return { data, loading, error };
};