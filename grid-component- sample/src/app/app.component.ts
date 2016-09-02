import { Component } from '@angular/core';
import {textboxComponent} from './components/textbox/textbox.component';
import {testComponent} from './components/test/test.component';
import {Grid} from './components/genericGrid/grid';
import {Column} from './components/genericGrid/Column';


import {GenericGrid} from './components/genericGridComponent/grid';
import {Columns} from './components/genericGridComponent/Column';

import {GenericGridSearch} from './components/genericGridSearch/grid';
import {Coloumns} from './components/genericGridSearch/Column';

import {GenericGridcomp} from './components/genericGridComponentPaging/grid';
import {Colmn} from './components/genericGridComponentPaging/Column';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [textboxComponent, testComponent, Grid,GenericGrid,GenericGridSearch,GenericGridcomp],
  providers: [textboxComponent],
})
export class AppComponent {
  title = 'app works!';
  value: string;
  pagesize: number;
  abc:string;
  /**
   *
   */
  /**
   *
   */
  public people = [];
  public columns = [];

  constructor() {

    this.fillgrid()
  }
  fillgrid() {

    this.people.push({ firstName: 'Joe', lastName: 'Jackson', age: 20 });
    this.people.push({ firstName: 'Peter', lastName: 'Smith', age: 30 });
    this.people.push({ firstName: 'Jane', lastName: 'Doe', age: 50 });
    this.people.push({ firstName: 'Tim', lastName: 'Smith', age: 80 });

     this.people.push({ firstName: 'roshan', lastName: 'guru', age: 14 });
    this.people.push({ firstName: 'kumar', lastName: 'roshan', age: 56 });
    this.people.push({ firstName: 'guru', lastName: 'kumar', age: 65 });
    this.people.push({ firstName: 'akshatha', lastName: 'jain', age: 34 });

     this.people.push({ firstName: 'imroze', lastName: 'farooqui', age: 63 });
    this.people.push({ firstName: 'ahmed', lastName: 'imroze', age: 54 });
    this.people.push({ firstName: 'farooqui', lastName: 'ahmed', age: 87 });
    this.people.push({ firstName: 'salman', lastName: 'khan', age: 76 });

    this.people.push({ firstName: 'Joe', lastName: 'Jackson', age: 20 });
    this.people.push({ firstName: 'Peter', lastName: 'Smith', age: 30 });
    this.people.push({ firstName: 'Jane', lastName: 'Doe', age: 50 });
    this.people.push({ firstName: 'Tim', lastName: 'Smith', age: 80 });

     this.people.push({ firstName: 'roshan', lastName: 'guru', age: 14 });
    this.people.push({ firstName: 'kumar', lastName: 'roshan', age: 56 });
    this.people.push({ firstName: 'guru', lastName: 'kumar', age: 65 });
    this.people.push({ firstName: 'akshatha', lastName: 'jain', age: 34 });

     this.people.push({ firstName: 'imroze', lastName: 'farooqui', age: 63 });
    this.people.push({ firstName: 'ahmed', lastName: 'imroze', age: 54 });
    this.people.push({ firstName: 'farooqui', lastName: 'ahmed', age: 87 });
    this.people.push({ firstName: 'salman', lastName: 'khan', age: 76 });

    this.people.push({ firstName: 'Joe', lastName: 'Jackson', age: 20 });
    this.people.push({ firstName: 'Peter', lastName: 'Smith', age: 30 });
    this.people.push({ firstName: 'Jane', lastName: 'Doe', age: 50 });
    this.people.push({ firstName: 'Tim', lastName: 'Smith', age: 80 });

     this.people.push({ firstName: 'roshan', lastName: 'guru', age: 14 });
    this.people.push({ firstName: 'kumar', lastName: 'roshan', age: 56 });
    this.people.push({ firstName: 'guru', lastName: 'kumar', age: 65 });
    this.people.push({ firstName: 'akshatha', lastName: 'jain', age: 34 });

     this.people.push({ firstName: 'imroze', lastName: 'farooqui', age: 63 });
    this.people.push({ firstName: 'ahmed', lastName: 'imroze', age: 54 });
    this.people.push({ firstName: 'farooqui', lastName: 'ahmed', age: 87 });
    this.people.push({ firstName: 'salman', lastName: 'khan', age: 76 });

    this.people.push({ firstName: 'Joe', lastName: 'Jackson', age: 20 });
    this.people.push({ firstName: 'Peter', lastName: 'Smith', age: 30 });
    this.people.push({ firstName: 'Jane', lastName: 'Doe', age: 50 });
    this.people.push({ firstName: 'Tim', lastName: 'Smith', age: 80 });

     this.people.push({ firstName: 'roshan', lastName: 'guru', age: 14 });
    this.people.push({ firstName: 'kumar', lastName: 'roshan', age: 56 });
    this.people.push({ firstName: 'guru', lastName: 'kumar', age: 65 });
    this.people.push({ firstName: 'akshatha', lastName: 'jain', age: 34 });

     this.people.push({ firstName: 'imroze', lastName: 'farooqui', age: 63 });
    this.people.push({ firstName: 'ahmed', lastName: 'imroze', age: 54 });
    this.people.push({ firstName: 'farooqui', lastName: 'ahmed', age: 87 });
    this.people.push({ firstName: 'salman', lastName: 'khan', age: 76 });

    this.people.push({ firstName: 'Joe', lastName: 'Jackson', age: 20 });
    this.people.push({ firstName: 'Peter', lastName: 'Smith', age: 30 });
    this.people.push({ firstName: 'Jane', lastName: 'Doe', age: 50 });
    this.people.push({ firstName: 'Tim', lastName: 'Smith', age: 80 });

     this.people.push({ firstName: 'roshan', lastName: 'guru', age: 14 });
    this.people.push({ firstName: 'kumar', lastName: 'roshan', age: 56 });
    this.people.push({ firstName: 'guru', lastName: 'kumar', age: 65 });
    this.people.push({ firstName: 'akshatha', lastName: 'jain', age: 34 });

     this.people.push({ firstName: 'imroze', lastName: 'farooqui', age: 63 });
    this.people.push({ firstName: 'ahmed', lastName: 'imroze', age: 54 });
    this.people.push({ firstName: 'farooqui', lastName: 'ahmed', age: 87 });
    this.people.push({ firstName: 'salman', lastName: 'khan', age: 76 });

    let namesofcoloumns = Object.keys(this.people[0]);
   // configure manually
      this.columns.push(new Column(namesofcoloumns[0], 'First Name'));
      this.columns.push(new Column(namesofcoloumns[1], 'Last Name'));
      this.columns.push(new Column(namesofcoloumns[2], 'Age'));


  }


}
