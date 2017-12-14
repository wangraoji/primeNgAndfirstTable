import { Injectable } from '@angular/core';

@Injectable()
export class CarService {


    getCarsSmall() {
        let data = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
        return data;
    }

    getData() {
        let data = [
            {
                "Features": "01-基础模板",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★★★",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "支持自定义内容",
            },
            {
                "Features": "01-基础模板",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "n/a",
            },
            {
                "Features": "02-排序",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "",
            },
            {
                "Features": "02-排序",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "03-奇偶行背景色（隔行换色）",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "03-奇偶行背景色（隔行换色）",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "通过配置定义颜色",
            },
            {
                "Features": "04-过滤",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "支持多项查询，支持进度条过滤",
            },
            {
                "Features": "04-过滤",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "05-列分组（列合并）",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★★",
                "Operability": "★★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "支持自定义,支持汇总",
            },
            {
                "Features": "05-列分组（列合并）",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "06-行分组（行合并）",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★★",
                "Operability": "★★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "支持自定义分组汇总",
            },
            {
                "Features": "06-行分组（行合并）",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★",
                "Operability": "★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "07-分页",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "不支持服务端分页",
            },
            {
                "Features": "07-分页",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "支付服务端分页",
            },
            {
                "Features": "08-单击（单选，多选）",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "支持单选/多选查看明细，支持单选/多选分页还存在",
            },
            {
                "Features": "08-单击（单选，多选）",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "仅支持单选查看明细，不支持单选/多选分页还存在",
            },
            {
                "Features": "09-单元格编辑",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "支持下拉框编辑，日期编辑",
            },
            {
                "Features": "09-单元格编辑",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "支持下拉框编辑，复选框编辑",
            },
            {
                "Features": "10-双击单元格编辑",
                "table": "PriemNg",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "10-双击单元格编辑",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "",
            },
            {
                "Features": "11-单击编辑行",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "弹出编辑",
            },
            {
                "Features": "11-单击编辑行",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "12-单击行查看明细",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "弹出编辑",
            },
            {
                "Features": "12-单击行查看明细",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "13-选中行背景色",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "13-选中行背景色",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "可自定义颜色",
            },
            {
                "Features": "14-列拖动（更换列位置）",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "",
            },
            {
                "Features": "14-列拖动（更换列位置）",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "15-列拖动（拖动列宽）",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "",
            },
            {
                "Features": "15-列拖动（拖动列宽）",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "16-列显示隐藏",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "16-列显示隐藏",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "17-滚动(冻结列，冻结行)",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "17-滚动(冻结列，冻结行)",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "18-行拖动（更换行位置）",
                "table": "PriemNg",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "18-行拖动（更换行位置）",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "19-懒加载",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "",
            },
            {
                "Features": "19-懒加载",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "20-右键菜单",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "可自配右键菜单",
            },
            {
                "Features": "20-右键菜单",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "21-导出SVC",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "可导出全部和导出选中的",
            },
            {
                "Features": "21-导出SVC",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "22-下拉框联动",
                "table": "PriemNg",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "22-下拉框联动",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "23-工具栏",
                "table": "PriemNg",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
            {
                "Features": "23-工具栏",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "可自配",
            },
            {
                "Features": "24-悬浮变色",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★",
                "Operability": "★★★",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "需要自己通过类名修改",
            },
            {
                "Features": "24-悬浮变色",
                "table": "firstTable",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "可自定义颜色",
            },
            {
                "Features": "25-树表格",
                "table": "PriemNg",
                "standBy": 1,
                "styleLv": "★★★★",
                "Operability": "★★★★",
                "isConfiguration": 1,
                "isOutputEvent": 1,
                "description": "",
            },
            {
                "Features": "25-树表格",
                "table": "firstTable",
                "standBy": 0,
                "styleLv": "",
                "Operability": "",
                "isConfiguration": 0,
                "isOutputEvent": 0,
                "description": "",
            },
        ];
        let totals = {
            PriemNg: [],
            firstTable: [],
        };
        let PriemNg = {
            PriemNgStandBy: 0,
            PriemNgLv: 0,
            PriemNgOperability: 0,
            PriemNgisConfiguration: 0,
            PriemNgisOutputEvent: 0,
        }
        let firstTable = {
            firstTableStandBy: 0,
            firstTableLv: 0,
            firstTableOperability: 0,
            firstTableisConfiguration: 0,
            firstTableisOutputEvent: 0,
        }
        let totalsData = JSON.parse(JSON.stringify(data));
        totalsData.forEach((el: any) => {
            if (el.table === "PriemNg") {
                PriemNg.PriemNgStandBy += el.standBy;
                PriemNg.PriemNgLv += el.styleLv.length;
                PriemNg.PriemNgOperability += el.Operability.length;
                PriemNg.PriemNgisConfiguration += el.isConfiguration;
                PriemNg.PriemNgisOutputEvent += el.isOutputEvent;

            }
            if (el.table === "firstTable") {
                firstTable.firstTableStandBy += el.standBy;
                firstTable.firstTableLv += el.styleLv.length;
                firstTable.firstTableOperability += el.Operability.length;
                firstTable.firstTableisConfiguration += el.isConfiguration;
                firstTable.firstTableisOutputEvent += el.isOutputEvent;
            }
        })
        totals.PriemNg = this.pushFn(PriemNg);
        totals.firstTable = this.pushFn(firstTable);

        data.forEach((el: any) => {
            if (el.standBy === 1) {
                el.standBy = "支持";
            } else {
                el.standBy = "不支持";
            }
            if (el.isConfiguration === 1) {
                el.isConfiguration = "是";
            } else {
                el.isConfiguration = "否";
            }
            if (el.isOutputEvent === 1) {
                el.isOutputEvent = "是";
            } else {
                el.isOutputEvent = "否";
            }
            if (el.description === "") {
                el.isOutputEvent = "n/a";
            }
        });

        return {
            data: data,
            Totals: totals,
        };
    }

    pushFn(data){
        let tempArr = [],
        tempStr= ['支持度：','操作视觉：','可操作性：','可配度：','暴露事件：','综合：'],
        sum = 0,
        index = 0;
        for( let k in data){
            sum += data[k];
            
            tempArr.push({
                desc: tempStr[index],
                totals: data[k],
            });
            index++;
        }

        tempArr.push({
            desc: tempStr[index],
            totals: sum,
        });
        return tempArr;
    }
}