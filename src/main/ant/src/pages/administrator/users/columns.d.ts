export function columns() :{title:string,key:string,dateIndex:string,hideInForm:boolean}[]{
    return [
        {
          title: "Id",
          dataIndex: "id",
          key: "id",
          hideInForm:false
        },
        {
          title: "User Name",
          dataIndex: "username",
          key: "username",
          hideInForm:true
        },
        {
          title: "Create Time",
          dataIndex: "createTime",
          key: "createTime",
          hideInForm:false
        },
        {
          title: "Update Time",
          key: "updateTime",
          dataIndex: "updateTime",
          hideInForm:false
        }
      ]
}
  