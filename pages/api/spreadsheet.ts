// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
const SPREADSHEET_ID = '1oS09BXWFmuIDjkTkhcJ_zH54XEJD0x5NRf65DEiBHs8';
const SHEET_ID = 0;
const CLIENT_EMAIL = 'allpayki-spreadsheet@allpayki.iam.gserviceaccount.com';
const PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJbYUctDh5iaKC\nNcG7jjorm/F/BeTul/VIgySFNc9eMjvAX51QzzbOyW9eZoCSUOmsNMqK1ZOYz8XI\n3GwnpiAn6MDQTMjr+1UHX/sYMMFzg2c3H8Necm3kU4EKSUgw7hSK4BUY+WqLid47\nQps/j06IKrmtKpswTJqvrYaTcQ7DCoxaXPust8wXuti0SxK3jzlafqjdU/SMZQ4Y\nTL/J/syFN3j0TzariBGL+iHEI+lB35x/kWlYETNqX6gSLOZp2FHPZYKG2apUSyH1\nEUh7Xf3eaUQ0FAYqhizUbVUvR2TX69hmkXQ0r1solRmdmZULyHzydOZqtO8zIve8\ndj1W1U7pAgMBAAECggEAX/6a3pghBgMK+KUn4/ufS2MxT0j+1pqC4gDl6bpATnMA\nOOkYbweh5iDnu4R8J7757gDmug2ZHs1+RACQZsDsODjbkynU42nPFwmt/9RUjXmF\nOicgE6XTK2qEZ+OOzQrZrWmnhFRxa3jT+Uf/9uWUFp7OCHHyra0EV08KgL/zug03\nbVw45eZuR5ezpHIIKQm3cXg4mQH+PLDBSvK5ev3amienfGCinJ9ptl9pLeFGfIID\n8fNACS8qkrcaVieFUu/XDmbqOeFYQdudSfab/KuHayrceagbnIupNWhTw12L0x1A\n2phbsKdAt9G65EiSjO3oyhlqqfdZRh3vcZl4GetyVQKBgQDk1S/gGwPbE+GoH4Zx\nixftGJwwlaaCp7xuB9MLtdlEAI6AWY19rCeq/S4acyJaHwh3prgiKJy2lhhF5B2S\naISEKT7h/7lRFVT5nSmv4W/2cDHGUoD0Zqny3hDyKg6T0BJJuwpELDV3piqmtRUD\nq18bqfUXhDecUwfkNNfvhVw0LwKBgQDhV20rSfkV126Tlb8Cklc+65ILrug2JMNl\nIEUUIqS2ffg5wgZkhdKoEM7mqMttPMDlIMmXFLVU8CIQioRguwRMN32gmFeqVw1P\ntuTuwprG4LHE+RXZkq/9/QD6flSNQcYImg9Hf93AVnzBAQeW8jLC2Hfmi0NKdC5o\nOkLK/+SwZwKBgA2G1JeowSeYG0S26FmZ4UYwqDru/bLHe4n9iGouy7MLXWEU6ho9\nrPKcmLcTizpMj1GTV1sdj3XzlWe8PktDRmIRlhgB59B1NFq1AZvV9apZo3eXtOu9\njdo/aj0GY2o1aH9XQRoaiuaRuf+0wJNA9BRMjaJgPHFPLy48OW99MKAdAoGBALW/\nB8PUY9vj58GNE4QFd+y9nwthRNT2jcnwXwbAckzmCOC8xt8ouCDpfZa4KWqvh3zG\nFxGNmDsreq4QqnhCHlNCpkZy2LIAiDH092xC9QbWj0qpA6B6GQwnlTRz08oidJDX\ngN9QGBBbMT+RjweFzL8uTHZbeCiC0DMsWlbUUSSdAoGAEh22ltSMsTt7H2HVeK32\nahNwvhFJ4oB1H0zAM3QJ26+ubFeoJLuWPIphYyT2BtV5UR3c0TwI5Htk2SFi/OIF\nLkafj5BdpLqThA1Fd9RyLID4SkwSvaU3hmosSDKyy1JwFluyenQJx11Zyr7YtqZ5\nPGxtQvRwtvwnO4L92/Gjy4c=\n-----END PRIVATE KEY-----\n';

