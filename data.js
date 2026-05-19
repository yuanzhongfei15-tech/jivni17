const categories = [
    { id: 'convert', name: '格式转换', icon: '🔄', color: 'from-blue-500 to-indigo-600', description: '图片、文档、视频等格式转换' },
    { id: 'image', name: '图片工具', icon: '🖼️', color: 'from-pink-500 to-rose-600', description: '图片压缩、编辑、去水印' },
    { id: 'text', name: '文案排版', icon: '✍️', color: 'from-purple-500 to-violet-600', description: '文字处理、排版、生成' },
    { id: 'qrcode', name: '二维码', icon: '📱', color: 'from-green-500 to-emerald-600', description: '二维码生成、解析、美化' },
    { id: 'shorturl', name: '短网址', icon: '🔗', color: 'from-orange-500 to-amber-600', description: '网址缩短、管理' },
    { id: 'calculator', name: '换算工具', icon: '🧮', color: 'from-cyan-500 to-sky-600', description: '进制、时间、单位换算' },
    { id: 'color', name: '颜色工具', icon: '🎨', color: 'from-yellow-500 to-orange-600', description: '取色、配色、色值转换' },
    { id: 'office', name: '办公文档', icon: '📄', color: 'from-gray-500 to-slate-600', description: 'PDF、Word、Excel 处理' },
    { id: 'netdisk', name: '网盘辅助', icon: '☁️', color: 'from-teal-500 to-cyan-600', description: '网盘解析、下载' }
];

