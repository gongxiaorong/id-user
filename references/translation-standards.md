# 译法标准表（Translation Standards）— 4 语权威版

> **📌 项目权威文件（与技能解耦）**
> 本文件是 **用户端（1373）/ 商户端（9bb5）** 两套原型的**本地权威译法标准**，
> 是 i18n 治理时回填、补录、跨端统一的**唯一真源**（zh-CN / zh-HK / en / id 四语一并定）。
> `i18n-table-reconcile` 技能目录内的同名文件**仅为通用模板**，不承载本项目已定译法，
> 改动请直接维护本文件；技能升级/复制不会覆盖它。
> 执行顺序：**先改本文件（定标准）→ 再批量回填两端对照表与 locales**。

> **本文件是本项目唯一的术语 / 译法规范（单文件模式）**
> - **zh-HK / en / id 译法**：看上面词条表与「✅ 已定决策汇总」。
> - **zh-CN 同义词统一**：看文末「**zh-CN 术语统一（glossary 词条）**」一节。
> - 跑 I 段审计时 `--glossary` **直接指向本文件**：
>   `python reconcile.py --source index.html --table translation-reference.html --glossary <本文件>`
>   解析器已加固，只读取形如 `规范词 = 变体1, 变体2` 的行，表格/标题/正文自动忽略。
> - 旧 `references/glossary.md` 已并入本文件，不再单独维护（技能内同名文件仅为通用模板）。
>   **关键术语的译法要对标行业惯例 / 国内出海产品常用译法**，不要每次临场发挥，
>   否则同一概念在不同页面译出多个版本。

## 为什么是 4 语（zh-CN / zh-HK / en / id）

原型每个键都有 4 个语种列，术语标准若只管 en/id，zh-HK 就会每次临场繁化、
出现「登入/登錄」「綁定/綑綁」「電郵/郵箱」不一致。因此**术语表同样按 4 语定**：

- **zh-CN**：源文定词（喂 glossary 统一的用词）。
- **zh-HK**：繁体 + **香港地区用字**（不是机械繁化）。本项目已实测用字见下表，
  遇到新词先用「zh-HK 用字慣例」一节核对，没有再按香港常用写法新增。
- **en / id**：对标行业惯例 + 国内出海产品常用译法（见文末大厂对标附录）。

## 格式

`| zh-CN | zh-HK | en | id | 说明 / 常见误译 |`

## 词性规则（与本表配套）

- **动作按钮** → 外语用**动词**：`提现`(按钮) → `Withdraw`、`切换门店` → `Switch Store`
- **设置项 / 菜单项 / 页面标题 / 字段名** → 外语用**名词**：
  `提现类型` → `Withdrawal Type`、`提现记录` → `Withdrawal Records`
- **书写规范**：统一用 **Title Case** 与**连字符**（`Top-up` 不写 `Top Up` / `topup`）；
  同一术语全表**大小写与连字符必须一致**（实测踩过 `Top Up` vs `Top-up` 并存）。
- **登录按钮 已定 `Sign In`**（用户裁决）；同场景成对动词统一（退出 → `Sign Out`，
  如业务已在用 `Log Out` 也可，**全表一致即可**）。

## ✅ 已定决策汇总（本表权威结论，按此回填）

