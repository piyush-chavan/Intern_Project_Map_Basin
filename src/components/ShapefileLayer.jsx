import shp from 'shpjs';
import { GeoJSON ,useMap} from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet'

export function ZoomToLayer({ geojson }) {
  const map = useMap();

  useEffect(() => {
    if (geojson) {
      const layer = L.geoJSON(geojson);
      map.fitBounds(layer.getBounds());
    }
  }, [geojson, map]);

  return null;
}


export function ShapefileLayer({ shapefileUrl }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    const fetchShapefile = async () => {
      try {
        const geojson = await shp(shapefileUrl);
        setGeojsonData(geojson);
      } catch (err) {
        console.error("Failed to load shapefile", err);
      }
    };

    fetchShapefile();
  }, [shapefileUrl]);

  return geojsonData ? (
    <>
      <GeoJSON data={geojsonData} />
      <ZoomToLayer geojson={geojsonData} />
    </>
  ) : null;
}