const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

class TerrainOffer {
	id: string = null;
	situation: string = null;
  	entity: string = null;
	contact: string = null;
	charge: string = null;
	phone: string = null;
	price: string = null;
	area: number = 0;
	dimensions: string = null;
	address: string = null;
	details: string = null;
	electricity: boolean = false;
	water: boolean = false;
	sewage: boolean = false;
	claro: boolean = false;
	movistar: boolean = false;
  	link: string = null;
  
	constructor (row: any) {
		this.id = ID();
		this.situation = row.Situacion;
		this.contact = row.Persona_a_Cargo;
		this.charge = row.Cargo;
		this.phone = row.Contacto;
		this.price = row.Precio;
		this.address = row.Direccion;
		this.area = row.Area;
		
		this.entity = row.Entidad;
		this.dimensions = row.Dimensiones;
		this.details = row.Detalles;
		this.electricity = row.Luz === 'Sí';
		this.water = row.Agua === 'Sí';
		this.sewage = row.Desague === 'Sí';
		this.claro = row.Claro === 'Sí';
		this.movistar = row.Movistar === 'Sí';
		this.link = row.Enlace;
	}
}

export class Terrain {
	id: string = null;
	lat: number = 0;
	lng: number = 0;
	projectName: string = "Sin Nombre";
	offers: Array<TerrainOffer> = [];

	constructor(lat: number, lng: number, row: any) {
		this.id = ID();
		this.lat = lat;
		this.lng = lng;
		this.projectName = row.Nombre || "Sin Nombre";
		this.offers = [new TerrainOffer(row)];
	}

	public isEqual (lat, lng) {
		return this.lat === lat && this.lng === lng;
	}
}

class TerrainList {
	terrains: Array<Terrain> = [];
	  
	//No Location Terrains
	noLocationTerrains: Array<Terrain> = [];
  
  	constructor(rows: Array<Array<string>>) {
    	for (const row of rows) {
      		this.addTerrain(row);
    	}
  	}

	public addTerrain (row: any): void {
		const lat = parseFloat(row.Latitud?.replace(',', '.') || 0.0);
		const lng = parseFloat(row.Longitud?.replace(',', '.') || 0.0);
		if(!lat && !lng){
			this.noLocationTerrains.push(new Terrain(lat, lng, row));
			return;
		}
		const index = this.indexOf(lat, lng);
		if(index === -1)
			this.terrains.push(new Terrain(lat, lng, row));
		else
			this.terrains[index].offers.push(new TerrainOffer(row))
	}
  
	public indexOf(lat: number, lng: number): number {
		for (let i = 0; i < this.terrains.length; i++) {
			const terrain = this.terrains[i];
			if(terrain.isEqual(lat, lng))
				return i;
		}
		return -1
	}
}

const getTerrainsData = async () => {
	try {
		// spreadsheet key is the long id in the sheets URL
		const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
		await doc.useServiceAccountAuth({ client_email: CLIENT_EMAIL, private_key: PRIVATE_KEY });
		// loads document properties and worksheets
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[SHEET_ID];
		const rows = await sheet.getRows();
		const terrainList = new TerrainList(rows);
		return terrainList.terrains;
	} catch (e) {
		console.error('Error: ', e);
		return [];
	}
};

export default async (req, res) => {
	res.statusCode = 200;
	const data = { error: false, obj: [] };
	try {
		data.error = false;
		data.obj = await getTerrainsData();
	} catch (error) {
		console.error(error);
		data.error = true;
	}
	res.json(data);
};
