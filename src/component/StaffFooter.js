import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import '../index.css';
//增加人员
export default class StaffFooter extends Component {
    handleAddClick(e){
        e.preventDefault();
        let item = {};
        let addForm = ReactDOM.findDOMNode(this.refs.addForm);
        let sex = addForm.querySelector('#staffAddSex');
        let id = addForm.querySelector('#staffAddId');


        item.name = addForm.querySelector('#staffAddName').value.trim();
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

    //   表单验证

        if(item.name === '' || item.age === '' || item.descrip === ''){
            let tips = ReactDOM.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }

    //    非负数

        let numreg = /^\d+$/;
        if(!numreg.test(item.age) || parseInt(item.age,10) > 150){
            let tips = ReactDOM.findDOMNode(this.refs.tipsUnAge);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        this.props.addStaffItem(item);
        addForm.reset();

        //此处应在返回添加成功信息后确认
        let tips = ReactDOM.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(function(){
            tips.style.display = 'none';
        }, 1000);
    //
    }
    render() {
        return (
            <div>
                <h4 style={{'textAlign':'center'}}>人员新增</h4>
                <hr/>
                <form ref='addForm' className="addForm">
                    <div className = "newTable">
                        <label htmlFor='staffAddName' className = "newLable" style={{'display': 'inline-block',marginRight:'10px'}}>姓名</label>
                        <input ref='addName' id='staffAddName' type='text' placeholder='Your Name'/>
                    </div>
                    <div className = "newTable">
                        <label htmlFor='staffAddAge' className = "newLable" style={{'display': 'inline-block',marginRight:'10px'}}>年龄</label>
                        <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Age(0-150)'/>
                    </div>
                    <div className = "newTable">
                        <label htmlFor='staffAddSex' className = "newLable" style={{'display': 'inline-block',marginRight:'10px'}}>性别</label>
                        <select ref='addSex' id='staffAddSex'>
                            <option value='男'>男</option>
                            <option value='女'>女</option>
                        </select>
                    </div>
                    <div className = "newTable">
                        <label htmlFor='staffAddId' className = "newLable" style={{'display': 'line-block',marginRight:'10px'}}>身份</label>
                        <select ref='addId' id='staffAddId'>
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                        </select>
                    </div>
                    <div className = "newTable">
                        <label htmlFor='staffAddDescrip' className = "newLable" style={{'display': 'inline-block',marginRight:'10px',verticalAlign:'14px'}}>个人描述</label>
                        <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                    </div>
                    <p ref="tips" className='tips-success' >提交成功</p>
                    <p ref='tipsUnDone' className='tips-mes'>请录入完整的人员信息</p>
                    <p ref='tipsUnAge' className='tips-age'>请录入正确的年龄</p>
                    <div className = "newTable">
                        <button onClick={this.handleAddClick.bind(this)}>提交</button>
                    </div>
                </form>
            </div>
        )
    }
}
