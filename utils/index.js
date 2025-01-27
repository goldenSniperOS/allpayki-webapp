import { useState } from 'react';

export const getUserGeolocation = async () => {
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(
            (position) =>
                resolve({ lat: position?.coords?.latitude, lng: position?.coords?.longitude }),
            (err) => reject(err.message)
        );
    });
};

export const useMapBounds = (google) => {
    const [bounds, setStateBounds] = useState(new google.maps.LatLngBounds());
    const setBounds = (terrains) => {
        const tempBounds = new google.maps.LatLngBounds();
        for (const t of terrains) {
            const { lat, lng } = t;
            tempBounds.extend({ lat, lng });
        }
        setStateBounds(tempBounds);
    };
    return [bounds, setBounds];
};