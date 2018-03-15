import React, {Component} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.css';
import '../index.css';
export default class StaffItem extends Component {
    //点击删除
    handleDelete(e){
        e.preventDefault();
        this.props.removeStaffItem(this.props.item.key);
    }
    //点击详情
    handleDetail(e){
        e.preventDefault();
        this.props.detailStaffItem(this.props.item.key)
    }
    render() {
        return (
            <tr style={{'cursor':'pointer'}} className = "tableBar">
                <td className="itemId">
                    {this.props.item.info.name}
                </td>
                <td className="itemId">
                    {this.props.item.info.age}
                </td>
                <td className="itemId">
                    {this.props.item.info.id}
                </td>
                <td className="itemId">
                    {this.props.item.info.sex}
                </td>
                <td className="itemId">
                    <Button type ='danger' className="itemBtn" onClick={this.handleDelete.bind(this)}>删除</Button>
                    <Button type ='dashed' className="itemBtn" onClick={this.handleDetail.bind(this)}>详情</Button>
                </td>
            </tr>
        )
    }
}
