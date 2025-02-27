'use client';

import * as React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

// Definir la interfaz para las coordenadas de un marcador
interface MarkerData {
    longitude: number;
    latitude: number;
    link?: string; // Enlace opcional para el marcador
}

// Definir las props del componente MapView
interface MapViewProps {
    initialViewState: {
        longitude: number;
        latitude: number;
        zoom: number;
    };
    markers: MarkerData[]; // Array de marcadores
}

export default function MapView({ initialViewState, markers }: MapViewProps) {
    return (
        <div className="relative">
            <Map
                mapboxAccessToken="pk.eyJ1Ijoib2xpdmExMjMiLCJhIjoiY2wzdDZzMHh1MXh6ajNib2VhcHR4dWx3ZSJ9.e1SYRWtDEVsfVaId3w5tAg"
                initialViewState={initialViewState}
                style={{ width: '100%', height: 600 }}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                scrollZoom={false}
            >
                {/* Controles de zoom y rotación */}
                <NavigationControl position="top-right" />

                {/* Renderizar marcadores dinámicamente */}
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                    >
                        {marker.link ? (
                            <Link href={marker.link} target="_blank">
                                <FaMapMarkerAlt className="text-lg text-red-500 cursor-pointer" />
                            </Link>
                        ) : (
                            <FaMapMarkerAlt className="text-lg text-red-500" />
                        )}
                    </Marker>
                ))}
            </Map>
        </div>
    );
}