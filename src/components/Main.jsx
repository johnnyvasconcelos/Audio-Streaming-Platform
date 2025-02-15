import React from 'react'
import ItemsArea from './ItemsArea.jsx'
import TitleControls from './TitleControls.jsx'
const Main = () => {
  return (
    <>
    {/* Artistas */}
    <section className="main section space container flex column">
        <TitleControls title="Artistas" />
        <div className="items">
          <ItemsArea />
        </div>
    </section>
    {/* Músicas */}
    <section className="main space-min section container flex column">
        <TitleControls title="Músicas Populares" />
        <div className="items">
          <ItemsArea />
        </div>
    </section>
    </>
  )
}
export default Main