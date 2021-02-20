import React from 'react';

import Auxi from '../../containers/hoc/Auxi';

const layout =(props)=> (
    <Auxi>
        <div>Toolbar, SideBar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxi>
);

export default layout;