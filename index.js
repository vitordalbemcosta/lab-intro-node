class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item); 
    this.length = this.items.length; 
    return this.items.sort(function(a, b) {
      return a - b 
    });
  }

  get(pos) {
    if (this.items.length > pos ) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
    }

  max() {
    
  }

  min() {

  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
