# 幽灵键删除归档（2026-09-03）

> 依据：源码 index.html（含 demo 面板排除后）中，表键剥除 `{n}` 占位符后的静态中文片段**全部找不到**。
> 处置：自动删除 40 个 + `home.safeRide` 重复定义冗余 1 行。原文件备份：`translation-reference.html.bak-20260903-174228`。
> 说明：这些键多为 **wallet-plan 规划模块（提现/流水表头）尚未在源码实现**的预建键，模块实现后可从此归档按 key 找回复用；
> 或属措辞已改/无引用，届时从源码重新补录即可。下表 zh-CN 值供恢复参考。

## 已删除键（40）

| key | zh-CN | 备注 |
|---|---|---|
| idInfo.add | 添加证件 | 措辞/未实现 |
| idInfo.docUploaded | 证件已上传 | 同上 |
| idInfo.empty | 暂无证件信息 | 同上 |
| idInfo.maxUpload | 该证件类型最多上传2张 | 同上 |
| orders.personalDocs | 个人资料 | 无引用 |
| profile.csDeleted | 证件已删除 | 措辞不同（现用「资料已删除」） |
| profile.idInfoHint | 请上传身份证、驾照等证件资料 | 措辞/未实现 |
| wallet.amountRequired | 请输入金额 | 提现未实现 |
| wallet.balancePayInsufficient | 余额不足，还需 | 提现未实现 |
| wallet.balancePayPriority | 赠送余额优先使用 | 提现未实现 |
| wallet.bonusLedger | 赠送流水 | 流水表头未实现 |
| wallet.bonusLedgerTitle | 赠送余额流水 | 同上 |
| wallet.frozen | 冻结 | 未实现 |
| wallet.ledgerBalance | 变动后余额 | 表头未实现 |
| wallet.ledgerEmpty | 暂无流水记录 | 同上 |
| wallet.ledgerOperator | 操作人 | 同上 |
| wallet.ledgerOrder | 关联订单 | 同上 |
| wallet.ledgerRemark | 备注 | 同上 |
| wallet.noBankFill | 请填写完整银行信息 | 提现未实现 |
| wallet.rechargeLedger | 充值流水 | 表头未实现 |
| wallet.rechargeLedgerTitle | 充值余额流水 | 同上 |
| wallet.statusPending | 审核中 | 提现状态未实现 |
| wallet.statusRejected | 已驳回 | 同上 |
| wallet.topupConfirm | 确认充值 | 措辞/未实现 |
| wallet.totalBalance | 总余额 | 未实现（现 UI 用可用/赠送余额） |
| wallet.withdrawAccountHolder | 开户人姓名 | 提现未实现 |
| wallet.withdrawAccountHolderPlaceholder | 请输入开户人姓名 | 同上 |
| wallet.withdrawAmount | 提现金额 | 同上 |
| wallet.withdrawApply | 申请提现 | 同上 |
| wallet.withdrawApplyTitle | 申请提现 | 同上 |
| wallet.withdrawBankAccount | 银行账号 | 同上 |
| wallet.withdrawBankAccountPlaceholder | 请输入银行账号 | 同上 |
| wallet.withdrawBankName | 银行名称 | 同上 |
| wallet.withdrawBankNamePlaceholder | 请输入银行名称 | 同上 |
| wallet.withdrawEmpty | 暂无提现记录 | 同上 |
| wallet.withdrawInsufficient | 余额不足 | 同上 |
| wallet.withdrawRecords | 提现记录 | 同上 |
| wallet.withdrawRecordsTitle | 提现记录 | 同上 |
| wallet.withdrawSubmit | 提交申请 | 同上 |
| wallet.withdrawSubmitted | 提现申请已提交 | 同上 |

## 另删除
- `home.safeRide`：ROWS 中重复定义 2 行（值相同），删除冗余 1 行，保留 1。

## 保留待定（骨架占位符键）
- ~~`orders.totalDays = 共{n}天`（剥壳法不可靠，暂留人工复核）~~ → **已由用户确认：源码存在，JS 动态渲染**（共/天 被插值变量隔开，静态连写搜不到属正常），保留为有源键。技能 L 段已改为对含 `{n}` 骨架键不自动判定、单列人工复核区。
