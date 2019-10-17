const initObj = {
    results: [],
    current: 2,
    pageSize: 0,
    total: 0,
    color:["红"]
}
export default (state = initObj, action) => {
    switch (action.type) {

        case "CHANGERESULTS":
            return {
                ...state,
                results: action.results

            }
        case "CHANGESTATE":
            return {
                ...state,
                // current: action.page,
                pageSize: action.pageSize,
                total: action.total

            }
        case "CHANGECURRENT":
            return{
                ...state,
                current:action.current
            }
        case "CHANGECOLOR":
                return{
                    ...state,
                    current:1,
                    [action.k]:action.v
                }
    }
    return state
}