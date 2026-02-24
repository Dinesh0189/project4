import {configStore} from configStore

export const store=configStore({
    reducer:{
        app:appReducer,
    },
})