const tools = {
    convert: [
        { id: 'png-to-jpg', name: 'PNG 转 JPG', icon: '🖼️', url: 'https://cloudconvert.com/png-to-jpg', desc: 'PNG 图片转 JPG 格式', category: 'convert', tags: ['图片', '格式转换'] },
        { id: 'jpg-to-png', name: 'JPG 转 PNG', icon: '🖼️', url: 'https://cloudconvert.com/jpg-to-png', desc: 'JPG 图片转 PNG 格式', category: 'convert', tags: ['图片', '格式转换'] },
        { id: 'webp-to-png', name: 'WebP 转 PNG', icon: '🖼️', url: 'https://cloudconvert.com/webp-to-png', desc: 'WebP 图片转 PNG 格式', category: 'convert', tags: ['图片', '格式转换'] },
        { id: 'svg-to-png', name: 'SVG 转 PNG', icon: '🎨', url: 'https://cloudconvert.com/svg-to-png', desc: 'SVG 矢量图转 PNG', category: 'convert', tags: ['图片', '格式转换'] },
        { id: 'pdf-to-word', name: 'PDF 转 Word', icon: '📄', url: 'https://www.ilovepdf.com/pdf_to_word', desc: 'PDF 文档转 Word 格式', category: 'convert', tags: ['文档', '格式转换'] },
        { id: 'word-to-pdf', name: 'Word 转 PDF', icon: '📄', url: 'https://www.ilovepdf.com/word_to_pdf', desc: 'Word 文档转 PDF 格式', category: 'convert', tags: ['文档', '格式转换'] },
        { id: 'pdf-to-excel', name: 'PDF 转 Excel', icon: '📊', url: 'https://www.ilovepdf.com/pdf_to_excel', desc: 'PDF 表格转 Excel 格式', category: 'convert', tags: ['文档', '格式转换'] },
        { id: 'excel-to-pdf', name: 'Excel 转 PDF', icon: '📊', url: 'https://www.ilovepdf.com/excel_to_pdf', desc: 'Excel 表格转 PDF 格式', category: 'convert', tags: ['文档', '格式转换'] },
        { id: 'pdf-to-ppt', name: 'PDF 转 PPT', icon: '📽️', url: 'https://www.ilovepdf.com/pdf_to_powerpoint', desc: 'PDF 转 PowerPoint 格式', category: 'convert', tags: ['文档', '格式转换'] },
        { id: 'mp4-to-mp3', name: 'MP4 转 MP3', icon: '🎵', url: 'https://cloudconvert.com/mp4-to-mp3', desc: '视频提取音频 MP3', category: 'convert', tags: ['音视频', '格式转换'] },
        { id: 'mp4-to-gif', name: 'MP4 转 GIF', icon: '🎞️', url: 'https://ezgif.com/video-to-gif', desc: '视频转 GIF 动图', category: 'convert', tags: ['视频', '格式转换'] },
        { id: 'json-to-csv', name: 'JSON 转 CSV', icon: '📋', url: 'https://csvjson.com/json2csv', desc: 'JSON 数据转 CSV 格式', category: 'convert', tags: ['开发', '格式转换'] }
    ],
    image: [
        { id: 'tinypng', name: '图片压缩', icon: '📦', url: 'https://tinypng.com', desc: '在线智能压缩图片，保持画质', category: 'image', tags: ['图片', '压缩'] },
        { id: 'remove-bg', name: '一键去背景', icon: '✂️', url: 'https://www.remove.bg', desc: 'AI 智能抠图，一键去除背景', category: 'image', tags: ['图片', '抠图'] },
        { id: 'watermark-remover', name: '去水印', icon: '🧹', url: 'https://www.watermarkremover.io', desc: 'AI 去除图片水印', category: 'image', tags: ['图片', '去水印'] },
        { id: 'resize-image', name: '图片尺寸调整', icon: '📏', url: 'https://resizeimage.net', desc: '调整图片大小和尺寸', category: 'image', tags: ['图片', '尺寸'] },
        { id: 'crop-image', name: '图片裁剪', icon: '✂️', url: 'https://www.iloveimg.com/crop-image', desc: '在线裁剪图片', category: 'image', tags: ['图片', '裁剪'] },
        { id: 'rotate-image', name: '图片旋转', icon: '🔄', url: 'https://www.iloveimg.com/rotate-image', desc: '旋转和翻转图片', category: 'image', tags: ['图片', '旋转'] },
        { id: 'image-filter', name: '图片滤镜', icon: '🎨', url: 'https://www.photopea.com', desc: '在线 PS，图片编辑和滤镜', category: 'image', tags: ['图片', '编辑'] },
        { id: 'add-watermark', name: '添加水印', icon: '💧', url: 'https://www.iloveimg.com/add-watermark', desc: '给图片添加自定义水印', category: 'image', tags: ['图片', '水印'] },
        { id: 'image-mosaic', name: '图片拼接', icon: '🧩', url: 'https://www.iloveimg.com/merge-images', desc: '多张图片拼接合成', category: 'image', tags: ['图片', '拼接'] },
        { id: 'image-compress', name: '图片压缩', icon: '📦', url: 'https://compressjpeg.com', desc: 'JPG/PNG 图片在线压缩', category: 'image', tags: ['图片', '压缩'] },
        { id: 'favicon', name: 'Favicon 生成', icon: '🖥️', url: 'https://realfavicongenerator.net', desc: '网站图标 Favicon 制作', category: 'image', tags: ['图片', '图标'] },
        { id: 'color-picker', name: '在线取色器', icon: '🎯', url: 'https://htmlcolorcodes.com/color-picker', desc: '图片取色，获取色值', category: 'image', tags: ['图片', '取色'] }
    ],
    text: [
        { id: 'word-count', name: '字数统计', icon: '📊', url: 'https://charactercounttool.com', desc: '统计字数、字符数、行数', category: 'text', tags: ['文字', '统计'] },
        { id: 'text-diff', name: '文本对比', icon: '📝', url: 'https://www.diffchecker.com', desc: '对比两段文本的差异', category: 'text', tags: ['文字', '对比'] },
        { id: 'case-converter', name: '大小写转换', icon: '🔡', url: 'https://convertcase.net', desc: '英文大小写、驼峰转换', category: 'text', tags: ['文字', '转换'] },
        { id: 'lorem-ipsum', name: '随机文本生成', icon: '📜', url: 'https://loremipsum.io', desc: '生成占位符文本', category: 'text', tags: ['文字', '生成'] },
        { id: 'md5-encrypt', name: 'MD5 加密', icon: '🔐', url: 'https://www.md5hashgenerator.com', desc: 'MD5 哈希加密', category: 'text', tags: ['文字', '加密'] },
        { id: 'base64', name: 'Base64 编码', icon: '🔢', url: 'https://www.base64decode.org', desc: 'Base64 编码解码', category: 'text', tags: ['文字', '编码'] },
        { id: 'url-encode', name: 'URL 编码', icon: '🔗', url: 'https://www.urlencoder.org', desc: 'URL 编码解码', category: 'text', tags: ['文字', '编码'] },
        { id: 'unicode-converter', name: 'Unicode 转换', icon: '🔣', url: 'https://www.branah.com/unicode-converter', desc: 'Unicode 字符转换', category: 'text', tags: ['文字', '转换'] },
        { id: 'emoji-keyboard', name: 'Emoji 键盘', icon: '😀', url: 'https://getemoji.com', desc: '复制粘贴 Emoji 表情', category: 'text', tags: ['文字', '表情'] },
        { id: 'text-replace', name: '文本替换', icon: '🔄', url: 'https://textmechanic.com/text-tools/basic-text-tools/find-and-replace-text', desc: '批量查找替换文本', category: 'text', tags: ['文字', '替换'] },
        { id: 'sort-text', name: '文本排序', icon: '📋', url: 'https://textmechanic.com/text-tools/basic-text-tools/sort-text-lines', desc: '按字母排序文本行', category: 'text', tags: ['文字', '排序'] },
        { id: 'duplicate-remover', name: '去重工具', icon: '🧹', url: 'https://textmechanic.com/text-tools/basic-text-tools/remove-duplicate-lines', desc: '删除重复的文本行', category: 'text', tags: ['文字', '去重'] }
    ],
    qrcode: [
        { id: 'qr-generator', name: '二维码生成', icon: '📱', url: 'https://www.qrcode-monkey.com', desc: '免费在线生成自定义二维码', category: 'qrcode', tags: ['二维码', '生成'] },
        { id: 'qr-reader', name: '二维码扫描', icon: '🔍', url: 'https://webqr.com', desc: '在线扫描解析二维码', category: 'qrcode', tags: ['二维码', '解析'] },
        { id: 'qr-logo', name: '带 Logo 二维码', icon: '🎨', url: 'https://www.qr-code-generator.com', desc: '生成带 Logo 的二维码', category: 'qrcode', tags: ['二维码', '美化'] },
        { id: 'qr-art', name: '艺术二维码', icon: '🎭', url: 'https://www.qrcode-art.com', desc: '制作个性化艺术二维码', category: 'qrcode', tags: ['二维码', '美化'] },
        { id: 'qr-batch', name: '批量二维码', icon: '📦', url: 'https://www.qr-code-generator.com/batch-qr-code-generator', desc: '批量生成多个二维码', category: 'qrcode', tags: ['二维码', '批量'] },
        { id: 'qr-vcard', name: '名片二维码', icon: '📇', url: 'https://www.qrcode-monkey.com/vcard-qr-code', desc: '生成联系人名片二维码', category: 'qrcode', tags: ['二维码', '名片'] },
        { id: 'qr-wifi', name: 'WiFi 二维码', icon: '📶', url: 'https://www.qr-code-generator.com/wifi-qr-code', desc: 'WiFi 密码分享二维码', category: 'qrcode', tags: ['二维码', 'WiFi'] },
        { id: 'qr-dynamic', name: '动态二维码', icon: '🔄', url: 'https://www.qrcode-monkey.com', desc: '可修改内容的动态二维码', category: 'qrcode', tags: ['二维码', '动态'] },
        { id: 'barcode-generator', name: '条形码生成', icon: '📊', url: 'https://www.barcodesinc.com/generator/index.php', desc: '在线生成条形码', category: 'qrcode', tags: ['条形码', '生成'] },
        { id: 'qr-color', name: '彩色二维码', icon: '🌈', url: 'https://www.qrcode-monkey.com', desc: '自定义颜色和样式的二维码', category: 'qrcode', tags: ['二维码', '美化'] },
        { id: 'qr-sms', name: '短信二维码', icon: '💬', url: 'https://www.qr-code-generator.com/sms-qr-code', desc: '生成短信二维码', category: 'qrcode', tags: ['二维码', '短信'] },
        { id: 'qr-email', name: '邮件二维码', icon: '📧', url: 'https://www.qr-code-generator.com/email-qr-code', desc: '生成邮件二维码', category: 'qrcode', tags: ['二维码', '邮件'] }
    ],
    shorturl: [
        { id: 'tinyurl', name: 'TinyURL 短网址', icon: '🔗', url: 'https://tinyurl.com', desc: '老牌免费短网址服务', category: 'shorturl', tags: ['短网址', '免费'] },
        { id: 'bitly', name: 'Bitly 短网址', icon: '🔗', url: 'https://bitly.com', desc: '专业短网址服务，带统计', category: 'shorturl', tags: ['短网址', '统计'] },
        { id: 'cuttly', name: 'Cuttly 短链', icon: '✂️', url: 'https://cutt.ly', desc: '免费短链接生成器', category: 'shorturl', tags: ['短网址', '免费'] },
        { id: 'rebrandly', name: 'Rebrandly', icon: '🎨', url: 'https://www.rebrandly.com', desc: '自定义品牌短链接', category: 'shorturl', tags: ['短网址', '品牌'] },
        { id: 't2mio', name: 'T2M 短链接', icon: '📱', url: 'https://t2mio.com', desc: '带分析的短链接服务', category: 'shorturl', tags: ['短网址', '分析'] },
        { id: 'yourls', name: 'YOURLS', icon: '🔨', url: 'https://yourls.org', desc: '自建短链接系统', category: 'shorturl', tags: ['短网址', '自建'] },
        { id: 'blink', name: 'Blink 短链', icon: '⚡', url: 'https://blink.gg', desc: '简洁的短链接服务', category: 'shorturl', tags: ['短网址', '简洁'] },
        { id: 'shrtcode', name: 'ShrtCode', icon: '🔢', url: 'https://shrtco.de', desc: '免费无广告短链', category: 'shorturl', tags: ['短网址', '免费'] },
        { id: 'l2mio', name: 'Link2Me', icon: '🔗', url: 'https://l2m.io', desc: '链接管理平台', category: 'shorturl', tags: ['短网址', '管理'] },
        { id: 'shortio', name: 'Short.io', icon: '🌐', url: 'https://short.io', desc: '自定义域名短链', category: 'shorturl', tags: ['短网址', '域名'] },
        { id: 'sniply', name: 'Sniply', icon: '📎', url: 'https://snip.ly', desc: '添加 CTA 的短链', category: 'shorturl', tags: ['短网址', '营销'] },
        { id: 'linktree', name: 'Linktree', icon: '🌲', url: 'https://linktr.ee', desc: '多链接聚合页', category: 'shorturl', tags: ['链接', '聚合'] }
    ],
    calculator: [
        { id: 'binary-converter', name: '进制转换器', icon: '🔢', url: 'https://www.binaryhexconverter.com', desc: '二进制、十进制、十六进制互转', category: 'calculator', tags: ['换算', '进制'] },
        { id: 'age-calculator', name: '年龄计算器', icon: '🎂', url: 'https://www.calculator.net/age-calculator.html', desc: '精确计算年龄和天数', category: 'calculator', tags: ['换算', '年龄'] },
        { id: 'time-calculator', name: '时间计算器', icon: '⏰', url: 'https://www.timeanddate.com/date/dateadd.html', desc: '日期加减计算', category: 'calculator', tags: ['换算', '时间'] },
        { id: 'unit-converter', name: '单位转换器', icon: '📏', url: 'https://www.unitconverters.net', desc: '长度、重量、温度等单位换算', category: 'calculator', tags: ['换算', '单位'] },
        { id: 'currency-converter', name: '汇率换算', icon: '💱', url: 'https://www.xe.com/currencyconverter', desc: '实时汇率转换', category: 'calculator', tags: ['换算', '汇率'] },
        { id: 'loan-calculator', name: '贷款计算器', icon: '💰', url: 'https://www.calculator.net/loan-calculator.html', desc: '房贷、贷款月供计算', category: 'calculator', tags: ['换算', '贷款'] },
        { id: 'bmi-calculator', name: 'BMI 计算器', icon: '⚖️', url: 'https://www.calculator.net/bmi-calculator.html', desc: '身体质量指数计算', category: 'calculator', tags: ['换算', '健康'] },
        { id: 'tax-calculator', name: '税务计算器', icon: '📊', url: 'https://www.calculator.net/tax-calculator.html', desc: '个人所得税计算', category: 'calculator', tags: ['换算', '税务'] },
        { id: 'percentage-calculator', name: '百分比计算器', icon: '📈', url: 'https://www.calculator.net/percent-calculator.html', desc: '百分比计算', category: 'calculator', tags: ['换算', '百分比'] },
        { id: 'timestamp-converter', name: '时间戳转换', icon: '⏱️', url: 'https://www.unixtimestamp.com', desc: 'Unix 时间戳转换', category: 'calculator', tags: ['换算', '时间戳'] },
        { id: 'random-generator', name: '随机数生成', icon: '🎲', url: 'https://www.random.org', desc: '生成随机数字', category: 'calculator', tags: ['换算', '随机'] },
        { id: 'password-generator', name: '密码生成器', icon: '🔐', url: 'https://passwordsgenerator.net', desc: '生成强密码', category: 'calculator', tags: ['安全', '密码'] }
    ],
    color: [
        { id: 'coolors', name: '配色方案', icon: '🎨', url: 'https://coolors.co', desc: '生成和探索配色方案', category: 'color', tags: ['颜色', '配色'] },
        { id: 'colorhunt', name: 'Color Hunt', icon: '🌈', url: 'https://colorhunt.co', desc: '精选配色灵感', category: 'color', tags: ['颜色', '配色'] },
        { id: 'adobe-color', name: 'Adobe Color', icon: '🎭', url: 'https://color.adobe.com', desc: '专业配色工具', category: 'color', tags: ['颜色', '专业'] },
        { id: 'color-hex', name: 'HEX 色值', icon: '🎯', url: 'https://htmlcolorcodes.com', desc: 'HEX、RGB、HSL 转换', category: 'color', tags: ['颜色', '转换'] },
        { id: 'web-color', name: '网页安全色', icon: '🌐', url: 'https://htmlcolorcodes.com/web-safe-colors', desc: '网页安全色板', category: 'color', tags: ['颜色', '网页'] },
        { id: 'color-mind', name: 'AI 配色', icon: '🤖', url: 'http://colormind.io', desc: 'AI 智能生成配色', category: 'color', tags: ['颜色', 'AI'] },
        { id: 'paletton', name: '调色板', icon: '🎨', url: 'https://paletton.com', desc: '交互式调色板', category: 'color', tags: ['颜色', '调色'] },
        { id: 'color-name', name: '颜色命名', icon: '📝', url: 'https://chir.ag/projects/name-that-color', desc: '为颜色查找名字', category: 'color', tags: ['颜色', '命名'] },
        { id: 'color-blind', name: '色盲模拟', icon: '👁️', url: 'https://www.color-blindness.com/coblis-color-blindness-simulator', desc: '色盲视觉模拟', category: 'color', tags: ['颜色', '模拟'] },
        { id: 'gradient-generator', name: '渐变生成器', icon: '🌈', url: 'https://cssgradient.io', desc: 'CSS 渐变代码生成', category: 'color', tags: ['颜色', '渐变'] },
        { id: 'material-colors', name: 'Material 配色', icon: '📱', url: 'https://material.io/resources/color', desc: 'Material Design 色板', category: 'color', tags: ['颜色', 'Material'] },
        { id: 'color-palette', name: '图片取色', icon: '🖼️', url: 'https://coolors.co/image-picker', desc: '从图片中提取配色', category: 'color', tags: ['颜色', '取色'] }
    ],
    office: [
        { id: 'merge-pdf', name: '合并 PDF', icon: '📄', url: 'https://www.ilovepdf.com/merge_pdf', desc: '多个 PDF 合并成一个', category: 'office', tags: ['PDF', '合并'] },
        { id: 'split-pdf', name: '分割 PDF', icon: '✂️', url: 'https://www.ilovepdf.com/split_pdf', desc: 'PDF 分割成多个文件', category: 'office', tags: ['PDF', '分割'] },
        { id: 'compress-pdf', name: '压缩 PDF', icon: '📦', url: 'https://www.ilovepdf.com/compress_pdf', desc: 'PDF 大小压缩', category: 'office', tags: ['PDF', '压缩'] },
        { id: 'unlock-pdf', name: '解锁 PDF', icon: '🔓', url: 'https://www.ilovepdf.com/unlock_pdf', desc: '移除 PDF 密码', category: 'office', tags: ['PDF', '解锁'] },
        { id: 'protect-pdf', name: '加密 PDF', icon: '🔒', url: 'https://www.ilovepdf.com/password-protect-pdf', desc: 'PDF 添加密码保护', category: 'office', tags: ['PDF', '加密'] },
        { id: 'rotate-pdf', name: '旋转 PDF', icon: '🔄', url: 'https://www.ilovepdf.com/rotate-pdf', desc: '旋转 PDF 页面', category: 'office', tags: ['PDF', '旋转'] },
        { id: 'sign-pdf', name: 'PDF 签名', icon: '✍️', url: 'https://www.ilovepdf.com/sign-pdf', desc: 'PDF 电子签名', category: 'office', tags: ['PDF', '签名'] },
        { id: 'pdf-to-images', name: 'PDF 转图片', icon: '🖼️', url: 'https://www.ilovepdf.com/pdf-to-jpg', desc: 'PDF 每页转成图片', category: 'office', tags: ['PDF', '图片'] },
        { id: 'pdf-extract', name: '提取 PDF 页面', icon: '📤', url: 'https://www.ilovepdf.com/extract-pdf-pages', desc: '提取 PDF 指定页面', category: 'office', tags: ['PDF', '提取'] },
        { id: 'pdf-reorder', name: 'PDF 页面排序', icon: '📋', url: 'https://www.ilovepdf.com/reorder-pdf-pages', desc: '重新排列 PDF 页面', category: 'office', tags: ['PDF', '排序'] },
        { id: 'pdf-watermark', name: 'PDF 添加水印', icon: '💧', url: 'https://www.ilovepdf.com/add-watermark', desc: 'PDF 添加文字或图片水印', category: 'office', tags: ['PDF', '水印'] },
        { id: 'pdf-number', name: 'PDF 页码', icon: '🔢', url: 'https://www.ilovepdf.com/add-page-numbers', desc: 'PDF 添加页码', category: 'office', tags: ['PDF', '页码'] }
    ],
    netdisk: [
        { id: 'baidu-cloud', name: '网盘解析', icon: '☁️', url: 'https://www.baiduwp.com', desc: '网盘链接解析', category: 'netdisk', tags: ['网盘', '解析'] },
        { id: 'pan-download', name: '网盘下载', icon: '⬇️', url: 'https://pandownload.com', desc: '网盘高速下载', category: 'netdisk', tags: ['网盘', '下载'] },
        { id: 'cloud-storage', name: '云存储搜索', icon: '🔍', url: 'https://www.xiaobaibt.com', desc: '网盘资源搜索', category: 'netdisk', tags: ['网盘', '搜索'] },
        { id: 'aliyun-drive', name: '阿里云盘', icon: '☁️', url: 'https://www.aliyundrive.com', desc: '阿里云盘官网', category: 'netdisk', tags: ['网盘', '阿里'] },
        { id: 'quark-drive', name: '夸克网盘', icon: '🌌', url: 'https://pan.quark.cn', desc: '夸克网盘官网', category: 'netdisk', tags: ['网盘', '夸克'] },
        { id: '123-drive', name: '123 云盘', icon: '☁️', url: 'https://www.123pan.com', desc: '123 云盘官网', category: 'netdisk', tags: ['网盘', '123'] },
        { id: 'tianyi-drive', name: '天翼云盘', icon: '☁️', url: 'https://cloud.189.cn', desc: '天翼云盘官网', category: 'netdisk', tags: ['网盘', '天翼'] },
        { id: 'weiyun', name: '微云', icon: '☁️', url: 'https://www.weiyun.com', desc: '腾讯微云官网', category: 'netdisk', tags: ['网盘', '腾讯'] },
        { id: 'onedrive', name: 'OneDrive', icon: '☁️', url: 'https://onedrive.live.com', desc: '微软 OneDrive', category: 'netdisk', tags: ['网盘', '微软'] },
        { id: 'google-drive', name: 'Google Drive', icon: '☁️', url: 'https://drive.google.com', desc: '谷歌云盘', category: 'netdisk', tags: ['网盘', '谷歌'] },
        { id: 'dropbox', name: 'Dropbox', icon: '☁️', url: 'https://www.dropbox.com', desc: 'Dropbox 云存储', category: 'netdisk', tags: ['网盘', 'Dropbox'] },
        { id: 'mega', name: 'MEGA', icon: '☁️', url: 'https://mega.nz', desc: 'MEGA 加密云盘', category: 'netdisk', tags: ['网盘', '加密'] }
    ]
};

