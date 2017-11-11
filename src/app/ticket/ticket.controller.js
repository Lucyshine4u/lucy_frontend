(function() {
  'use strict';

  angular
    .module('lucyFrontend')
    .controller('TicketController', TicketController);

  /** @ngInject */
  function TicketController() {
    var vm = this;

    /*
      这个数组里面放了所有货物
     */
    vm.products = [];

    /*
      这个数组里面放了所有的券
     */
    vm.tickets = [];

    /*
       单个货物的对象结构定义
        {
          id: "", 编号
          name: "", 名称
          price: 12, 单价
          number: 10, 数量
          total: 120, 总价
          isCount: true, 是否纳入统计
        }
     */

    vm.clickCheckBox = function (index) {
      vm.products[index].isCount = !vm.products[index].isCount;
    }
  }
})();
