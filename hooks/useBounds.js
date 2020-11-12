import { useState } from 'react';

const useMapBounds = (google) => {
    const [bounds, setStateBounds] = useState(new google.maps.LatLngBounds());
    const setBounds = terrains => {
        const tempBounds = new google.maps.LatLngBounds();
        for (const t of terrains) {
            const { lat, lng } = t;
            tempBounds.extend({ lat, lng });   
        }
        setStateBounds(tempBounds);
    }
    return [bounds, setBounds];
}

export default useMapBounds;