const hotTools = [
    { id: 'tinypng', name: '图片压缩', icon: '📦', url: 'https://tinypng.com', desc: '在线智能压缩图片', category: 'image', tags: ['图片', '压缩'] },
    { id: 'remove-bg', name: '一键去背景', icon: '✂️', url: 'https://www.remove.bg', desc: 'AI 智能抠图', category: 'image', tags: ['图片', '抠图'] },
    { id: 'qr-generator', name: '二维码生成', icon: '📱', url: 'https://www.qrcode-monkey.com', desc: '免费在线生成二维码', category: 'qrcode', tags: ['二维码', '生成'] },
    { id: 'merge-pdf', name: '合并 PDF', icon: '📄', url: 'https://www.ilovepdf.com/merge_pdf', desc: '多个 PDF 合并', category: 'office', tags: ['PDF', '合并'] },
    { id: 'pdf-to-word', name: 'PDF 转 Word', icon: '📄', url: 'https://www.ilovepdf.com/pdf_to_word', desc: 'PDF 转 Word 格式', category: 'office', tags: ['文档', '格式转换'] },
    { id: 'compress-pdf', name: '压缩 PDF', icon: '📦', url: 'https://www.ilovepdf.com/compress_pdf', desc: 'PDF 大小压缩', category: 'office', tags: ['PDF', '压缩'] },
    { id: 'word-count', name: '字数统计', icon: '📊', url: 'https://charactercounttool.com', desc: '统计字数和字符数', category: 'text', tags: ['文字', '统计'] },
    { id: 'base64', name: 'Base64 编码', icon: '🔢', url: 'https://www.base64decode.org', desc: 'Base64 编码解码', category: 'text', tags: ['文字', '编码'] }
];

