import React, { Component } from 'react'
import {connect} from "react-redux"
import { Table, Checkbox } from 'antd'

@connect(
    ({esc})=>({
        results:esc.results,
        current:esc.current,
        pageSize:esc.pageSize,
        total:esc.total,
        color:esc.color
    }),
    dispatch=>({
        dispatch
    })
)
export default class App extends Component {
    componentWillMount() {
        this.props.dispatch({type:"INIT"})
    }
    
    render() {
        return (
            <div style={{width:800 ,margin:"100px auto"}} >
                {console.log(this.props.color+222222222222222)}
                <Checkbox.Group 
                    value={this.props.color}
                    onChange={(v)=>{
                        this.props.dispatch({type:"CHANGECOLOR_SAGA",k:"color",v})
                    }}
                >
                    {["红","黄","蓝","绿","黑","灰","白",].map(item=> <Checkbox key={item} value={item}>{item}</Checkbox>)}
                </Checkbox.Group>
                <Table
                    rowKey="id"
                    columns={[
                        {'title': '图片', 'key':'image' , 'dataIndex': 'image',render:(txt,{id})=><div>
                            <img src={`http://192.168.2.250:3000/images/carimages_small/${id}/view/${txt}`} alt=""/>
                        </div>},
                        {'title': '编号', 'key':'id' , 'dataIndex': 'id'},
                        {'title': '品牌', 'key':'brand' , 'dataIndex': 'brand'},
                        {'title': '车系', 'key':'series' , 'dataIndex': 'series'},
                        {'title': '颜色', 'key':'color' , 'dataIndex': 'color'},
                        {'title': '发动机', 'key':'engine' , 'dataIndex': 'engine'},
                        {'title': '尾气', 'key':'exhaust' , 'dataIndex': 'exhaust'},
                        {'title': '燃料', 'key':'fuel' , 'dataIndex': 'fuel'}
                    ]}
                    dataSource={this.props.results}
                    pagination={{
                        current:this.props.current,
                        pageSize:this.props.pageSize,
                        total:this.props.total,
                        onChange:current=>{
                            this.props.dispatch({type:"CHANGECURRENT_SAGA","current":current})
                        }
                    }}
                />
            </div>
        )
    }
}