| 术语 | zh-CN | zh-HK | en | id | 状态 |
|---|---|---|---|---|---|
| 登录（按钮/标题） | 登录 | 登入 | **Sign In** | Masuk | ✅ 用户裁决 2026-09 |
| 退出登录 | 退出登录 | 登出 | **Sign Out**（或 Log Out，全表统一） | Keluar | ✅ 与 Sign In 成对 |
| 注册 | 注册 | 註冊 | **Sign Up** | Daftar | ✅ |
| 充值 | 充值 | 充值 | **Top-up** | Isi Ulang | ✅ 不用 Recharge |
| 押金 | 押金 | 押金 | Deposit | **Jaminan** | ✅ 用户裁决 2026-09 |
| 更换电池（换绑） | 更换电池 | 更換電池 | **Change Battery** | Ganti Baterai | ✅ Change=换绑非维修 |
| 实名 / 实名信息 | 实名信息 | 實名信息 | **KYC** | **Verifikasi Identitas** | ✅ 用户裁决 2026-09；旧 Real-name Verification / Verifikasi Nama Asli 作废 |
| 手机号 | 手机号 | 手機號 | Phone Number | **Nomor Ponsel** | ✅ 用户裁决 2026-09；不用 Nomor HP |
| 车架号（车辆识别码） | 车架号 | 車架號 | **VIN** | **VIN** | ✅ 外语统一 VIN；旧 Frame No. / Nomor Rangka 作废 |
| 中控编号（车控设备号） | 中控编号 | 中控編號 | **IMEI** | **IMEI** | ✅ 外语统一 IMEI；旧 Controller No./ID、Kontroler 作废；zh-HK 统一 中控編號 |
| 切换语言（设置项） | 切换语言 | 切換語言 | **Language** | **Bahasa** | ✅ 外语指事物用名词 |
| 密码长度 | 密码长度需为 6–64 位 | 密碼長度需為 6–64 位 | Password must be 6–64 characters | Panjang kata sandi harus 6–64 karakter | ✅ 两端统一 6–64（en dash）；商户端 8-32 漂移作废 |
| 陪伴里程 | 陪伴里程 | 陪伴里程 | **Total Distance** | **Jarak Tempuh** | ✅ 直译 Companion Mileage 生硬；旧 Jarak Pendamping 作废 |
| 钱包（支付渠道项） | 钱包 | 錢包支付 | **Wallet Payment** | Pembayaran Dompet | ✅ 保留 Payment（渠道项）；页面/菜单名用 **Wallet** |
| 二次确认弹窗（风险/不可恢复） | 确认 | 確認 | **Confirm** | Konfirmasi | ✅ 用「确认」 |
| 筛选弹窗（无风险） | 确定 | 確定 | **Confirm** | Konfirmasi | ✅ 用「确定」 |
| 逾期 / 超期 | 中文不动 | 中文不动 | **Overdue** | Terlambat | ✅ 外语统一 Overdue；zh-CN 保留「超期/逾期」原样 |
| 取用 | 取用 | 取用 | **Pickup** | Diambil / Pengambilan | ✅ 中文统一「取用」，废弃「领取」（规则须知固定文案除外，保留原词） |
| 远程锁车 | 远程锁车 | 遠程鎖車 | **Remote Lock** | Kunci Jarak Jauh | ✅ 中文统一「远程锁车」，废弃「远程锁定」 |

> 判定口径（「更换 X」先问业务语义）：换绑→`Change X`；换件（维修）→`Replace X`；
> 服务形态（以换代充）→`Battery Swap`。混用会让运营和用户误解操作结果。

## 词条（两轮车 / 换电 · 租赁 SaaS，4 语）

| zh-CN | zh-HK | en | id | 说明 / 常见误译 |
|---|---|---|---|---|
| 充值 | 充值 | **Top-up** | Isi ulang | ❌ 不用 `Recharge`（Recharge 偏"给电池充电"） |
| 提现（按钮） | 提現 | **Withdraw** | Tarik | 动词 |
| 提现（类型/记录/金额） | 提現（類型/記錄/金額） | **Withdrawal** | Penarikan | 名词 |
| 钱包 | 錢包 | Wallet | Dompet | |
| 余额 | 餘額 | Balance | Saldo | |
| 押金 | 押金 | Deposit | **Jaminan** | ✅ 已定（id 不用 Deposit） |
| 租金 | 租金 | Rent | Sewa | |
| 套餐 | 套餐 | Package | Paket | 订阅场景也可用 Plan，二选一后全表统一 |
| 订单 | 訂單 | Order | Pesanan | |
| 门店 | 門店 | **Store** | Toko | ❌ 不用 `Shop`（Shop 偏小店/作坊） |
| 车辆 | 車輛 | Vehicle | Kendaraan | ❌ 不用 `Car`（两轮车不是 car） |
| 车架号（车辆识别码） | 車架號 | **VIN** | **VIN** | ✅ 已定：en/id 统一 VIN，不写 Frame No. / Nomor Rangka |
| 中控编号 | 中控編號 | **IMEI** | **IMEI** | ✅ 已定：en/id 统一 IMEI，不写 Controller No. / Kontroler |
| 电池 | 電池 | Battery | Baterai | |
| 绑定电池 | 綁定電池 | **Bind Battery** | Ikat Baterai | 首次把某块电池绑到订单/车辆上 |
| 更换电池（**换绑**） | 更換電池 | **Change Battery** | Ganti Baterai | ✅ 已定 `Change`：= 解绑原电池 + 绑定另一块，非维修 |
| 电池已更换 | 電池已更換 | Battery changed | Baterai telah diganti | 上一条的完成态（与 Change 成对） |
| 换电（服务形态） | 換電 | **Battery Swap** | Tukar Baterai | ❌ 别与更换电池混：Swap 是"以换代充"的**服务** |
| 换电柜 | 換電櫃 | Swap Cabinet | Kabinet Tukar Baterai | 也可 Battery Swap Station，二选一统一 |
| 待取用 | 待取用 | Awaiting Pickup | Menunggu Pengambilan | |
| 待归还 / 待还车 | 待歸還 / 待還車 | **Pending Return** | Menunggu Pengembalian | ❌ 勿用 `To Be Returned`（同状态须同译法） |
| 待支付 | 待支付 | Pending Payment | Menunggu Pembayaran | |
| 已超期 | 已超期 | Overdue | Terlambat | |
| 已违约 | 已違約 | Breached | Pelanggaran | |
| 续租 | 續租 | Renewal | Perpanjangan | |
| 实名信息 | 實名信息 | **KYC** | **Verifikasi Identitas** | ✅ 已定（en=KYC）；旧 Real-name*/Info Identitas 作废 |
| 客服 | 客服 | Customer Service | Layanan Pelanggan | 缩写 `CS` 仅限内部，不进 UI |
| 优惠券 | 優惠券 | Voucher | Voucher / Kupon | 印尼市场 Voucher 更通用 |
| 代理商 | 代理商 | Agent | Agen | |
| 运营（门店） | 營運（門店） | Operated | Dikelola | |
| 支付 | 支付 | Payment | Pembayaran | |
| 退款 | 退款 | Refund | Pengembalian dana | |
| 绑定 | 綁定 | Bind（动作）/ Bound（状态） | Hubungkan / Terhubung | |

