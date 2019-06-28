import { combineReducers } from 'redux';

const reducers = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            id: 1,
            description: 'Pagar fatura do meu cu',
            done: false
        }]
    }),
});

export default reducers;
