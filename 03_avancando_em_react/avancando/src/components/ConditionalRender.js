import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(false);

  return (
    <div>
        <h1>ConditionalRender</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>se x for false, sim!</p>}

    </div>
  );
};

export default ConditionalRender