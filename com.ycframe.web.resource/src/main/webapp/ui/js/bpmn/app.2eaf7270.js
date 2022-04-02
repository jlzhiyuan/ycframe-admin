(function(e) {
    function n(n) {
        for (var a, i, s = n[0], l = n[1], c = n[2], d = 0, p = []; d < s.length; d++) i = s[d],
        r[i] && p.push(r[i][0]),
        r[i] = 0;
        for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (e[a] = l[a]);
        u && u(n);
        while (p.length) p.shift()();
        return o.push.apply(o, c || []),
        t()
    }
    function t() {
        for (var e, n = 0; n < o.length; n++) {
            for (var t = o[n], a = !0, s = 1; s < t.length; s++) {
                var l = t[s];
                0 !== r[l] && (a = !1)
            }
            a && (o.splice(n--, 1), e = i(i.s = t[0]))
        }
        return e
    }
    var a = {},
    r = {
        app: 0
    },
    o = [];
    function i(n) {
        if (a[n]) return a[n].exports;
        var t = a[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(t.exports, t, t.exports, i),
        t.l = !0,
        t.exports
    }
    i.m = e,
    i.c = a,
    i.d = function(e, n, t) {
        i.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    },
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function(e, n) {
        if (1 & n && (e = i(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (i.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var a in e) i.d(t, a,
        function(n) {
            return e[n]
        }.bind(null, a));
        return t
    },
    i.n = function(e) {
        var n = e && e.__esModule ?
        function() {
            return e["default"]
        }: function() {
            return e
        };
        return i.d(n, "a", n),
        n
    },
    i.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    },
    i.p = "";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = s.push.bind(s);
    s.push = n,
    s = s.slice();
    for (var c = 0; c < s.length; c++) n(s[c]);
    var u = l;
    o.push([0, "chunk-vendors"]),
    t()
})({
    0 : function(e, n, t) {
        e.exports = t("56d7")
    },
    "56d7": function(e, n, t) {
        "use strict";
        t.r(n);
        t("cadf"),
        t("551c"),
        t("f751"),
        t("097d");
        var g = t("1cdc");
        var h = t("04be");
        var f = t("7024");
        var E = t.n(g);
        var  b = t("74a6");
        var y = t.n(h);
        window.BpmnModeler = f["a"];
        window.propertiesPanelModule = y.a;
        window.propertiesProviderModule = E.a;
        window.camundaModdleDescriptor = b;
        var w = (t("a481"), {
            "Activate the global connect tool": "激活全局连接工具",
            "Append {type}": "追加{type}",
            "Add Lane above": "添加上面泳道",
            "Divide into two Lanes": "拆分两个泳道",
            "Divide into three Lanes": "拆分三个泳道",
            "Add Lane below": "添下面泳道",
            "Append compensation activity": "追加补偿活动",
            "Change type": "改变节点类型",
            "Connect using Association": "使用关联连接",
            "Connect using Sequence/MessageFlow or Association": "使用序列/消息流或关联连接",
            "Connect using DataInputAssociation": "使用数据输入关联连接",
            Remove: "删除",
            "Activate the hand tool": "激活拖拽工具",
            "Activate the lasso tool": "激活框选工具",
            "Activate the create/remove space tool": "激活空间移动工具",
            "Create expanded SubProcess": "创建扩展子流程",
            "Create IntermediateThrowEvent/BoundaryEvent": "创建中间事件或边界事件",
            "Create Pool/Participant": "创建者或参与者",
            "Parallel Multi Instance": "并行多实例",
            "Sequential Multi Instance": "顺序多重实例",
            Loop: "循环",
            "Ad-hoc": "特别指定",
            "Create {type}": "创建{type}",
            Task: "任务",
            "Send Task": "发送任务",
            "Receive Task": "接收节点",
            "User Task": "用户节点",
            "Manual Task": "手工任务",
            "Business Rule Task": "作业规则任务",
            "Service Task": "服务节点",
            "Script Task": "脚本任务",
            "Call Activity": "调用活动",
            "Sub Process (collapsed)": "子过程（折叠）",
            "Start Event": "开始事件",
            "Intermediate Throw Event": "抛出事件",
            "End Event": "结束事件",
            "Message Start Event": "消息开始事件",
            "Timer Start Event": "时间开始事件",
            "Conditional Start Event": "条件开始事件",
            "Signal Start Event": "信号开始事件",
            "Error Start Event": "错误开始事件",
            "Escalation Start Event": "升级开始事件",
            "Compensation Start Event": "补偿开始事件",
            "Message Start Event (non-interrupting)": "消息开始事件（不中断）",
            "Timer Start Event (non-interrupting)": "定时开始事件（不中断）",
            "Conditional Start Event (non-interrupting)": "条件开始事件（不中断）",
            "Signal Start Event (non-interrupting)": "信号开始事件（不中断）",
            "Escalation Start Event (non-interrupting)": "升级开始事件（不中断）",
            "Message Intermediate Catch Event": "信息捕获事件",
            "Message Intermediate Throw Event": "信息抛出事件",
            "Timer Intermediate Catch Event": "定时器捕获事件",
            "Escalation Intermediate Throw Event": "升级抛出事件",
            "Conditional Intermediate Catch Event": "条件捕获事件",
            "Link Intermediate Catch Event": "链接捕获事件",
            "Link Intermediate Throw Event": "链接抛出事件",
            "Compensation Intermediate Throw Event": "补偿抛出事件",
            "Signal Intermediate Catch Event": "信号捕获事件",
            "Signal Intermediate Throw Event": "信号抛出事件",
            "Message End Event": "消息结束事件",
            "Escalation End Event": "升级结束事件",
            "Error End Event": "错误结束事件",
            "Cancel End Event": "取消结束事件",
            "Compensation End Event": "补偿结束事件",
            "Signal End Event": "信号结束事件",
            "Terminate End Event": "终止结束事件",
            "Message Boundary Event": "消息边界事件",
            "Message Boundary Event (non-interrupting)": "消息边界事件（非中断）",
            "Timer Boundary Event": "定时边界事件",
            "Timer Boundary Event (non-interrupting)": "定时边界事件（非中断）",
            "Escalation Boundary Event": "升级边界事件",
            "Escalation Boundary Event (non-interrupting)": "升级边界事件（非中断）",
            "Conditional Boundary Event": "有条件的边界事件",
            "Conditional Boundary Event (non-interrupting)": "条件边界事件（非中断）",
            "Error Boundary Event": "错误边界事件",
            "Cancel Boundary Event": "取消边界事件",
            "Signal Boundary Event": "信号边界事件",
            "Signal Boundary Event (non-interrupting)": "信号边界事件（非中断）",
            "Compensation Boundary Event": "补偿边界事件",
            "Exclusive Gateway": "互斥网关",
            "Parallel Gateway": "并行网关",
            "Inclusive Gateway": "相容网关",
            "Complex Gateway": "复杂网关",
            "Event based Gateway": "事件网关",
            Transaction: "交换",
            "Sub Process": "子流程",
            "Event Sub Process": "事件子流程",
            "Collapsed Pool": "合并泳池",
            "Expanded Pool": "扩展泳池",
            "no parent for {element} in {parent}": "在{parent}中的{element}没有父元素",
            "no shape type specified": "没有指定的形状类型",
            "flow elements must be children of pools/participants": "流动元素必须是游泳池/参与者",
            "out of bounds release": "跨界界释放",
            "more than {count} child lanes": "超出{count}分支",
            "element required": "被请求元素",
            "diagram not part of bpmn": "图在bpmn中",
            "no diagram to display": "没有图表来显示",
            "no process or collaboration to display": "没有流程或协作显示",
            "element {element} referenced by {referenced}#{property} not yet drawn": "元素{element}在{referenced}＃{property}的引用还没有绘制",
            "already rendered {element}": "已经提供{element}",
            "failed to import {element}": "元素导入失败{element}",
            General: "基本属性",
            Documentation: "备注",
            "Element Documentation": "元素备注",
            Executable: "可执行的",
            "Process Documentation": "过程说明",
            Listeners: "监听器",
            "Execution Listener": "扩展监听器",
            Extensions: "扩展",
            Properties: "属性",
            "Add Property": "添加属性",
            Name: "名称",
            Id: "标识",
            ID: "标识",
            Value: "值",
            "Version Tag": "版本标记",
            "External Task Configuration": "外部任务配置",
            "Task Priority": "任务优先级",
            "Job Configuration": "作业配置",
            "Job Priority": "作业优先级",
            "History Configuration": "历史配置",
            "History Time To Live": "历史生存时间",
            Details: "详情",
            Initiator: "初始化",
            "Asynchronous Continuations": "异步连续",
            "Asynchronous Before": "异步之前",
            "Asynchronous After": "异步之后",
            Forms: "表单",
            "Form Key": "表单键",
            "Form Fields": "表单字段",
            "Form Field": "表单字段",
            "Business Key": "业务键",
            Type: "类型",
            Label: "标签",
            "Default Value": "默认值",
            Validation: "校验",
            "Add Constraint": "添加约束",
            Config: "配置",
            "Must provide a value": "必须提供一个值",
            "Event Type": "事件类型",
            "Listener Type": "监听器类型",
            "Java Class": "Java 类",
            "Field Injection": "字段注入",
            Fields: "字段",
            Expression: "表达式",
            "Delegate Expression": "委托表达式",
            Script: "脚本",
            "Parameter must have a name": "参数必须有一个名称",
            String: "字符串",
            Implementation: "实现",
            External: "外部",
            Connector: "连接器",
            "Must configure Connector": "必须配置连接器",
            "Connector Id": "连接器ID",
            "Input/Output": "输入/输出",
            "Input Parameters": "输入参数",
            "Input Parameter": "输入参数",
            "Output Parameters": "输出参数",
            "Output Parameter": "输出参数",
            Text: "文本",
            List: "列表",
            "Add Entry": "增加条目",
            "Field Injections": "字段注入",
            "追加TextAnnotation": "文本注释",
            Variables: "变量",
            "In Mapping": "输入映射",
            "Out Mapping": "输出映射",
            Target: "目标",
            Source: "来源",
            Local: "本地",
            "Candidate Starter Configuration": "候选人起动器配置",
            "Candidate Starter Groups": "候选人起动器组",
            "Candidate Starter Users": "候选人起动器用户",
            "Configure Connector": "配置连接器",
            Assignee: "受理人",
            "Candidate Users": "候选用户",
            "Candidate Groups": "候选组",
            "Due Date": "到期",
            "Follow Up Date": "跟踪日期",
            Priority: "优先级",
            "The due date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)": "可以使用EL表达式，（例如：${someDate} 或者ISO日期（例如：2015-06-26T09:54:00））",
            "The follow up date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)": "可以使用EL表达式，（例如：${someDate} 或者ISO日期（例如：2015-06-26T09:54:00））",
            "Create Gateway": "网关节点",
            "Create StartEvent": "创建开始节点",
            "Create Intermediate/Boundary Event": "创建中间/边界事件",
            "Create EndEvent": "创建结束节点",
            "Create Task": "创建任务",
            "Create DataObjectReference": "创建数据对象引用",
            "Create DataStoreReference": "创建数据存储引用"
        })
        var S = function(e, n) {
            return n = n || {},
            e = w[e] || e,
            e.replace(/{([^}]+)}/g,
            function(e, t) {
                return n[t] || "{" + t + "}"
            })
        };
        var C = {
            translate: ["value", S]
        };
        window.bpmntab = C;
//        var a = t("2b0e"),
//        o = [],
//        i = t("2877"),
//        s = {},
////        l = Object(i["a"])(s, r, o, !1, null, null, null),
////        c = l.exports,
//        u = t("8c4f"),
//        p = [],
//        
//        v = [],
//        f = t("7024"),
//        g = t("1cdc"),
//        E = t.n(g),
//        h = t("04be"),
//        y = t.n(h),
//        b = t("74a6")
    },
    "742b": function(e, n, t) {
        "use strict";
        var a = t("b433"),
        r = t.n(a);
        r.a
    },
    b433: function(e, n, t) {}
});
//# sourceMappingURL=app.2eaf7270.js.map
