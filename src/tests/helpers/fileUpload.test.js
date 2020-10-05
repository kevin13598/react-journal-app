import {fileUpload} from "../../helpers/fileUpload";

import cloudinary  from "cloudinary";

cloudinary.config({ 
    cloud_name: 'db9buex76', 
    api_key: '619649994561329', 
    api_secret: 'AuiFrabkGGGw0Y5cWLMFR3IUxCo' 
  });

describe('Pruebas en fileUpload', () => {
    
    test('debe de cargar un archivo y retornar el URL', async(done) => {
        
        const resp = await fetch('https://ichef.bbci.co.uk/news/410/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg');
        const blob = await resp.blob();

        const file = new File([blob], 'foto.png');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });

    });


    test('debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });

});
