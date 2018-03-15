import React from 'react';
import ReactDOM from 'react-dom';
export default class StaffDetail extends React.Component{

    handlerEdit(){
        let item = {};
        let editTabel = ReactDOM.findDOMNode(this.refs.editTabel);
        let sex = editTabel.querySelector('#staffEditSex');
        let id = editTabel.querySelector('#staffEditId');

        item.name = editTabel.querySelector('#staffEditName').value.trim();
        item.age = editTabel.querySelector('#staffEditAge').value.trim();
        item.descrip = editTabel.querySelector('#staffEditDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;
        item.key = this.props.staffDetail.key;

        /*
         *表单验证
         */
        if(item.name==='' || item.age==='' || item.descrip==='') {
            let tips = ReactDOM.findDOMNode(this.refs.DtipsUnDone);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        let numReg = /^\d+$/;
        if(!numReg.test(item.age) || parseInt(item.age,10)>150) {
            let tips = ReactDOM.findDOMNode(this.refs.DtipsUnAge);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.editDetail(item);

        //此处应在返回修改成功信息后确认
        let tips = ReactDOM.findDOMNode(this.refs.Dtips);
        tips.style.display = 'block';
        setTimeout(function(){
            tips.style.display = 'none';
        }, 1000);
    }

    handlerClose(){
        this.props.closeDetail();
    }

    componentDidUpdate(){
        if(this.props.staffDetail == null){}
        else {
            let selSex = ReactDOM.findDOMNode(this.refs.selSex);
            for(let i=0; i<selSex.options.length; i++){
                if(selSex.options[i].value === this.props.staffDetail.info.sex){
                    selSex.options[i].selected = 'selected';
                    break;
                }
            }
            let selId = ReactDOM.findDOMNode(this.refs.selId);
            for(let i=0; i<selId.options.length; i++) {
                if(selId.options[i].value === this.props.staffDetail.info.id){
                    selId.options[i].selected = 'selected';
                    break;
                }
            }

        }
    }

    render(){
        let staffDetail = this.props.staffDetail;
        if(!staffDetail)
            return null;

        return (
            <div className = "overLay">
                <div className = "content">
                <h4 style={{'textAlign':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
                <hr/>
                <form ref="editTabel" className="addForm">
                    <div className = "newTable">
                        <label className = "newLable" style={{'display': 'inline-block',marginRight:'10px'}}>姓名</label>
                        <input ref='addName' id='staffEditName' type='text'  defaultValue={staffDetail.info.name}/>
                    </div>
                    <div className = "newTable">
                        <label  className = "newLable" style={{'display': 'inline-block',marginRight:'10px'}}>年龄</label>
                        <input ref='addAge' id='staffEditAge' type='text'  defaultValue={staffDetail.info.age}/>
                    </div>
                    <div className = "newTable">
                        <label  className = "newLable" style={{'display': 'inline-block',marginRight:'10px'}}>性别</label>
                        <select ref='selSex' id='staffEditSex'>
                            <option value='男'>男</option>
                            <option value='女'>女</option>
                        </select>
                    </div>
                    <div className = "newTable">
                        <label  className = "newLable" style={{'display': 'line-block',marginRight:'10px'}}>身份</label>
                        <select ref="selId" id='staffEditId'>
                            <option value='主任'>主任</option>
                            <option value='老师'>老师</option>
                            <option value='学生'>学生</option>
                            <option value='实习'>实习</option>
                        </select>
                    </div>
                    <div className = "newTable">
                        <label  className = "newLable" style={{'display': 'inline-block',marginRight:'10px',verticalAlign:'14px'}}>个人描述</label>
                        <textarea defaultValue={staffDetail.info.descrip} id='staffEditDescrip' type='text'></textarea>
                    </div>
                </form>
                <p ref='Dtips' className='tips-success'>修改成功</p>
                <p ref='DtipsUnDone' className='tips-mes'>请录入完整的人员信息</p>
                <p ref='DtipsUnAge' className='tips-age'>请录入正确的年龄</p>
                <button onClick={this.handlerEdit.bind(this)}>完成</button>
                <button onClick={this.handlerClose.bind(this)}>关闭</button>
            </div>
         </div>
        );
    }
}