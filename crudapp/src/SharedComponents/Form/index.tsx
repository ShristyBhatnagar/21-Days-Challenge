import React from 'react'
import { Nav } from '@fluentui/react'
import { NavBasicExample } from '../Navbar'
import {
    provideFluentDesignSystem,
    fluentDialog
} from "@fluentui/web-components";
provideFluentDesignSystem()
    .register(
        fluentDialog()
    );
    
provideFluentDesignSystem().register(fluentDialog());

    let dialogElement: fluentDialog;
dialogElement = document.getElementById('defaultDialog') as fluentDialog;

const Form = () => {
  return (
    <div><NavBasicExample/>
   
  

  </div>
  )
}

export default Form