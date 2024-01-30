export interface Data {
  id : number;
  name : string;
  details: string;
  rating : number;
  action : boolean;
}


export const DATA : Data[] = [
  {id: 1, name: "Data1", details: "Details1", rating: 5, action: true},
  {id: 2, name: "Data2", details: "Details2", rating: 4, action: false},
  {id: 3, name: "Data3", details: "Details3", rating: 3, action: true},
  {id: 4, name: "Data4", details: "Details4", rating: 2, action: true},
  {id: 5, name: "Data5", details: "Details5", rating: 1, action: false}
]
