import React from 'react';
import {Provider} from 'react-redux';
import { mount } from 'enzyme';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'; 

import '@testing-library/jest-dom';

import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth:{},
    ui:{ 
        loading: false,
        msgError: null
    },
    notes: {
        active:{
            id:'abc'
        },
        notes:{
            active: {
                id: 1234,
                title: 'hola',
                body: 'Mundo',
            } 
        }
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en <NoteScreen />', () => {
    
    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de disparar el active note', () => {
        
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name:'title',
                value:'Hola mundo'
            }
        });

        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body:'body', 
                title:'title', 
                id:1234, 
                date:0
            }
        );

    })
    


    

});