## 词条 · 用户端（C 端）专属（4 语）

| zh-CN | zh-HK | en | id | 说明 |
|---|---|---|---|---|
| 我的爱车 | 車輛 | Vehicles | Kendaraan | tab 名，不必译 My Vehicles（tab 语境已给） |
| 我的订单 / 我的钱包 | 我的訂單 / 我的錢包 | My Orders / My Wallet | Pesanan Saya / Dompet Saya | |
| 开锁 / 关锁 | 開鎖 / 關鎖 | Unlock / Lock | Buka kunci / Kunci | |
| 解绑电池 / 解绑车辆 | 解綁電池 / 解綁車輛 | Unbind Battery / Unbind Vehicle | Lepas Baterai / Lepas Kendaraan | 与 `Bind X` 成对 |
| 立即支付 | 立即支付 | Pay Now | Bayar Sekarang | |
| 确认订单 | 確認訂單 | Confirm Order | Konfirmasi Pesanan | |
| 联系门店 / 选择门店 / 门店信息 | 聯絡門店 / 選擇門店 / 門店資訊 | Contact Store / Select Store / Store Info | Hubungi Toko / Pilih Toko / Info Toko | |
| 当前定位 / 重新定位 | 當前定位 / 重新定位 | Current Location / Re-locate | Lokasi Saat Ini / Atur Ulang Lokasi | |
| 归还时间 | 歸還時間 | Return Time | Waktu Pengembalian | |
| 车辆名称 | 車輛名稱 | Vehicle Name | Nama Kendaraan | |
| 安全骑行 | 安全騎行 | Safe Riding | Berkendara Aman | |
| 鸣笛寻车 | 鳴笛尋車 | Find Vehicle | Cari Kendaraan | 省略「鸣笛」，属场景省略，可接受 |

## zh-HK 用字慣例（供新增词 / 附录参考，与两端对照表一致）

账号→**帳號**、邮箱→**電郵**、密码→**密碼**、登录→**登入**、退出登录→**登出**、
验证码→**驗證碼**、绑定→**綁定**、余额→**餘額**、充值→**充值**、押金→**押金**、
订单→**訂單**、门店→**門店**、车辆→**車輛**、电池→**電池**、换电→**換電**、
续租→**續租**、违约→**違約**、客服→**客服**、优惠券→**優惠券**、钱包→**錢包**、
设置→**設定**、关于→**關於**、隐私政策→**隱私政策**、用户协议→**用戶協議**、
意见反馈→**意見回饋**、帮助/说明→**說明/幫助**、营运状态→**營運**。

> 经验：zh-HK 不是简体→繁体的机械转换，同词两岸三地写法可能不同（如
> 简体「账号」= 台湾「帳號」同香港；「邮箱」香港「電郵」）。拿不准先查已回填的两端对照表。

