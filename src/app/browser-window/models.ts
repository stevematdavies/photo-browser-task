export interface Image {
  kind?: 'Image';
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface Album {
  kind?: 'Album';
  userId: number;
  id: number;
  title: string;
}

export interface Albums {
  kind?: 'Albums';
  collection: Album[];
}

export interface Geo {
  kind?: 'Geo';
  lat: string;
  lng: string;
}

export interface Address {
  kind?: 'Address';
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}


export interface User {
  kind?: 'User';
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  company: Company;
}

export interface Company {
    kind?: 'Company';
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Context {
  shape: Image | User | Album | Albums | Company | Geo | Address;
}

export interface ContextDAO {
  context: Context;
  kind: string;
}


