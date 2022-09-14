import { GraphObject } from "../Network/GraphObject";

class CyjsTable {

  private _cyjs: any;

  constructor(cyjs: any) {
    this._cyjs = cyjs
  }

  getRow(graphObject: GraphObject){
    const {id} = graphObject
    
  }
}