## 跨端一致性（B 端 / C 端必须同译）

同一套产品的两端，**同一术语译法不同 = 用户以为是两回事**。已统一的分裂项：

| 术语 | 问题形态（历史） | 统一为 |
|---|---|---|
| 充值（en） | 一端 `Recharge`、一端 `Top Up` | **Top-up** |
| 充值余额 / 充值金额 | `Recharge Balance` vs `Top-up Balance` 等 | **Top-up Balance / Top-up Amount**（连字符） |
| 提现（id） | `Tarik Tunai` vs `Penarikan` | **Penarikan** |
| 押金（id） | `Jaminan` vs `Deposit` | **Jaminan**（✅ 已裁决） |
| 切换语言 | `Switch Language` vs `Language` | **Language / Bahasa** |
| 登录方式 ×5 | `Xxx Login` vs `Xxx` | **Xxx**（场景省略：页面主按钮已是「登录」） |
| 登录按钮 | — | **Sign In**（两端一致） |
| 实名信息 | `Real-name Verification`/`ID Info` | **KYC / Verifikasi Identitas** |
| 手机号（id） | — | **Nomor Ponsel**（不用 Nomor HP） |
| 暂无车辆（id） | 大小写不一 | **Tidak Ada Kendaraan** |
| 最新版本 V{v} | `Latest version` vs `Latest Version` | **Latest Version**（Title Case） |
| 密码长度 | 一端 6–64、一端 8-32 | **6–64**（en dash） |

> **执行顺序**：先改本表（定标准）→ 再批量回填两端，不要边翻边改。
> 跨端比对用 `cross_end_diff.py`（按 key / 按 zh-CN 各 diff 一次）。

## zh-CN 术语统一（glossary 词条 · 供 `--glossary` I 段扫描）

> 词条均来自两端对照表**实测**（同一概念确有 ≥2 种写法才收录），注释写明真实键名。
> 格式 `规范词 = 变体1, 变体2`；行内 `# 注释` 与 `#` 开头整行都不会被扫描。
> 解析器只认「规范词为纯词 + 整行无表格/标点」的行，所以本节可以直接放在本混排文档里。

### 词条（活跃，会被扫描）

```text
# ── 导航 / 页面 ─────────────────────────────
首页 = 主页, 主页面        # 跨端 tab.home：C端「主页」、B端「首页」（en 均 Home）→ 统一「首页」
# ── 订单状态 / 流程 ─────────────────────────
待归还 = 待还车            # B端 renewal.preReturnDays 写「待还车」，其余状态均「待归还」
# ── 资金 / 退款 ─────────────────────────────
退款 = 退费                # orders.cancelRules.3 一处「退费」，其余 35+ 处「退款」
# ── 车辆标识 ────────────────────────────────
车架号 = 车架编号           # C端 frameNo「车架编号」vs B端 vinPlateHint「车架号」；外语统一 VIN
# ── 取还车 / 车控 ───────────────────────────
取用 = 领取, 取车           # 统一「取用」：仅 UI 文案/时间线（待取用/取用时间）用「取用」；规则须知类固定文案（orders.noticeRules/billingRules/cancelRules/overdueRules）保留「领取」，不跟随对齐
远程锁车 = 远程锁定          # 统一「远程锁车」：UI 标签/徽标（如 featureLabels）用「远程锁车」；规则固定文案（如 overdueRules.4）保留「远程锁定」
```

> 中控编号：zh-CN 无同义变体，不建词条；外语（en/id）统一 **IMEI**，zh-HK 统一「中控編號」。

### 有意区分（勿合并 · 备忘，不扫描）

- **设置 vs 配置**：用户功能级用「设置」（系统设置/通用设置/设置密码）；
  后台管理项用「配置」（订单配置/运营配置/系统配置/充值配置/编辑配置）。大厂惯例，保留。
- **详情 vs 明细**：详情 = 页面/记录详情（订单详情/车辆详情/账号详情）；
  明细 = 金额拆分明细（退款明细/充值明细/余额流水）。保留。
- **删除 vs 移除**：删除 = 删记录（删除资料/删除客服）；移除 = 解除绑定后从账号下移除设备。保留。
- **解锁 vs 开锁**：开锁/关锁 = 车控命令；解锁 = 解除锁定状态（报失/电机解锁）。保留。
- **启用 / 开启 / 开通**：主语不同（启用账号 / 开启自动续租 / 开通智能服务）。保留。
- **新增 / 添加 / 创建**：新增 = 新建记录；添加 = 往集合里加（添加资料/添加车辆）；
  创建 = 建单/建号的时间点词（创建时间/账号创建成功）。✅ 用户确认：保留此区分。

