import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    return (
        <>
        <h3 className='animate__animated animate__flipInX animate__delay-0.5s'>{category}</h3> 

        { loading && <p className='animate__shakeX animate__repeat-2'>Cargando..</p>}

        <div className='card-grid'>
            <ol className='gif-cards'>
                {images.map(img => 
                    <GifGridItem
                        key={img.id}
                        {...img}
                    /> )}
            </ol>
        </div>
        </>
  )
}
