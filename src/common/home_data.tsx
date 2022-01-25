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
    name: "微商城",
    nature: "商业项目",
    duty: (
      <>
        <Badge variant="outline">前端开发</Badge>
        <Space w="xs" />
        <Badge variant="outline" color="red">
          架构优化
        </Badge>
      </>
    ),
    detail:
      "线上购药商城，同时支持h5端与小程序端。为不同商户托管小程序的开发与维护。支持商户个性化配置首页模板，同时根据不同用户需求可自由切换OBC模式、预约模式等。目前承载了上百家商户，高度自定义化，满足不同商户的个性化需求。",
    technologies: (
      <>
        <Badge variant="dot" color="teal">
          Taro
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="red">
          Mobx
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="orange">
          Webpack
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="pink">
          Sass
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="yellow">
          husky
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="cyan">
          sentry
        </Badge>
      </>
    ),
    codeLink: "",
    images: [
      { width: 400, height: 400, thumb: "1-1.jpeg" },
      { width: 400, height: 400, thumb: "1-2.jpeg" },
      { width: 400, height: 400, thumb: "1-3.jpeg" },
    ],
    code: {
      language: "tsx",
      text: `import Taro, { Component } from '@tarojs/taro'
import { inject, observer } from '@tarojs/mobx'
import { View, Image, Text, Button } from '@tarojs/components'
import rankIcon1 from '~/assets/images/dst/rank_icon_1.png'
import rankIcon2 from '~/assets/images/dst/rank_icon_2.png'
import rankIcon3 from '~/assets/images/dst/rank_icon_3.png'
import linkIcon from '~/assets/images/dst/link_icon.png'
import downloadIcon from '~/assets/images/dst/download_icon.png'
import './fans.scss'
import { HdFloatLayout } from '@hydee/components-taro'
import pages from '~/utils/page'
import { IDistributionStoreProps } from '~/store/distribution'
import { getIn } from '~/utils/tools'
import pic from '~/utils/pic'
import meta from '~/utils/meta'
import share, { IShareBase } from '~/utils/share'
import others from '~/utils/others'

interface IProps {
  app: any
  distribution: IDistributionStoreProps
}
interface IPageState {
  isShowDialog: boolean
}

/**
 * 分销粉丝页面
 *
 * @class SettleMent
 * @extends {Component<IPageState>}
 */
@inject('app', 'distribution')
@observer
export default class Fans extends Component<IProps, IPageState> {
  constructor(props) {
    super(props)
    this.state = {
      isShowDialog: false,
    }
  }

  componentDidMount() {
    const { isShowDialog } = this.$router.params
    this.setState({ isShowDialog: isShowDialog as unknown as boolean })
    meta.setTitle('粉丝')
    this.init()

    // TODO 埋点记录
    this.props.app.handleGlobalAutoTrack({
      requestParams: {
        action: '分销粉丝',
      },
    })
  }

  async onReachBottom() {
    const { distribution } = this.props

    if (
      this.currentPage >=
      getIn(distribution, ['floolwList', 'followPage', 'totalPage'], 0)
    ) {
      return
    }

    this.currentPage = this.currentPage + 1
    Taro.showLoading({
      title: '加载中...',
      mask: true,
    })
    await distribution.fetchFollowDetail({
      currentPage: this.currentPage,
    })
    Taro.hideLoading()
  }

  // 当前分页
  currentPage = 1

  init = async () => {
    const { distribution } = this.props

    Taro.showLoading({
      title: '加载中...',
      mask: true,
    })
    await Promise.all([
      distribution.fetchFollowDetail({
        currentPage: this.currentPage,
      }),
      distribution.fetchUserInfo(),
    ])
    this.shareConfig()
    Taro.hideLoading()
  }

  /**
   * 分享配置
   */
  shareConfig = () => {
    const { userInfo } = this.props.distribution
    const { merCode, appGlobalShareParams, saveAppGlobalShareParams } =
      this.props.app

    return share.shareBaseFunc(this, () => {
      const scene = others.queryStringFy({
        merCode,
        userMobile: getIn(userInfo, ['userMobile']),
        shareCode: getIn(userInfo, ['shareCode']),
      })
      const result: IShareBase = {
        title: '分销邀请',
        desc:
          getIn(userInfo, ['userName'], '-') +
          '邀请您成为分销员，分销商品得佣金。',
        path: '',
        imgUrl: getIn(userInfo, ['avatar']),
      }
      return result
    })
  }

  onCloseDialog = () => {
    this.setState({ isShowDialog: false })
  }

  onButtonClick = () => {
    this.setState({ isShowDialog: true })
  }

  onDownloadPoster = () => {
    pages.jumpToDstPoster()
  }

  onShareLinkClick = () => {
    share.handlerWXShareTip()
  }

  onShareAppMessage() {
    return this.shareConfig()
  }

  render() {
    const { isShowDialog } = this.state
    const { floolwList } = this.props.distribution

    console.log('floolwList', floolwList)

    return (
      <View className='dst-fans-page'>
        <View className='part-1'>
          <View className='left'>
            <Text className='title'>粉丝总数（人）</Text>
            <Text className='desc'>{getIn(floolwList, ['count'], '-')}</Text>
          </View>
          <View className='right'>
            <Text className='title'>粉丝返佣（元）</Text>
            <Text className='desc'>
              {getIn(floolwList, ['allIncome'], '-')}
            </Text>
          </View>
        </View>

        <View className='part-2'>
          {getIn(floolwList, ['followPage', 'data'], []).map((item, index) => (
            <View key={JSON.stringify(item)} className='item'>
              <View className='left'>
                <View className='icon'>
                  <Image
                    className='image'
                    webp
                    src={pic.getImgUrl(getIn(item, ['avatar']), { w: 200 })}
                  />
                  {index < 2 ? (
                    <Image
                      className='logo'
                      webp
                      src={
                        index === 0
                          ? rankIcon1
                          : index === 1
                          ? rankIcon2
                          : rankIcon3
                      }
                    />
                  ) : null}
                </View>

                <Text className='title'>{getIn(item, ['userName'], '-')}</Text>
              </View>
              <View className='right'>
                <Text className='title'>返佣</Text>
                <Text className='desc'>
                  {getIn(item, ['invitedCommissionAmount'], '-')}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View className='part-3' onClick={this.onButtonClick}>
          发展粉丝赚收益
        </View>

        <HdFloatLayout
          visible={isShowDialog}
          onClose={this.onCloseDialog}
          title='邀请好友'
          maskClick
        >
          <View className='dialog-body'>
            {/* <View className='item' onClick={this.onShareLinkClick}>
              <Image className='icon' src={linkIcon} />
              <Text className='text'>分享链接</Text>
            </View> */}
            <Button
              className='item wx-btn'
              openType='share'
              onClick={this.onShareLinkClick}
            >
              <Image webp className='icon' src={linkIcon} />
              <Text className='text'>分享链接</Text>
            </Button>
            <View
              className='item'
              style={{ zIndex: 1 }}
              onClick={this.onDownloadPoster}
            >
              <Image webp className='icon' src={downloadIcon} />
              <Text className='text'>下载海报</Text>
            </View>
          </View>
        </HdFloatLayout>
      </View>
    )
  }
}`,
    },
  },
  {
    name: "jks-cli",
    nature: "开源项目",
    duty: (
      <>
        <Badge variant="outline">前端开发</Badge>
        <Space w="xs" />
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Space w="xs" />
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </>
    ),
    detail:
      "一款Jenkins命令行工具。实现了一键构建多个项目、保存构建命令、导入导出设置、构建完成通知等功能。",
    technologies: (
      <>
        <Badge variant="dot" color="pink">
          Ink
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Space w="xs" />
        <Badge variant="dot">NodeJs</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="cyan">
          conf
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="violet">
          shelljs
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="orange">
          meow
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="dark">
          ava
        </Badge>
      </>
    ),
    codeLink: "https://github.com/qq865738120/jks-cli",
    player: "464102",
    code: {
      language: "tsx",
      text: `import { Box } from "ink"
import React, { FC, useEffect, useMemo, useState } from "react"
import { readSetting } from "./common/settingHelper"
import { ISetForm } from "./components/SetForm"
import shell from "shelljs"
import Tips, { ITipsProps } from "./components/Tips"
import Select from "./components/Select"
import meow from "meow"
import BuildView from "./BuildView"

export interface IRunView {
  cli: meow.Result<meow.AnyFlags>
  quick: string
}

const RunView: FC<IRunView> = ({ quick, cli }) => {
  // 步骤
  const [setup, setSetup] = useState(-1)
  // 是否展示build视图
  const [isShowBuildView, setIsShowBuildView] = useState(false)
  // build视图job参数
  const [buildJobs, setBuildJobs] = useState<string[]>([])
  // build视图symbol参数
  const [buildSymbol, setBuildSymbol] = useState<string>(",")
  // 设置
  const [setting, setSetting] = useState<{
    list?: ISetForm[]
    userInfo?: string
  }>()
  const [quickList, setQuickList] = useState<
    { label: string; value: string, subLabel: string }[]
  >([])
  // 提示
  const [tips, setTips] = useState<ITipsProps>({
    isShow: false,
    type: "success",
    message: "",
  })

  useEffect(() => {
    setSetting((readSetting() || {}) as any)
  }, [])

  useEffect(() => {
    if (setting) {
      const item = setting.list?.find(item => item.title === quick)
      if (item && item.command) {
        setTips({
          isShow: true,
          type: "info",
          message: "开始运行",
        })
        runCommand(item.command)
      } else {
        setQuickList(
          (setting.list || []).map(item => {
            return {
              label: item.title,
              value: item.command,
              subLabel: item.remark
            }
          })
        )
        if ((setting.list || []).length === 0) {
          setTips({
            isShow: true,
            type: "error",
            message:
              "您还没有设置快捷方式，请使用jks-cli set命令新增一些快捷方式。",
          })
        } else {
          setSetup(0)
        }
      }
    }
  }, [setting])

  const onSelectQuick = (item: any) => {
    setSetup(1)
    setTips({
      isShow: true,
      type: "info",
      message: \`快捷方式: \${item.label}\`,
    })
    runCommand(item.value)
  }

  const runCommand = (command: string) => {
    if (/^jks-cli\s*build\s*/.test(command)) {
      setIsShowBuildView(true)
      setBuildJobs(
        command
          .replace(/^jks-cli\s*build\s*/, "")
          .split(/\s*(--job|--j)\s*/g)
          .filter(Boolean)
          .filter(
            (item: string) =>
              item !== "--job" && item !== "--j" && !/^--/.test(item)
          )
          .map((item: string) => item.split(/\s*--.*$/g)[0] || "")
      )
      const symbolStr: any = /(--symbol\s*\S*)|(--s\s*\S*)/g.exec(command)
      const symbol = symbolStr ? symbolStr[0].split(/--s(ymbol)?\s*/) : [","]
      setBuildSymbol(symbol.pop())
    } else {
      const result = shell.exec(command)
      if (result.code === 0) {
        setTips({
          isShow: true,
          type: "success",
          message: "运行完成",
        })
      } else {
        setTips({
          isShow: true,
          type: "error",
          message: "出错啦，请检查快捷方式 command 是否正确",
        })
      }
    }
  }

  const build = useMemo(
    () => (
      <BuildView
        cli={cli}
        jobs={buildJobs}
        symbol={buildSymbol}
        onFinish={() =>
          setTips({
            isShow: true,
            type: "success",
            message: "运行完成",
          })
        }
      />
    ),
    [buildJobs, buildSymbol]
  )

  return (
    <Box flexDirection='column'>
      {setup === 0 && (
        <Select
          label='您要运行哪一个快捷方式？'
          items={quickList}
          onConfirm={onSelectQuick}
        />
      )}

      {setup === 1 && isShowBuildView && build}

      <Tips {...tips}></Tips>
    </Box>
  )
}

export default RunView`,
    },
  },
  {
    name: "UI组件库",
    nature: "商业项目",
    duty: (
      <>
        <Badge variant="outline">前端开发</Badge>
      </>
    ),
    detail:
      "微商城项目通用组件库。封装了包括基础组件、复杂组件等一些业务无关的纯UI组件。",
    technologies: (
      <>
        <Badge variant="dot" color="teal">
          Taro
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="orange">
          Webpack
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="pink">
          Sass
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="yellow">
          husky
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="cyan">
          lerna
        </Badge>
      </>
    ),
    codeLink: "",
    images: [
      { width: 400, height: 400, thumb: "3-1.jpg" },
      { width: 800, height: 400, thumb: "3-2.png" },
      { width: 400, height: 400, thumb: "3-3.jpeg" },
    ],
    code: {
      language: "tsx",
      text: `/**
* 按钮组件
*/

import Taro, { Component } from '@tarojs/taro'
import { Button } from '@tarojs/components'

import './Button.scss'
import Loading from '../Loading/Loading'

/**
* props属性
*/
interface IProps {
  /**
  * 是否水平方向铺满
  */
  horizontalThrough?: boolean
  /**
  * 是否加载中
  */
  isLoading?: boolean
  /**
  * 按钮宽度
  */
  width?: number
  /**
  * 是否吸底
  */
  isBottomFixed?: boolean
  /**
  * 按钮尺寸
  */
  size?: 'large' | 'medium' | 'small' | 'mini'
  /**
  * 主题
  */
  theme?: 'default' | 'red' | 'blue' | 'golden'
  /**
  * 按钮圆角大小
  */
  radius?: number
  /**
  * 点击事件
  */
  onClick?: Function
  /**
  * 是否禁用
  */
  disabled?: boolean
  /**
  * 自定义类名
  */
  'custom-class'?: string
  /**
  * 幽灵按钮
  */
  plain?: boolean
  /**
  * 参考小程序元素open-type属性
  */
  openType?:
    | 'contact'
    | 'contactShare'
    | 'share'
    | 'getRealnameAuthInfo'
    | 'getAuthorize'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'lifestyle'
    | 'launchApp'
    | 'openSetting'
    | 'feedback'
    | undefined
}

/**
* 组件内部属性
*/
interface IState {
  touchClass: string
}

class HdButton extends Component<IProps, IState> {
  static defaultProps: IProps = {
    theme: 'default',
    radius: 96,
    isLoading: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      touchClass: '',
    }
  }

  /**
  * 外部样式类
  */
  static externalClasses = ['custom-class']

  handleClick() {
    const { onClick, disabled, isLoading } = this.props
    if (disabled || isLoading) {
      return
    }
    onClick && onClick()
  }

  onTouchStart = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.setState({ touchClass: 'touch' })
  }

  onTouchEnd = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    setTimeout(() => {
      this.setState({ touchClass: '' })
    }, 100)
  }

  getColor = () => {
    const { theme, plain } = this.props
    let result = ''
    switch (theme) {
      case 'default':
        result = plain ? '#5C5C5C' : '#5C5C5C'
        break
      case 'red':
        result = plain ? '#f32525' : '#ffffff'
        break
      case 'blue':
        result = plain ? '#426bfe' : '#ffffff'
        break
      case 'golden':
        result = plain ? '#f7c27b' : '#ffffff'
        break
      default:
        result = '#5C5C5C'
        break
    }
    return result
  }

  render() {
    const {
      size,
      horizontalThrough,
      theme,
      disabled,
      isBottomFixed,
      plain,
      openType,
      radius,
      isLoading,
      width,
    } = this.props
    const { touchClass } = this.state
    const h5ClassName = this.props['custom-class']
    // console.log('children', ((children as any) || []).length)

    return (
      <Button
        openType={openType}
        className={\`hd-taro-button size-\${size} \${
          process.env.TARO_ENV === 'h5' ? h5ClassName : 'custom-class'
        } \${horizontalThrough ? 'horizontal-through' : ''} theme-\${theme} \${
          disabled ? 'disabled' : ''
        } \${isBottomFixed ? 'bottom-fixed' : ''} \${
          plain ? 'plain' : ''
        } \${touchClass}\`}
        style={{
          borderRadius: Taro.pxTransform(radius || 96),
          ...(width ? { width: Taro.pxTransform(width) } : {}),
          ...(width ? { minWidth: Taro.pxTransform(width) } : {}),
        }}
        onClick={this.handleClick.bind(this)}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        {isLoading ? (
          <Loading
            custom-class='loading'
            size={size === 'mini' ? 32 : 40}
            color={this.getColor()}
            style={
              ((this.props.children || []) as any).length > 0
                ? { marginRight: Taro.pxTransform(20) }
                : {}
            }
          />
        ) : null}
        {this.props.children}
      </Button>
    )
  }
}

export default HdButton`,
    },
  },
  {
    name: "coder-notifier",
    nature: "开源项目",
    duty: (
      <>
        <Badge variant="outline">前端开发</Badge>
        <Space w="xs" />
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Space w="xs" />
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </>
    ),
    detail:
      "一款定时提醒命令行工具。通过预先设置一些提醒任务，就可以实现自动提醒喝水、休息等功能。未来还将引入插件机制，可以根据需求自行扩展。",
    technologies: (
      <>
        <Badge variant="dot" color="pink">
          Ink
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Space w="xs" />
        <Badge variant="dot">NodeJs</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="cyan">
          schedule
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="violet">
          shelljs
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="orange">
          meow
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="dark">
          ava
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="yellow">
          pm2
        </Badge>
      </>
    ),
    codeLink: "https://github.com/qq865738120/coder-notifier",
    player: "464113",
    code: {
      language: "tsx",
      text: `import { Box } from "ink"
import React, { FC, useEffect, useState } from "react"
import Logo from "./components/Logo"
import Tips, { ITipsProps } from "./components/Tips"
import shell from "shelljs"
import pm2 from "pm2"
import MyTable from "./components/MyTable"
import Loading from "./components/Loading"
import { readSetting } from "./common/settingHelper"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

const setting = readSetting() || {}

const SaveView: FC = () => {
  // 提示
  const [tips, setTips] = useState<ITipsProps>({
    isShow: false,
    type: "success",
    message: "",
  })
  // pm2进程表格
  const [pm2List, setPm2List] = useState<any>([])
  const [loadingOption, setLoadingOption] = useState({
    isLoading: process.platform !== "win32",
    text: "正在安装pm2",
  })

  useEffect(() => {
    if ((setting.list || []).length === 0) {
      setLoadingOption({ isLoading: false, text: "" })
      setTips({
        isShow: true,
        type: "info",
        message: "没有发现通知，请先设置通知。",
      })
    } else {
      if (process.platform === "darwin") {
        saveToOSX()
      } else if (process.platform === "win32") {
        saveToWin()
      } else {
        setTips({
          isShow: true,
          type: "error",
          message: "暂时不支持该系统。",
        })
      }
    }

    return () => {
      return pm2.disconnect()
    }
  }, [])

  const saveToOSX = () => {
    const result = shell.exec("npm install pm2 -g", {
      silent: true,
    })
    setLoadingOption({ isLoading: false, text: "" })
    if (result.code === 0) {
      setTips({
        isShow: true,
        type: "success",
        message: "安装pm2成功",
      })
    } else {
      setTips({
        isShow: true,
        type: "error",
        message: "安装pm2失败",
      })
      setTimeout(() => {
        process.exit(1)
      }, 0)
    }
    pm2.connect(err => {
      if (err) {
        setTips({
          isShow: true,
          type: "error",
          message: "连接pm2失败",
        })
        setTimeout(() => {
          process.exit(1)
        }, 0)
      }
      pm2.start(
        {
          name: "coder-notifier",
          script: "coder-notifier",
          args: "start",
          log_date_format: "YYYY-MM-DD HH:mm Z",
        },
        err => {
          if (err) {
            setTips({
              isShow: true,
              type: "error",
              message: "启动coder-notifier进程失败，请检查是否安装成功。",
            })
            setTimeout(() => {
              process.exit(1)
            }, 0)
          } else {
            setTips({
              isShow: true,
              type: "success",
              message: "启动coder-notifier进程成功",
            })
            const result = shell.exec("pm2 startup", {
              silent: true,
            })
            shell.exec(result.stdout.replace("sudo", ""), {
              silent: true,
            })
            shell.exec("pm2 save --force", {
              silent: true,
            })
            pm2.list((err, list) => {
              if (!err) {
                const tableData = list.map(item => {
                  return {
                    id: item.pm_id,
                    name: item.name,
                    status: item.pm2_env?.status,
                  }
                })
                setPm2List(tableData)
                setTips({
                  isShow: true,
                  type: "success",
                  message: "完成",
                })
                setTimeout(() => {
                  process.exit(0)
                }, 0)
              } else {
                setTips({
                  isShow: true,
                  type: "info",
                  message: "获取进程列表失败",
                })
                setTimeout(() => {
                  process.exit(1)
                }, 0)
              }
            })
          }
        }
      )
    })
  }

  const saveToWin = () => {
    setTips({
      isShow: false,
      type: "success",
      message: "",
    })
    const result = shell.exec("npm root -g", {
      silent: true,
    })
    const tempArr = result.stdout.split("\\")
    tempArr.pop()
    const batLinkPath = path.join(
      "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\win-save-link.vbs"
    )
    const batPath = path.join(
      ...tempArr,
      "node_modules/coder-notifier/win-save.vbs"
    )
    if (!fs.existsSync(batLinkPath)) {
      fs.symlinkSync(batPath, batLinkPath, "file")
      setTips({
        isShow: true,
        type: "success",
        message: "保存开机启动项成功",
      })
    }

    shell.exec(batPath)
    setTips({
      isShow: true,
      type: "success",
      message: "启动成功",
    })
    setTimeout(() => {
      process.exit(0)
    }, 0)
  }

  return (
    <Box flexDirection='column'>
      <Logo />

      {loadingOption.isLoading && <Loading>{loadingOption.text}</Loading>}

      {pm2List.length > 0 && (
        <MyTable title='pm2进程列表' data={(pm2List || []) as any}></MyTable>
      )}

      <Tips {...tips}></Tips>
    </Box>
  )
}

export default SaveView`,
    },
  },
  {
    name: "taro-plugin-image-compress",
    nature: "开源项目",
    duty: (
      <>
        <Badge variant="outline">前端开发</Badge>
        <Space w="xs" />
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </>
    ),
    detail:
      "一款自动化的图片无损压缩Taro插件，自动压缩项目中png、jpg/jpeg、gif、svg、webp格式的图片。采用异步压缩、缓存等机制提升速度。",
    technologies: (
      <>
        <Badge variant="dot" color="pink">
          imagemin
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="indigo">
          Taro
        </Badge>
        <Space w="xs" />
        <Badge variant="dot">NodeJs</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="violet">
          jest
        </Badge>
        <Space w="xs" />
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
      </>
    ),
    codeLink: "https://github.com/qq865738120/taro-plugin-image-compress",
    player: "464119",
    code: {
      language: "tsx",
      text: `import { doCache, getCache } from "./cache.js";
import { getFileHash, getBufferHash } from "./hash.js";
import isNeedCompress from "./isNeedCompress.js";
const imagemin = require("imagemin");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const imageminWebp = require("imagemin-webp");

const fsPath = require("fs-path");

const compress = (ctx, dirPath?: string) => {
  const { chalk } = ctx.helper;
  const cache = getCache();
  const pluginObj = {
    gif: imageminGifsicle(),
    png: imageminOptipng(),
    jpg: imageminJpegtran(),
    jpeg: imageminJpegtran(),
    svg: imageminSvgo(),
    webp: imageminWebp(),
  };
  let count = 0;
  let compressCount = 0;

  const imageFiles: string[] = fsPath.findSync(
    dirPath || "./src",
    (_filepath, stats, filename) => {
      if (
        stats === "file" &&
        /\.png$|\.jpg$|\.jpeg$|\.svg$|\.gif$/.test(filename)
      ) {
        return true;
      }
      if (stats === "directory") {
        return true;
      }
      return false;
    }
  ).files;

  imageFiles.map((path) => {
    let _path = path;
    if (process.platform === "win32") {
      _path = _path.split("\\").join("/");
    }
    getFileHash(path, (hash) => {
      if (isNeedCompress(_path, hash, cache)) {
        const destinationArr = _path.split("/");
        const fileName = destinationArr.pop() || "";
        imagemin([_path], {
          destination: destinationArr.join("/"),
          plugins: [pluginObj[fileName.split(".").pop() || "png"]],
        })
          .then((buffer) => {
            count++;
            if (!buffer || buffer.length === 0) {
              return;
            }
            const newHash = getBufferHash(buffer[0].data);
            // 替换新的hash值
            cache[buffer[0].sourcePath] = newHash;
            compressCount++;
            console.log(chalk.yellowBright("压缩 "), \`✅\${path}\`);
          })
          .catch((err) => {
            count++;
            console.error("压缩出错", err);
          });
      } else {
        count++;
      }
    });
  });

  const timerId = setInterval(() => {
    if (count === imageFiles.length) {
      doCache(cache);
      clearInterval(timerId);
      console.log(
        chalk.blueBright("结束 "),
        \`✅taro-plugin-image-compress已为您压缩\${compressCount}张图片！👏👏👏\`
      );
    }
  }, 100);
};
// compress();
export default compress;`,
    },
  },
  {
    name: "babel-plugin-console-clear",
    nature: "商业项目",
    duty: (
      <>
        <Badge variant="outline">前端开发</Badge>
        <Space w="xs" />
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </>
    ),
    detail:
      "清除代码中的console语句。根据需求可以自行配置需要保留的console语句，默认配置下清除所有。该插件提供两个可配置参数，ignore为string[]类型，ignoreTag为string[]类型，插件会匹配第一个参数中是否包含需要忽略的tag，包含的话则不清除。",
    technologies: (
      <>
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
      </>
    ),
    codeLink: "",
    images: [
      { width: 400, height: 400, thumb: "6-1.png" },
      { width: 400, height: 400, thumb: "6-2.png" },
      { width: 400, height: 400, thumb: "6-3.png" },
    ],
    code: {
      language: "tsx",
      text: `module.exports = function ({ types: t }) {
return {
  visitor: {
    ExpressionStatement(path, state) {
      const { opts } = state;
      const propertyArr = [
        "assert",
        "clear",
        "context",
        "count",
        "countReset",
        "debug",
        "dir",
        "dirxml",
        "error",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeLog",
        "timeStamp",
        "trace",
        "warn",
      ];

      if (path.node.expression.type !== "CallExpression") return;

      if (!path.node.expression.callee) return;

      // 拿到object与property, 比如console.log语句的object name为console, property name为log
      const { object, property } = path.node.expression.callee;
      const literal = path.node.expression.arguments[0];

      if (!property) return;
      if (!object) return;
      // 如果表达式语句的object name不为console, 不作处理
      if (object.name !== "console") return;
      if (!propertyArr.includes(property.name)) return;

      // 判断property name是不是插件配置里被忽略的
      const isIgnore =
        (opts.ignore || []).find((ele) => ele === property.name) || false;
      const isIgnoreTag =
        literal && literal.value
          ? (opts.ignoreTag || []).find(
              (ele) => JSON.stringify(literal.value).indexOf(ele) > -1
            ) || false
          : false;
      // 如果不是, 删除此条语句
      if (!isIgnore && !isIgnoreTag) path.remove();
    },
  },
};
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
