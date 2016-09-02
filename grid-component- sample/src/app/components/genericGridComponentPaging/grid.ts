import {Component, OnInit} from '@angular/core';
import {Colmn} from './column';
import {Sorter} from './sorter';
import {textboxComponent} from '../textbox/textbox.component';
import {testComponent} from '../test/test.component';
@Component({
    selector: 'my-generic-grid',
    inputs: ['rows: rows', 'columns: columns', 'pagesize:pagesize', 'isCheckBoxReq:isCheckBoxReq', 'autoGenColumns:autoGenColumns', 'setPagination:setPagination', 'isSearchRequired:isSearchRequired'],
    templateUrl: './app/components/genericGridComponentPaging/grid.html',
    styleUrls: ['./app/components/genericGridComponentPaging/grid.css'],
    directives: [textboxComponent, testComponent]
})
export class GenericGridcomp implements OnInit {

   public count: number=0;
    numberarray = [];
    columns: Array<Colmn>;
    rows: Array<any>;
    filterRows: Array<any>;
    sorter: Sorter;
    pagesize: number;
    displayRows: Array<any>;
    check: number;
   public pageno: number = 1;
    selectedcheckbox: string = "checked";
    setAllOn: string;
    select: string;
    value: string;
    isCheckBoxReq: boolean;
    autoGenColumns: boolean;
    numarray = [];
    setPagination: number = 3;
    previousNo: number = 0;
    nextNo: number = 0;
    public filterValue: string = '';
    previousDisp:boolean=false;
    nextDisp:boolean=false;
    isSearchRequired: boolean = true;

    constructor() {
        this.sorter = new Sorter();
        this.setAllOn = "";
        this.value = "";
    }


    sort(key) {
        this.sorter.sort(key, this.displayRows);
    }
    callmyfunc(i) {
        this.check = i.age;

    }
    SetPage(pagenumber)
    {
       
        
this.displayRows = this.filterRows.slice(this.pagesize * (pagenumber - 1), (this.pagesize * (pagenumber - 1)) + this.pagesize);
       
        this.pageno = pagenumber;

         
if(pagenumber+this.setPagination>this.numarray.length+1)
{
     this.nextNo=this.numarray.length;
    this.previousNo= this.nextNo-this.setPagination+1;
       

}
else{
   
    this.previousNo=pagenumber-1;
     this.nextNo=this.previousNo+this.setPagination-1;
}

this.nextDisp=true;
this.previousDisp=true;
 if(this.previousNo<=1) {
            this.previousNo = 1;
            this.previousDisp=false;
        }
if(this.nextNo>=this.numarray.length)
{
    this.nextNo=this.numarray.length ;
    this.nextDisp=false;
}
   

        this.numberarray = this.numarray.slice(this.previousNo - 1, this.nextNo);

    }
    //ngOnChanges
    ngOnInit() {        
        this.filterRows=this.rows;
        this.InitalizeGrid(this.filterRows);
    }

    InitalizeGrid(arrayRows) {
        if (arrayRows != null) {
            if (arrayRows.length < this.pagesize) {
                this.count = arrayRows.length;
            } else {
                if ((arrayRows.length) % (this.pagesize) == 0) {
                    this.count = Math.round(arrayRows.length / this.pagesize)
                } else {
                    this.count = Math.round(arrayRows.length / this.pagesize) + 1;
                }
            }
            this.numarray = [];
            for (let i = 1; i <= this.count; i++) {
                this.numarray.push(i);
            }
            this.previousNo = 0;
             this.previousDisp=false;
            if (this.numarray.length < this.setPagination) {
                this.nextNo = this.numarray.length;
                this.nextDisp=false;
            }
            else {
                this.nextNo = this.setPagination;
                 this.nextDisp=true;
            }
            this.numberarray = this.numarray.slice(this.previousNo, this.nextNo);
            this.displayRows = arrayRows.slice((this.pagesize * (this.pageno - 1)), (this.pagesize * (this.pageno - 1)) + this.pagesize);

            if (this.autoGenColumns) {
                let nameofcoloumns = Object.keys(this.rows[0]);
                this.columns = Array<Colmn>();
                for (var key in nameofcoloumns) {

                    this.columns.push(new Colmn(nameofcoloumns[key], nameofcoloumns[key]));

                }
            }

        }



    }

  

    SetCheckboxes(sel) {
        if (sel == "") {
            this.setAllOn = this.selectedcheckbox;
            this.value = this.selectedcheckbox;
        }
        else {
            this.setAllOn = "";
            this.value = "";
        }
    }
    
    filterSearch() {

        
        if (this.isSearchRequired  && this.filterValue != '') {

            this.filterRows = [];
            this.columns.forEach(element => {
                let temparray = [];
                temparray = this.rows.filter(item => item[element.name].toString().toLocaleLowerCase().indexOf(this.filterValue.toString().toLocaleLowerCase()) !== -1);
                temparray.forEach(element => {

                    this.filterRows.push(element);

                });


            });


        }
        else {
            this.filterRows = this.rows;
        }



       this.SetPage(1);
        this.InitalizeGrid(this.filterRows);
    }
}