const officeTools = [
    { id: 'merge-pdf', name: '合并 PDF', icon: '📄', url: 'https://www.ilovepdf.com/merge_pdf', desc: '多个 PDF 合并成一个', category: 'office', tags: ['PDF', '合并'] },
    { id: 'split-pdf', name: '分割 PDF', icon: '✂️', url: 'https://www.ilovepdf.com/split_pdf', desc: 'PDF 分割成多个文件', category: 'office', tags: ['PDF', '分割'] },
    { id: 'compress-pdf', name: '压缩 PDF', icon: '📦', url: 'https://www.ilovepdf.com/compress_pdf', desc: 'PDF 大小压缩', category: 'office', tags: ['PDF', '压缩'] },
    { id: 'pdf-to-word', name: 'PDF 转 Word', icon: '📄', url: 'https://www.ilovepdf.com/pdf_to_word', desc: 'PDF 转 Word 格式', category: 'office', tags: ['文档', '格式转换'] },
    { id: 'word-to-pdf', name: 'Word 转 PDF', icon: '📄', url: 'https://www.ilovepdf.com/word_to_pdf', desc: 'Word 文档转 PDF', category: 'office', tags: ['文档', '格式转换'] },
    { id: 'word-count', name: '字数统计', icon: '📊', url: 'https://charactercounttool.com', desc: '统计字数和字符数', category: 'text', tags: ['文字', '统计'] },
    { id: 'text-diff', name: '文本对比', icon: '📝', url: 'https://www.diffchecker.com', desc: '对比两段文本的差异', category: 'text', tags: ['文字', '对比'] },
    { id: 'qr-generator', name: '二维码生成', icon: '📱', url: 'https://www.qrcode-monkey.com', desc: '免费在线生成二维码', category: 'qrcode', tags: ['二维码', '生成'] }
];

