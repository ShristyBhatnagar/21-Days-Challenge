import * as React from 'react';
import { IMywebpartProps } from './IMywebpartProps';
import Game from './game';


export default class Mywebpart extends React.Component<IMywebpartProps, {}> {
  public render(): React.ReactElement<IMywebpartProps> {
  

    return (
     <div>
       <h1>Here is the content</h1>
       <p>test is done</p>
       <Game/>
     </div>
    );
  }
}
