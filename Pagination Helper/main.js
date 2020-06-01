// // TODO: complete this object/class

// // The constructor takes in an array of items and a integer indicating how many
// // items fit within a single page
// function PaginationHelper(collection, itemsPerPage){
//     this.collection = collection;
//     this.itemsPerPage = itemsPerPage;
// }

// // returns the number of items within the entire collection
// PaginationHelper.prototype.itemCount = function() {
//     return this.collection.length
// }

// // returns the number of pages
// PaginationHelper.prototype.pageCount = function() {
//     return Math.ceil(this.collection.length / this.itemsPerPage)
// }

// // returns the number of items on the current page. page_index is zero based.
// // this method should return -1 for pageIndex values that are out of range
// PaginationHelper.prototype.pageItemCount = function(pageIndex) {
//     if (pageIndex < 0 || pageIndex >= this.pageCount()) {
//         return -1
//     } else if (pageIndex < this.pageCount() - 1) {
//         return this.itemsPerPage
//     } else {
//         return this.collection.length % this.itemsPerPage
//     }
// }

// // determines what page an item is on. Zero based indexes
// // this method should return -1 for itemIndex values that are out of range
// PaginationHelper.prototype.pageIndex = function(itemIndex) {
//     if (itemIndex < 0 || itemIndex >= this.itemCount()) {
//         return -1
//     } else {
//         return Math.floor(itemIndex / this.itemsPerPage)
//     }
// }


// Best Practice
function PaginationHelper(collection, itemsPerPage){
    this.collection = collection, this.itemsPerPage = itemsPerPage;
  }
  
  PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
  }
  
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    // This answer is NOT perfect because it didn't sount for the negative number situations
    return pageIndex < this.pageCount() 
      ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
      : -1;
  }
  
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0
      ? Math.floor(itemIndex / this.itemsPerPage)
      : -1;
  }