const lifeTools = [
    { id: 'qr-generator', name: '二维码生成', icon: '📱', url: 'https://www.qrcode-monkey.com', desc: '免费在线生成二维码', category: 'qrcode', tags: ['二维码', '生成'] },
    { id: 'qr-reader', name: '二维码扫描', icon: '🔍', url: 'https://webqr.com', desc: '在线扫描解析二维码', category: 'qrcode', tags: ['二维码', '解析'] },
    { id: 'age-calculator', name: '年龄计算器', icon: '🎂', url: 'https://www.calculator.net/age-calculator.html', desc: '精确计算年龄和天数', category: 'calculator', tags: ['换算', '年龄'] },
    { id: 'bmi-calculator', name: 'BMI 计算器', icon: '⚖️', url: 'https://www.calculator.net/bmi-calculator.html', desc: '身体质量指数计算', category: 'calculator', tags: ['换算', '健康'] },
    { id: 'currency-converter', name: '汇率换算', icon: '💱', url: 'https://www.xe.com/currencyconverter', desc: '实时汇率转换', category: 'calculator', tags: ['换算', '汇率'] },
    { id: 'tinyurl', name: 'TinyURL 短网址', icon: '🔗', url: 'https://tinyurl.com', desc: '老牌免费短网址', category: 'shorturl', tags: ['短网址', '免费'] },
    { id: 'password-generator', name: '密码生成器', icon: '🔐', url: 'https://passwordsgenerator.net', desc: '生成强密码', category: 'calculator', tags: ['安全', '密码'] },
    { id: 'emoji-keyboard', name: 'Emoji 键盘', icon: '😀', url: 'https://getemoji.com', desc: '复制粘贴 Emoji 表情', category: 'text', tags: ['文字', '表情'] }
];

