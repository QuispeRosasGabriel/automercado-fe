import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetVehicles = (initialFilters = {}, initialPage = 1, pageSize = 10) => {
    const [vehicles, setVehicles] = useState([]);
    const [filters, setFilters] = useState(initialFilters);
    const [page, setPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchVehicles = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('/vehicles', {
                params: {
                    ...filters,
                    page,
                    pageSize,
                },
            });
            
            setVehicles(response.data.vehicles);
            setTotalPages(response.data.totalPages);
        } catch (err) {
            setError(err.message || 'An error occurred while fetching vehicles.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, [filters, page]);

    const updateFilters = (newFilters) => {
        setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
        setPage(1); // Reset to the first page when filters change
    };

    const goToPage = (newPage) => {
        setPage(newPage);
    };

    return {
        vehicles,
        filters,
        page,
        totalPages,
        loading,
        error,
        updateFilters,
        goToPage,
    };
};
