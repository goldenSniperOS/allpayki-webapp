// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
const SPREADSHEET_ID = '1oS09BXWFmuIDjkTkhcJ_zH54XEJD0x5NRf65DEiBHs8';
const SHEET_ID = 0;
const CLIENT_EMAIL = 'allpayki-spreadsheet@allpayki.iam.gserviceaccount.com';
const PRIVATE_KEY =
  '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJbYUctDh5iaKC\nNcG7jjorm/F/BeTul/VIgySFNc9eMjvAX51QzzbOyW9eZoCSUOmsNMqK1ZOYz8XI\n3GwnpiAn6MDQTMjr+1UHX/sYMMFzg2c3H8Necm3kU4EKSUgw7hSK4BUY+WqLid47\nQps/j06IKrmtKpswTJqvrYaTcQ7DCoxaXPust8wXuti0SxK3jzlafqjdU/SMZQ4Y\nTL/J/syFN3j0TzariBGL+iHEI+lB35x/kWlYETNqX6gSLOZp2FHPZYKG2apUSyH1\nEUh7Xf3eaUQ0FAYqhizUbVUvR2TX69hmkXQ0r1solRmdmZULyHzydOZqtO8zIve8\ndj1W1U7pAgMBAAECggEAX/6a3pghBgMK+KUn4/ufS2MxT0j+1pqC4gDl6bpATnMA\nOOkYbweh5iDnu4R8J7757gDmug2ZHs1+RACQZsDsODjbkynU42nPFwmt/9RUjXmF\nOicgE6XTK2qEZ+OOzQrZrWmnhFRxa3jT+Uf/9uWUFp7OCHHyra0EV08KgL/zug03\nbVw45eZuR5ezpHIIKQm3cXg4mQH+PLDBSvK5ev3amienfGCinJ9ptl9pLeFGfIID\n8fNACS8qkrcaVieFUu/XDmbqOeFYQdudSfab/KuHayrceagbnIupNWhTw12L0x1A\n2phbsKdAt9G65EiSjO3oyhlqqfdZRh3vcZl4GetyVQKBgQDk1S/gGwPbE+GoH4Zx\nixftGJwwlaaCp7xuB9MLtdlEAI6AWY19rCeq/S4acyJaHwh3prgiKJy2lhhF5B2S\naISEKT7h/7lRFVT5nSmv4W/2cDHGUoD0Zqny3hDyKg6T0BJJuwpELDV3piqmtRUD\nq18bqfUXhDecUwfkNNfvhVw0LwKBgQDhV20rSfkV126Tlb8Cklc+65ILrug2JMNl\nIEUUIqS2ffg5wgZkhdKoEM7mqMttPMDlIMmXFLVU8CIQioRguwRMN32gmFeqVw1P\ntuTuwprG4LHE+RXZkq/9/QD6flSNQcYImg9Hf93AVnzBAQeW8jLC2Hfmi0NKdC5o\nOkLK/+SwZwKBgA2G1JeowSeYG0S26FmZ4UYwqDru/bLHe4n9iGouy7MLXWEU6ho9\nrPKcmLcTizpMj1GTV1sdj3XzlWe8PktDRmIRlhgB59B1NFq1AZvV9apZo3eXtOu9\njdo/aj0GY2o1aH9XQRoaiuaRuf+0wJNA9BRMjaJgPHFPLy48OW99MKAdAoGBALW/\nB8PUY9vj58GNE4QFd+y9nwthRNT2jcnwXwbAckzmCOC8xt8ouCDpfZa4KWqvh3zG\nFxGNmDsreq4QqnhCHlNCpkZy2LIAiDH092xC9QbWj0qpA6B6GQwnlTRz08oidJDX\ngN9QGBBbMT+RjweFzL8uTHZbeCiC0DMsWlbUUSSdAoGAEh22ltSMsTt7H2HVeK32\nahNwvhFJ4oB1H0zAM3QJ26+ubFeoJLuWPIphYyT2BtV5UR3c0TwI5Htk2SFi/OIF\nLkafj5BdpLqThA1Fd9RyLID4SkwSvaU3hmosSDKyy1JwFluyenQJx11Zyr7YtqZ5\nPGxtQvRwtvwnO4L92/Gjy4c=\n-----END PRIVATE KEY-----\n';

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

const getTerrainsData = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[SHEET_ID];
    await sheet.loadCells('A1:U50');
    sheet._cells.shift();
    const data = sheet._cells.map((row) => {
      return {
        id: ID(),
        situation: row[0]._rawData.formattedValue,
        entity: row[1]._rawData.formattedValue,
        projectName: row[2]._rawData.formattedValue,
        contact: row[3]._rawData.formattedValue,
        charge: row[4]._rawData.formattedValue,
        phone: row[5]._rawData.formattedValue,
        price: row[6]._rawData.effectiveValue?.numberValue,
        area: parseInt(row[7]._rawData.effectiveValue?.numberValue),
        dimensions: row[8]._rawData.formattedValue,
        address: row[9]._rawData.formattedValue,
        province: row[10]._rawData.formattedValue,
        district: row[11]._rawData.formattedValue,
        latitude: parseFloat(row[12]._rawData.effectiveValue?.numberValue),
        longitude: parseFloat(row[13]._rawData.effectiveValue?.numberValue),
        reference: row[14]._rawData.formattedValue,
        electricity: row[15]._rawData.formattedValue === 'Sí',
        water: row[16]._rawData.formattedValue === 'Sí',
        sewage: row[17]._rawData.formattedValue === 'Sí',
        claro: row[18]._rawData.formattedValue === 'Sí',
        movistar: row[19]?._rawData?.formattedValue === 'Sí',
        link: row[20]?._rawData?.formattedValue
      };
    });

    return data.filter((t) => t.situation !== undefined);
  } catch (e) {
    console.error('Error: ', e);
  }
};

export default async (req, res) => {
  res.statusCode = 200;
  let data = { error: true, obj: {} };
  try {
    data = await getTerrainsData();
  } catch (error) {
    data.obj = error;
  }
  res.json(data);
};
