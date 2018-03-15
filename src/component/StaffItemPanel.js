import React, {Component} from 'react'
import StaffItem from './StaffItem';
export default class StaffItemPanel extends Component {
    render() {     
            if(this.props.items.length === 0){
                return <p className="itemEmpty">暂无用户</p>
            }
           const items =  this.props.items.map(item => {
            return(
            <StaffItem
                key={item.key}
                item={item}
                removeStaffItem={this.props.removeStaffItem}
                detailStaffItem={this.props.detailStaffItem}
                />
            )
            })
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
