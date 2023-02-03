import * as React from 'react';
import styles from './Spfxcrud.module.scss';
import { ISpfxcrudProps } from './ISpfxcrudProps';
import { sp } from '@pnp/sp/presets/all'
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
// import { setLanguage } from 'office-ui-fabric-react';


// const [age,setAge]=React.useState();
export interface IElements{
  id:number;
  fullname: any;
  age:number;
}

export default class Spfxcrud extends React.Component<ISpfxcrudProps, IElements> {
  //Create Item
constructor(props:any)
{
  super(props)
  this.state={
    id:0,
    fullname:"null",
    age: 0,
  }
}
  
  private createItem = async () => {
    try {
     
    //var titlename=this.state.fullname;
    //var age=this.state.age;
      // console.log(y);
      const addItem = await sp.web.lists.getByTitle("EmployeeDetails").items.add({
      
        'Title': this.state.fullname,
        'age': this.state.age,
      });
      console.log(addItem);
      alert(`Item created successfully with ID: ${addItem.data.ID}`);
    }
    catch (e) {
      console.error(e);
    }
  }
 
  
//Get Item by ID
  private getItemById = async () => {
    try {
      const id: number = parseInt(document.getElementById('itemId').innerText);
      if (id > 0) {
        const item: any = await sp.web.lists.getByTitle("EmployeeDetails").items.getById(id).get();
        document.getElementById('fullName').innerHTML = item.Title;
        document.getElementById('age').innerHTML = item.age;
      }
      else {
        alert(`Please enter a valid item id.`);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
 
  
//Get all items
  private getAllItems = async () => {
    try {
      const items: any[] = await sp.web.lists.getByTitle("EmployeeDetails").items.get();
      console.log(items);
      if (items.length > 0) {
        var html = `<table><tr><th>ID</th><th>Full Name</th><th>Age</th></tr>`;
        items.map((item, index) => {
          html += `<tr><td>${item.ID}</td><td>${item.Title}</td><td>${item.age}</td></li>`;
        });
        html += `</table>`;
        document.getElementById("allItems").innerHTML = html;
      } else {
        alert(`List is empty.`);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
 
  
//Update Item
  private updateItem = async () => {
    try {
      const id: number =this.state.id;
      console.log(id);
      if (id > 0) {
        const itemUpdate = await sp.web.lists.getByTitle("EmployeeDetails").items.getById(id).update({
          'Title': this.state.fullname,
          'age': this.state.age,
        });
        console.log(itemUpdate);
        alert(`Item with ID: ${id} updated successfully!`);
      }
      else {
        alert(`Please enter a valid item id.`);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
 
  
//Delete Item
  private deleteItem = async () => {
    try {
      const id: number = this.state.id;
      if (id > 0) {
        let deleteItem = await sp.web.lists.getByTitle("EmployeeDetails").items.getById(id).delete();
        console.log(deleteItem);
        alert(`Item ID: ${id} deleted successfully!`);
      }
      else {
        alert(`Please enter a valid item id.`);
      }
    }
    catch (e) {
      console.error(e);
    }
  }
  public render(): React.ReactElement<ISpfxcrudProps> {
   const onChangeHandler=((e:any)=>{
   this.setState({fullname:e.target.value});
   })

    return (
      <section >
        <div className={styles.spfxCrudPnp}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>Item ID:</div>
                <input type="text" id='itemId' onChange={(e:any)=>this.setState({id:e.target.value})}></input>
              </div>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>Full Name</div>
                <input type="text" id='EmployeeName'   onChange={onChangeHandler}></input>
              </div>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>Age</div>
                <input type="text" id='Age'  onChange={(e:any)=>this.setState({age:e.target.value})}></input>
              </div>
              <div className={styles.itemField}>
                <div className={styles.fieldLabel}>All Items:</div>
                <div id="allItems"></div>
              </div>
              <div className={styles.buttonSection}>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.createItem}>Create</span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.getItemById}>Read</span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.getAllItems}>Read All</span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.updateItem}>Update</span>
                </div>
                <div className={styles.button}>
                  <span className={styles.label} onClick={this.deleteItem}>Delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