### 按场景用词（非同义，勿互换）

- 二次确认弹窗（风险 / 不可恢复操作）用「**确认**」；筛选类弹窗（无风险）用「**确定**」。

## 维护

发现新术语或译法变更 → **先改本文件（4 语一起定）→ 标 ✅ → 再批量回填两端**，
不要边翻边改。改完按本文件回扫存量，确保没有遗漏的旧译法。

---

# 附：国内大厂 APP 常用规范（对标基准）

> **定位**：仅作为**新增文案 / 回填缺译时的 en / id 参考基准**——优先用「国内出海 APP 与
> 本地头部 APP 已在市场里沉淀的说法」，而不是临时直译。**不是对存量已定译法的推翻令**：
> 与上文「✅ 已定」冲突时，以上文为准。本附录为 **en/id 参考**（zh-HK 随正文「zh-HK 用字慣例」）。
>
> 参考对象：支付宝 / 微信 / 滴滴 / 美团 等国内大厂的国际版与多语言版；
> 印尼本地头部 Gojek / Grab / DANA / GoPay（`id` 语种主要对标他们，而不是纯词典直译）。

## 1) 通用功能入口（登录 / 注册 / 设置 / 帮助类）

| zh-CN | en | id | 说明 / 大厂用法 |
|---|---|---|---|
| 登录（按钮/页标题） | **Sign In** | **Masuk** | ✅ 已定 Sign In（不用 Log In）；id 用 Masuk（Gojek/Grab） |
| 注册 | **Sign Up** | **Daftar** | 主按钮动词；已有账号引导可配 `Already have an account? Sign In` |
| 退出登录 | **Sign Out**（或 Log Out） | **Keluar** | 与 Sign In 成对；已用 Log Out 也可，全表一致 |
| 忘记密码 | **Forgot Password** | **Lupa Kata Sandi** | 登录页辅助文案常用问句 `Forgot password?`，作入口时省略问号 |
| 记住我 | **Remember Me** | **Ingat Saya** | 大厂惯例 Remember me / Ingat saya |
| 设置 | **Settings** | **Pengaturan** | 名词；❌ 勿用 Set up（那是"安装"） |
| 帮助中心 | **Help Center** | **Pusat Bantuan** | id 头部普遍用 Bantuan（帮助）作一级入口 |
| 客服 / 客服中心 | **Customer Service** | **Layanan Pelanggan** | 一级入口也可 Help/Bantuan；正式客服名才用全称 |
| 意见反馈 | **Feedback** | **Masukan** | Gojek 用 Masukan |
| 消息 / 通知 | **Notifications** | **Notifikasi** | 设置项/菜单项名词，勿译 Notice（公告） |
| 用户协议 / 服务条款 | **User Agreement / Terms of Service** | **Ketentuan Layanan** | 印尼支付/租赁通用 Ketentuan Layanan |
| 隐私政策 | **Privacy Policy** | **Kebijakan Privasi** | 固定搭配，勿拆译 |
| 关于我们 | **About Us** | **Tentang Kami** | |
| 我知道了 | **Got It** | **Baik** | 弹窗"知晓型"主按钮；大厂 Alipay `Got it`，id 口语 Baik/OK 更贴 |
| 稍后再说 / 以后再说 | **Not Now / Later** | **Nanti Saja** | 引导弹窗副按钮 |
| 跳过 | **Skip** | **Lewati** | 引导页/引导弹窗副操作 |
| 下一步 | **Next** | **Lanjut** | 流程分步按钮 |
| 完成（收尾按钮） | **Done** | **Selesai** | 流程最后一步，勿用 Complete（偏书面） |
| 返回 / 上一步 | **Back** | **Kembali** | |

## 2) 账号 / 认证 / 风控类（大厂出海惯例）

