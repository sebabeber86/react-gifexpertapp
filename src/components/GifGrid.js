// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItm } from './GifGridItm';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>
            { loading && <p className="card-grid animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                { 
                    images.map( img => (
                        <GifGridItm 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}