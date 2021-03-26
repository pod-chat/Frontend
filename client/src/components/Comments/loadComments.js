import axios from 'axios'

//TODO: axios call to get data

const nestComments = (commentData) => {

    //Temporary object that will will be shaped like this: lineage: [array of children]
    let tempObj = {};

    // create temp obj by looping through each object in comment data, checking it's lineage and if it doesn't match 
    // an existing key, create the key and add the comment ojbect to the value (an array of comments) 
    // If it matches a current key, then push the object to the existing array for that key value
    for (let obj of commentData) {
      if (!tempObj[obj.lineage]) {
        tempObj[obj.lineage] = [obj]; //if tempObj does not have a key matching the obj.lineage, create new key and set the value as obj (comment object)
      } else {
        tempObj[obj.lineage].push(obj); //if tempObj does have a key matching obj.lineage, push the current comment object (obj) to the existing value array.
      }
    }

    // recursive function that takes in a comment object and what a child comment's lineage would look like (current comment_id + / IE: "1/" )
    // looks at tempObj keys to see if there is one that matches the given lineage. 
    // If true, creates a 'children' key on the comment
    // before setting a value to the new key, 
    // the array on the matching tempObj is sorted by comment_id (larger means older)
    // then maps through the array and calls the function recursively, this time passing in the child comment and what it's children(the grandchildren)'s lineage would be
    // once all decendents are collected in children arrays on teh appropriate comment, the parent comment passed into the function
    // has it's new children key populated.
    // The lineage key:value in the tempObj is now no longer needed and so is deleted.
    // The comment object (with nested children) is returned.
    const checkEachComment = (comment, lineage) => {
      if (tempObj[lineage]) {
        comment.children = tempObj[lineage]
          .sort((a, b) => a.comment_id - b.comment_id)
          .map((each) => checkEachComment(each, lineage + each.comment_id + "/"));
      }

      delete tempObj[lineage];

      return comment;
    }

    //Create array of top level comments(that then have their descendants nested)
    let newArr = [];
    //start is an array of parent comments (those with no lineage)
    let starter = tempObj[""];

    //sort starter by comment id, then go through each of them and call checkEachComment function on them. Push the resulting object to newArr.
    // delete tempObj key:value for parent comments. tempObj should now be empty. 
    starter
      .sort((a, b) => a.comment_id - b.comment_id)
      .forEach((each) => {
        newArr.push(checkEachComment(each, each.comment_id + "/"));
        delete tempObj[""];
      });
    
    //return array of comments that are nicely nested
    return(newArr)
}