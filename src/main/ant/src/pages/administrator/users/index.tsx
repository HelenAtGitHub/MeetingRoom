import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { Card, Typography, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import StandardTable from '../../../components/StandardTable';
import { queryRule } from './user.service';
import { columns} from './columns.d';

const Result: React.FC<{}> = () => {
  return (
    <PageContainer content=" 这个页面只有 admin 权限才能查看">
      <StandardTable
        data = {queryRule}
        onClick = {[
          async () => {
            return true;
          },
          async () => {
            return true;
          },
        ]}
        columns = {columns()}
      />
      <Card>
        <Alert
          message="umi ui 现已发布，欢迎使用 npm run ui 1111启动体验。"
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 48,
          }}
        />
        <Typography.Title
          level={2}
          style={{
            textAlign: 'center',
          }}
        >
          <SmileTwoTone /> Ant Design Pro <HeartTwoTone twoToneColor="#eb2f96" /> You
        </Typography.Title>
      </Card>
      <p
        style={{
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Want to add more pages? Please refer to{' '}
        <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
          use block
        </a>
        。
      </p>
    </PageContainer>
  );
};

export default Result;
