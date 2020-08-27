import React, { Component } from "react";
import styles from "./index.less";
import { Table, Divider ,message,Modal, Form, Input} from "antd";
import { isFunction, isArray } from "lodash";
import FormItem from "antd/lib/form/FormItem";

interface TableProperty{
  data:()=>Promise<any>,
  columns:{title:string,key:string,dateIndex:string,hideInForm:boolean}[],
  onClick:[()=>Promise<any>,()=>Promise<any>]
}

interface TableStateProperty{
      data: [],
      columns: {title:string,key:string,dateIndex:string,hideInForm:boolean}[],
      onClick : [(arg: any)=>Promise<any>,(arg: any)=>Promise<any>],
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
          <a onClick={() => this.onClick(0,record)}>Edit</a>
          <Divider type="vertical" />
          <a onClick={() => this.onClick(1,record)}>Delete</a>
        </span>
      )
    };
    props.columns.push(action);
    this.state = {
      data: [],
      columns:props.columns,
      onClick : props.onClick,
      visible:false
    };
    this.load(props);
  }

  async onClick(index: number,arg: any){
    message.success("this");
    if(isArray(this.state.onClick) && this.state.onClick.length > 1 && isFunction(this.state.onClick[index])){
      this.setState({visible:true});
      await this.state.onClick[index](arg);
    }
  }

  handleCancel(){
    this.setState({visible:false});
  }

  load(props: Readonly<TableProperty>){
    var _this = this;
    props.data().then(function(result){
      _this.setState({data:result})
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
      onOk={this.handleOk}
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
