import {types} from '../../types/types';

describe('Pruebas en types', () => {

    test('debe de retornar los mismos tipos', () => {

        const typesTest = {
            login: '[auth] Login',
            logout: '[auth] Logout',
        
            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',
        
            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',
        
            notesAddNew: '[Notes] New note',
            noteActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdated: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updates image url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        
        }

        expect(types).toEqual(typesTest);

    });

});