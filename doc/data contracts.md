#### 1. 查询所有可用的会议室信息：
```javascript
result:
{
  [{
    id:"1",
    name:"Beijing",
    status:"true", //今日是否订满
    location:"Changzhi 5F"
  },
  ...
]
}
```
#### 2. 查询所有时间段列表：
```javascript
result:
{
   [{
      id:"1",
      time:"9:30"
    },
    .....
   ]
}
```
#### 3.按日期查询当日所有会议室的预订情况
```javascript
result:
{
    [{
        id:"1",
        name:"Beijing",
        bookingList:[{
            time:"9:30",
            user:{
                id:"1",
                name:"yiyu"
            }
        },
        ...
        ]
    },
    ...
    ]
}
```