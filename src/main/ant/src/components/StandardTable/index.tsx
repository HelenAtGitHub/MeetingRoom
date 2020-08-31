import React, { Component } from "react";
import styles from "./index.less";
import { Table, Divider ,message,Modal, Form, Input} from "antd";
import FormItem from "antd/lib/form/FormItem";
import { IStardardTableProxy } from "./data";

interface TableProperty{
  columns:{title:string,key:string,dateIndex:string,hideInForm:boolean}[],
  service:IStardardTableProxy
}

interface TableStateProperty{
      data: [],
      columns: {title:string,key:string,dateIndex:string,hideInForm:boolean}[],
      service:IStardardTableProxy,
      //onClick : [(arg: any)=>Promise<any>,(arg: any)=>Promise<any>],
      visible:boolean
}

class StandardTable extends Component<TableProperty,TableStateProperty> {
  
  constructor(props: TableProperty){
    super(props);
    var action = {
      title: "Action",
      key: "action",
      dataIndex: "id",
      hideInForm:false,
      render: (text: any, record: any) => (
        <span>
          <a onClick={() => this.setState({visible:true})}>Edit</a>
          <Divider type="vertical" />
          <a onClick={() => this.setState({visible:true})}>Delete</a>
        </span>
      )
    };
    props.columns.push(action);
    this.state = {
      data: [],
      columns:props.columns,
      service:props.service,
      visible:false
    };
    this.load(props);
  }

  handleOk(){
    this.setState({visible:false});
  }

  handleCancel(){
    this.setState({visible:false});
  }

  load(props: Readonly<TableProperty>){
    var _this = this;
    props.service.query({total:100,
      pageSize:10,
      current:1}).then(function(result){
        console.log(result.data);
       _this.setState({data:result.data});
    })
  }

  element (){
    const elems: JSX.Element[] = [];
    this.state.columns.forEach((elem,index)=>{
      if(elem.hideInForm){
      elems.push(<FormItem
        name={elem.dateIndex}
        key={index}
        label={elem.title}
        rules={[{ required: true, message: '请输入规则名称！' }]}
      >
        <Input
        placeholder="请输入" />
      </FormItem>)}
      
    })
    return elems;
  }

  render () {
    return (
      <div className={styles.container}>
        <div id="components-table-demo-basic">
          <Table columns = {this.state.columns} dataSource={this.state.data} rowKey={record=>record} />
          
        </div>
        <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={()=>this.handleOk}
      onCancel={()=>this.setState({visible:false})}
    >
      <Form>
      {this.element()}
      </Form>
    </Modal>
      </div>
      
    )
  }
}

export default StandardTable