| zh-CN | en | id | 说明 |
|---|---|---|---|
| 实名 / 实名信息 | **KYC** | **Verifikasi Identitas** | ✅ 已定；KYC 为支付/租赁出海通用（DANA/GoPay 用 Verifikasi Identitas） |
| 人脸识别 | **Face Recognition / Face ID** | **Pengenalan Wajah** | 功能名词 Face Recognition；系统能力 Face ID |
| 身份证 / 证件照 | **ID Card** | **KTP** | 印尼身份证即 KTP（通用缩写，进 UI 亦可） |
| 驾驶证 | **Driver's License** | **SIM** | 印尼 SIM（Surat Izin Mengemudi），通用缩写 |
| 手机号 | **Phone Number** | **Nomor Ponsel** | ✅ 已定（不用 Nomor HP） |
| 验证码已发送 | **Code sent** | **Kode terkirim** | 发送验证码后的提示，勿逐字直译 |
| 收不到验证码？ | **Didn't get the code?** | **Belum menerima kode?** | 大厂帮助入口句式 |

## 3) 资金 / 支付 / 优惠（印尼本地口径强化）

| zh-CN | en | id | 说明 |
|---|---|---|---|
| 服务费 | **Service Fee** | **Biaya Layanan** | Gojek/Grab 运费拆项即 Biaya Layanan |
| 手续费 / 平台费 | **Handling Fee / Platform Fee** | **Biaya Admin** | 印尼通用 Biaya Admin |
| 免押金 | **No Deposit** | **Tanpa Jaminan** | 租车促销点：Grab/Gojek 租车文案 Tanpa Deposit / Bebas Jaminan |
| 保险 | **Insurance** | **Asuransi** | |
| 违约金 / 逾期费 | **Penalty / Overdue Fee** | **Denda** | 印尼通用 Denda（Grab 逾期取消费即 Denda） |
| 优惠券 / 代金券 | **Voucher** | **Voucher** | 已定 Voucher；Coupon 偏优惠券码场景 |
| 积分 | **Points** | **Poin** | |
| 余额不足 | **Insufficient Balance** | **Saldo Tidak Cukup** | 支付失败 Toast 大厂句式（id 用 Saldo 呼应钱包） |
| 到账 | **Arrived / Added to balance** | **Masuk** | 「提现到账/充值到账」类状态 |
| 明细 / 账单 | **Details / Statement** | **Rincian** | 账单明细列表头，勿用 Detail（单数） |

## 4) 中文微文案写法（zh-CN 源文对标大厂中文版，供"文案如何写"参考）

- **按钮**：用 2–6 字动词短语（`提交` `确认` `立即支付`）；避免冗余双动词（`点击提交`）、
  避免文白夹杂（`现前往` `即可使用`）；主操作放弹窗右侧、高亮，取消在左（iOS/大厂惯例）。
- **弹窗**：知晓型用「我知道了」；确认型标题≤12 字、正文≤25 字（本技能层级规范已定）。
- **Toast**：≤15 字、**不加句号与感叹号**；系统类错误统一模板「系统繁忙，请稍后重试」，
  不把后端错误码/技术细节暴露给用户。
- **空状态**：以「暂无 XX」为头（`暂无订单` `暂无车辆`），需要时跟一句引导 CTA（`去逛逛` `去充值`）。
- **加载/列表尾**：「加载中…」「下拉刷新」「没有更多了」「网络开小差了，请重试」。
- **称谓**：C 端面向个人用「你」；协议/规则正文用「用户/您」；同一页面两端不混用「你/您」。
- **脱敏**：手机号/证件号展示统一脱敏（`138****1234`），大厂标准做法。

## 5) 书写与格式规范（en / id / zh-HK 通用）

- **标点**：en/id 一律半角；**按钮/标签末尾不加句号**；Toast/短提示不加标点。
- **大小写**：本项目 en 已定 **Title Case**，连字符全表一致（`Sign In` 不写 `Sign in`/`Signin`、
  `Top-up` 不写 `Top Up`）；与个别大厂 sentence case（`Pay now`）的差异不影响，关键是**全表统一**。
- **省略号**：统一用 `…`（勿混 `...`），且不与句号连用。
- **数字与范围**：范围用 en dash `6–64`，全表一致；en 中数字与单位间按惯例空格（`7 business days`）。
- **zh-HK**：繁体 + 香港用字（電郵/帳號/登入/儲值/優惠/設定/說明…），见正文「zh-HK 用字慣例」。

> 本节所有条目均为**参考基准**，不是裁决结论。裁决结果一律看正文「✅ 已定决策汇总」，
> 那里是唯一权威落点；本附录不重复记录已裁决项。
>
> 如要推翻某项已定译法：改正文汇总表 → 标 ✅ → 批量回填两端，不在这里改。
