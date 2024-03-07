import React, { useState } from 'react';
import PanelsForm from './panels_form';
import Panels from './panels';

function PanelsList() {

  const [panels, setPanels] = useState([]);

  const addPanel = panel => {
    console.log("Panel añadido");
    if (panel.texto.trim()) {
      panel.texto = panel.texto.trim();
      const updated_panels = [panel, ...panels];
      setPanels(updated_panels);
    }
  }

  const deletePanel = id => {
    const update_panels = panels.filter(panel => panel.id !== id);
    setPanels(update_panels);
  }
  
  return (
    <>
      <PanelsForm onSubmit={addPanel} />
      <div className='row'>
        {
          panels.map((panel) =>
            <Panels
              key={panel.id}
              id={panel.id} 
              texto={panel.texto}
              deletePanel={deletePanel} 
            />
          ) 
        }
      </div>

    </>
  );    
}

export default PanelsList;