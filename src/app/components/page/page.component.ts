import { Component } from '@angular/core';

import { CarService } from '../carService';
@Component({
    selector: 'page-example',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
})
export class PageComponent {


    // 列头数据
    headers = ['表格', '支持', '操作视觉', '可操作性', '是否可配', '暴露事件', '描述'];
    // 每列对应的行数据
    fields = ['table', 'standBy', 'styleLv', 'Operability', 'isConfiguration', 'isOutputEvent', 'description'];
    // 核心数据
    sales: any[];
    // 汇总
    totals: any;

    // 选中的row
    selectedRow: any;

    // 弹出消息
    msgs: any[];

    // 表的展示模式
    showModel: any = false;

    // 选中行是编辑还是弹出mes  // 默认编辑
    showRowModel: boolean = true;

    // 编辑弹出框
    displayDialog: boolean = false;

    // 当前选中行明细
    selectRowDetails: any;

    // 当前选中行的表格控件名
    selectTable: string;

    constructor(private src: CarService) { }

    ngOnInit() {
        this.sales = this.src.getData().data;
        this.totals = this.src.getData().Totals;
    }

    // 切换表的展示模式
    toggle() {
        this.showModel = !this.showModel;
    }


    // 切换选中行是编辑还是弹出mes
    toggleEdit() {
        this.showRowModel = !this.showRowModel;
    }
    /*
        处理逻辑：
        1. 如果当前是弹出Mes模式就给 msgs 赋值
        2. 如果当前是弹出Edit模式就把当前选中的对象复制一份。
            2.1 先弄个一方法，记录每次选中的row位于核心数据的什么位置，记录索引
            2.2 保存的时候直接把当前的row替换掉核心数据 （通过索引）
            2.3 删除同上（这里是把那个索引给过滤掉）。
    */




    // 单击选中行
    onRowSelect(event: any) {
        if (this.showRowModel) {
            this.selectRowDetails = JSON.parse(JSON.stringify(event.data));
            this.selectTable = event.data.table;
            this.displayDialog = true;
        } else {
            this.msgs = [];
            this.msgs.push({
                severity: 'info',
                summary: '你选择了：' + event.data.Features + ' - ' + event.data.table,
                detail: '取消选中请按住Ctrl + 选中的！',
            });
        }

    }
    // ctrl + 单击选中行 取消选中
    onRowUnselect(event: any) {
        if (!this.showRowModel) {
            this.msgs = [];
            this.msgs.push({
                severity: 'info',
                summary: '你取消了：',
                detail: event.data.Features + ' - ' + event.data.table,
            });
        }
    }

    // 弹出编辑后点保存触发的事件
    save() {
        let sales = [...this.sales];
        sales[this.findSelectedCarIndex()] = this.selectRowDetails;
        this.sales = sales;
        this.selectRowDetails = null;
        this.displayDialog = false;
    }

    // 弹出编辑后点删除触发的事件
    delete() {
        let index = this.findSelectedCarIndex();
        this.sales = this.sales.filter((val, i) => i != index);
        this.selectRowDetails = null;
        this.displayDialog = false;
    }

    findSelectedCarIndex(): number {
        return this.sales.indexOf(this.selectedRow);
    }
}

