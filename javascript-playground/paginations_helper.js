// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(itemsArray, perPage){
    this.collection = itemsArray;
    this.itemsPerPage = perPage;
    this.pages = [];
    this.tempArray = Array.from(itemsArray);
    while(this.tempArray.length > this.itemsPerPage){
        this.pages.push(this.tempArray.splice(0,this.itemsPerPage));
    }
    if(this.tempArray.length > 0){
        this.pages.push(this.tempArray.splice(0));
    }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {

    return Math.ceil(this.collection.length/this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    return (pageIndex < this.pages.length && pageIndex >= 0) ? this.pages[pageIndex].length: -1;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    return itemIndex < this.collection.length && itemIndex >= 0 ? Math.floor(itemIndex / this.itemsPerPage) : -1;
}

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// // alert("should == 4");
// helper.pageItemCount(0);
// // alert("should == 2")
// helper.pageItemCount(1); // last page - should == 2
// // alert("should == -1")
// helper.pageItemCount(2); // should == -1 since the page is invalid
//
// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1