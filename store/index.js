import { createStore } from 'vuex'

export default createStore({
    state: {
        baseWsUrl: 'wss://stream.binance.com:9443/ws/btcusdt',
        kline: {},
        avrgPrice: '',
    },
    getters: {
    },
    mutations: {
        SET_KLINE: (state, payload) => {
            state.kline = payload
        },
        SET_AVRGPRICE: (state, payload) => {
            state.avrgPrice = payload
        }
    },
    actions: {
    },
    modules: {
    }
})