const devTools = [
    { id: 'json-to-csv', name: 'JSON 转 CSV', icon: '📋', url: 'https://csvjson.com/json2csv', desc: 'JSON 数据转 CSV', category: 'convert', tags: ['开发', '格式转换'] },
    { id: 'base64', name: 'Base64 编码', icon: '🔢', url: 'https://www.base64decode.org', desc: 'Base64 编码解码', category: 'text', tags: ['文字', '编码'] },
    { id: 'md5-encrypt', name: 'MD5 加密', icon: '🔐', url: 'https://www.md5hashgenerator.com', desc: 'MD5 哈希加密', category: 'text', tags: ['文字', '加密'] },
    { id: 'binary-converter', name: '进制转换器', icon: '🔢', url: 'https://www.binaryhexconverter.com', desc: '二进制、十进制互转', category: 'calculator', tags: ['换算', '进制'] },
    { id: 'timestamp-converter', name: '时间戳转换', icon: '⏱️', url: 'https://www.unixtimestamp.com', desc: 'Unix 时间戳转换', category: 'calculator', tags: ['换算', '时间戳'] },
    { id: 'url-encode', name: 'URL 编码', icon: '🔗', url: 'https://www.urlencoder.org', desc: 'URL 编码解码', category: 'text', tags: ['文字', '编码'] },
    { id: 'text-diff', name: '文本对比', icon: '📝', url: 'https://www.diffchecker.com', desc: '对比两段文本的差异', category: 'text', tags: ['文字', '对比'] },
    { id: 'color-hex', name: 'HEX 色值', icon: '🎯', url: 'https://htmlcolorcodes.com', desc: 'HEX、RGB 转换', category: 'color', tags: ['颜色', '转换'] }
];

