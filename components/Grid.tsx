import React from 'react'
import MagicButton from './ui/MagicButton'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'


const Grid = () => {
  return (
    <section>
        <BentoGrid>
            {gridItems.map((item, i)=>(
                <BentoGridItem key={i} id={item.id} title={item.title} description={item.description} />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid