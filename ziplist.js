class ZipFunctions {
  zipList(list1, list2) {
    this.newList = [];
    while (list1.length > 0 && list2.length > 0) {
      this.newList.push(list1.shift());
      this.newList.push(list2.shift());
    }
    while (list1.length > 0) {
      this.newList.push(list1.shift());
    }
    while (list2.length > 0) {
      this.newList.push(list2.shift());
    }
    return this.newList;
  }

  zipListTheSimpleWay(list1, list2) {
    // eslint-disable-next-line eqeqeq
    this.newerList = _.reject(_.flatten(_.zip(list1, list2)), function (value) { return value == undefined; });
    return this.newerList;
  }
}

this.list1 = [1, 2, 3, 4];
this.list2 = ['a', 'b', 'c', 'd'];
this.list3 = [1, 2, 3, 4, 5];
this.list4 = ['a', 'b'];
this.zipFunctions = new ZipFunctions();
console.log(this.zipFunctions.zipList(this.list1, this.list2));
console.log(this.zipFunctions.zipList(this.list3, this.list4));
this.list1 = [1, 2, 3, 4];
this.list2 = ['a', 'b', 'c', 'd'];
this.list3 = [1, 2, 3, 4, 5];
this.list4 = ['a', 'b'];
console.log(this.zipFunctions.zipListTheSimpleWay(this.list1, this.list2));
console.log(this.zipFunctions.zipListTheSimpleWay(this.list3, this.list4));
