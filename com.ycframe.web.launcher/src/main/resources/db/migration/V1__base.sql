DROP TABLE IF EXISTS `sextype`;
CREATE TABLE `sextype` (
  `id` varchar(255) DEFAULT NULL,
  `sizetype` varchar(5) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of sextype
-- ----------------------------

-- ----------------------------
-- Table structure for systemcodedebug
-- ----------------------------
DROP TABLE IF EXISTS `systemcodedebug`;
CREATE TABLE `systemcodedebug` (
  `id` varchar(64) NOT NULL,
  `versionid` varchar(64) DEFAULT NULL COMMENT 'systemcodversion的id',
  `use_userid` varchar(64) DEFAULT NULL COMMENT '执行人',
  `use_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '执行时间',
  `input` text COMMENT '输入',
  `output` text COMMENT '输出',
  `jlzt` varchar(10) DEFAULT NULL COMMENT '0:未删除，1：已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemcodedebug
-- ----------------------------

-- ----------------------------
-- Table structure for systemcodeeditor
-- ----------------------------
DROP TABLE IF EXISTS `systemcodeeditor`;
CREATE TABLE `systemcodeeditor` (
  `id` varchar(64) NOT NULL,
  `model_name` varchar(512) DEFAULT NULL COMMENT '模块名称',
  `model_code` varchar(512) DEFAULT NULL COMMENT '模块编码',
  `jlzt` varchar(10) DEFAULT NULL COMMENT '0:未删除，1：已删除',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间',
  `use_version` varchar(255) DEFAULT NULL COMMENT '当前启用版本',
  `model_describe` varchar(2048) DEFAULT NULL COMMENT '模块描述',
  `run_user` varchar(255) DEFAULT NULL COMMENT '执行人',
  `run_date` timestamp NULL DEFAULT NULL COMMENT '执行时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemcodeeditor
-- ----------------------------

-- ----------------------------
-- Table structure for systemcodeversion
-- ----------------------------
DROP TABLE IF EXISTS `systemcodeversion`;
CREATE TABLE `systemcodeversion` (
  `id` varchar(64) NOT NULL,
  `zjlid` varchar(64) DEFAULT NULL COMMENT 'systemcodeeditor的id',
  `version` varchar(255) DEFAULT NULL COMMENT '版本',
  `cjr` varchar(255) DEFAULT NULL COMMENT '创建人',
  `cjsj` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  `versiondescribe` varchar(2000) DEFAULT NULL COMMENT '版本说明',
  `code` text COMMENT '代码',
  `sfqy` varchar(20) DEFAULT NULL COMMENT 'true:已启用，false：未启用',
  `jlzt` varchar(10) DEFAULT NULL COMMENT '0:未删除，1：已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemcodeversion
-- ----------------------------

-- ----------------------------
-- Table structure for systemdataauthority
-- ----------------------------
DROP TABLE IF EXISTS `systemdataauthority`;
CREATE TABLE `systemdataauthority` (
  `ID` varchar(36) NOT NULL,
  `MEMO` varchar(512) DEFAULT NULL COMMENT '权限说明',
  `ISENABLED` varchar(8) NOT NULL DEFAULT '0' COMMENT '是否启用',
  `ROLENAME` varchar(64) DEFAULT NULL COMMENT '数据权限名称',
  `XNAME` varchar(64) DEFAULT NULL COMMENT '表名/别名/视图名',
  `TJBDS` varchar(300) DEFAULT NULL COMMENT '条件表达式',
  `DATETIMEST` datetime DEFAULT NULL COMMENT '时间戳',
  `JLZT` varchar(16) DEFAULT '未删除',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemdataauthority
-- ----------------------------

-- ----------------------------
-- Table structure for systemdataauthorityzt
-- ----------------------------
DROP TABLE IF EXISTS `systemdataauthorityzt`;
CREATE TABLE `systemdataauthorityzt` (
  `ztNo` varchar(6) DEFAULT NULL COMMENT '数据权限状态序号',
  `ztValue` varchar(20) DEFAULT NULL COMMENT '数据权限状态值'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemdataauthorityzt
-- ----------------------------

-- ----------------------------
-- Table structure for systemgn
-- ----------------------------
DROP TABLE IF EXISTS `systemgn`;
CREATE TABLE `systemgn` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GNMC` varchar(128) DEFAULT NULL COMMENT '功能名称',
  `JC` varchar(128) DEFAULT NULL,
  `GNDZ` varchar(128) DEFAULT NULL COMMENT '功能地址',
  `SXBH` int(11) DEFAULT NULL,
  `FGNID` int(11) DEFAULT NULL,
  `EXECLASS` varchar(128) DEFAULT NULL,
  `SFXS` varchar(128) DEFAULT NULL COMMENT '是否显示',
  `GNBH` varchar(128) NOT NULL COMMENT '功能编号',
  `JDMS` varchar(128) DEFAULT NULL COMMENT '节点描述',
  `ICON` varchar(50) DEFAULT '' COMMENT '功能图标文件名',
  `COMPONENT` varchar(100) DEFAULT '' COMMENT '组件',
  `JSPATH` varchar(200) DEFAULT NULL COMMENT 'JS路径',
  `isComponent` varchar(10) NOT NULL,
  `linkUrl` varchar(1000) DEFAULT NULL,
  `gnlx` int(10) DEFAULT '0' COMMENT '资源类型功能类型 0.系统模块  1.api 2.功能 3 按钮',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11309 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemgn
-- ----------------------------
INSERT INTO `systemgn` VALUES ('1', '无上级功能', 'null', null, '1', null, null, 'F', '1', null, '', '', null, '1', null, '0');
INSERT INTO `systemgn` VALUES ('1468', '系统维护', 'null', '', '99', '1', null, 'T', '1-1468', '系统维护', 'el-icon-s-tools', '', '', '1', '', '9');
INSERT INTO `systemgn` VALUES ('11166', '部门管理', 'null', '/organization', '2', '1468', null, 'T', '1-1468-11166', '部门管理', 'el-icon-eleme', 'organization', '/system/organization/organization.js', '1', null, '0');
INSERT INTO `systemgn` VALUES ('11253', '数据权限', 'null', '/data', '3', '1468', null, 'F', '1-1468-11253', '数据权限', 'el-icon-loading', 'Data', '/system/data/data.js', '1', null, '0');
INSERT INTO `systemgn` VALUES ('11254', '按钮管理', 'null', '/button-manage', '4', '1468', null, 'T', '1-1468-11254', '按钮管理', '', 'ButtonManage', '/system/buttonManage/index.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11255', '操作权限', 'null', '/authority', '5', '1468', null, 'T', '1-1468-11255', '操作权限', 'el-icon-lock', 'authority', '/system/authority/authority.js', '1', null, '0');
INSERT INTO `systemgn` VALUES ('11258', '资源管理', 'null', '/modules-manage', '6', '1468', null, 'T', '1-1468-11258', '资源管理', 'el-icon-notebook-2', 'ModulesManage', '/system/modules/ModulesManage.js', '1', null, '0');
INSERT INTO `systemgn` VALUES ('11265', '人员管理', null, '/personal-manage', '8', '1468', null, 'T', '1-1468-11265', '人员管理', 'el-icon-user', 'personalManage', '/system/personalManage/personalManage.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11266', '主题管理', null, '/theme', '9', '1468', null, 'T', '1-1468-11266', '主题管理', 'el-icon-view', 'Theme', '/system/theme/index.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11267', '角色管理', null, '/roleManage', '10', '1468', null, 'T', '1-1468-11267', '角色管理', 'el-icon-user-solid', 'RoleManage', '/system/RoleManage/roleManage.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11269', '组织机构导入', null, '/ImportData', '11', '1468', null, 'F', '1-1468-11269', '组织机构导入', 'el-icon-folder-add', 'ImportData', '/system/ImportData/index.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11294', '代码维护', null, '/codeEditor', '14', '1468', null, 'T', '1-1468-11294', '代码维护', 'el-icon-sold-out', 'codeEditor', '/system//codeEditor//codeEditor.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11295', '动态代码模块管理', null, '/codeEditor', '13', '1468', null, 'F', '1-1468-11295', '动态代码模块管理', 'el-icon-sold-out', 'codeEditor', '/system/codeEditor/codeEditor.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11296', '日志管理', null, '/rzgl', '10', '1468', null, 'T', '1-1468-11296', '日志管理', 'el-icon-sold-out', 'rzgl', '/system/rzgl/rzgl.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11297', '日志管理动态统计', null, '/rzgltj', '13', '1468', null, 'T', '1-1468-11297', '日志管理动态统计', 'el-icon-sold-out', 'rzgltj', '/system/rzgl/rzgltj.js', '1', '', '0');
INSERT INTO `systemgn` VALUES ('11302', 'authority', null, '/authority/*', '11', '11255', null, 'T', '1-1468-11255-11302', '操作权限所有接口', '', '', '', '1', '', '1');
INSERT INTO `systemgn` VALUES ('11303', 'rzgl', null, '/rzgl/*', '1', '11296', null, 'T', '1-1468-11296-11303', 'rzgl', '', '', '', '1', '', '1');
INSERT INTO `systemgn` VALUES ('11304', 'organization', null, '/organization/*', '1', '11166', null, 'T', '1-1468-11166-11304', 'organization', '', '', '', '1', '', '1');
INSERT INTO `systemgn` VALUES ('11305', 'modules', null, '/modules/*', '1', '11258', null, 'T', '1-1468-11258-11305', 'modules', '', '', '', '1', '', '1');
INSERT INTO `systemgn` VALUES ('11306', 'user', null, '/user/*', '1', '11265', null, 'T', '1-1468-11265-11306', 'user', '', '', '', '1', '', '1');
INSERT INTO `systemgn` VALUES ('11307', 'role', null, '/role/*', '1', '11267', null, 'T', '1-1468-11267-11307', 'role', '', '', '', '1', '', '1');

-- ----------------------------
-- Table structure for systemgnanmiddle
-- ----------------------------
DROP TABLE IF EXISTS `systemgnanmiddle`;
CREATE TABLE `systemgnanmiddle` (
  `id` varchar(36) NOT NULL,
  `gnid` varchar(36) DEFAULT NULL COMMENT '功能id',
  `anid` varchar(36) DEFAULT NULL COMMENT '按钮id',
  `jlzt` varchar(64) DEFAULT '未删除' COMMENT '记录状态',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemgnanmiddle
-- ----------------------------

-- ----------------------------
-- Table structure for systemgw
-- ----------------------------
DROP TABLE IF EXISTS `systemgw`;
CREATE TABLE `systemgw` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `GWMC` varchar(100) DEFAULT NULL,
  `GWZZ` varchar(100) DEFAULT NULL,
  `BM` varchar(100) DEFAULT NULL,
  `JC` varchar(100) DEFAULT NULL,
  `PXZ` int(20) DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemgw
-- ----------------------------

-- ----------------------------
-- Table structure for systemgw_ry
-- ----------------------------
DROP TABLE IF EXISTS `systemgw_ry`;
CREATE TABLE `systemgw_ry` (
  `GWID` int(11) DEFAULT NULL,
  `RYID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemgw_ry
-- ----------------------------

-- ----------------------------
-- Table structure for systemjsgn
-- ----------------------------
DROP TABLE IF EXISTS `systemjsgn`;
CREATE TABLE `systemjsgn` (
  `GNID` int(11) DEFAULT NULL,
  `JSZID` int(11) DEFAULT NULL,
  `jlzt` varchar(255) DEFAULT '未删除'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemjsgn
-- ----------------------------
INSERT INTO `systemjsgn` VALUES ('1468', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11166', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11255', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11258', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11265', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11266', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11267', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11294', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11296', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('11297', '0', '未删除');
INSERT INTO `systemjsgn` VALUES ('1468', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11166', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11304', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11255', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11302', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11258', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11305', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11265', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11306', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11267', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11307', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11296', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11303', '492', '未删除');
INSERT INTO `systemjsgn` VALUES ('11297', '492', '未删除');

-- ----------------------------
-- Table structure for systemjsz
-- ----------------------------
DROP TABLE IF EXISTS `systemjsz`;
CREATE TABLE `systemjsz` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `JSMC` varchar(128) DEFAULT NULL,
  `LX` varchar(64) DEFAULT NULL COMMENT '类型',
  `MS` varchar(256) DEFAULT NULL COMMENT '描述',
  `ZT` varchar(32) NOT NULL DEFAULT '0' COMMENT '状态:0是未启用，1是启用',
  `JLZT` varchar(10) NOT NULL DEFAULT '未删除' COMMENT '记录状态',
  `JLSJ` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=578 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemjsz
-- ----------------------------
INSERT INTO `systemjsz` VALUES ('0', 'ROOT', '1', '系统开发者用户，自动拥有一切权限', '1', '未删除', '2022-04-02 23:48:15');
INSERT INTO `systemjsz` VALUES ('1', 'GUEST', '1', '游客，非登录用户，谨慎使用', '1', '未删除', '2022-04-02 23:48:02');
INSERT INTO `systemjsz` VALUES ('492', '系统管理员', '1', '管理员角色', '1', '未删除', '2022-04-02 21:22:36');

-- ----------------------------
-- Table structure for systemmodulemanage
-- ----------------------------
DROP TABLE IF EXISTS `systemmodulemanage`;
CREATE TABLE `systemmodulemanage` (
  `id` varchar(36) NOT NULL,
  `gnlb` varchar(64) DEFAULT NULL COMMENT '功能列表',
  `ljUrl` varchar(64) DEFAULT NULL COMMENT '链接地址',
  `jdDescribe` varchar(64) DEFAULT NULL COMMENT '节点描述',
  `includeAn` varchar(64) DEFAULT NULL COMMENT '包含按钮',
  `state` varchar(64) DEFAULT NULL COMMENT '状态',
  `sjjd` varchar(64) DEFAULT NULL COMMENT '上级节点',
  `jdName` varchar(64) DEFAULT NULL COMMENT '节点名称',
  `logo` varchar(64) DEFAULT NULL COMMENT '图标',
  `jlzt` varchar(64) DEFAULT '未删除' COMMENT '记录状态',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemmodulemanage
-- ----------------------------

-- ----------------------------
-- Table structure for systemoperationauthority
-- ----------------------------
DROP TABLE IF EXISTS `systemoperationauthority`;
CREATE TABLE `systemoperationauthority` (
  `id` varchar(36) NOT NULL COMMENT 'id',
  `jsid` varchar(36) NOT NULL COMMENT '角色id',
  `sjqxid` varchar(36) NOT NULL COMMENT '数据权限id',
  `jlzt` varchar(20) DEFAULT '未删除' COMMENT '记录状态',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemoperationauthority
-- ----------------------------
INSERT INTO `systemoperationauthority` VALUES ('e1cee30c-1268-47f5-8f44-42f788bf67dc', '576', '', '未删除', '2022-03-25 09:44:17');
INSERT INTO `systemoperationauthority` VALUES ('5d52adc4-a272-456a-a11f-a280ff11f967', '0', '', '未删除', '2022-04-02 22:02:14');
INSERT INTO `systemoperationauthority` VALUES ('63f3bd82-e4a0-4e92-adf0-58b0cc908043', '1', '', '未删除', '2022-04-03 20:49:17');
INSERT INTO `systemoperationauthority` VALUES ('9bd2612b-03ee-4c35-942c-76c96a91a228', '492', '', '未删除', '2022-04-03 20:49:35');

-- ----------------------------
-- Table structure for systemoperationbutton
-- ----------------------------
DROP TABLE IF EXISTS `systemoperationbutton`;
CREATE TABLE `systemoperationbutton` (
  `id` varchar(36) NOT NULL,
  `jsid` varchar(36) DEFAULT NULL COMMENT '角色id',
  `gnid` varchar(36) DEFAULT NULL COMMENT '功能id',
  `czanid` varchar(36) DEFAULT NULL COMMENT '操作按钮id',
  `jlzt` varchar(20) DEFAULT '未删除' COMMENT '记录状态',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemoperationbutton
-- ----------------------------

-- ----------------------------
-- Table structure for systemry
-- ----------------------------
DROP TABLE IF EXISTS `systemry`;
CREATE TABLE `systemry` (
  `id` varchar(64) NOT NULL,
  `employeeid` varchar(36) DEFAULT NULL COMMENT '人员表id',
  `roleid` varchar(36) DEFAULT NULL COMMENT '角色表id',
  `xm` varchar(20) DEFAULT NULL,
  `yhm` varchar(20) DEFAULT NULL COMMENT '用户名称',
  `phone` varchar(17) DEFAULT NULL,
  `mm` varchar(20) DEFAULT NULL,
  `mmcodersa` varchar(256) DEFAULT NULL COMMENT '密码',
  `mmcode` varchar(256) DEFAULT '04fc12df0472e66dc0fe9aefa17512f454fee4be4883f3f9b493f6a2fbcacd85d9feda859800a797707f35d47f13a6875e7ba6cbd30207cc9ce4b9995f136c43236f86ded82e619735b74ad648e2589b647d89bcc2bddf61404220cb7c16c54b97145f9ba3519687cc5e859836d26cb2d6610d81fc2c1d',
  `ecccode` varchar(64) DEFAULT '0c3cc38e2c9edbe6e95fbd80fccca837500cbc94d31dcb7434d80210e7eb4aa5',
  `jlsj` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `yxrq` varchar(20) DEFAULT NULL COMMENT '有效日期',
  `jlzt` bit(1) DEFAULT b'1',
  `fwsjq` varchar(10) DEFAULT NULL COMMENT '允许访问时间起',
  `fwsjz` varchar(10) DEFAULT NULL COMMENT '允许访问时间至',
  `fwipq` varchar(15) DEFAULT NULL COMMENT '允许访问IP起',
  `fwipz` varchar(15) DEFAULT NULL COMMENT '允许访问IP至',
  `cstag` int(1) DEFAULT '1' COMMENT '是否为初始用户 2:注销用户 1:是初始 0:不是初始',
  `yhzt` varchar(6) DEFAULT '正常' COMMENT '用户状态',
  `xtgly` int(11) DEFAULT '0' COMMENT '是否是系统管理员 1为是 0为否',
  `wxid` varchar(36) DEFAULT NULL COMMENT '人员对接 微信ID',
  `rylb` varchar(20) DEFAULT '0' COMMENT '区分系统用户还是业务用户，0为系统用户，1为业务用户',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemry
-- ----------------------------
INSERT INTO `systemry` VALUES ('a7c0934854ff4f33b3ea43ed3bad4345', null, null, 'root', 'root', '13131112234', null, '18e1b955c62de32f315b591782633617b86f6d570bee1e8168011462a77bbb421d92848797c1072acb998586f268770b2b3724017757e7baeb1a840da09940ddeade7a7fdcee6e0f2f6bd7fff863817c6f998747e71b550a750e02c7b1583f42beb7d72eae77b3e7ea11009f8705ca05e65b330f4dbe20debea952e7a189a3a7', '18e1b955c62de32f315b591782633617b86f6d570bee1e8168011462a77bbb421d92848797c1072acb998586f268770b2b3724017757e7baeb1a840da09940ddeade7a7fdcee6e0f2f6bd7fff863817c6f998747e71b550a750e02c7b1583f42beb7d72eae77b3e7ea11009f8705ca05e65b330f4dbe20debea952e7a189a3a7', '-', '2022-03-24 15:57:41', null, '', null, null, null, null, '1', '正常', '0', null, '0');
INSERT INTO `systemry` VALUES ('aa5dcb86-5224-4a32-97d2-7690691190a3', null, null, 'admin', 'admin', null, null, '18e1b955c62de32f315b591782633617b86f6d570bee1e8168011462a77bbb421d92848797c1072acb998586f268770b2b3724017757e7baeb1a840da09940ddeade7a7fdcee6e0f2f6bd7fff863817c6f998747e71b550a750e02c7b1583f42beb7d72eae77b3e7ea11009f8705ca05e65b330f4dbe20debea952e7a189a3a7', '18e1b955c62de32f315b591782633617b86f6d570bee1e8168011462a77bbb421d92848797c1072acb998586f268770b2b3724017757e7baeb1a840da09940ddeade7a7fdcee6e0f2f6bd7fff863817c6f998747e71b550a750e02c7b1583f42beb7d72eae77b3e7ea11009f8705ca05e65b330f4dbe20debea952e7a189a3a7', '-', '2022-01-05 14:46:11', null, '', null, null, null, null, '1', '正常', '0', null, '0');

-- ----------------------------
-- Table structure for systemrygl_ryjl
-- ----------------------------
DROP TABLE IF EXISTS `systemrygl_ryjl`;
CREATE TABLE `systemrygl_ryjl` (
  `ID` varchar(36) NOT NULL DEFAULT '',
  `deptID` varchar(36) DEFAULT NULL COMMENT '部门表id',
  `empCode` varchar(36) DEFAULT NULL COMMENT '人员编码',
  `userName` varchar(20) DEFAULT NULL COMMENT '用户姓名',
  `post` varchar(36) DEFAULT NULL COMMENT '职务 参数表id',
  `Sex` varchar(2) NOT NULL DEFAULT '0' COMMENT '性别',
  `jc` varchar(15) NOT NULL COMMENT '电话1',
  `Telepone2` varchar(15) DEFAULT NULL COMMENT '电话2',
  `DWBM` varchar(50) DEFAULT NULL,
  `EJDWBM` varchar(50) DEFAULT NULL,
  `BZBM` varchar(50) DEFAULT NULL,
  `SFZZ` int(1) NOT NULL DEFAULT '0' COMMENT '是否在职',
  `RSBM` varchar(16) DEFAULT NULL COMMENT '人事部门',
  `ZYBM` varchar(50) DEFAULT NULL,
  `XM` varchar(100) DEFAULT NULL,
  `RYBM` varchar(200) DEFAULT NULL,
  `SFZHM` varchar(200) DEFAULT NULL,
  `CSNYR` varchar(200) DEFAULT NULL,
  `LXDH` varchar(200) DEFAULT NULL,
  `DZYJ` varchar(200) DEFAULT NULL,
  `XL` varchar(200) DEFAULT NULL,
  `BYYX` varchar(255) DEFAULT '' COMMENT '0女 1男',
  `SXZY` varchar(200) DEFAULT NULL,
  `BYSJ` varchar(200) DEFAULT NULL,
  `GZDW1` varchar(200) DEFAULT NULL,
  `GZDW2` varchar(200) DEFAULT NULL,
  `GZDW3` varchar(200) DEFAULT NULL,
  `CSGW1` varchar(200) DEFAULT NULL,
  `CSGW2` varchar(200) DEFAULT NULL,
  `CSGW3` varchar(200) DEFAULT NULL,
  `XCSGW` varchar(300) DEFAULT NULL,
  `JSZC` varchar(200) DEFAULT NULL,
  `ZZZS` text,
  `GZJLJYJ` text,
  `JLZT` varchar(200) DEFAULT '未删除',
  `RZRQ` varchar(50) DEFAULT NULL COMMENT '任职日期',
  `SFZXLP` varchar(20) DEFAULT NULL,
  `SFCYBZRCGZ` varchar(20) DEFAULT NULL,
  `XB` varchar(5) DEFAULT NULL,
  `FGGZ` text,
  `SFCSBZGZ` varchar(20) DEFAULT NULL,
  `RYZWID` varchar(200) DEFAULT NULL,
  `GLRY` varchar(64) DEFAULT NULL,
  `XZJB` varchar(50) DEFAULT NULL,
  `YHJB` varchar(200) DEFAULT NULL,
  `JSID` varchar(50) DEFAULT NULL,
  `JSJDZYZZ` text,
  `WHCD` varchar(50) DEFAULT NULL COMMENT '文化程度',
  `ZC` varchar(20) DEFAULT NULL COMMENT '职称',
  `qrmmcode` varchar(64) DEFAULT NULL COMMENT '确认密码',
  `CSNY` varchar(100) DEFAULT NULL COMMENT '出生年月',
  `YHM` varchar(64) DEFAULT NULL COMMENT '用户名',
  `ZT` varchar(64) NOT NULL DEFAULT '0' COMMENT '状态',
  `mmcode` varchar(256) DEFAULT NULL COMMENT '密码',
  `ZY` varchar(36) DEFAULT NULL COMMENT '专业',
  PRIMARY KEY (`ID`,`ZT`) USING BTREE,
  KEY `ryid` (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemrygl_ryjl
-- ----------------------------
INSERT INTO `systemrygl_ryjl` VALUES ('4878393c14014e9dade2144a9558cf07', null, '00001', 'root', null, '1', '13131112234', '13131112234', null, '1', null, '0', null, null, 'root', null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null, null, '未删除', null, null, null, null, null, null, null, 'a7c0934854ff4f33b3ea43ed3bad4345', null, null, null, null, null, null, null, null, null, '0', null, '');
INSERT INTO `systemrygl_ryjl` VALUES ('5d2173e6-eb90-4057-878b-3c5d5d8d8885', null, '1', 'admin', null, '1', '13344445556', '13366668888', null, '1', null, '0', null, null, 'admin', null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null, null, '未删除', null, null, null, null, null, null, null, 'aa5dcb86-5224-4a32-97d2-7690691190a3', null, null, null, null, null, null, null, null, null, '0', null, '');

-- ----------------------------
-- Table structure for systemryjs
-- ----------------------------
DROP TABLE IF EXISTS `systemryjs`;
CREATE TABLE `systemryjs` (
  `RYID` varchar(64) DEFAULT NULL,
  `JSZID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemryjs
-- ----------------------------
INSERT INTO `systemryjs` VALUES ('a7c0934854ff4f33b3ea43ed3bad4345', '0');
INSERT INTO `systemryjs` VALUES ('aa5dcb86-5224-4a32-97d2-7690691190a3', '492');

-- ----------------------------
-- Table structure for systemryzzjg
-- ----------------------------
DROP TABLE IF EXISTS `systemryzzjg`;
CREATE TABLE `systemryzzjg` (
  `RYID` int(11) NOT NULL,
  `JGBH` varchar(16) NOT NULL,
  PRIMARY KEY (`RYID`,`JGBH`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemryzzjg
-- ----------------------------

-- ----------------------------
-- Table structure for systemtheme
-- ----------------------------
DROP TABLE IF EXISTS `systemtheme`;
CREATE TABLE `systemtheme` (
  `id` varchar(64) NOT NULL,
  `paramName` varchar(32) DEFAULT NULL,
  `paramValue` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemtheme
-- ----------------------------

-- ----------------------------
-- Table structure for systemxtpz
-- ----------------------------
DROP TABLE IF EXISTS `systemxtpz`;
CREATE TABLE `systemxtpz` (
  `ID` varchar(36) NOT NULL,
  `YXLXDLSBCS` int(11) DEFAULT '10',
  `DLSBHSDSJ` int(11) DEFAULT '30',
  `DTYHBFS` int(11) DEFAULT '100',
  `SSSXSJ` int(11) DEFAULT '30',
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemxtpz
-- ----------------------------
INSERT INTO `systemxtpz` VALUES ('1', '20', '10', '100', '30');

-- ----------------------------
-- Table structure for systemzy
-- ----------------------------
DROP TABLE IF EXISTS `systemzy`;
CREATE TABLE `systemzy` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `JGBH` varchar(16) DEFAULT NULL,
  `JGLX` varchar(16) DEFAULT NULL,
  `JGMC` varchar(255) DEFAULT NULL COMMENT '部门名称',
  `FJGBH` int(11) DEFAULT NULL COMMENT '上级部门id',
  `PXBH` int(11) DEFAULT NULL,
  `PX` int(11) DEFAULT NULL,
  `BM` varchar(100) DEFAULT NULL,
  `JC` varchar(255) DEFAULT NULL COMMENT '简称',
  `JGDJ` varchar(255) DEFAULT NULL COMMENT '部门等级',
  `JLZT` varchar(6) DEFAULT '未删除',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SX` varchar(50) DEFAULT NULL COMMENT '缩写',
  `GLZYIDC` varchar(5000) NOT NULL DEFAULT '0000' COMMENT '关联专业的id串',
  `tag` bit(1) DEFAULT b'0' COMMENT '标记字段，导数据时用到，系统中不要使用',
  `AreaCode` varchar(6) DEFAULT NULL COMMENT '所属行政区划代码',
  `deptType` varchar(36) DEFAULT NULL COMMENT '部门类型',
  `memo` varchar(100) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`ID`) USING BTREE,
  KEY `zzjgid` (`ID`) USING BTREE,
  KEY `zzjgbm` (`BM`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1526 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemzy
-- ----------------------------

-- ----------------------------
-- Table structure for systemzzjg
-- ----------------------------
DROP TABLE IF EXISTS `systemzzjg`;
CREATE TABLE `systemzzjg` (
  `ID` varchar(100) NOT NULL,
  `JGBH` varchar(16) DEFAULT NULL,
  `JGLX` varchar(16) DEFAULT NULL,
  `JGMC` varchar(255) DEFAULT NULL COMMENT '部门名称',
  `FJGBH` varchar(100) DEFAULT NULL COMMENT '上级部门id',
  `PXBH` int(11) DEFAULT NULL,
  `PX` int(11) DEFAULT NULL,
  `BM` varchar(100) DEFAULT NULL,
  `JC` varchar(255) DEFAULT NULL COMMENT '简称',
  `JGDJ` varchar(255) DEFAULT NULL COMMENT '部门等级',
  `JLZT` varchar(6) DEFAULT '未删除',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SX` varchar(50) DEFAULT NULL COMMENT '缩写',
  `GLZYIDC` varchar(5000) NOT NULL DEFAULT '0000' COMMENT '关联专业的id串',
  `tag` bit(1) DEFAULT b'0' COMMENT '标记字段，导数据时用到，系统中不要使用',
  `AreaCode` varchar(6) DEFAULT NULL COMMENT '所属行政区划代码',
  `deptType` varchar(36) DEFAULT NULL COMMENT '部门类型',
  `memo` varchar(100) DEFAULT NULL COMMENT '备注',
  `ssgydw` varchar(100) DEFAULT NULL COMMENT '所属管养单位',
  `bmbh` varchar(999) DEFAULT NULL COMMENT '部门编号',
  `bmbm` varchar(200) DEFAULT NULL COMMENT '部门编码',
  PRIMARY KEY (`ID`) USING BTREE,
  KEY `zzjgid` (`ID`) USING BTREE,
  KEY `zzjgbm` (`BM`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of systemzzjg
-- ----------------------------
INSERT INTO `systemzzjg` VALUES ('1', '1', '01', '吉林省智远科技有限公司', '0', '1', '1', '1', '最上级', null, '未删除', '2022-03-21 18:30:08', null, '1', '\0', null, null, '最上级', null, '1', '一部asdasdads');

-- ----------------------------
-- Table structure for system_log_dttj
-- ----------------------------
DROP TABLE IF EXISTS `system_log_dttj`;
CREATE TABLE `system_log_dttj` (
  `id` varchar(64) NOT NULL,
  `ryid` varchar(64) DEFAULT NULL,
  `captions` varchar(2000) DEFAULT NULL COMMENT '上方可拖拽字段',
  `mrxszd` varchar(2000) DEFAULT NULL COMMENT '默认显示字段',
  `cjxsdd` varchar(2000) DEFAULT NULL COMMENT '表格中层级显示字段',
  `sfqy` varchar(200) DEFAULT NULL COMMENT '是否启用 0:启用 ，1：未启用',
  `cxmsmc` varchar(255) DEFAULT NULL COMMENT '查询模式名称',
  `jlsj` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '记录时间',
  `jlzt` varchar(20) DEFAULT NULL COMMENT '0:未删除，1：已删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of system_log_dttj
-- ----------------------------

-- ----------------------------
-- Table structure for sys_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_log`;
CREATE TABLE `sys_log` (
  `id` varchar(64) NOT NULL COMMENT 'id',
  `jlsj` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(64) DEFAULT NULL COMMENT '用户名',
  `userid` varchar(64) DEFAULT NULL COMMENT '用户id',
  `model` varchar(128) DEFAULT NULL COMMENT '操作模块',
  `model_handle` varchar(128) DEFAULT NULL COMMENT '对模块操作',
  `message` varchar(255) DEFAULT NULL COMMENT '成功，失败',
  `error_body` text COMMENT '失败内容',
  `ip` varchar(255) DEFAULT NULL COMMENT 'ip',
  `dwbm` varchar(255) DEFAULT NULL COMMENT '单位编码',
  `jlzt` varchar(255) DEFAULT '0' COMMENT '记录状态0：未删除 1：已删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_log
-- ----------------------------

-- ----------------------------
-- Table structure for wjsc
-- ----------------------------
DROP TABLE IF EXISTS `wjsc`;
CREATE TABLE `wjsc` (
  `ID` int(65) NOT NULL AUTO_INCREMENT,
  `FILENAME` varchar(255) DEFAULT NULL,
  `SYSTEMNAME` varchar(255) DEFAULT NULL,
  `TAG` varchar(200) DEFAULT NULL,
  `ZJLBH` varchar(200) DEFAULT NULL,
  `SCSJ` varchar(30) DEFAULT NULL,
  `SCR` varchar(30) DEFAULT NULL,
  `SJC` varchar(50) DEFAULT NULL,
  `PADID` varchar(50) DEFAULT NULL,
  `SAVEPATH` text,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of wjsc
-- ----------------------------