const imageTools = [
    { id: 'tinypng', name: '图片压缩', icon: '📦', url: 'https://tinypng.com', desc: '在线智能压缩图片', category: 'image', tags: ['图片', '压缩'] },
    { id: 'remove-bg', name: '一键去背景', icon: '✂️', url: 'https://www.remove.bg', desc: 'AI 智能抠图', category: 'image', tags: ['图片', '抠图'] },
    { id: 'png-to-jpg', name: 'PNG 转 JPG', icon: '🖼️', url: 'https://cloudconvert.com/png-to-jpg', desc: 'PNG 图片转 JPG', category: 'image', tags: ['图片', '格式转换'] },
    { id: 'webp-to-png', name: 'WebP 转 PNG', icon: '🖼️', url: 'https://cloudconvert.com/webp-to-png', desc: 'WebP 图片转 PNG', category: 'image', tags: ['图片', '格式转换'] },
    { id: 'resize-image', name: '图片尺寸调整', icon: '📏', url: 'https://resizeimage.net', desc: '调整图片大小', category: 'image', tags: ['图片', '尺寸'] },
    { id: 'crop-image', name: '图片裁剪', icon: '✂️', url: 'https://www.iloveimg.com/crop-image', desc: '在线裁剪图片', category: 'image', tags: ['图片', '裁剪'] },
    { id: 'image-filter', name: '图片滤镜', icon: '🎨', url: 'https://www.photopea.com', desc: '在线 PS，图片编辑', category: 'image', tags: ['图片', '编辑'] },
    { id: 'color-picker', name: '在线取色器', icon: '🎯', url: 'https://htmlcolorcodes.com/color-picker', desc: '图片取色，获取色值', category: 'image', tags: ['图片', '取色'] }
];