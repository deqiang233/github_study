import { call, put, takeEvery, select} from 'redux-saga/effects'
import Axios from 'axios'
import querystring from "querystring"
export default function*(){
    yield takeEvery("INIT",function*(){
        const { current, color } = yield select(({ esc }) => esc)     
        const {results,page,pageSize,total} = yield Axios.get("http://192.168.2.250:3000/car?"+querystring.stringify({
            page:current,
            color:color.join("v")
        })).then(data=>data.data)
    yield put({type:"CHANGERESULTS",results})
    yield put({type:"CHANGESTATE",page,pageSize,total})
    })
    yield takeEvery("CHANGECURRENT_SAGA",function*({current}){
        yield put({type:"CHANGECURRENT",current})
        yield put({type:"INIT"})
    })
    yield takeEvery("CHANGECOLOR_SAGA",function*({k,v}){
        yield put({type:"CHANGECOLOR",k,v})
        yield put({type:"INIT"})
    })
}
