import { Badge, Highlight, List, Space } from "@mantine/core";
import * as React from "react";

export const menu = [
  {
    text: "个人信息",
    href: "#1",
  },
  {
    text: "求职意向",
    href: "#2",
  },
  {
    text: "工作经验",
    href: "#3",
  },
  {
    text: "教育",
    href: "#4",
  },
  {
    text: "项目",
    href: "#5",
  },
  {
    text: "技能",
    href: "#6",
  },
  {
    text: "奖项荣誉",
    href: "#7",
  },
];

export const infoList = [
  {
    icon: "icon-mail",
    title: "邮箱",
    desc: "zhengwenjun1994@gmail.com",
  },
  {
    icon: "icon-phone",
    title: "电话",
    desc: "+8616602756604",
  },
  {
    icon: "icon-link",
    title: "个人博客",
    desc: "https://blog.ddnszwj.top",
  },
  {
    icon: "icon-github-fill",
    title: "Github",
    desc: "https://github.com/qq865738120",
  },
];

export const companyList = [
  {
    image: "",
    name: "上海海典软件股份有限公司",
    infos: [
      {
        name: "工作时间",
        icon: "icon-time-circle",
        detail: <Highlight highlight="">2019年6月 - 目前</Highlight>,
      },
      {
        name: "简介",
        icon: "icon-detail",
        detail: (
          <Highlight
            className="content"
            highlight={["17年", "900余人", "医药流通行业"]}
          >
            上海海典软件股份有限公司创建于2004年，专注医药流通行业17年，员工人数达900余人。公司总部位于上海，分别在⻓沙、沈阳、厦门、重庆、西安、济南设立6家分公司，在长沙投资2家子公司。公司以“科技赋能健康产业”为使命，致力于为用户提供专业的医药流通行业信息化解决方案及数字化转型服务
          </Highlight>
        ),
      },
      {
        name: "职位",
        icon: "icon-codelibrary",
        detail: <Highlight highlight="">前端开发工程师</Highlight>,
      },
      {
        name: "工作内容",
        icon: "icon-file-ppt",
        detail: (
          <List>
            <List.Item>
              负责C端微商城项目开发工作。包括日常版本迭代、新功能开发、历史代码重构等内容
            </List.Item>
            <List.Item>
              负责C端微商城项目架构以及优化工作。包括解决项目历史遗留问题、优化小程序打包后文件体积、提升构建打包速度、流程自动化进而提升开发体验、日志埋点线上bug诊断等内容。
            </List.Item>
            <List.Item>
              负责B端商户平台项目的开发工作。包括日常版本迭代、新更能开发等内容
            </List.Item>
          </List>
        ),
      },
    ],
  },
  {
    image: "",
    name: "湖南福米信息科技有限责任公司",
    infos: [
      {
        name: "工作时间",
        icon: "icon-time-circle",
        detail: <Highlight highlight="">2017年4月 - 2019年6月</Highlight>,
      },
      {
        name: "简介",
        icon: "icon-detail",
        detail: (
          <Highlight
            className="content"
            highlight={["数据服务商", "13+", "医药流通行业"]}
          >
            湖南福米信息科技有限责任公司是一家全球可靠的数据服务商，服务涵盖信息、辅助交易。
            旗下系列产品覆盖13+个国家/地区、3大品类、29个交易所、100000+个投资标的，
            全球多地部署有数据中心，为用户提供极速数据和交易服务，完整呈现市场细节。
          </Highlight>
        ),
      },
      {
        name: "职位",
        icon: "icon-codelibrary",
        detail: <Highlight highlight="">前端开发工程师</Highlight>,
      },
      {
        name: "工作内容",
        icon: "icon-file-ppt",
        detail: (
          <List>
            <List.Item>
              负责C端微商城项目开发工作。包括日常版本迭代、新功能开发、历史代码重构等内容
            </List.Item>
            <List.Item>
              负责C端微商城项目架构以及优化工作。包括解决项目历史遗留问题、优化小程序打包后文件体积、提升构建打包速度、流程自动化进而提升开发体验、日志埋点线上bug诊断等内容
            </List.Item>
            <List.Item>
              负责B端商户平台项目的开发工作。包括日常版本迭代、新更能开发等内容
            </List.Item>
          </List>
        ),
      },
    ],
  },
];

export const schoolList = [
  {
    name: "学校",
    value: "武汉大学珞珈学院",
  },
  {
    name: "专业",
    value: "软件工程",
  },
  {
    name: "类型",
    value: "统招全日制本科",
  },
  {
    name: "课程",
    value:
      "C语言程序设计、数据结构与算法、计算机组成原理、Java编程、Linux原理、计算机操作系统、编译原理、SQL Server数据库、计算机网络、编译原理等。",
  },
];

export const projectList = [
  {
    name: "ui lib",
    nature: "ge,renkaiyuan",
    duty: (
      <>
        <Badge variant="outline">Dot badge</Badge>
      </>
    ),
    detail: "jianjie",
    technologies: (
      <>
        <Badge variant="dot">Dot badge</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="pink">
          Dot badge
        </Badge>
      </>
    ),
    codeLink: "https://baidu.com",
    images: ["a", "b", "c"],
    code: {
      language: "tsx",
      text: `let a = 1;
let a = 1;
let a = 1;
let a = 1;
const test = () => {
  console.log('aaa')
};`,
    },
  },
  {
    name: "jks-cli",
    nature: "ge,renkaiyuan",
    duty: (
      <>
        <Badge variant="outline">Dot badge</Badge>
      </>
    ),
    detail: "jianjie",
    technologies: (
      <>
        <Badge variant="dot">Dot badge</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="pink">
          Dot badge
        </Badge>
      </>
    ),
    codeLink: "https://baidu.com",
    player: "462967",
    code: {
      language: "tsx",
      text: `let a = 1;
let a = 1;
let a = 1;
let a = 1;
const test = () => {
  console.log('aaa')
};`,
    },
  },
];

export const skillList = {
  name: "技能分布",
  color: "#000",
  children: [
    {
      name: "qian，duan",
      children: [
        {
          name: "react",
          loc: 0.9,
        },
        {
          name: "vue",
          loc: 0.8,
        },
      ],
    },
    {
      name: "kuapingtai",
      children: [
        {
          name: "flutter",
          loc: 0.5,
        },
      ],
    },
  ],
};
