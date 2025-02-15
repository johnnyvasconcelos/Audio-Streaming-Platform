import React from 'react'
import MusicItem from './MusicItem.jsx';
const ItemsArea = ({items, title, itemsArray, pathId}) => {
  return (
    <>
              <div className="items-area  flex">
                {itemsArray.filter((currentValue, index) => index < items).map((current, id) => (
                    <MusicItem
                    pathId={pathId}
                    {...current}
                    key={`${title}-${id}`}
                    />
                ))}
              </div>
    </>
  )
};
export default ItemsArea