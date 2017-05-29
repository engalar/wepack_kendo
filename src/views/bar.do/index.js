import template from './index.html'
import './style.css'
// import 'jquery'
import 'kendo.grid.min'
import 'kendo.common.min.css'
import 'kendo.bootstrap.min.css'


export default class {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template
    console.info($('.h1'))
    $('.h1').kendoGrid({
      selectable: "multiple cell",
      allowCopy: true,
      columns: [
        { field: "productName" },
        { field: "category" }
      ],
      dataSource: [
        { productName: "Tea", category: "Beverages" },
        { productName: "Coffee", category: "Beverages" },
        { productName: "Ham", category: "Food" },
        { productName: "Bread", category: "Food" }
      ]
    })
  }
}
