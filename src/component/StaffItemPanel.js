import React, {Component} from 'react'
import StaffItem from './StaffItem';
export default class StaffItemPanel extends Component {
    render() {
        let items = [];

        if(this.props.items.length === 0){
            items.push(<tr><th colSpan="5" className="itemEmpty">暂无用户</th></tr>)
        }else{
            this.props.items.forEach(item => {
            items.push(<StaffItem
                        key={item.key}
                        item={item}
                        removeStaffItem={this.props.removeStaffItem}
                        detailStaffItem={this.props.detailStaffItem}
                        />
                    )
            })
        }
        return (
            <table className='itemPanel'>
                <thead className = "itemHead">
                    <tr> 
                        <th className="itemId">姓名</th>
                    </tr>
                    <tr> 
                        <th className="itemId">年龄</th>
                    </tr>
                    <tr>
                         <th className="itemId">身份</th> 
                    </tr>
                    <tr>
                         <th className="itemId">性别</th>
                    </tr>
                    <tr>
                         <th className="itemId">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        )
    }
}
