import { NarmadaGeoJson } from '../ShapeGeoJSON data/basin-shapes/NarmadaGeoJson'
import { GodavariGeoJson } from '../ShapeGeoJSON data/basin-shapes/GodavariGeoJson'
import { Andaman_and_nicobar } from '../ShapeGeoJSON data/basin-shapes/Andaman_and_nicobar'
import { Brahmani_Baitarni } from '../ShapeGeoJSON data/basin-shapes/Brahmani_Baitarni'
import { Barak_and_others } from '../ShapeGeoJSON data/basin-shapes/Barak_and_others'
import { Area_of_inland_in_rajasthan } from '../ShapeGeoJSON data/basin-shapes/Area_of_inland_drainage_in_rajasthan'
import { ganga } from '../ShapeGeoJSON data/basin-shapes/GANGA';
import { krishna } from '../ShapeGeoJSON data/basin-shapes/KRISHNA';
import { Cauvery } from '../ShapeGeoJSON data/basin-shapes/CAUVERY';
import { indus } from '../ShapeGeoJSON data/basin-shapes/INDUS';
import { lakshdweep } from '../ShapeGeoJSON data/basin-shapes/Lakshwadeep';
import { jammu_kashmir } from '../ShapeGeoJSON data/basin-shapes/Jammu_and_kashmir';
import { Bramhputra } from '../ShapeGeoJSON data/basin-shapes/BRAHMAPUTRA';
import { east_flowing_rivers_between_mahanadi_and_pennar } from '../ShapeGeoJSON data/basin-shapes/east_flowing_rivers_between_mahanadi_and_pennar'
import { East_flowing_river_between_pennar_and_kanyakumari } from '../ShapeGeoJSON data/basin-shapes/East_flowing_river_between_pennar_and_kanyakumari'

export const basins = [
    {
        name: "Narmada",
        geojson: NarmadaGeoJson
    },
    {
        name: "Godavari",
        geojson: GodavariGeoJson
    },
    {
        name: "Andaman and Nicobar",
        geojson: Andaman_and_nicobar
    },
    {
        name: "Barak and others",
        geojson: Barak_and_others,
    },
    {
        name: "Area of Inland in Rajasthan",
        geojson: Area_of_inland_in_rajasthan,
    },
    {
        name: "Brahmani Baitarani",
        geojson: Brahmani_Baitarni,
    },
    {
        name: "Brahmaputra",
        geojson: Bramhputra,
    },
    {
        name: "Lakshadweep",
        geojson: lakshdweep,
    },
    {
        name: "Cauvery",
        geojson: Cauvery,
    },
    {
        name: "Ganga",
        geojson: ganga,
    },
    {
        name: "Krishna",
        geojson: krishna,
    },
    {
        name: "Indus",
        geojson: indus,
    },
    {
        name: "Jammu & Kashmir",
        geojson: jammu_kashmir,
    },
    {
        name: "East Flowing Rivers Between Mahanadi And Pennar",
        geojson: east_flowing_rivers_between_mahanadi_and_pennar,
    },
    {
        name: "East Flowing Rivers Between Pennar And Kanyakumari",
        geojson: East_flowing_river_between_pennar_and_kanyakumari,
    }
]