import React from 'react'
import MagicButton from './ui/MagicButton'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

type Item = {
    title: string;
    description: string;
};

const items:Item[] = [
    {title: 'Item 1', description: 'This is item 1'},
];

const Grid = () => {
  return (
    <section>
        <BentoGrid>
            {items.map((item, i)=>(
                <BentoGridItem key={i} title={item.title} description={item.description} />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid