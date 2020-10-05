import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 

import '@testing-library/jest-dom';

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas con las acciones de Auth', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });
    
    test('login y logout debe de crear la acción respectiva', () => {
       
        const loginTest = {
            uid:  '',
            displayName: ''
        }

        expect(login(loginTest.uid, loginTest.displayName)).toEqual({
            type: types.login,
            payload: loginTest
        });

        expect(logout()).toEqual({
            type: types.logout
        });

    });

    test('debe de realizar el startLogout', async() => {
       
        await store.dispatch(startLogout());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });
    });

    test('debe de iniciar el startLoginEmailPassword', async () => {
       
       await store.dispatch(startLoginEmailPassword('test@testing.com','123456'));

       const actions = store.getActions();

       expect(actions[2]).toEqual({
            type: types.login,
            payload: {
               uid: 'm1eYschLgrauOPsizZ5imvFixTq1',
               displayName: null 
            }
       });

    });
    
    

})
