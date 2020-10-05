import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('debe de retornar datos del login', () => {
       
        const action = {
            type: types.login,
            payload: {
                uid:'uid', 
                displayName:'displayName'
            }
        }

        expect(authReducer({}, action)).toEqual({
            uid:'uid', 
            name:'displayName'
        });

    });

    test('debe de LOGOUT', () => {
       
        const action = {
            type: types.logout
        }

        expect(authReducer({}, action)).toEqual({});

    });

    test('debe de retornar el state por defecto', () => {
       
        const action = {
            type: 'fsdfsdf'
        }

        expect(authReducer({}, action)).toEqual({});

    });


    

})
