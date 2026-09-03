# translation-reference.html · kind 分类 + 词条收敛 提案 v3（待确认）

> v3 变更：① 划出「源码未实现/幽灵键」（wallet.status*、wallet.withdraw*、refundSource* 等，L 段
> 检出 41 个）——它们不参与 kind 标注与收敛；② 采纳「**文案相同即可合并（含 copy）**」；
> ③ enum 族修正为"源码可溯源"的 12 族。执行前备份原文件。

## A. kind 标注：enum（词条·枚举，源码可溯源）44 键

| 族 | 键（现状前缀） | zh-CN | 处置 |
|---|---|---|---|
| A1 订单状态 | orders.status×8 | 已创建/待取用/进行中/待归还/已超期/已违约/已完成/已取消 | 收敛 C1 |
| A2 订单状态·快捷 | orders.quick×4 | 待取用/进行中/已超期/待归还 | 同族，并入 C1 |
| A3 首页状态卡 | home.bizStats×2 | 进行中/待归还 | 同族值，并入 C1 |
| A4 钱包流水类型 | wallet.type×5 | 充值/消费/退款/扣减/提现 | 保持（流水三元有源） |
| A5 星期 | weekday.mon–sun ×7 | 周一…周日 | 保持 |
| A6 放电状态 | battery.discharge×2 | 允许放电/禁止放电 | 保持 |
| A7 租赁周期·订单 | orders.period×4 | 时租/日租/周租/月租 | 并入 C2 |
| A8 租赁周期·我的 | profile.plan×3 + price×3 | 时租/日租/月租（重复） | 并入 C2（同文案合并） |
| A9 订单类型 | orders.type×3 | 车辆租赁/电池租赁/车电套餐 | 新增 enum |
| A10 车辆开/关锁 | vehicles.lockOpen/lockClose ×2 | 开锁/关锁 | 新增 enum |
| A11 电机锁状态 | vehicles.motorLocked/motorUnlocked ×2 | 已锁电机/未锁电机 | 新增 enum |
| A12 绑定类型 | vehicles.bindVehicle/bindBattery ×2 | 绑定车辆/绑定电池 | 新增 enum |

> 移除 v2 的「A5 钱包状态 wallet.status×4」：源码无提现状态 UI（L 幽灵），不标。
> 移除 refundSource*/refundModeReturn 等：源码无「退款来源」字段（L 幽灵）。

## B. kind 标注：term（词条·通用）21 键（不变）

common.cancel/confirm/delete/reset/save/search/all/account/phone/email/startTime/endTime/
change/back/modelNo/second + common.unit{Day,Hour,Minute,Month,Year}Short

## C. 词条 key 收敛（同枚举 / 同文案 → 合并主族；删冗余行）

### C1 订单状态 → `orderStatus.*`
orders.status×8 → `orderStatus.created/pickup/progress/return/overdue/breach/complete/cancelled`；
orders.quick×4 与 home.bizStats×2 删行并复用上述键；`orders.status`/`orders.filterStatus`（筛选标题）copy 保留。

### C2 租赁周期 → `rentPeriod.*`
orders.period×4 → `rentPeriod.hour/day/week/month`；profile.plan×3、profile.price×3（同文案「时租/日租/月租」）删行复用。
`orders.billDaily`/`plan.billedByDay`（按天计费）不并入（计费口径≠周期档，另行 glossary 统一）。

### C3 同文案合并（copy 也适用，采纳「文案相同可合并」）
| 组 | 现状 | 合并为 |
|---|---|---|
| 线下支付 ×3 | orders.confirmPay / confirmPayTitle / paymentOffline | 1 键（保留 orders.paymentOffline，另两处改引用或删） |
| 取消订单 ×2 | orders.cancelOrder / confirmCancelTitle | 1 键 |
| 绑定手机号 ×2 | profile.bindPhone / bindNewPhone | 1 键 |
| 绑定邮箱 ×2 | profile.bindEmail / bindNewEmail | 1 键 |
| 请输入手机号 ×2 | profile.phonePlaceholder / login.phonePlaceholder | 1 键（放 common/复用） |
| 请输入邮箱 ×2 | profile.emailPlaceholder / login.emailPlaceholder | 1 键 |
| 获取验证码 ×2 | login.getCode / profile.getCode | 1 键 |
| 退出登录 ×2 | profile.confirmLogout / settingsLogout | 1 键 |
| 状态 ×2（标签） | profile.status / vehicles.status | 1 键（term 候选） |
| 车型 ×2（标签） | vehicles.model / filterModel | 1 键（term 候选） |
| 创建时间 ×3 | orders.createdTime / filterCreateDate / profile.createdTime | 1 键 |
| 押金 ×2 / 租金 ×2 / 确定×3 等 | 见 G 段清单 | 逐个同文案合一 |

> 说明：C3 每组收敛会删冗余键并改引用，属于较大动作——**本轮只做 A/B + C1/C2 与明确重复组**，
> 其余同文案组（C3 后段）建议下一批按 G 段清单分批收敛，避免一次 diff 过大。

### C4 新增一级组登记
`GROUP_LABELS` += `orderStatus`/`rentPeriod`；`GROUP_ORDER` 对应插入。

## D. 幽灵键处置（L 段 41 个，不参与 kind/收敛）

来源：wallet.withdraw*×22、wallet.status*×4（含 statusCompleted）、wallet.ledger*/frozen/topupConfirm/
balancePay*/amountRequired/totalBalance、idInfo.add/empty/docUploaded/maxUpload、orders.personalDocs/
totalDays/rentDurationTotal、profile.csDeleted/idInfoHint 等。

处置选项（选一）：① **保留为规划键**——提现/流水等模块按 wallet-plan 待实现，暂存表、不标 kind、
不进 locale？还是进 locale？若进 locale 目前无源无害（多余键），建议标注单独清单暂留；② **移除**，
待模块实现时再补录。

## E. 执行步骤（确认后）
备份 → 应用 C1/C2 收敛 + C3 明确重复组 + A/B kind 标注 → 登记 GROUP_LABELS/ORDER →
删 safeRide 重复行 → 幽灵键按 D 处置 → 重建 4 个 locale → 跑诊断（G/H/J/L）→ 汇总 diff 复核。
