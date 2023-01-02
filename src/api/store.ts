import axios from "axios"
import create from "zustand"

type State = {
    apiSucess: '',
    apiError: '',
    fetch: () => void
}

export const apiStore = create<State>((set, get) => ({
    apiSucess: '',
    apiError: '',

    fetch: () => {
        axios.get('https://catfact.ninja/fact')
            .then(function (response: any) {
                set({ apiSucess: response.data.fact })
            })
            .catch(function (error: any) {
                set({ apiError: error.message })
            })
    }
}))