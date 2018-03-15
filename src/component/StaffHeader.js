import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../index.css';


class StaffHeader extends Component{
    //排序
    handlerOrderChange(){
        let sel = ReactDOM.findDOMNode(this.refs.selOrder);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.sortStaff(selValue);
    }

    //筛选
    handlerIdChange(){
        let sel = ReactDOM.findDOMNode(this.refs.selId);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.filtStaff(selValue);
    }

    //search
    handlerSearch(){
        let bar = ReactDOM.findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchStaff(value);
    }
    render(){
        return(
          <div className = "StaffHeader">
                <h2 style={{'textAlign':'center'}}>人员管理系统</h2>
                <table className = "optHeader">
                    <tbody>  
                        <tr>
                            <td className = "headerTd">
                            <input style={{outline:'none',border: '1px solid #ccc',lineHeight:'25px',paddingLeft:"12px"}} type="text" ref = 'searchBar' placeholder="Search..."  onChange={this.handlerSearch.bind(this)}/>
                            </td>
                            <td className = "headerTd">
                                <label htmlFor="idSelect">人员筛选</label>
                                <select name="" ref="selId" id="idSelect" onChange={this.handlerIdChange.bind(this)}>
                                    <option value="0">全部</option>
                                    <option value="1">主任</option>
                                    <option value="2">老师</option>
                                    <option value="3">学生</option>
                                    <option value="4">实习</option>
                                </select>
                            </td>
                            <td className = "headerTd">
                                <label htmlFor="orderSelect">排列方式</label>
                                <select name="" ref="selOrder"  id="orderSelect" onChange={this.handlerOrderChange.bind(this)}>
                                    <option value="0">身份</option>
                                    <option value="1">年龄升</option>
                                    <option value="2">年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>   
          </div>      
        )
    }
}
export default StaffHeader;
