import React, { Component } from "react";
import styles from "./index.less";
import { Table, Divider ,message,Modal} from "antd";
import { isFunction, isArray } from "lodash";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: "username"
  },
  {
    title: "Create Time",
    dataIndex: "createTime",
    key: "createTime"
  },
  {
    title: "Update Time",
    key: "updateTime",
    dataIndex: "updateTime"
  }
];

interface TableProperty{
  data:()=>Promise<any>,
  onClick:[()=>Promise<any>,()=>Promise<any>]
}

interface TableStateProperty{
      data: [],
      columns:{},
      onClick : [(arg: any)=>Promise<any>,(arg: any)=>Promise<any>],
      visible:boolean
}

class ResultTable extends Component<TableProperty,TableStateProperty> {

  constructor(props: TableProperty){
    super(props);
    var action = {
      title: "Action",
      key: "action",
      dataIndex: "id",
      render: (text: any, record: any) => (
        <span>
          <a onClick={() => this.onClick(0,record)}>Edit</a>
          <Divider type="vertical" />
          <a onClick={() => this.onClick(1,record)}>Delete</a>
        </span>
      )
    };
    columns.push(action);
    this.state = {
      data: [],
      columns:columns,
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

  load(props: Readonly<TableProperty>){
    var _this = this;
    props.data().then(function(result){
      _this.setState({data:result})
    })
  }
  render () {
    return (
      <div className={styles.container}>
        <div id="components-table-demo-basic">
          <Table columns = {this.state.columns} dataSource={this.state.data} rowKey={record=>record.id} />
          
        </div>
        <Modal
      title="Basic Modal"
      visible={this.state.visible}
      onOk={this.handleOk}
      onCancel={this.handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
      </div>
      
    )
  }
}

export default ResultTable
