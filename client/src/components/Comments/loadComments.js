

//TODO: axios call to get data

const fakeCommentData = [
    {
      comment_id: 4,
      lineage: "",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Joe Rogan",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Badass post! You should come on my pod so we can chat!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 7,
      lineage: "",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Trump",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Make America Great Again!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 8,
      lineage: "7/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Bernie Sanders",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Trump, you are an idiot and a disgrace.",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 100,
      lineage: "1/2/3/99/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "JOJO",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "New Child Comment",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 99,
      lineage: "1/2/3/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "JOJO",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "New Child Comment",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 3,
      lineage: "1/2/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Clint Fix",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Thanks, Juan! I appreciate you! Lets build a killer app!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 9,
      lineage: "1/5/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Clint Fix",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "JJ! I cannot wait to hang out again!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 2,
      lineage: "1/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Juan Ruiz",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Clint made a fantastic point. Well said, Clint!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 5,
      lineage: "1/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "JJ Salway",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Clint! What is up, dude? We need to hang out again!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 1,
      lineage: "",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Clint Fix",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "This is my comment on this post. I think it is brilliant.",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 6,
      lineage: "4/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Elon Musk",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Joe! We need to do another podcast and talk about Dogecoin!",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 10,
      lineage: "7/8/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Trump",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "Shut up you old socialist idiot.",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    },

    {
      comment_id: 155,
      lineage: "1/",
      post_id: 1234,
      user_id: 98734343,
      user_name: "Trump",
      user_img:
        "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/94404241_10100258073401169_6641823304405483520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=BG-ydl9O8BEAX-7tMJw&_nc_ht=scontent-den4-1.xx&oh=d44aa1ecd7c1b58fb2764fda997f17bc&oe=607DCA8D",
      comment: "ANOTHER TEST COMMENT",
      comment_created_on: "date",
      upvotes: 10,
      downvotes: 3
    }
  ]

//Function that takes flat comment data and returns new array with comments nested
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

export const loadComments = () => {
    return nestComments(fakeCommentData)
}